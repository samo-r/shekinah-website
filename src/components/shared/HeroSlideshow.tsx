"use client";

import { useEffect, useState, type ReactNode } from "react";
import { CldImage } from "next-cloudinary";
import { PURPLE } from "@/lib/constants";

interface HeroSlideshowProps {
  images: readonly string[];
  tag?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  intervalTime?: number;
  /** Centered title overlay with a flat dark tint — used on the Media gallery page */
  centered?: boolean;
}

export function HeroSlideshow({
  images,
  tag,
  title,
  subtitle,
  children,
  intervalTime = 6000,
  centered = false,
}: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return (
    <section
      className={`relative min-h-[90vh] flex overflow-hidden ${
        centered ? "items-center justify-center" : "items-center"
      }`}
      style={{ backgroundColor: PURPLE }}
    >
      {/* Slides */}
      {images.map((publicId, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={publicId}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <CldImage
              src={publicId}
              alt={`Hero slide ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        );
      })}

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 z-[1] ${
          centered
            ? "bg-black/40"
            : "bg-gradient-to-br from-black/72 via-black/55 to-black/65"
        }`}
      />

      {/* Content */}
      <div
        className={`relative z-10 w-full px-6 lg:px-14 pt-36 pb-24 ${
          centered
            ? "text-center max-w-4xl mx-auto"
            : "max-w-7xl mx-auto"
        }`}
      >
        {tag && !centered && (
          <span className="inline-flex items-center gap-2 mb-6">
            <span className="block w-5 h-px bg-[#1A6FDD]" />
            <span className="text-white/65 text-[10px] font-bold tracking-[0.22em] uppercase">
              {tag}
            </span>
          </span>
        )}
        <h1
          className={`font-sans font-extrabold text-white leading-[1.1] tracking-tight ${
            centered
              ? "text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2"
              : "text-4xl md:text-5xl lg:text-[3.5rem] max-w-3xl mb-6"
          }`}
        >
          {title}
        </h1>
        {subtitle && !centered && (
          <p className="font-sans text-white/76 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            {subtitle}
          </p>
        )}
        {children}
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 h-2 bg-[#1A6FDD]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
