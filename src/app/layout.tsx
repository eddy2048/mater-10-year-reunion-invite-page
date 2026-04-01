import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mater Academy Class of 2016 Alumni — 10 Year Reunion",
  description:
    "Join us on June 6th, 2026 for the Mater Academy Class of 2016 Alumni ten-year reunion celebration!",
  openGraph: {
    title: "Mater Academy Class of 2016 Alumni — 10 Year Reunion",
    description:
      "Join us on June 6th, 2026 for the Mater Academy Class of 2016 Alumni ten-year reunion celebration!",
    type: "website",
  },
};

function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-[#0f2b1c] border-b border-green-900 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-gold-400 font-bold text-lg sm:text-xl tracking-tight"
          >
            Home
          </Link>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-green-900 text-white/80 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-gold-400 font-semibold">
            Mater Academy Class of 2016 Alumni
          </p>
          <p className="text-sm text-white/60">
            10 Year Reunion — June 6th, 2026
          </p>
          <p className="text-xs text-white/40 pt-2">
            Organized by the Mater 2016 Reunion Committee, a non-profit
            organization.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${quicksand.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
