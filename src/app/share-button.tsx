"use client";

import { useState } from "react";

export function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const shareData = {
      title: "Mater Academy Class of 2016 — 10 Year Reunion",
      text: "You're invited to the Mater Academy Class of 2016 reunion! June 6th, 2026 at Dave & Buster's, Dolphin Mall. Get your tickets:",
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled share — ignore
      }
    } else {
      await navigator.clipboard.writeText(
        `${shareData.text} ${shareData.url}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  }

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-green-900 font-bold px-8 py-3 rounded-xl text-lg transition-colors shadow-lg"
    >
      {copied ? (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Link Copied!
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          Share with a Classmate
        </>
      )}
    </button>
  );
}
