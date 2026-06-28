import { ShieldCheck } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata = {
  title: "حجز موعد",
  description: "احجز موعدك إلكترونيا في عيادة الكريمة مع عرض الأوقات المتاحة فقط."
};

export default function AppointmentsPage() {
  return (
    <section className="bg-dental-mist px-4 py-16 lg:px-8">
      <SectionTitle eyebrow="الحجز الإلكتروني" title="اختر الموعد المناسب لك" text="النظام يعرض الأوقات المتاحة فقط، يمنع الحجز المكرر، ولا يسمح بحجز تواريخ سابقة." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_.8fr]">
        <AppointmentForm />
        <aside className="rounded-[2rem] bg-dental-ink p-7 text-white shadow-premium">
          <ShieldCheck className="text-dental-blue" size={44} />
          <h2 className="mt-5 text-2xl font-black">خصوصية وراحة</h2>
          <p className="mt-4 leading-8 text-white/72">معلوماتك تستخدم للتواصل وتأكيد الموعد فقط. لا يحتاج الزوار لإنشاء حساب، ولوحة الإدارة محمية للموظفين فقط.</p>
          <div className="mt-8 grid gap-3">
            {["إخفاء الأوقات المحجوزة", "تحديث التوفر بعد الحجز", "منع الحجز في الماضي", "إشعار نجاح فوري"].map((item) => (
              <p key={item} className="rounded-2xl bg-white/8 p-4 font-bold">{item}</p>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
