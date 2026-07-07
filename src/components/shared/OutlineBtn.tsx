import type { ReactNode } from "react";
import Link from "next/link";

// Ghost outline button. Pass `href` to render as a Next.js Link, or
// `onClick` to render as a plain button.
export function OutlineBtn({ href, onClick, dark = false, children }: {
  href?: string; onClick?: () => void; dark?: boolean; children: ReactNode;
}) {
  const classes = `inline-flex items-center justify-center gap-2 border-2 font-semibold text-sm px-7 py-3.5 transition-colors duration-200 rounded-sm ${
    dark
      ? "border-white/50 text-white hover:bg-white/10"
      : "border-[#0D1E4A]/25 text-[#0D1E4A] hover:border-[#1A6FDD] hover:text-[#1A6FDD]"
  }`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
