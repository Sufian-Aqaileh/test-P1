export type StoredAppointment = {
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

export const APPOINTMENTS_STORAGE_KEY = "alkarima_appointments";

export function readStoredAppointments(): StoredAppointment[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(APPOINTMENTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeStoredAppointments(appointments: StoredAppointment[]) {
  window.localStorage.setItem(APPOINTMENTS_STORAGE_KEY, JSON.stringify(appointments));
  window.dispatchEvent(new Event("alkarima-appointments-updated"));
}

export function appendStoredAppointment(appointment: StoredAppointment) {
  const current = readStoredAppointments();
  writeStoredAppointments([appointment, ...current]);
}
