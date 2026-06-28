"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { allSlots, bookingServices } from "@/lib/data";
import { todayISO } from "@/lib/utils";

export function AppointmentForm() {
  const [date, setDate] = useState(todayISO());
  const [booked, setBooked] = useState<Record<string, string[]>>({});
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const available = useMemo(() => allSlots.filter((slot) => !(booked[date] || []).includes(slot)), [booked, date]);

  async function loadAvailability(selectedDate = date) {
    const response = await fetch(`/api/appointments?date=${selectedDate}`, { cache: "no-store" });
    const data = await response.json();
    setBooked((current) => ({ ...current, [selectedDate]: data.booked || [] }));
  }

  useEffect(() => {
    loadAvailability(date);
  }, [date]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selected = String(formData.get("time") || time);

    if (!selected) {
      setError("اختر وقت الموعد أولا.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient: String(formData.get("name") || ""),
          phone: String(formData.get("phone") || ""),
          age: String(formData.get("age") || ""),
          gender: String(formData.get("gender") || ""),
          service: String(formData.get("service") || ""),
          notes: String(formData.get("notes") || ""),
          date,
          time: selected
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "تعذر إرسال الحجز.");
        return;
      }

      setBooked((current) => ({ ...current, [date]: [...(current[date] || []), selected] }));
      setTime("");
      form.reset();
      setDate(todayISO());
      setMessage("تم إرسال طلب الحجز بنجاح. سنقوم بالتواصل معك للتأكيد.");
    } catch {
      setError("حدث خطأ أثناء إرسال الحجز. تأكد أن السيرفر يعمل ثم حاول مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] bg-white p-5 shadow-premium md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <input required name="name" placeholder="الاسم الكامل" className="input" />
        <input required name="phone" placeholder="رقم الهاتف" className="input" />
        <input name="age" type="number" min="1" placeholder="العمر (اختياري)" className="input" />
        <select required name="gender" className="input">
          <option value="">الجنس</option>
          <option>ذكر</option>
          <option>أنثى</option>
        </select>
        <select required name="service" className="input md:col-span-2">
          <option value="">نوع الخدمة</option>
          {bookingServices.map((service) => <option key={service}>{service}</option>)}
        </select>
        <input required name="date" value={date} onChange={(event) => { setDate(event.target.value); setTime(""); }} type="date" min={todayISO()} className="input" />
        <textarea name="notes" placeholder="ملاحظات" className="input min-h-28 md:col-span-2" />
      </div>
      <div className="mt-6">
        <p className="mb-3 text-sm font-black text-dental-ink">الأوقات المتاحة</p>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {available.map((slot) => (
            <label key={slot} className={`cursor-pointer rounded-2xl border p-3 text-center text-sm font-black transition ${time === slot ? "border-dental-blue bg-dental-blue text-white" : "border-slate-200 bg-dental-mist text-dental-deep hover:border-dental-blue"}`}>
              <input className="sr-only" type="radio" name="time" value={slot} checked={time === slot} onChange={() => setTime(slot)} />
              {slot}
            </label>
          ))}
        </div>
        {!available.length && <p className="rounded-2xl bg-red-50 p-4 text-sm font-bold text-red-700">لا توجد مواعيد متاحة في هذا اليوم.</p>}
      </div>
      <button disabled={submitting} className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-dental-blue px-6 py-4 font-black text-white shadow-soft transition hover:bg-dental-deep disabled:cursor-not-allowed disabled:opacity-60">
        <CalendarCheck size={20} />
        {submitting ? "جاري إرسال الحجز..." : "تأكيد الحجز"}
      </button>
      {message && <p className="mt-4 rounded-2xl bg-emerald-50 p-4 text-center font-bold text-emerald-700">{message}</p>}
      {error && <p className="mt-4 rounded-2xl bg-red-50 p-4 text-center font-bold text-red-700">{error}</p>}
    </form>
  );
}
