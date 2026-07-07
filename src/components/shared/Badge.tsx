import type { ReactNode } from "react";

// Eyebrow badge – Vibrant Blue per palette
export function Badge({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 mb-4">
      <span className={`block w-6 h-0.5 ${light ? "bg-white/50" : "bg-[#1A6FDD]"}`} />
      <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${light ? "text-white/60" : "text-[#1A6FDD]"}`}>
        {children}
      </span>
    </span>
  );
}
