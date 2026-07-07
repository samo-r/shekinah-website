"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
} from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHead } from "@/components/shared/SectionHead";
import { IMGS, BLUE, NAVY } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 6000);
  };

  const fieldCls =
    "w-full border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground bg-background placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#1A6FDD]/20 focus:border-[#1A6FDD] transition-colors duration-200";

  return (
    <>
      <HeroSection
        img={IMGS.heroContact}
        tag="Get In Touch"
        title="Contact Us"
        subtitle="Have a question, want to tour our campus, or ready to enroll? Reach out to our team today — we are here to support your family every step of the way."
      />

      {/* Two-column split */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: contact info — Blue icons */}
          <div>
            <SectionHead eyebrow="Reach Us" title="Get in Touch" />
            <div className="mt-10 space-y-7">
              {[
                { Icon: MapPin, label: "Physical Address", value: "Mazzi Village, Sissa Ward, Kajjansi" },
                { Icon: Phone, label: "Phone Lines", value: "+256 772 861 931  /  +256 740 323 123" },
                { Icon: Mail, label: "Email Address", value: "info@shekinahelementary.co.ug" },
                { Icon: Clock, label: "Office Hours", value: "Monday – Friday, 8:00 AM – 5:00 PM" },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: BLUE }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-[#0D1E4A] font-semibold text-base leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form — Blue submit button */}
          <div className="bg-white rounded-2xl shadow-md p-8 lg:p-10">
            <h3 className="font-sans font-extrabold text-[#0D1E4A] text-xl tracking-tight mb-6">
              Send Us a Message
            </h3>
            {sent && (
              <div
                className="border rounded-xl p-4 mb-5 font-sans text-sm font-medium"
                style={{ backgroundColor: `${BLUE}10`, borderColor: `${BLUE}22`, color: NAVY }}
              >
                Thank you! We will get back to you shortly.
              </div>
            )}
            <form onSubmit={submit} className="space-y-4">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                { name: "phone", label: "Phone Number", type: "text", placeholder: "+256 ..." },
              ].map((inp) => (
                <div key={inp.name}>
                  <label className="block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    {inp.label}
                  </label>
                  <input
                    name={inp.name}
                    type={inp.type}
                    value={form[inp.name as keyof typeof form]}
                    onChange={change}
                    required={inp.name !== "phone"}
                    placeholder={inp.placeholder}
                    className={fieldCls}
                  />
                </div>
              ))}
              <div>
                <label className="block font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Message / Inquiry
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={change}
                  required
                  rows={4}
                  placeholder="How can we help you?"
                  className={`${fieldCls} resize-none`}
                />
              </div>
              {/* Send Message — Vibrant Blue */}
              <button
                type="submit"
                className="mt-1 w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-4 hover:opacity-90 transition-opacity rounded-sm"
                style={{ backgroundColor: BLUE }}
              >
                Send Message Today <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: 440 }} className="relative overflow-hidden bg-muted">
        <iframe
          title="Shekinah Elementary School — Kajjansi, Uganda"
          src="https://www.openstreetmap.org/export/embed.html?bbox=32.505%2C0.285%2C32.575%2C0.345&layer=mapnik"
          className="w-full h-full border-0"
          loading="lazy"
        />
        <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 pointer-events-none">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: BLUE }}>
            <MapPin size={15} className="text-white" />
          </div>
          <div>
            <p className="font-sans text-xs font-bold text-[#0D1E4A] leading-tight">Shekinah Elementary School</p>
            <p className="font-sans text-[11px] text-muted-foreground">Mazzi Village, Kajjansi, Uganda</p>
          </div>
        </div>
      </section>
    </>
  );
}
