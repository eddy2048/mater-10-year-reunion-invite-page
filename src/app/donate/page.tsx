import { DonateForm } from "./donate-form";

export const metadata = {
  title: "Donate — Mater 2016 Reunion",
  description:
    "Support the Mater Academy Class of 2016 Alumni reunion by making a donation.",
};

export default function DonatePage() {
  return (
    <div className="py-12 sm:py-20 bg-gold-50 min-h-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Support the Reunion
          </h1>
          <p className="text-green-900/60 max-w-2xl mx-auto">
            Our reunion is organized as a non-profit effort. Your generous
            donations help subsidize event costs and keep ticket prices
            accessible for all classmates.
          </p>
        </div>

        {/* Preferred: Zelle & Venmo */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-bold text-green-900">
              Zelle &amp; Venmo
            </h2>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full">
              Preferred — no fees
            </span>
          </div>
          <p className="text-xs text-green-900/40 mb-4">
            Add your name in the memo so we can thank you!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Zelle */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-[#6D1ED4] px-5 py-3">
                <h3 className="text-white font-bold">Zelle</h3>
              </div>
              <div className="p-5 flex flex-col items-center gap-3">
                <img
                  src="/zelle_qr.png"
                  alt="Scan to donate via Zelle"
                  className="w-44 rounded-lg border border-gray-200 object-contain"
                />
                <div className="text-center">
                  <p className="text-sm font-bold text-green-900">
                    Mater 2016 Reunion Committee
                  </p>
                  <p className="font-mono text-xs text-gray-500 mt-0.5">
                    materseniors16@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Venmo */}
            <a
              href="https://venmo.com/mater_co_2016_alumni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-[#008CFF] px-5 py-3">
                <h3 className="text-white font-bold">Venmo</h3>
              </div>
              <div className="p-5 flex flex-col items-center gap-3">
                <img
                  src="/venmo_qr.jpeg"
                  alt="Scan to donate via Venmo"
                  className="w-44 rounded-lg border border-gray-200 object-contain"
                />
                <div className="text-center">
                  <p className="text-sm font-bold text-[#008CFF]">
                    @mater_co_2016_alumni
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Tap to open in Venmo
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Card Donation */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="bg-green-900 px-6 py-4">
            <h2 className="text-gold-400 font-bold text-lg">
              Donate by Card
            </h2>
            <p className="text-white/50 text-sm">
              Credit/debit card or Apple Pay
            </p>
          </div>
          <div className="p-6 max-w-md mx-auto">
            <p className="text-xs text-gray-400 mb-4">
              Credit card payments incur processing fees. If possible,
              consider Zelle or Venmo so we receive your full donation.
            </p>
            <DonateForm />
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-green-900 rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-gold-400 font-bold text-lg mb-2">
              Every Dollar Counts
            </h3>
            <p className="text-white/70 text-sm">
              100% of donations go directly toward the reunion — venue rental,
              catering, entertainment, and keeping ticket prices affordable.
              Thank you for your generosity!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
