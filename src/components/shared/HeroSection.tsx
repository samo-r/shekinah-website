import type { ReactNode } from "react";
import { PURPLE } from "@/lib/constants";

// Hero — shared across all four pages
export function HeroSection({ img, tag, title, subtitle, children }: {
  img: string; tag?: string; title: string; subtitle: string; children?: ReactNode;
}) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: PURPLE,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/72 via-black/55 to-black/65" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-14 pt-36 pb-24">
        {tag && (
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="block w-5 h-px bg-[#1A6FDD]" />
            <span className="text-white/65 text-[10px] font-bold tracking-[0.22em] uppercase">{tag}</span>
          </span>
        )}
        <h1 className="font-sans font-extrabold text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-tight max-w-3xl mb-6">
          {title}
        </h1>
        <p className="font-sans text-white/76 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
          {subtitle}
        </p>
        {children}
      </div>
    </section>
  );
}
