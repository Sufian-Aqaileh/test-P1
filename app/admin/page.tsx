import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { Logo } from "@/components/Logo";

export const metadata = {
  title: "دخول الإدارة",
  description: "دخول آمن للوحة إدارة عيادة الكريمة."
};

export default function AdminLoginPage() {
  return (
    <section className="grid min-h-[calc(100vh-82px)] place-items-center bg-dental-mist px-4 py-16">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-premium">
        <Logo />
        <div className="mt-8 grid h-14 w-14 place-items-center rounded-2xl bg-dental-mist text-dental-blue">
          <LockKeyhole size={28} />
        </div>
        <h1 className="mt-5 text-3xl font-black">دخول لوحة الإدارة</h1>
        <p className="mt-2 text-sm leading-7 text-slate-600">واجهة جاهزة للربط مع NextAuth وJWT وPassword hashing. بيانات الدخول تضبط من ملف البيئة.</p>
        <form className="mt-7 grid gap-4">
          <input className="input" type="email" placeholder="البريد الإلكتروني" defaultValue="admin@alkarima-clinic.com" />
          <input className="input" type="password" placeholder="كلمة المرور" defaultValue="demo-password" />
          <Link href="/admin/dashboard" className="rounded-2xl bg-dental-blue px-6 py-4 text-center font-black text-white shadow-soft">دخول تجريبي</Link>
        </form>
      </div>
    </section>
  );
}
