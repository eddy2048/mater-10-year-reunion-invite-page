"use client";

import { useState } from "react";

const PRESET_AMOUNTS = [1000, 2500, 5000, 10000]; // in cents

export function DonateForm() {
  const [amount, setAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const effectiveAmount = isCustom
    ? Math.round(parseFloat(customAmount || "0") * 100)
    : amount;

  const displayAmount = (effectiveAmount / 100).toFixed(2);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (effectiveAmount < 100) {
      setError("Minimum donation is $1.00");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: effectiveAmount,
          email: email || undefined,
          name: name || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Donation Amount
        </label>
        <div className="grid grid-cols-2 gap-2 mb-2">
          {PRESET_AMOUNTS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setAmount(preset);
                setIsCustom(false);
              }}
              className={`py-2.5 px-4 rounded-lg font-semibold text-sm border transition-colors ${
                !isCustom && amount === preset
                  ? "bg-green-900 text-gold-400 border-green-900"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
              }`}
            >
              ${(preset / 100).toFixed(0)}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setIsCustom(true)}
          className={`w-full py-2 px-4 rounded-lg text-sm border transition-colors ${
            isCustom
              ? "bg-green-900 text-gold-400 border-green-900"
              : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
          }`}
        >
          Custom Amount
        </button>
        {isCustom && (
          <div className="mt-2 relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              $
            </span>
            <input
              type="number"
              min="1"
              step="0.01"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="w-full pl-7 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              placeholder="0.00"
              autoFocus
            />
          </div>
        )}
      </div>

      <div>
        <label
          htmlFor="donate-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="text"
          id="donate-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="donate-email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email <span className="text-gray-400">(optional)</span>
        </label>
        <input
          type="email"
          id="donate-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-3">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading || effectiveAmount < 100}
        className="w-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-green-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors shadow-md"
      >
        {loading ? "Processing..." : `Donate $${displayAmount}`}
      </button>
    </form>
  );
}
