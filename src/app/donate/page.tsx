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
            accessible for all classmates. We prefer Zelle or Venmo since
            we receive 100% of your donation — no fees taken out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Zelle Donation */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="bg-purple-700 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white font-bold text-lg">
                    Zelle or Venmo
                  </h2>
                  <p className="text-purple-200 text-sm">
                    Instant &amp; fee-free
                  </p>
                </div>
                <span className="bg-gold-400 text-green-900 text-xs font-bold px-2.5 py-1 rounded-full">
                  Preferred
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 font-medium">
                    We keep 100% of Zelle &amp; Venmo donations — no processing
                    fees! This is the best way to support the reunion.
                  </p>
                </div>

                <div className="flex justify-center">
                  <img
                    src="/zelle_qr.png"
                    alt="Scan to donate via Zelle to Mater 2016 Reunion Committee"
                    className="w-56 rounded-lg border border-gray-200 object-contain"
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    Send via Zelle or Venmo to
                  </p>
                  <p className="text-lg font-bold text-green-900">
                    Mater 2016 Reunion Committee
                  </p>
                  <p className="font-mono text-sm text-gray-600 mt-1">
                    materseniors16@gmail.com
                  </p>
                </div>

                <p className="text-xs text-green-900/40 text-center">
                  Add your name in the memo so we can thank you!
                </p>
              </div>
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
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-4">
                Credit card payments incur processing fees. If possible,
                consider Zelle or Venmo so we receive your full donation.
              </p>
              <DonateForm />
            </div>
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
