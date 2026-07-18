import type { ReactNode } from "react";
import { PURPLE } from "@/lib/constants";

// Hero — shared across all four pages
export function HeroSection({ img, tag, title, subtitle, children, centered = false }: {
  img: string; tag?: string; title: string; subtitle?: string; children?: ReactNode; centered?: boolean;
}) {
  return (
    <section
      className={`relative min-h-[90vh] flex ${centered ? "items-center justify-center" : "items-center"}`}
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: PURPLE,
      }}
    >
      <div
        className={`absolute inset-0 ${
          centered
            ? "bg-black/40"
            : "bg-gradient-to-br from-black/72 via-black/55 to-black/65"
        }`}
      />
      <div
        className={`relative z-10 w-full px-6 lg:px-14 pt-36 pb-24 ${
          centered ? "text-center max-w-4xl mx-auto" : "max-w-7xl mx-auto"
        }`}
      >
        {tag && (
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="block w-5 h-px bg-[#1A6FDD]" />
            <span className="text-white/65 text-[10px] font-bold tracking-[0.22em] uppercase">{tag}</span>
          </span>
        )}
        <h1
          className={`font-sans font-extrabold text-white leading-[1.1] tracking-tight ${
            centered
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2"
              : "text-4xl md:text-5xl lg:text-[3.5rem] max-w-3xl mb-6"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-white/76 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
