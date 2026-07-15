"use client";

import { useState, useTransition } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  MapPin, Phone, Mail, Clock, ArrowRight,
} from "lucide-react";
import { HeroSection } from "@/components/shared/HeroSection";
import { SectionHead } from "@/components/shared/SectionHead";
import { sendContactMessage } from "@/app/actions/contact";
import { IMGS, BLUE, NAVY, SCHOOL_MAPS_URL, SCHOOL_MAP_EMBED_SRC } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [pending, startTransition] = useTransition();

  const change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setFeedback("");

    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendContactMessage(formData);
      if (result.ok) {
        setStatus("success");
        setFeedback("Thank you! We will get back to you shortly.");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setFeedback(result.error);
      }
    });
  };

  const fieldCls =
    "w-full border border-border rounded-xl px-4 py-3 font-sans text-sm text-foreground bg-background placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#1A6FDD]/20 focus:border-[#1A6FDD] transition-colors duration-200";

  return (
    <>
      <HeroSection
        img={IMGS.heroContact}
        title="Contact Us"
        subtitle="Have a question, want to tour our campus, or ready to enroll? Reach out to our team today — we are here to support your family every step of the way."
      />

      {/* Two-column split */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: contact info — Blue icons */}
          <div>
            <SectionHead title="Get in Touch" />
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
          <div className="bg-white rounded-2xl shadow-soft p-8 lg:p-10">
            <h3 className="font-sans font-extrabold text-[#0D1E4A] text-xl tracking-tight mb-6">
              Send Us a Message
            </h3>
            {status !== "idle" && feedback && (
              <div
                className="border rounded-xl p-4 mb-5 font-sans text-sm font-medium"
                style={
                  status === "success"
                    ? { backgroundColor: `${BLUE}10`, borderColor: `${BLUE}22`, color: NAVY }
                    : { backgroundColor: "#FEF2F2", borderColor: "#FECACA", color: "#991B1B" }
                }
                role="status"
              >
                {feedback}
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
                    disabled={pending}
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
                  disabled={pending}
                />
              </div>
              {/* Send Message — Vibrant Blue */}
              <button
                type="submit"
                disabled={pending}
                className="mt-1 w-full inline-flex items-center justify-center gap-2 text-white font-bold text-sm py-4 hover:opacity-90 transition-opacity rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: BLUE }}
              >
                {pending ? "Sending…" : "Send Message Today"}
                {!pending && <ArrowRight size={16} />}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map — embed is visual only; click opens Google Maps in a new tab */}
      <section style={{ height: 440 }} className="relative overflow-hidden bg-muted">
        <iframe
          title="Shekinah Elementary School — Kajjansi, Uganda"
          src={SCHOOL_MAP_EMBED_SRC}
          className="absolute inset-0 w-full h-full border-0 pointer-events-none"
          loading="lazy"
          tabIndex={-1}
          aria-hidden
        />
        <a
          href={SCHOOL_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 group"
          aria-label="Open Shekinah Elementary School location in Google Maps"
        >
          <span className="absolute bottom-6 left-6 bg-white rounded-xl shadow-soft px-4 py-3 flex items-center gap-3 transition-shadow group-hover:shadow-md">
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: BLUE }}
            >
              <MapPin size={15} className="text-white" />
            </span>
            <span>
              <span className="block font-sans text-xs font-bold text-[#0D1E4A] leading-tight">
                Shekinah Elementary School
              </span>
              <span className="block font-sans text-[11px] text-muted-foreground">
                Mazzi Village, Kajjansi · Open in Google Maps
              </span>
            </span>
          </span>
        </a>
      </section>
    </>
  );
}
