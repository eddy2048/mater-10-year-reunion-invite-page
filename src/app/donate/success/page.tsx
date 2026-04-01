import Link from "next/link";

export const metadata = {
  title: "Thank You — Mater 2016 Reunion",
};

export default function DonateSuccessPage() {
  return (
    <div className="py-20 sm:py-32 bg-gold-50">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="text-6xl mb-6">💚</div>
        <h1 className="text-3xl font-bold text-green-900 mb-4">
          Thank You!
        </h1>
        <p className="text-green-900/70 mb-2">
          Your generous donation has been received. It will go directly toward
          making our 10-year reunion an unforgettable night.
        </p>
        <p className="text-green-900/70 mb-8">
          We truly appreciate your support!
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
