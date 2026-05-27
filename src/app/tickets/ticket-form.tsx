"use client";

import { useEffect, useState } from "react";
import {
  getPaymentDeadlineRemainingMs,
  isPaymentDeadlineExpired,
  PAYMENT_DEADLINE_LABEL,
} from "@/lib/payment-deadline";

// Stripe fee: 2.9% + $0.30
function calculateStripeFee(amountInCents: number): number {
  return Math.ceil(amountInCents * 0.029 + 30);
}

function getCountdownParts(remainingMs: number | null) {
  if (remainingMs === null) {
    return [
      { label: "Days", value: "--" },
      { label: "Hours", value: "--" },
      { label: "Min", value: "--" },
      { label: "Sec", value: "--" },
    ];
  }

  const totalSeconds = Math.max(0, Math.floor(remainingMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: "Days", value: String(days) },
    { label: "Hours", value: String(hours).padStart(2, "0") },
    { label: "Min", value: String(minutes).padStart(2, "0") },
    { label: "Sec", value: String(seconds).padStart(2, "0") },
  ];
}

export function TicketForm({ priceInCents }: { priceInCents: number }) {
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [remainingMs, setRemainingMs] = useState<number | null>(null);

  const subtotal = priceInCents * quantity;
  const fee = calculateStripeFee(subtotal);
  const total = subtotal + fee;

  const subtotalFormatted = (subtotal / 100).toFixed(2);
  const feeFormatted = (fee / 100).toFixed(2);
  const totalFormatted = (total / 100).toFixed(2);
  const paymentClosed = remainingMs !== null && remainingMs <= 0;
  const countdownParts = getCountdownParts(remainingMs);

  useEffect(() => {
    function updateCountdown() {
      setRemainingMs(getPaymentDeadlineRemainingMs());
    }

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isPaymentDeadlineExpired()) {
      setRemainingMs(0);
      setError(`Ticket sales closed at ${PAYMENT_DEADLINE_LABEL}.`);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, quantity }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className={`rounded-lg border p-3 ${
          paymentClosed
            ? "bg-red-50 border-red-200"
            : "bg-green-50 border-green-200"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <p
            className={`text-sm font-bold ${
              paymentClosed ? "text-red-800" : "text-green-900"
            }`}
          >
            {paymentClosed ? "Ticket sales are closed" : "Payment deadline"}
          </p>
          <p
            className={`text-right text-xs font-semibold ${
              paymentClosed ? "text-red-700" : "text-green-800"
            }`}
          >
            {PAYMENT_DEADLINE_LABEL}
          </p>
        </div>

        <div className="mt-3 grid grid-cols-4 gap-2" aria-live="polite">
          {countdownParts.map((part) => (
            <div
              key={part.label}
              className="min-h-14 rounded-md bg-white border border-black/5 px-2 py-2 text-center"
            >
              <p className="font-bold tabular-nums text-green-900 leading-none text-lg">
                {part.value}
              </p>
              <p className="mt-1 text-[10px] font-semibold uppercase text-gray-500">
                {part.label}
              </p>
            </div>
          ))}
        </div>

        <p
          className={`mt-2 text-xs ${
            paymentClosed ? "text-red-700" : "text-green-800"
          }`}
        >
          {paymentClosed
            ? "Purchases are no longer available."
            : "Complete checkout before the deadline to reserve your spot."}
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-gray-900 placeholder:text-gray-400"
          placeholder="your@email.com"
        />
        <p className="mt-1 text-xs text-gray-500">
          Your confirmation will be sent to this email.
        </p>
      </div>

      <div>
        <label
          htmlFor="quantity"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Number of Tickets
        </label>
        <select
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors bg-white text-gray-900"
        >
          <option value="" disabled>
            How many tickets do you need?
          </option>
          <option value={1}>1 Ticket — Just me</option>
          <option value={2}>2 Tickets — Me + my guest</option>
        </select>
      </div>

      <div className="border-t border-gray-200 pt-4 mt-4">
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">
              {quantity} ticket{quantity > 1 ? "s" : ""}
            </span>
            <span className="text-gray-600 text-sm">${subtotalFormatted}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">
              Processing fee
            </span>
            <span className="text-gray-500 text-sm">${feeFormatted}</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-gray-700 font-medium">Total</span>
            <span className="text-2xl font-bold text-green-900">
              ${totalFormatted}
            </span>
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          A small processing fee covers credit card charges so 100% of your
          ticket price goes to the event.
        </p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || remainingMs === null || paymentClosed}
          className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-green-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-md"
        >
          {paymentClosed
            ? "Ticket Sales Closed"
            : loading
              ? "Processing..."
              : remainingMs === null
                ? "Checking Payment Window..."
                : `Pay $${totalFormatted}`}
        </button>
      </div>
    </form>
  );
}
