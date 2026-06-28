import { SectionTitle } from "@/components/SectionTitle";
import { gallery } from "@/lib/data";

export const metadata = {
  title: "معرض العيادة",
  description: "صور العيادة، الأجهزة، غرف العلاج، ومنطقة الانتظار."
};

export default function GalleryPage() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8">
      <SectionTitle eyebrow="المعرض" title="نظرة داخل العيادة" text="معرض responsive جاهز لدعم رفع الصور من لوحة الإدارة مع lightbox لاحقا." />
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map(([title, image]) => (
          <figure key={title} className="group overflow-hidden rounded-[2rem] bg-dental-mist shadow-soft">
            <img src={image} alt={title} className="h-80 w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="p-5 text-lg font-black">{title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
