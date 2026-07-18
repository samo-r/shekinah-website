import {
  BookOpen, Monitor, Users, Heart, Bus,
} from "lucide-react";
import { IMGS } from "./constants";

export type MediaCategory = "school" | "students" | "events" | "cocurricular";

export type MediaFilter = "all" | MediaCategory;

/**
 * Cloudinary gallery folder map.
 * Parent folder defaults to `shekinah` (override with CLOUDINARY_GALLERY_ROOT in .env).
 * Each category must match a subfolder name under that parent, e.g.:
 *   shekinah/school/
 *   shekinah/students/
 *   shekinah/events/
 *   shekinah/cocurricular/
 */
export const MEDIA_CATEGORY_FOLDERS: Record<MediaCategory, string> = {
  school: "school",
  students: "students",
  events: "events",
  cocurricular: "cocurricular",
};

export const PROGRAMS = [
  { id: 1, Icon: BookOpen, title: "Early Childhood & Primary Education",
    desc: "A child-centered curriculum achieving academic excellence — cultivating critical thinking and a love for discovery in a faith-driven environment.",
    img: IMGS.studentsTable },
  { id: 2, Icon: Users, title: "Nurturing Boarding Facilities",
    desc: "A safe, loving, orderly home away from home. Our boarding section offers a secure sanctuary where students live, study, and grow together.",
    img: IMGS.campusClock },
  { id: 3, Icon: Bus, title: "Safe School Transportation",
    desc: "Stress-free commuting with our reliable school transit system, ensuring your child arrives at campus and returns home safely.",
    img: IMGS.classroom },
  { id: 4, Icon: Heart, title: "Co-Curricular Sports & Swimming",
    desc: "Unlocking physical talents through structured sports and swimming lessons, promoting health, discipline, teamwork, and confidence.",
    img: IMGS.swimming },
  { id: 5, Icon: Monitor, title: "Digital Literacy & DIT Programs",
    desc: "Hands-on training in our fully equipped computer lab, combining tech skills with DIT lessons to certify practical skills early.",
    img: IMGS.boyStudying },
];

export const VALUES = [
  { label: "Faith", iconSrc: "/cross.svg", dark: true,
    desc: "True to our motto, 'On this rock, I will build,' faith is our starting point. We cultivate a spiritually vibrant environment where daily learning is rooted in Christian principles, encouraging children to develop a sincere heart for God." },
  { label: "Excellence", iconSrc: "/award-ribbon-star-1.svg", dark: false,
    desc: "Driven by our mission, we maintain high academic and practical standards. We challenge our diverse community of learners to discover their unique potential and honor God by giving their absolute best in everything they do." },
  { label: "Integrity", iconSrc: "/shield.svg", dark: true,
    desc: "We believe that education must build a firm moral foundation. We instill lifelong godly principles, teaching our students to walk in honesty, self-discipline, and deep respect for themselves and others." },
  { label: "Unity", iconSrc: "/multiple-users-1.svg", dark: false,
    desc: "We are a diverse school family brought together under a shared purpose. By being united in Christ, we foster a safe, inclusive, and collaborative sanctuary where every family and child feels valued and supported." },
];
