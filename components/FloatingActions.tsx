import { MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/lib/data";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col gap-3">
      <a className="grid h-13 w-13 place-items-center rounded-full bg-green-500 p-4 text-white shadow-premium" href={`https://wa.me/${clinic.whatsapp}`} aria-label="واتساب">
        <MessageCircle size={24} />
      </a>
      <a className="grid h-13 w-13 place-items-center rounded-full bg-dental-blue p-4 text-white shadow-premium" href={`tel:${clinic.phone}`} aria-label="اتصال">
        <Phone size={24} />
      </a>
    </div>
  );
}
