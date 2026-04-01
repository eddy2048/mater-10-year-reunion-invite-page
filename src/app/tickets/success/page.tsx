import Link from "next/link";

export const metadata = {
  title: "Purchase Confirmed — Mater 2016 Reunion",
};

export default function TicketSuccessPage() {
  return (
    <div className="py-20 sm:py-32 bg-gold-50">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          You&apos;re In!
        </h1>
        <p className="text-green-900/70 mb-2">
          Your ticket purchase was successful. A confirmation email has been sent
          to your email address.
        </p>
        <p className="text-green-900/70 mb-8">
          We can&apos;t wait to see you on <strong>June 6th, 2026</strong>!
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-green-900 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-xl transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
