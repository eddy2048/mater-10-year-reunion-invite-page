import Link from "next/link";
import { ShareButton } from "./share-button";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_1.5px,_rgba(255,255,255,0.5)_1px,_transparent_1px)] bg-[length:28px_28px]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gold-400 font-semibold text-sm sm:text-base uppercase tracking-widest mb-4">
            You&apos;re Invited
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Mater Academy
            <br />
            <span className="text-gold-400">Class of 2016</span>
            <br />
            10 Year Reunion
          </h1>
          <p className="text-green-200 text-lg sm:text-xl mb-6">
            It&apos;s been a decade! Come reconnect with old friends, share
            stories, and celebrate how far we&apos;ve all come.
          </p>
          <p className="text-gold-400 text-lg sm:text-xl font-semibold">
            June 6th, 2026 &middot; 6:00 PM — 9:00 PM
          </p>
          <p className="text-green-300 text-sm mt-1">Venue: TBD</p>
          <div className="mt-8 inline-block bg-white/10 border border-gold-300/40 rounded-2xl px-6 py-5">
            <p className="text-gold-400 font-semibold text-base sm:text-lg">
              Ticket sales are paused
            </p>
            <p className="text-white/80 text-sm mt-1 max-w-md">
              We&apos;re finalizing the venue. Tickets will be available here
              once it&apos;s confirmed — stay tuned!
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-green-900 font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
            >
              Make a Donation
            </Link>
            <ShareButton />
          </div>
        </div>
      </div>
    </section>
  );
}

function EventDetails() {
  const details = [
    {
      icon: "📍",
      title: "Venue",
      description:
        "TBD — we're finalizing the venue and will share details here as soon as it's confirmed.",
    },
    {
      icon: "👔",
      title: "Dress Code",
      description:
        "Casual chic. Come looking your best — this is our decade celebration!",
    },
    {
      icon: "🍽️",
      title: "Food & Drinks",
      description:
        "Grill & Chill Banquet — Slow-smoked pork ribs, BBQ chicken, jalapeño cheddar sausage, mac & cheese, baked beans, potato salad, coleslaw, plus unlimited soda, tea & coffee.",
    },
    {
      icon: "📸",
      title: "Photography",
      description:
        "Professional photographer on-site to capture the night. Take home memories from the reunion!",
    },
    {
      icon: "🎵",
      title: "Music",
      description:
        "Collaborative playlist — add your favorite tracks. Plus special surprises throughout the night.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gold-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            Event Details
          </h2>
          <p className="text-green-900/60 max-w-2xl mx-auto">
            Everything you need to know about the reunion. More details will be
            shared as we get closer to the big day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((detail) => (
            <div
              key={detail.title}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gold-200"
            >
              <div className="text-3xl mb-3">{detail.icon}</div>
              <h3 className="text-lg font-bold text-green-900 mb-2">
                {detail.title}
              </h3>
              <p className="text-green-900/60 text-sm leading-relaxed">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatToBring() {
  const items = [
    "Your ticket confirmation (digital or printed)",
    "Business cards if you want to network",
    "A great attitude and your best stories from the last 10 years!",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gold-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
            What to Bring
          </h2>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gold-200">
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-green-700 font-bold text-lg mt-0.5">
                  ✓
                </span>
                <span className="text-green-900/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HelpOut() {
  return (
    <section className="bg-green-900 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gold-400 text-center mb-12">
          How Can You Help?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donate */}
          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💛</div>
            <h3 className="text-xl font-bold text-gold-400 mb-3">
              Support the Reunion
            </h3>
            <p className="text-white/70 mb-6">
              We&apos;re a non-profit organization. Your donations help keep
              ticket prices low and make this night unforgettable.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center bg-gold-400 hover:bg-gold-500 text-green-900 font-bold px-8 py-3 rounded-xl text-lg transition-colors shadow-lg"
            >
              Make a Donation
            </Link>
          </div>

          {/* Share */}
          <div className="bg-white/10 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-bold text-gold-400 mb-3">
              Spread the Word
            </h3>
            <p className="text-white/70 mb-6">
              Know someone from the Class of 2016? Share this page so they
              don&apos;t miss out on the reunion!
            </p>
            <ShareButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Home() {
  return (
    <>
      <HeroSection />
      <EventDetails />
      <WhatToBring />
      <HelpOut />
    </>
  );
}
