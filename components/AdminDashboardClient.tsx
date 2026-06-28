"use client";

import { useEffect, useMemo, useState } from "react";
import { BarChart3, CalendarCheck, CheckCircle2, Clock, Eye, ImagePlus, Settings, Star, Trash2, Users } from "lucide-react";
import { services, treatmentCases } from "@/lib/data";

type Appointment = {
  id: string;
  patient: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: string;
};

const baseCards = [
  ["إجمالي الحجوزات", CalendarCheck],
  ["حجوزات الشهر", BarChart3],
  ["المواعيد القادمة", Clock],
  ["مواعيد مكتملة", CheckCircle2],
  ["الحالات المنشورة", Eye],
  ["متوسط التقييم", Star]
] as const;

export function AdminDashboardClient() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showSettings, setShowSettings] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function refreshAppointments() {
    setLoading(true);
    try {
      const response = await fetch("/api/appointments?all=1", { cache: "no-store" });
      const data = await response.json();
      setAppointments(data.appointments || []);
      setMessage("تم تحديث بيانات المواعيد.");
    } catch {
      setMessage("تعذر تحديث المواعيد. تأكد أن السيرفر يعمل.");
    } finally {
      setLoading(false);
      window.setTimeout(() => setMessage(""), 3000);
    }
  }

  useEffect(() => {
    refreshAppointments();
  }, []);

  const completed = appointments.filter((appointment) => appointment.status === "مكتمل").length;
  const upcoming = appointments.filter((appointment) => appointment.status !== "مكتمل" && appointment.status !== "ملغي").length;
  const monthly = appointments.filter((appointment) => appointment.date.startsWith("2026-06")).length;
  const cardValues = [appointments.length, monthly, upcoming, completed, treatmentCases.filter((item) => item.published).length, "4.9"];

  async function updateStatus(id: string, status: string) {
    const response = await fetch("/api/appointments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status })
    });

    if (!response.ok) {
      setMessage("تعذر تحديث حالة الموعد.");
      return;
    }

    setAppointments((current) => current.map((appointment) => (appointment.id === id ? { ...appointment, status } : appointment)));
    setMessage(`تم تغيير حالة الموعد إلى: ${status}`);
    window.setTimeout(() => setMessage(""), 3000);
  }

  async function deleteAppointment(id: string) {
    const response = await fetch(`/api/appointments?id=${encodeURIComponent(id)}`, { method: "DELETE" });

    if (!response.ok) {
      setMessage("تعذر حذف الموعد.");
      return;
    }

    setAppointments((current) => current.filter((appointment) => appointment.id !== id));
    setMessage("تم حذف الموعد.");
    window.setTimeout(() => setMessage(""), 3000);
  }

  return (
    <section className="bg-dental-mist px-4 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-black text-dental-blue">لوحة الإدارة</p>
            <h1 className="mt-1 text-4xl font-black text-dental-ink">إدارة عيادة الكريمة</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowSettings((value) => !value)} className="rounded-full bg-white p-3 text-dental-deep shadow-sm" aria-label="الإعدادات">
              <Settings />
            </button>
            <button onClick={refreshAppointments} className="rounded-full bg-dental-blue px-5 py-3 font-black text-white">
              {loading ? "جاري التحديث..." : "تحديث البيانات"}
            </button>
          </div>
        </div>

        {message && <p className="mt-5 rounded-2xl bg-emerald-50 p-4 font-bold text-emerald-700">{message}</p>}

        {showSettings && (
          <div className="mt-5 rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-xl font-black">إعدادات سريعة</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <label className="rounded-2xl bg-dental-mist p-4 font-bold"><input className="ml-2" type="checkbox" defaultChecked /> استقبال حجوزات جديدة</label>
              <label className="rounded-2xl bg-dental-mist p-4 font-bold"><input className="ml-2" type="checkbox" defaultChecked /> إظهار بيانات Demo</label>
              <label className="rounded-2xl bg-dental-mist p-4 font-bold"><input className="ml-2" type="checkbox" defaultChecked /> تنبيهات واتساب</label>
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {baseCards.map(([label, Icon], index) => (
            <div key={label} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <Icon className="text-dental-blue" />
              <p className="mt-5 text-3xl font-black">{cardValues[index]}</p>
              <p className="mt-1 font-bold text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">إدارة المواعيد</h2>
            <p className="mt-2 text-sm font-bold text-slate-500">الحجوزات الجديدة تظهر هنا بعد الضغط على تحديث البيانات أو فتح اللوحة من جديد.</p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[860px] border-separate border-spacing-y-3 text-right">
                <thead className="text-sm text-slate-500">
                  <tr>
                    <th>اسم المريض</th>
                    <th>الهاتف</th>
                    <th>الخدمة</th>
                    <th>التاريخ</th>
                    <th>الوقت</th>
                    <th>الحالة</th>
                    <th>الإجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="bg-dental-mist">
                      <td className="rounded-r-2xl p-4 font-black">{appointment.patient}</td>
                      <td className="p-4">{appointment.phone}</td>
                      <td className="p-4">{appointment.service}</td>
                      <td className="p-4">{appointment.date}</td>
                      <td className="p-4">{appointment.time}</td>
                      <td className="p-4 font-bold text-dental-deep">{appointment.status}</td>
                      <td className="rounded-l-2xl p-4">
                        <div className="flex flex-wrap gap-2">
                          <button onClick={() => updateStatus(appointment.id, "مؤكد")} className="rounded-full bg-emerald-500 px-3 py-2 text-xs font-black text-white">تأكيد</button>
                          <button onClick={() => updateStatus(appointment.id, "ملغي")} className="rounded-full bg-amber-500 px-3 py-2 text-xs font-black text-white">إلغاء</button>
                          <button onClick={() => updateStatus(appointment.id, "مكتمل")} className="rounded-full bg-dental-deep px-3 py-2 text-xs font-black text-white">مكتمل</button>
                          <button onClick={() => deleteAppointment(appointment.id)} className="rounded-full bg-red-500 px-3 py-2 text-xs font-black text-white" aria-label="حذف الموعد">
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black">جدول العمل</h2>
              <div className="mt-5 grid gap-3">
                {["السبت: 9 AM - 6 PM", "الأحد: 9 AM - 6 PM", "الاثنين: 9 AM - 6 PM", "الخميس: 9 AM - 6 PM"].map((item) => (
                  <p key={item} className="rounded-2xl bg-dental-mist p-4 font-bold">{item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-dental-ink p-6 text-white shadow-soft">
              <h2 className="text-2xl font-black">إدارة المحتوى</h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ["صور الهيرو", ImagePlus],
                  ["الخدمات", Users],
                  ["الأطباء", Users],
                  ["السوشيال", Star]
                ].map(([label, Icon]) => (
                  <button onClick={() => setMessage(`${label as string}: سيتم تفعيلها عند ربط قاعدة البيانات ولوحة الرفع.`)} key={String(label)} className="rounded-2xl bg-white/8 p-4 text-sm font-black">
                    <Icon className="mx-auto mb-2 text-dental-blue" />
                    {label as string}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">أكثر الخدمات طلبا</h2>
            <div className="mt-5 grid gap-4">
              {services.slice(0, 5).map(([name], index) => (
                <div key={name}>
                  <div className="mb-2 flex justify-between text-sm font-bold"><span>{name}</span><span>{85 - index * 9}%</span></div>
                  <div className="h-3 overflow-hidden rounded-full bg-dental-mist"><div className="h-full rounded-full bg-dental-blue" style={{ width: `${85 - index * 9}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <h2 className="text-2xl font-black">تحليلات نتائج العلاج</h2>
            <div className="mt-5 grid gap-3">
              <p className="rounded-2xl bg-dental-mist p-4 font-bold">إجمالي الحالات المنشورة: {treatmentCases.filter((item) => item.published).length}</p>
              <p className="rounded-2xl bg-dental-mist p-4 font-bold">أكثر تصنيف مشاهدة: تبييض الأسنان</p>
              <p className="rounded-2xl bg-dental-mist p-4 font-bold">أفضل حالة أداء: تحسين لون الابتسامة</p>
              <p className="rounded-2xl bg-dental-mist p-4 font-bold">أداء الحالات المميزة: 71% من زيارات صفحة النتائج</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
