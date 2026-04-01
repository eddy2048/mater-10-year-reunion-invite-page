import Link from "next/link";
import { getTicketPrice } from "@/lib/ticket-price";
import { TicketForm } from "./tickets/ticket-form";
import { ShareButton } from "./share-button";

function HeroSection({
  priceInCents,
  priceFormatted,
}: {
  priceInCents: number;
  priceFormatted: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_1.5px,_rgba(255,255,255,0.5)_1px,_transparent_1px)] bg-[length:28px_28px]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Event info */}
          <div className="text-center lg:text-left">
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
            <p className="text-green-200 text-lg sm:text-xl max-w-lg mb-6">
              It&apos;s been a decade! Come reconnect with old friends, share
              stories, and celebrate how far we&apos;ve all come.
            </p>
            <p className="text-gold-400 text-lg sm:text-xl font-semibold">
              June 6th, 2026 &middot; 6:00 PM — 9:00 PM
            </p>
            <p className="text-green-300 text-sm mt-1">
              Dave &amp; Buster&apos;s &middot; Dolphin Mall, Miami
            </p>
          </div>

          {/* Right: Ticket form */}
          <div id="tickets" className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto scroll-mt-24">
            <div className="bg-green-900 rounded-2xl shadow-2xl overflow-hidden">
              <div className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-white font-bold text-lg">
                    Get Your Tickets
                  </h2>
                  <div className="text-right">
                    <p className="text-gold-400 text-2xl font-bold">
                      ${priceFormatted}
                    </p>
                    <p className="text-white/50 text-xs">per person</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-t-2xl p-6">
                <div className="mb-4 bg-gold-100 border border-gold-300 rounded-lg p-3">
                  <p className="text-sm text-green-900 font-medium">
                    <strong>Includes:</strong> BBQ dinner, unlimited soda/tea/coffee,
                    and a night of memories! (No alcohol served.)
                  </p>
                </div>
                <TicketForm priceInCents={priceInCents} />
              </div>
            </div>
            <p className="text-center text-green-300 text-xs mt-3">
              Up to 2 tickets per person. Apple Pay &amp; Google Pay accepted.
            </p>
            <div className="mt-4 text-center">
              <ShareButton />
            </div>
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
        "Dave & Buster's — Dolphin Mall, 11401 NW 12th St, Miami, FL 33172",
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
      title: "Entertainment",
      description:
        "Live DJ spinning hits from 2012-2016 and today. Plus special surprises throughout the night.",
    },
    {
      icon: "🅿️",
      title: "Parking",
      description:
        "Free parking at Dolphin Mall. Rideshare drop-off available at the mall entrance.",
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

function VenueMap() {
  return (
    <section className="py-16 sm:py-24 bg-green-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold-400 mb-4">
            Find the Venue
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Dave &amp; Buster&apos;s at Dolphin Mall — 11401 NW 12th St, Miami,
            FL 33172
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Dave & Buster's Dolphin Mall"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.1!2d-80.3832!3d25.7884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b90cd1e1e34f%3A0x0!2sDave%20%26%20Buster's!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Dave+and+Busters+Dolphin+Mall+11401+NW+12th+St+Miami+FL+33172"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-green-900 font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
          >
            <span>📍</span>
            Open in Google Maps
          </a>
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
  const priceInCents = getTicketPrice();
  const priceFormatted = (priceInCents / 100).toFixed(2);

  return (
    <>
      <HeroSection priceInCents={priceInCents} priceFormatted={priceFormatted} />
      <EventDetails />
      <VenueMap />
      <WhatToBring />
      <HelpOut />
    </>
  );
}
