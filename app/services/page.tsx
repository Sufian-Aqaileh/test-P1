import Link from "next/link";
import { CalendarPlus } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/lib/data";

export const metadata = {
  title: "خدمات طب الأسنان",
  description: "خدمات عيادة الكريمة: فحص، تنظيف، علاج عصب، زراعة، تقويم، تبييض، جراحة الفم والأسنان."
};

export default function ServicesPage() {
  return (
    <section className="bg-dental-mist px-4 py-16 lg:px-8">
      <SectionTitle eyebrow="الخدمات" title="كل ما تحتاجه لصحة فم أفضل" text="بطاقات واضحة لكل خدمة مع مدة تقديرية وزر حجز مباشر." />
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([name, description, duration, Icon]) => (
          <article key={name} className="rounded-[2rem] border border-white bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-dental-mist text-dental-blue">
              <Icon size={30} />
            </div>
            <h2 className="text-xl font-black text-dental-ink">{name}</h2>
            <p className="mt-3 min-h-20 leading-7 text-slate-600">{description}</p>
            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-dental-deep">{duration}</span>
              <Link href="/appointments" className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-4 py-2 text-sm font-black text-white">
                <CalendarPlus size={17} />
                حجز
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
