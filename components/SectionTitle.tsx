export function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-black text-dental-blue">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-normal text-dental-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-600">{text}</p>}
    </div>
  );
}
