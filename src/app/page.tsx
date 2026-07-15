"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, ChevronLeft, ChevronRight,
  Heart, Star, Shield,
} from "lucide-react";
import { SectionHead } from "@/components/shared/SectionHead";
import { PrimaryBtn } from "@/components/shared/PrimaryBtn";
import { OutlineBtn } from "@/components/shared/OutlineBtn";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";
import { AdminCard } from "@/components/shared/AdminCard";
import { IMGS, PURPLE, HERO_SLIDES } from "@/lib/constants";
import { PROGRAMS } from "@/lib/data";

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const maxSlide = PROGRAMS.length - 4;

  return (
    <>
      {/* ① Hero slideshow */}
      <HeroSlideshow
        images={HERO_SLIDES}
        title="Nurturing Young God-Fearing Minds, Inspiring Excellence."
        subtitle="Welcome to Shekinah Elementary School, where every child is valued, inspired, and empowered to reach their full potential in a safe, loving, and innovative environment."
      >
        <div className="flex flex-wrap gap-3">
          <PrimaryBtn href="/contact">
            Enroll Now <ArrowRight size={16} />
          </PrimaryBtn>
          <OutlineBtn href="/about" dark>
            Learn More
          </OutlineBtn>
        </div>
      </HeroSlideshow>

      {/* ② About Summary */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-sans font-extrabold text-[#0D1E4A] text-3xl md:text-4xl leading-tight tracking-tight mb-6">
            Built on a Firm Foundation
          </h2>
          <p className="font-sans text-muted-foreground text-lg leading-[1.82]">
            At Shekinah Elementary School, we believe that a child&apos;s education is only as strong as the foundation it stands upon. Guided by our faith in Christ, we provide a nurturing, spiritually vibrant community where diverse young minds come together to achieve academic excellence. We are dedicated to cultivating both intellect and character, ensuring our students stand secure on a firm educational and spiritual footing.
          </p>
        </div>
      </section>

      {/* ③ Why Us — Blue icons, numbered cards */}
      <section className="bg-muted py-24 px-6 lg:px-14" id="why-us">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-xl">
            <SectionHead title="Why Choose Shekinah?" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Heart, n: "01", title: "A Christ-Centered Foundation",
                body: "True to our motto, 'On this rock, I will build,' we anchor our daily learning in timeless Christian values, cultivating a spiritually vibrant environment where students grow in grace, integrity, and faith." },
              { Icon: Star, n: "02", title: "Academic Excellence",
                body: "We maintain high instructional standards with a child-centered curriculum designed to challenge young minds, inspire critical thinking, and foster a lifelong love for discovery." },
              { Icon: Shield, n: "03", title: "Future-Ready Innovation",
                body: "We foster practical, hands-on growth through foundational computer lab training alongside vibrant music, arts, and co-curricular programs that uncover each child's God-given talents." },
            ].map((c) => (
              <div key={c.n} className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  {/* Icon — Vibrant Blue */}
                  <div className="w-11 h-11 rounded-xl bg-[#1A6FDD] flex items-center justify-center group-hover:bg-[#78008B] transition-colors duration-300">
                    <c.Icon size={20} className="text-white" />
                  </div>
                  <span className="font-bold text-[#0D1E4A]/10 text-4xl leading-none select-none">{c.n}</span>
                </div>
                <h3 className="font-sans font-bold text-[#0D1E4A] text-[17px] leading-snug mb-3">{c.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ Director's Welcome teaser */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-14 items-center">
          <div className="md:col-span-3">
            <SectionHead title="Welcome to Shekinah Elementary School" />
            <p className="font-sans text-muted-foreground text-base leading-[1.85] mt-6 mb-4">
              It is our great pleasure to welcome you to our school website. At Shekinah Elementary School, we are committed to providing a holistic education that nurtures academic excellence, moral integrity, spiritual growth, and personal development. Our goal is to equip every learner with the knowledge, skills, values, and confidence needed to succeed in an ever-changing world.
            </p>
            <p className="font-sans text-muted-foreground text-base leading-[1.85] mb-8">
              We believe that every child is uniquely gifted and deserves an environment where they can discover their potential and develop their talents.
            </p>
            {/* Text link — Vibrant Blue */}
            <Link
              href="/about#directors-message"
              className="inline-flex items-center gap-2 text-[#1A6FDD] font-bold text-sm hover:gap-3 transition-all duration-200"
            >
              Read Full Message <ArrowRight size={15} />
            </Link>
          </div>
          <div className="md:col-span-2 relative order-first md:order-last">
            <div className="rounded-2xl overflow-hidden shadow-soft bg-muted" style={{ aspectRatio: "3/4" }}>
              <img src={IMGS.directorSpeech} alt="School Director" className="w-full h-full object-cover" />
            </div>
            {/* Quote chip — Deep Regal Purple */}
            <div
              className="absolute -bottom-5 -left-4 text-white px-5 py-3.5 rounded-xl shadow-xl max-w-[210px]"
              style={{ backgroundColor: PURPLE }}
            >
              <p className="text-sm font-semibold italic leading-snug">&quot;On this rock, I will build.&quot;</p>
              <p className="text-[10px] opacity-55 mt-1.5 font-medium tracking-wide">MATTHEW 16:18</p>
            </div>
          </div>
        </div>
      </section>

      {/* ⑤ Administrative Team */}
      <section className="bg-muted py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <SectionHead title="Our Administrative Team" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 justify-items-center">
            <AdminCard img={IMGS.admin1} name="Nsubuga Benny Frank" role="Director & Founder" />
            <AdminCard img={IMGS.admin2} name="Nsubuga Freda Namakula" role="Director" />
            <AdminCard img={IMGS.admin3} name="Namutebi Rebecca" role="Headteacher" />
            <AdminCard img={IMGS.admin4} name="Mukisa Samuel" role="Operations and Systems Admin" />
          </div>
        </div>
      </section>

      {/* ⑥ Core Values — Deep Regal Purple background */}
      <section className="py-14 md:py-16 px-6 lg:px-14" style={{ backgroundColor: PURPLE }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-sans font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Faith", src: "/cross.svg" },
              { label: "Excellence", src: "/award-ribbon-star-1.svg" },
              { label: "Integrity", src: "/shield.svg" },
              { label: "Unity", src: "/multiple-users-1.svg" },
            ].map(({ label, src }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center py-10 px-5 rounded-2xl border border-white/10 hover:border-[#1BB2E9]/60 hover:bg-white/5 transition-all duration-300 group cursor-default"
              >
                <div className="w-20 h-20 flex items-center justify-center mb-5 bg-transparent">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt=""
                    aria-hidden
                    className="w-11 h-11 object-contain brightness-0 invert"
                  />
                </div>
                <p className="font-sans font-extrabold text-white text-xl tracking-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑦ School Services */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <h2 className="font-sans font-extrabold text-[#2C3E6B] text-3xl md:text-4xl leading-tight tracking-tight">
              School Services
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-[#7D226A]" aria-hidden />
          </div>

          {/* Desktop 4-up carousel */}
          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  width: `${(PROGRAMS.length / 4) * 100}%`,
                  transform: `translateX(-${slide * (100 / PROGRAMS.length)}%)`,
                }}
              >
                {PROGRAMS.map((p) => (
                  <div key={p.id} style={{ width: `${100 / PROGRAMS.length}%` }} className="flex-shrink-0 px-2.5">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-shadow duration-300 h-full flex flex-col">
                      <div className="h-44 bg-muted overflow-hidden flex-shrink-0">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5 flex-1 flex flex-col">
                        {/* Blue mini-icon */}
                        <div className="w-8 h-8 rounded-lg bg-[#1A6FDD]/10 flex items-center justify-center mb-3">
                          <p.Icon size={15} className="text-[#1A6FDD]" />
                        </div>
                        <h3 className="font-sans font-bold text-[#0D1E4A] text-[14px] leading-snug mb-2">{p.title}</h3>
                        <p className="font-sans text-muted-foreground text-xs leading-relaxed flex-1">{p.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel arrows */}
            <button
              onClick={() => setSlide(Math.max(0, slide - 1))}
              disabled={slide === 0}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-[#0D1E4A] hover:bg-[#78008B] hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setSlide(Math.min(maxSlide, slide + 1))}
              disabled={slide === maxSlide}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-[#0D1E4A] hover:bg-[#78008B] hover:text-white transition-colors disabled:opacity-20 disabled:pointer-events-none"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots — active is Blue */}
          <div className="hidden md:flex justify-center gap-2 mt-7">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === slide
                    ? "w-6 h-2 bg-[#1A6FDD]"
                    : "w-2 h-2 bg-[#0D1E4A]/18 hover:bg-[#0D1E4A]/35"
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe */}
          <div
            className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {PROGRAMS.map((p) => (
              <div key={p.id} className="min-w-[78vw] snap-start flex-shrink-0">
                <div className="bg-white rounded-2xl overflow-hidden shadow-soft">
                  <div className="h-40 bg-muted overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-sans font-bold text-[#0D1E4A] text-sm leading-snug mb-2">{p.title}</h3>
                    <p className="font-sans text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑧ CTA Banner — Deep Regal Purple */}
      <section className="relative py-28 px-6 lg:px-14 text-center overflow-hidden" style={{ backgroundColor: PURPLE }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[700px] h-[700px] rounded-full border border-white/5" />
          <div className="w-[450px] h-[450px] rounded-full border border-white/5 absolute" />
          <div className="w-[220px] h-[220px] rounded-full border border-[#1A6FDD]/15 absolute" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-4xl leading-tight tracking-tight mb-5">
            Build Their Future on a Firm Foundation.
          </h2>
          <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Join a diverse, spiritually vibrant community united by Christ to achieve excellence in education. Admissions are now open for the current intake.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PrimaryBtn href="/contact">
              Contact Us Today <ArrowRight size={16} />
            </PrimaryBtn>
            <OutlineBtn href="/contact" dark>
              Enroll Now
            </OutlineBtn>
          </div>
        </div>
      </section>
    </>
  );
}
