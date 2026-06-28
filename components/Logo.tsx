import { clinic } from "@/lib/data";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <svg className={compact ? "h-11 w-11" : "h-16 w-16"} viewBox="0 0 120 120" role="img" aria-label={clinic.name}>
        <defs>
          <linearGradient id="toothGradient" x1="15" x2="105" y1="12" y2="104">
            <stop stopColor="#24C6F0" />
            <stop offset="1" stopColor="#0E5E8A" />
          </linearGradient>
        </defs>
        <path d="M33 21c12-9 23 2 27 2s16-11 28-2c17 12 7 45 2 58-4 12-7 23-17 22-8-1-8-15-13-24-4 9-5 23-13 24-10 1-13-10-17-22-5-13-15-46 3-58Z" fill="url(#toothGradient)" />
        <path d="M18 86c16 1 30 7 42 19 12-12 26-18 42-19-5 11-20 21-42 21S23 97 18 86Z" fill="#8ED8F2" opacity=".9" />
        <path d="M79 19h22v18c0 15-9 25-22 30-13-5-22-15-22-30V19h22Z" fill="#0E5E8A" />
        <path d="M78 27h7v10h10v7H85v10h-7V44H68v-7h10V27Z" fill="#fff" />
        <path d="M38 51c9-12 26-18 45-16" fill="none" stroke="#fff" strokeOpacity=".65" strokeWidth="7" strokeLinecap="round" />
      </svg>
      <div>
        <p className="text-xl font-black text-dental-ink">{clinic.name}</p>
        {!compact && <p className="text-sm font-semibold text-dental-deep">{clinic.tagline}</p>}
      </div>
    </div>
  );
}
