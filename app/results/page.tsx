import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { treatmentCases } from "@/lib/data";

export const metadata = {
  title: "نتائج العلاج",
  description: "حالات قبل وبعد في عيادة الكريمة مع احترام خصوصية المرضى وموافقة النشر."
};

const categories = ["الكل", "تبييض الأسنان", "تقويم الأسنان", "زراعة الأسنان", "علاج التسوس", "تجميل الأسنان", "القشور التجميلية (Veneers)", "إعادة تأهيل الفم", "حالات أخرى"];

export default function ResultsPage() {
  return (
    <section className="bg-dental-mist px-4 py-16 lg:px-8">
      <SectionTitle eyebrow="نتائج العلاج" title="معرض قبل وبعد" text="حالات منشورة فقط بعد موافقة المريض، بدون أسماء أو أي معلومات شخصية حساسة." />
      <div className="mx-auto mb-8 flex max-w-7xl gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button key={category} className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-black text-dental-deep shadow-sm">{category}</button>
        ))}
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {treatmentCases.map((item) => (
          <article key={item.title} className="rounded-[2rem] bg-white p-4 shadow-soft">
            <BeforeAfterSlider before={item.before} after={item.after} title={item.title} />
            <div className="p-3">
              <p className="text-sm font-black text-dental-blue">{item.category}</p>
              <h2 className="mt-1 text-xl font-black">{item.title}</h2>
              <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-slate-600">
                <span className="rounded-full bg-dental-mist px-3 py-2">{item.duration}</span>
                <span className="rounded-full bg-dental-mist px-3 py-2">{item.type}</span>
                <span className="rounded-full bg-emerald-50 px-3 py-2 text-emerald-700">موافقة نشر</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl rounded-[2rem] bg-white p-6 shadow-soft">
        <h3 className="text-xl font-black">ضوابط الخصوصية</h3>
        <p className="mt-3 leading-8 text-slate-600">لوحة الإدارة مصممة لدعم طمس الوجوه، طمس مناطق يدويا، إخفاء أي حالة فوريا، وعدم عرض أسماء أو أرقام أو عناوين أو أي بيانات حساسة.</p>
      </div>
    </section>
  );
}
