import { Plus, Settings, Trash2 } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { doctors } from "@/lib/data";

export const metadata = {
  title: "الأطباء",
  description: "تعرف على فريق عيادة الكريمة الطبي."
};

export default function DoctorsPage() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <SectionTitle eyebrow="الأطباء" title="فريق طبي بثقة عالية" text="بطاقات أطباء مع صور، تخصص، خبرة، وسيرة مختصرة. الإدارة تستطيع إضافة وتعديل وحذف الأطباء من لوحة التحكم." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {doctors.map((doctor) => (
          <article key={doctor.name} className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-soft">
            <img src={doctor.image} alt={doctor.name} className="h-80 w-full object-cover" />
            <div className="p-6">
              <p className="rounded-full bg-dental-mist px-4 py-2 text-sm font-black text-dental-deep">{doctor.experience}</p>
              <h2 className="mt-4 text-2xl font-black text-dental-ink">{doctor.name}</h2>
              <p className="mt-1 font-bold text-dental-blue">{doctor.specialty}</p>
              <p className="mt-4 leading-8 text-slate-600">{doctor.bio}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-dental-mist p-6">
        <h3 className="text-xl font-black">أدوات الإدارة المتوقعة</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {[["إضافة طبيب", Plus], ["تعديل البيانات", Settings], ["حذف طبيب", Trash2]].map(([label, Icon]) => (
            <span key={String(label)} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-dental-deep shadow-sm">
              <Icon size={18} /> {label as string}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
