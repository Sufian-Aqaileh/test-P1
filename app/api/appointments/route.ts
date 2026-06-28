import { NextResponse } from "next/server";
import { allSlots, appointments as demoAppointments, bookedSlotsByDate } from "@/lib/data";

type RuntimeAppointment = {
  id: string;
  patient: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  status: string;
  age?: string;
  gender?: string;
  notes?: string;
};

const runtimeBookings: Record<string, string[]> = { ...bookedSlotsByDate };
const runtimeAppointments: RuntimeAppointment[] = demoAppointments.map((appointment, index) => ({
  id: `demo-${index + 1}`,
  patient: appointment.patient,
  phone: appointment.phone,
  service: appointment.service,
  date: appointment.date,
  time: appointment.time,
  status: appointment.status
}));

function getAvailableSlots(date: string) {
  const booked = runtimeBookings[date] || [];
  return allSlots.filter((slot) => !booked.includes(slot));
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const all = searchParams.get("all");

  if (all === "1") {
    return NextResponse.json({ appointments: runtimeAppointments });
  }

  const date = searchParams.get("date") || new Date().toISOString().slice(0, 10);
  const booked = runtimeBookings[date] || [];
  return NextResponse.json({ date, available: getAvailableSlots(date), booked });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const date = String(payload.date || "");
  const time = String(payload.time || "");

  if (!date || !time) {
    return NextResponse.json({ message: "التاريخ والوقت مطلوبان" }, { status: 400 });
  }

  if (date < new Date().toISOString().slice(0, 10)) {
    return NextResponse.json({ message: "لا يمكن حجز تاريخ سابق" }, { status: 400 });
  }

  if ((runtimeBookings[date] || []).includes(time)) {
    return NextResponse.json({ message: "هذا الموعد محجوز مسبقا" }, { status: 409 });
  }

  const appointment: RuntimeAppointment = {
    id: `appointment-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    patient: String(payload.patient || ""),
    phone: String(payload.phone || ""),
    service: String(payload.service || ""),
    date,
    time,
    status: "بانتظار التأكيد",
    age: String(payload.age || ""),
    gender: String(payload.gender || ""),
    notes: String(payload.notes || "")
  };

  runtimeBookings[date] = [...(runtimeBookings[date] || []), time];
  runtimeAppointments.unshift(appointment);

  return NextResponse.json({ message: "تم إرسال طلب الحجز بنجاح", appointment });
}

export async function PATCH(request: Request) {
  const payload = await request.json();
  const id = String(payload.id || "");
  const status = String(payload.status || "");
  const appointment = runtimeAppointments.find((item) => item.id === id);

  if (!appointment || !status) {
    return NextResponse.json({ message: "لم يتم العثور على الموعد" }, { status: 404 });
  }

  appointment.status = status;
  return NextResponse.json({ message: "تم تحديث الموعد", appointment });
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const index = runtimeAppointments.findIndex((item) => item.id === id);

  if (index === -1) {
    return NextResponse.json({ message: "لم يتم العثور على الموعد" }, { status: 404 });
  }

  const [removed] = runtimeAppointments.splice(index, 1);
  runtimeBookings[removed.date] = (runtimeBookings[removed.date] || []).filter((slot) => slot !== removed.time);

  return NextResponse.json({ message: "تم حذف الموعد" });
}
