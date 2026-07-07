import type { ReactNode } from "react";
import Link from "next/link";

const classes =
  "inline-flex items-center justify-center gap-2 bg-[#1A6FDD] text-white font-bold text-sm px-7 py-3.5 hover:bg-[#155DC4] transition-colors duration-200 rounded-sm";

// Primary CTA — Vibrant Blue. Pass `href` to render as a Next.js Link, or
// `onClick`/`type` to render as a plain button (e.g. form submit).
export function PrimaryBtn({ href, onClick, children, type = "button" }: {
  href?: string; onClick?: () => void; children: ReactNode; type?: "button" | "submit";
}) {
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
