"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Crest } from "@/components/shared/Crest";
import { PURPLE } from "@/lib/constants";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Media", href: "/programs" },
  { label: "Contact Us", href: "/contact" },
];

// Scrolled → Deep Regal Purple. "Enroll Now" → Vibrant Blue.
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Mirrors the old navigate() behavior: reset menu + scrolled state on route
  // change. Adjusted during render (React's recommended pattern) rather than
  // in an effect, since it's derived purely from a prop/state change.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
    setScrolled(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrolling the viewport is a side effect on the browser, not React state,
  // so this stays in an effect keyed on the route.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-2xl" : ""
      }`}
      style={{ backgroundColor: scrolled ? PURPLE : "transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-14 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Crest size={42} />
          <div className="text-left">
            <div className="text-white font-bold text-[15px] leading-tight tracking-wide">Shekinah</div>
            <div className="text-white/50 text-[9px] font-semibold tracking-[0.22em] uppercase">Elementary School</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-sm font-semibold pb-0.5 border-b-2 transition-all duration-200 ${
                  active
                    ? "text-white border-[#1A6FDD]"
                    : "text-white/70 border-transparent hover:text-white hover:border-white/30"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* Enroll Now — Vibrant Blue */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-[#1A6FDD] text-white text-sm font-bold px-5 py-2.5 hover:bg-[#155DC4] transition-colors rounded-sm"
          >
            Enroll Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer — Deep Regal Purple */}
      {open && (
        <div
          className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-1"
          style={{ backgroundColor: `${PURPLE}F8` }}
        >
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`text-left text-[15px] font-semibold py-3.5 border-b border-white/8 transition-colors ${
                  active ? "text-white" : "text-white/62 hover:text-white"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#1A6FDD] text-white text-sm font-bold py-4 text-center hover:bg-[#155DC4] transition-colors rounded-sm"
          >
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}
