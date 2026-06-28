import { MapPin, Navigation, Phone } from "lucide-react";
import { clinic } from "@/lib/data";

export const metadata = {
  title: "موقع العيادة",
  description: "موقع عيادة الكريمة في الأردن، اربد، الأغوار الشمالية، كريمة."
};

export default function LocationPage() {
  return (
    <section className="location-stage px-4 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-normal md:text-5xl">Our Location</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/55">
            Follow the highlighted route into Irbid, then tap the map to jump straight to Google Maps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
          <a href={clinic.maps} target="_blank" className="premium-map group relative block min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_35px_90px_rgba(0,0,0,.45)]">
            <div className="absolute left-6 top-6 z-20 rounded-full border border-white/15 bg-black/70 px-5 py-3 text-xs font-black tracking-[0.22em] text-white shadow-lg backdrop-blur">
              LIVE MAP
            </div>
            <div className="absolute right-6 top-6 z-20 grid gap-3">
              <span className="rounded-full border border-white/15 bg-black/70 px-5 py-3 text-[10px] font-black tracking-[0.28em] text-white backdrop-blur">RESET</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/70 text-lg font-black text-white backdrop-blur">+</span>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/70 text-lg font-black text-white backdrop-blur">-</span>
            </div>

            <div className="map-world absolute inset-0">
              <span className="continent continent-america" />
              <span className="continent continent-europe" />
              <span className="continent continent-africa" />
              <span className="continent continent-asia" />
              <span className="continent continent-australia" />
            </div>

            <div className="route-line absolute left-[51%] top-[37%] z-10 h-28 w-24 rounded-br-[5rem] border-b border-r border-dashed border-[#d8c491]/45" />
            <div className="absolute left-[54%] top-[34%] z-20 h-5 w-5 rounded-full bg-[#f2c680] shadow-[0_0_34px_12px_rgba(242,198,128,.32)]" />
            <div className="absolute left-[47%] top-[28%] z-30 rounded-2xl border border-white/15 bg-black/75 px-7 py-4 text-center text-lg font-black text-white shadow-2xl backdrop-blur-md">
              Jordan, Irbid
            </div>
            <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 rounded-full border border-white/15 bg-black/75 px-8 py-4 text-sm font-black text-white shadow-2xl backdrop-blur-md">
              عيادة الكريمة - كريمة
            </div>
          </a>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-[0_35px_90px_rgba(0,0,0,.25)] backdrop-blur">
            <h2 className="text-2xl font-black">بيانات العيادة</h2>
            <div className="mt-6 grid gap-4">
              <p className="flex gap-3 leading-8 text-white/80"><MapPin className="shrink-0 text-dental-blue" /> {clinic.address}</p>
              <p className="flex gap-3 text-white/80"><Phone className="text-dental-blue" /> {clinic.phone}</p>
              <p className="rounded-2xl bg-black/25 p-4 text-white/80">{clinic.hours}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={clinic.maps} target="_blank" className="rounded-full bg-dental-blue px-6 py-3 font-black text-white shadow-soft">فتح في خرائط Google</a>
              <a href={clinic.maps} target="_blank" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-dental-ink"><Navigation size={18} /> بدء التنقل</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
