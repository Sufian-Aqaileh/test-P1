import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin, Star, Users } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { clinic, doctors, services, testimonials, treatmentCases } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 medical-grid opacity-70" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-dental-blue/15 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-[1fr_.95fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dental-blue/20 bg-white px-4 py-2 text-sm font-black text-dental-deep shadow-sm">
              <Star size={16} className="fill-dental-blue text-dental-blue" />
              تقييم 4.9 من مرضى العيادة
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-dental-ink md:text-7xl">{clinic.name}</h1>
            <p className="mt-5 max-w-2xl text-xl font-bold leading-9 text-dental-deep">{clinic.tagline}</p>
            <p className="mt-5 max-w-2xl leading-8 text-slate-600">تجربة طبية هادئة وموثوقة لطب الأسنان، جراحة الفم والأسنان، والطب العام في كريمة، الأردن.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/appointments" className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-7 py-4 font-black text-white shadow-premium transition hover:bg-dental-deep">
                <CalendarDays size={20} />
                احجز موعد الآن
              </Link>
              <a href={`https://wa.me/${clinic.whatsapp}`} className="inline-flex items-center gap-2 rounded-full border border-dental-blue/30 bg-white px-7 py-4 font-black text-dental-deep shadow-sm transition hover:border-dental-blue">
                تواصل معنا
                <ArrowLeft size={20} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] bg-dental-mist shadow-premium">
              <img className="h-[560px] w-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop" alt="عيادة أسنان حديثة" />
            </div>
            <div className="absolute bottom-6 right-6 rounded-3xl bg-white/92 p-5 shadow-premium backdrop-blur">
              <p className="text-sm font-bold text-slate-500">الموقع</p>
              <p className="mt-1 flex items-center gap-2 font-black text-dental-ink"><MapPin size={18} /> {clinic.city}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dental-ink py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 lg:px-8">
          {[["3500+", "عدد المرضى"], ["12+", "عدد سنوات الخبرة"], ["19", "عدد الخدمات"]].map(([value, label]) => (
            <div key={label} className="rounded-3xl border border-white/10 bg-white/7 p-7 text-center">
              <p className="text-4xl font-black text-dental-blue">{value}</p>
              <p className="mt-2 font-bold text-white/75">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="خدماتنا" title="رعاية أسنان متكاملة" text="خدمات أساسية وتجميلية وجراحية بتجربة مريحة ومبنية على الثقة." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {services.slice(0, 6).map(([name, description, duration, Icon]) => (
            <div key={name} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <Icon className="mb-5 text-dental-blue" size={34} />
              <h3 className="text-xl font-black">{name}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <p className="mt-4 text-sm font-bold text-dental-deep">{duration}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dental-mist px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="نتائج العلاج" title="نتائج بعض الحالات الناجحة" text="صور توضيحية تحترم خصوصية المريض وتركز على النتيجة العلاجية فقط." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {treatmentCases.filter((item) => item.featured).map((item) => (
            <article key={item.title} className="rounded-[2rem] bg-white p-4 shadow-soft">
              <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />
              <div className="p-3">
                <p className="text-sm font-black text-dental-blue">{item.category}</p>
                <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/results" className="inline-flex items-center gap-2 rounded-full bg-dental-blue px-7 py-4 font-black text-white shadow-soft">عرض جميع النتائج <ArrowLeft size={18} /></Link>
        </div>
      </section>

      <section className="bg-white px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="فريق العيادة" title="أطباء يهتمون براحتك" />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
              <img className="h-72 w-full object-cover" src={doctor.image} alt={doctor.name} />
              <div className="p-6">
                <h3 className="text-xl font-black">{doctor.name}</h3>
                <p className="mt-1 font-bold text-dental-blue">{doctor.specialty}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{doctor.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-dental-mist px-4 py-20 lg:px-8">
        <SectionTitle eyebrow="آراء المرضى" title="ثقة مبنية على التجربة" text="تصميم قريب من أسلوب Google Reviews مع موافقة الإدارة قبل النشر." />
        <div className="mx-auto mb-8 flex max-w-xl items-center justify-center gap-4 rounded-3xl bg-white p-5 shadow-soft">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-dental-blue text-2xl font-black text-white">4.9</div>
          <div>
            <p className="font-black">متوسط تقييم العيادة</p>
            <p className="text-sm text-slate-600">بناء على 248 مراجعة</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {testimonials.map(([text, name, rating]) => (
            <article key={name} className="rounded-3xl bg-white p-6 shadow-soft">
              <div className="flex gap-1 text-amber-400">{Array.from({ length: rating }).map((_, index) => <Star key={index} size={18} className="fill-amber-400" />)}</div>
              <p className="mt-5 leading-8 text-slate-700">{text}</p>
              <p className="mt-5 font-black text-dental-ink">{name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-dental-ink p-6 text-white shadow-premium md:grid-cols-[1fr_1.2fr] md:p-10">
          <div>
            <Users className="text-dental-blue" size={42} />
            <h2 className="mt-4 text-3xl font-black">جاهزون لاستقبالك</h2>
            <p className="mt-3 leading-8 text-white/72">{clinic.address}. أوقات العمل: {clinic.hours}.</p>
            <Link href="/location" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-black text-dental-ink">عرض الموقع</Link>
          </div>
          <div className="dark-map relative min-h-80 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="map-dot-pattern absolute inset-0" />
            <div className="absolute left-[38%] top-[34%] rounded-full bg-dental-blue px-4 py-2 text-sm font-black shadow-premium">Jordan, Irbid</div>
          </div>
        </div>
      </section>
    </>
  );
}
