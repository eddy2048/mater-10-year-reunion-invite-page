import Link from "next/link";

export const metadata = {
  title: "Payment Canceled — Mater 2016 Reunion",
};

export default function TicketCanceledPage() {
  return (
    <div className="py-20 sm:py-32 bg-gold-50">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-6xl mb-6">😔</div>
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Payment Canceled
        </h1>
        <p className="text-green-900/70 mb-8">
          No worries — your payment was not processed. You can try again
          whenever you&apos;re ready.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-green-900 font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Try Again
        </Link>
      </div>
    </div>
  );
}
