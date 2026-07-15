"use client";

import { useEffect, useMemo, useState } from "react";
import { CldImage } from "next-cloudinary";
import { BLUE } from "@/lib/constants";
import type { MediaFilter } from "@/lib/data";
import type { GalleryImage } from "@/app/actions/gallery";

const FILTERS: { label: string; value: MediaFilter }[] = [
  { label: "All", value: "all" },
  { label: "School", value: "school" },
  { label: "Students", value: "students" },
  { label: "Events", value: "events" },
  { label: "Coocuricular", value: "cocurricular" },
];

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function MediaGalleryClient({
  initialImages,
}: {
  initialImages: GalleryImage[];
}) {
  const [filter, setFilter] = useState<MediaFilter>("all");
  const [shuffled, setShuffled] = useState(initialImages);

  useEffect(() => {
    setShuffled(shuffle(initialImages));
  }, [initialImages]);

  const shown = useMemo(() => {
    if (filter === "all") return shuffled;
    return initialImages.filter((item) => item.category === filter);
  }, [filter, shuffled, initialImages]);

  return (
    <>
      <div className="bg-white/80 backdrop-blur-md border-b border-border sticky top-[96px] z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-14">
          <div
            className="flex gap-1 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none" }}
          >
            {FILTERS.map((f) => {
              const active = filter === f.value;
              return (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-2 font-sans text-sm font-semibold transition-all duration-200 rounded-sm ${
                    active
                      ? "text-white"
                      : "text-muted-foreground hover:text-[#0D1E4A] hover:bg-muted"
                  }`}
                  style={active ? { backgroundColor: BLUE } : undefined}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-background py-4 sm:py-6 px-2 sm:px-4 lg:px-6">
        {shown.length === 0 ? (
          <div className="py-24 px-4 text-center font-sans text-sm text-muted-foreground">
            No images found. Upload to Cloudinary folders like{" "}
            <code className="text-xs break-all">
              shekinah/school
            </code>
            , then refresh.
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 lg:gap-3">
            {shown.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square overflow-hidden rounded-md sm:rounded-lg bg-muted"
              >
                <CldImage
                  src={item.publicId}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
