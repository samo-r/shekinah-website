"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Crest } from "@/components/shared/Crest";
import { NAVY, PLUM } from "@/lib/constants";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

// Top: transparent + white text. Scroll: frosted white + navy text.
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setScrolled(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Preserve hash targets (e.g. /about#directors-message); only reset for plain routes
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Defer until layout paints so scroll-mt / sticky header offset apply
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  const linkColor = scrolled ? NAVY : "#FFFFFF";
  const underlineActive = scrolled ? NAVY : "#FFFFFF";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-md border-b border-white/50" : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.82)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[72px]">
        <Link
          href="/"
          className="flex items-center flex-shrink-0"
          aria-label="Shekinah Elementary School — Home"
        >
          <Crest size={87} />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-semibold tracking-wide pb-0.5 border-b-2 transition-colors duration-300 ${
                  active ? "" : "border-transparent hover:border-current/50"
                }`}
                style={{
                  color: linkColor,
                  borderColor: active ? underlineActive : undefined,
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 text-white text-sm font-bold px-5 py-2.5 rounded-sm transition-all duration-200 hover:opacity-90"
            style={{ backgroundColor: PLUM }}
          >
            Enroll Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300 hover:bg-black/5"
            style={{ color: linkColor }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-5 flex flex-col gap-1 backdrop-blur-md transition-colors duration-300"
          style={{
            backgroundColor: scrolled ? "rgba(255, 255, 255, 0.92)" : "rgba(0, 0, 0, 0.45)",
            borderColor: scrolled ? "rgba(44, 62, 107, 0.12)" : "rgba(255,255,255,0.2)",
          }}
        >
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`text-left text-[15px] font-semibold py-3.5 border-b transition-colors duration-300 ${
                  active ? "opacity-100" : "opacity-85 hover:opacity-100"
                }`}
                style={{
                  color: linkColor,
                  borderColor: scrolled ? "rgba(44, 62, 107, 0.12)" : "rgba(255,255,255,0.15)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-white text-sm font-bold py-4 text-center rounded-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: PLUM }}
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
