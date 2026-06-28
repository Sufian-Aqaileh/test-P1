"use client";

import { useState } from "react";

export function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [value, setValue] = useState(50);
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100">
      <img src={after} alt={`${title} بعد العلاج`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${value}%` }}>
        <img src={before} alt={`${title} قبل العلاج`} className="h-full w-full max-w-none object-cover" style={{ width: `${10000 / value}%` }} />
      </div>
      <div className="absolute inset-y-0 z-10 w-1 bg-white shadow-xl" style={{ right: `${100 - value}%` }} />
      <span className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 text-xs font-black text-white">قبل</span>
      <span className="absolute left-4 top-4 rounded-full bg-dental-blue px-3 py-1 text-xs font-black text-white">بعد</span>
      <input aria-label="مقارنة قبل وبعد" type="range" min="15" max="85" value={value} onChange={(event) => setValue(Number(event.target.value))} className="absolute inset-x-6 bottom-5 z-20 accent-dental-blue" />
    </div>
  );
}
