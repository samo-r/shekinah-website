import Link from "next/link";
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
  Facebook, Instagram, MessageCircle,
} from "lucide-react";
import { Crest } from "@/components/shared/Crest";
import { PURPLE, BLUE } from "@/lib/constants";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/" },
  { label: "Our Programs", href: "/" },
  { label: "Media", href: "/media" },
  { label: "Contact Us", href: "/contact" },
];

// Footer — Deep Regal Purple background
export function Footer() {
  return (
    <footer style={{ backgroundColor: PURPLE }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-14 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1: Brand */}
          <div>
            <div className="mb-5">
              <Crest size={87} />
            </div>
            <p className="font-sans italic text-white/58 text-sm mb-6 leading-relaxed">
              &quot;On this rock, I will build.&quot;
            </p>
            <div className="flex gap-2.5">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: MessageCircle, label: "WhatsApp" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center hover:bg-[#1A6FDD]/40 hover:border-[#1A6FDD]/50 transition-all duration-200"
                >
                  <Icon size={15} className="text-white/62" />
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: Nav */}
          <div>
            <p className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-white/38 mb-5">
              Navigation
            </p>
            <div className="space-y-3">
              {NAV_LINKS.map((l, i) => (
                <Link
                  key={`${l.label}-${i}`}
                  href={l.href}
                  className="block font-sans text-sm text-white/58 hover:text-white transition-colors text-left"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Contact — prioritized on mobile */}
          <div className="order-first md:order-none">
            <p className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-white/38 mb-5">
              Contact
            </p>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: "Mazzi Village, Sissa Ward, Kajjansi" },
                { Icon: Phone, text: "+256 772 861 931\n+256 740 323 123" },
                { Icon: Mail, text: "info@shekinahelementary.co.ug" },
                { Icon: Clock, text: "Mon – Fri, 8:00 AM – 5:00 PM" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon size={13} className="mt-[3px] flex-shrink-0" style={{ color: BLUE }} />
                  <p className="font-sans text-sm text-white/60 whitespace-pre-line leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: CTA — Vibrant Blue button on Purple footer */}
          <div>
            <p className="font-sans text-[9px] font-bold tracking-[0.22em] uppercase text-white/38 mb-5">
              Admissions
            </p>
            <p className="font-sans text-sm text-white/58 leading-relaxed mb-6">
              Ready to enroll your child? Reach out to our team and begin their journey on a firm foundation.
            </p>
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm px-5 py-3 hover:opacity-90 transition-opacity rounded-sm"
              style={{ backgroundColor: BLUE }}
            >
              Contact Us Today <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-14 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-white/32">
            © 2026 Shekinah Elementary School. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/32">Built with Purpose.</p>
        </div>
      </div>
    </footer>
  );
}
