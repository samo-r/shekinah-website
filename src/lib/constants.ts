// Brand palette — White Navbar design system
export const NAVY = "#2C3E6B"; // Primary Brand Dark — headings, scrolled nav
export const PLUM = "#7D226A"; // Secondary Brand — CTAs
export const SKY = "#1BB2E9"; // Accent Brand Sky Blue
export const WHITE = "#FFFFFF";

/** Aliases used across existing sections */
export const PURPLE = PLUM;
export const BLUE = SKY;

const CLOUD_NAME = "tq1tf1wo";

/**
 * Optional helper — build a Cloudinary delivery URL from a public ID.
 * Example: cldUrl("_MG_5392_ml8odr", 1440, 960)
 */
export function cldUrl(
  publicId: string,
  width: number,
  height: number,
  extras = "",
) {
  const base = `w_${width},h_${height},c_fill,q_auto,f_auto`;
  const transforms = extras ? `${base},${extras}` : base;
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}

/**
 * Paste your full Cloudinary delivery URL into each value below
 * (or use cldUrl("your-public-id", w, h) instead).
 *
 * Recommended URL shape:
 * https://res.cloudinary.com/tq1tf1wo/image/upload/w_W,h_H,c_fill,q_auto,f_auto/PUBLIC_ID
 *
 * Size guide (W×H):
 * - hero*:        1440×960
 * - founding:     900×680
 * - program cards / gallery thumbs: 600×440
 * - admin portraits: 420×520
 *
 * Note: heroHome is unused on the homepage (HeroSlideshow uses HERO_SLIDES).
 * Keep it only if you still need a single static home hero elsewhere.
 */
export const IMGS = {
  // Heroes
  heroHome: "", //unused by slideshow
  heroAbout: cldUrl("schoolBlock_vc717g", 1440, 960), // About page hero
  heroPrograms: cldUrl("_MG_3764_iog7jz", 1440, 960), // Programs/Media page hero
  heroContact: cldUrl("schoolsignage_rgrlyk", 1440, 960), // Contact page hero

  // About / campus
  founding: cldUrl("infront_of_the_school_1_selfxs", 900, 680), // 900×680 — founding story photo

  // Program cards + gallery thumbs (also used in src/lib/data.ts)
  studentsTable: cldUrl("_MG_3764_iog7jz", 600, 440), // 600×440
  boyStudying: cldUrl("PASTE_CLOUDINARY_URL_HERE", 600, 440), // 600×440
  classroom: cldUrl("PASTE_CLOUDINARY_URL_HERE", 600, 440), // 600×440
  campusClock: cldUrl("PASTE_CLOUDINARY_URL_HERE", 600, 440), // 600×440
  swimming: cldUrl("PASTE_CLOUDINARY_URL_HERE", 600, 440), // 600×440
  dining: cldUrl("PASTE_CLOUDINARY_URL_HERE", 600, 440), // 600×440

  // Director speech portrait (Home welcome teaser + About full statement)
  directorSpeech: cldUrl("_MG_3905_ayl8no", 900, 1200, "g_face,e_sharpen:100"),

  // Admin team portraits (Administrative Team cards)
  admin1: cldUrl("PASTE_DIRECTOR_TEAM_PUBLIC_ID", 420, 520), // Nsubuga Benny Frank — team card only
  admin2: cldUrl("freda_qtyzk8", 420, 520), // Nsubuga Freda Namakula
  admin3: cldUrl("headteacher_hr4jpp", 420, 520), // Namutebi Rebecca
  admin4: cldUrl("PASTE_ADMIN4_PUBLIC_ID", 420, 520), // Mukisa Samuel — Operations and Systems Admin
};

/** About page — collective faculty / staff group photo (Cloudinary public ID) */
export const STAFF_PHOTO_PUBLIC_ID = "PASTE_STAFF_PHOTO_PUBLIC_ID";

/*Home hero slideshow*/
export const HERO_SLIDES = [
  "_MG_5392_ml8odr",
  "_MG_7746_naqyki",
  "_MG_7885_hlsoen",
] as const;

/** Contact page — opens Google Maps in a new tab when the map is clicked */
export const SCHOOL_MAPS_URL =
  "https://www.google.com/maps/place/SHEKINAH+ELEMENTARY+SCHOOL/@0.1885647,32.4921293,17z/data=!4m6!3m5!1s0x177d9b59ed360ad5:0x393d151ce9a790ba!8m2!3d0.1885647!4d32.4921293!16s%2Fg%2F11sbpz4b8v";

/** Google Maps default roadmap embed centered on the school pin */
export const SCHOOL_MAP_EMBED_SRC =
  "https://www.google.com/maps?q=0.1885647,32.4921293&z=17&hl=en&output=embed";
