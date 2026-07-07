"use client";

import { useState } from "react";
import { HeroSection } from "@/components/shared/HeroSection";
import { IMGS, BLUE } from "@/lib/constants";
import { GALLERY, type GalleryFilter } from "@/lib/data";

const FILTERS: { label: string; value: GalleryFilter }[] = [
  { label: "All", value: "all" },
  { label: "Facilities", value: "facilities" },
  { label: "Student Life", value: "student-life" },
  { label: "Events", value: "events" },
];

export default function ProgramsPage() {
  const [filter, setFilter] = useState<GalleryFilter>("all");

  const shown = filter === "all"
    ? GALLERY
    : GALLERY.filter((g) => g.tags.includes(filter));

  return (
    <>
      <HeroSection
        img={IMGS.heroPrograms}
        tag="Our Programs & Services"
        title="Our Programs & Services"
        subtitle="Providing a holistic environment where young minds are nurtured academically, spiritually, and practically to build their future on a firm foundation."
      />

      {/* Filter bar — active state is Vibrant Blue */}
      <div className="bg-white border-b border-border sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-14">
          <div className="flex gap-1 overflow-x-auto py-3.5" style={{ scrollbarWidth: "none" }}>
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`flex-shrink-0 px-6 py-2 font-sans text-sm font-semibold transition-all duration-200 rounded-sm ${
                  filter === f.value
                    ? "text-white"
                    : "text-muted-foreground hover:text-[#0D1E4A] hover:bg-[#EDE5CC]"
                }`}
                style={filter === f.value ? { backgroundColor: BLUE } : undefined}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="bg-background py-14 px-6 lg:px-14">
        <div className="max-w-7xl mx-auto">
          {shown.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shown.map((g) => (
                <div key={g.id} className="overflow-hidden rounded-2xl bg-muted group" style={{ aspectRatio: "4/3" }}>
                  <img
                    src={g.img}
                    alt={g.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center font-sans text-muted-foreground">
              No images in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
