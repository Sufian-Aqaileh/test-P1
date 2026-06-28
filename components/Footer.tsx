import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { clinic, navItems } from "@/lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-dental-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div className="[&_*]:text-white">
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">عيادة عربية حديثة تقدم خدمات طب الأسنان وجراحة الفم والطب العام في كريمة، الأردن.</p>
        </div>
        <div>
          <h3 className="text-lg font-black">روابط سريعة</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map(([label, href]) => (
              <Link className="text-sm text-white/75 hover:text-white" key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-black">تواصل معنا</h3>
          <p className="mt-4 flex gap-2 text-sm text-white/75"><MapPin size={18} /> {clinic.address}</p>
          <p className="mt-3 flex gap-2 text-sm text-white/75"><Phone size={18} /> {clinic.phone}</p>
          <p className="mt-3 text-sm text-white/75">{clinic.hours}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/60">© 2026 {clinic.name}. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
