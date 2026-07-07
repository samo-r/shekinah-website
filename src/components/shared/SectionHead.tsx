import type { ReactNode } from "react";
import { Badge } from "./Badge";

export function SectionHead({ eyebrow, title, center = false, light = false }: {
  eyebrow: string; title: ReactNode; center?: boolean; light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <Badge light={light}>{eyebrow}</Badge>
      <h2 className={`font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-tight ${
        light ? "text-white" : "text-[#0D1E4A]"
      }`}>
        {title}
      </h2>
    </div>
  );
}
