import Link from "next/link";

export function MobileNav() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/donate"
        className="bg-gold-400 hover:bg-gold-500 text-green-900 px-4 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm"
      >
        Donate
      </Link>
    </div>
  );
}
