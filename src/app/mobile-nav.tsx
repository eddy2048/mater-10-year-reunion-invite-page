"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-2">
        <Link
          href="/donate"
          className="text-white/80 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
        >
          Donate
        </Link>
        <Link
          href="/#tickets"
          className="bg-gold-400 hover:bg-gold-500 text-green-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm"
        >
          Purchase Tickets
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden text-white/80 hover:text-gold-400 p-2 transition-colors"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[#0f2b1c] border-b border-green-900 shadow-lg sm:hidden">
          <div className="flex flex-col px-4 py-3 gap-2">
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Donate
            </Link>
            <Link
              href="/#tickets"
              onClick={() => setOpen(false)}
              className="bg-gold-400 hover:bg-gold-500 text-green-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm text-center"
            >
              Purchase Tickets
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
