import type { ReactNode } from "react";

export function SectionHead({ title, center = false, light = false }: {
  title: ReactNode; center?: boolean; light?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className={`font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-tight ${
        light ? "text-white" : "text-[#0D1E4A]"
      }`}>
        {title}
      </h2>
    </div>
  );
}
