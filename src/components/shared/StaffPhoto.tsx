"use client";

import { CldImage } from "next-cloudinary";
import { STAFF_PHOTO_PUBLIC_ID, CLD_SAFE_SHARPEN } from "@/lib/constants";

/** Client boundary — CldImage uses React hooks and cannot render in a Server Component. */
export function StaffPhoto() {
  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-soft bg-muted">
      <CldImage
        src={STAFF_PHOTO_PUBLIC_ID}
        alt="Shekinah Elementary School faculty and staff"
        fill
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="object-cover object-center"
        crop="fill"
        gravity="auto"
        rawTransformations={CLD_SAFE_SHARPEN}
      />
    </div>
  );
}
