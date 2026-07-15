import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHead } from "@/components/shared/SectionHead";
import { HeroSection } from "@/components/shared/HeroSection";
import { AdminCard } from "@/components/shared/AdminCard";
import { StaffPhoto } from "@/components/shared/StaffPhoto";
import { IMGS, PURPLE, BLUE } from "@/lib/constants";
import { VALUES } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        img={IMGS.heroAbout}
        title="Our Identity & Mission"
        subtitle="Nurturing diverse young minds and building firm foundational baselines through Christ-centered education, modern innovation, and godly character."
      />

      {/* Founding Story */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-soft bg-muted" style={{ aspectRatio: "4/3" }}>
            <img src={IMGS.founding} alt="Shekinah School campus" className="w-full h-full object-cover" />
          </div>
          <div>
            <SectionHead title="The Story Behind Our Foundation" />
            <p className="font-sans text-muted-foreground text-base leading-[1.85] mt-6">
              Shekinah was founded to answer a critical need: the need for a balanced, Christian-based education that focuses equally on intellectual growth and godly character. From our inception, we set out to build an inclusive environment where a diverse community could unite under Christ to achieve educational excellence. Our focus has never been just on numbers or years, but on the depth of our impact. Every milestone we reach on our campus is designed to reinforce our foundational baseline, giving young minds the wings to fly and the moral grounding to lead with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Foundation Pillars 2×2 — motto card in Purple */}
      <section className="bg-muted py-24 px-6 lg:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <SectionHead title="Our Foundation" center />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { tag: "Mission", body: "Empowering a diverse community, united by Christ to achieve excellence in education.", dark: false },
              { tag: "Vision", body: "To be a spiritually vibrant education community that reflects God's kingdom.", dark: false },
              { tag: "Philosophy", body: "Christian-based education that focuses on building a firm educational and spiritual foundation.", dark: false },
              { tag: "School Motto", body: "\"On this rock, I will build.\"", dark: true },
            ].map((p) => (
              <div
                key={p.tag}
                className="rounded-2xl p-8 shadow-soft"
                style={p.dark ? { backgroundColor: PURPLE } : { backgroundColor: "white" }}
              >
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase block mb-3 text-[#1A6FDD]">
                  {p.tag}
                </span>
                <p className={`font-sans leading-relaxed ${
                  p.dark
                    ? "text-white font-extrabold text-2xl italic tracking-tight"
                    : "text-[#0D1E4A] font-semibold text-lg"
                }`}>
                  {p.body}
                </p>
                {p.dark && (
                  <p className="font-sans text-white/40 text-xs mt-3 font-medium tracking-wide">— MATTHEW 16:18</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Director's Statement */}
      <section id="directors-message" className="bg-background py-24 px-6 lg:px-14 scroll-mt-[96px]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <div className="md:col-span-3">
            <SectionHead title="Welcome to Shekinah Elementary School" />
            <div className="mt-6 space-y-4 font-sans text-muted-foreground text-base leading-[1.85]">
              <p>It is our great pleasure to welcome you to our school website. At Shekinah Elementary School, we are committed to providing a holistic education that nurtures academic excellence, moral integrity, spiritual growth, and personal development. Our goal is to equip every learner with the knowledge, skills, values, and confidence needed to succeed in an ever-changing world.</p>
              <p>We believe that every child is uniquely gifted and deserves an environment where they can discover their potential and develop their talents. Through a dedicated team of teachers and staff, a supportive learning environment, and a strong partnership with parents and guardians, we strive to ensure that each learner receives quality education and individual attention.</p>
              <p>Our commitment extends beyond classroom instruction. We encourage learners to cultivate discipline, leadership, creativity, teamwork, and a sense of responsibility toward their communities. As a faith-based institution, we also emphasize strong moral values that help shape responsible and God-fearing citizens.</p>
              <p>I invite you to explore our website and learn more about our academic programs, co-curricular activities, and the opportunities available to our learners. Whether you are a prospective parent, current member of our school community, or a valued partner, we appreciate your interest in Shekinah Elementary School.</p>
              <p>Together, let us continue building a strong foundation for the future of our children.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-sans font-extrabold text-[#1A6FDD] text-base tracking-wider uppercase">
                On This Rock I Build
              </p>
              <p className="font-sans text-muted-foreground text-sm mt-1">— Matthew 16:18</p>
            </div>
          </div>
          <div className="md:col-span-2 md:sticky md:top-24">
            <div className="rounded-2xl overflow-hidden shadow-soft bg-muted" style={{ aspectRatio: "3/4" }}>
              <img src={IMGS.directorSpeech} alt="Director Nsubuga Benny Frank" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 text-center">
              <p className="font-sans font-bold text-[#0D1E4A] text-base">Nsubuga Benny Frank</p>
              <p className="font-sans text-muted-foreground text-sm mt-0.5">Director & Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Team — 4 cards in one row on large screens */}
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

      {/* Collective staff / faculty photo */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionHead title="Our Staff" center />
          </div>
          <StaffPhoto />
        </div>
      </section>

      {/* Values in Action — narrow title card + stretched description */}
      <section className="bg-background py-24 px-6 lg:px-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionHead title="Our Values in Action" center />
          </div>
          <div className="space-y-8">
            {VALUES.map((v) => (
              <div key={v.label} className="grid md:grid-cols-3 gap-6 items-stretch">
                {/* Left anchor — half the previous width (1 of 3 cols) */}
                <div
                  className="flex flex-row items-center justify-start gap-4 rounded-2xl pl-6 pr-5 py-8 md:col-span-1"
                  style={{ backgroundColor: v.dark ? PURPLE : BLUE }}
                >
                  <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 bg-transparent">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={v.iconSrc}
                      alt=""
                      aria-hidden
                      className="w-11 h-11 object-contain brightness-0 invert"
                    />
                  </div>
                  <h3 className="font-sans font-extrabold text-white text-2xl md:text-3xl tracking-tight text-left">
                    {v.label}
                  </h3>
                </div>
                {/* Right description — remaining width (2 of 3 cols) */}
                <div className="flex items-center bg-white rounded-2xl px-8 py-8 shadow-soft md:col-span-2">
                  <p className="font-sans text-muted-foreground text-base leading-[1.85]">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — Vibrant Blue strip */}
      <section className="py-14 px-6 text-center" style={{ backgroundColor: BLUE }}>
        <p className="font-sans font-extrabold text-white text-2xl mb-5 tracking-tight">
          Ready to Join Our Community?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-white font-bold text-sm px-8 py-4 hover:bg-background transition-colors rounded-sm"
          style={{ color: BLUE }}
        >
          Contact Us Today <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
