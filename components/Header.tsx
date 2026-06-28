import Link from "next/link";
import { CalendarDays, Phone } from "lucide-react";
import { clinic, navItems } from "@/lib/data";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" aria-label="الرئيسية">
          <Logo compact />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-dental-mist hover:text-dental-deep">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={`tel:${clinic.phone}`} className="grid h-11 w-11 place-items-center rounded-full bg-dental-mist text-dental-deep shadow-sm" aria-label="اتصال">
            <Phone size={20} />
          </a>
          <Link href="/appointments" className="hidden items-center gap-2 rounded-full bg-dental-blue px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-dental-deep sm:flex">
            <CalendarDays size={18} />
            احجز الآن
          </Link>
        </div>
      </div>
    </header>
  );
}
