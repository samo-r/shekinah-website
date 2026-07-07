import {
  BookOpen, Monitor, Users, Heart, Utensils, Bus, Star, Shield,
} from "lucide-react";
import { IMGS } from "./constants";

export type GalleryFilter = "all" | "facilities" | "student-life" | "events";

export const PROGRAMS = [
  { id: 1, Icon: BookOpen, title: "Early Childhood & Primary Education",
    desc: "A child-centered curriculum achieving academic excellence — cultivating critical thinking and a love for discovery in a faith-driven environment.",
    img: IMGS.studentsTable },
  { id: 2, Icon: Monitor, title: "Digital Literacy & DIT Programs",
    desc: "Hands-on training in our fully equipped computer lab, combining tech skills with DIT lessons to certify practical skills early.",
    img: IMGS.boyStudying },
  { id: 3, Icon: Users, title: "Nurturing Boarding Facilities",
    desc: "A safe, loving, orderly home away from home. Our boarding section offers a secure sanctuary where students live, study, and grow together.",
    img: IMGS.campusClock },
  { id: 4, Icon: Heart, title: "Co-Curricular Sports & Swimming",
    desc: "Unlocking physical talents through structured sports and swimming lessons, promoting health, discipline, teamwork, and confidence.",
    img: IMGS.swimming },
  { id: 5, Icon: Utensils, title: "Health & Balanced Nutrition",
    desc: "Fuelling bright minds with fresh, balanced meals prepared daily under strict hygiene standards to support healthy growth.",
    img: IMGS.dining },
  { id: 6, Icon: Bus, title: "Safe School Transportation",
    desc: "Stress-free commuting with our reliable school transit system, ensuring your child arrives at campus and returns home safely.",
    img: IMGS.classroom },
];

export const GALLERY: { id: number; img: string; tags: GalleryFilter[]; alt: string }[] = [
  { id: 1, img: IMGS.classroom, tags: ["facilities", "student-life"], alt: "Primary classrooms" },
  { id: 2, img: IMGS.boyStudying, tags: ["facilities"], alt: "Computer lab & ICT" },
  { id: 3, img: IMGS.campusClock, tags: ["facilities"], alt: "Boarding dormitories" },
  { id: 4, img: IMGS.swimming, tags: ["student-life", "events"], alt: "Swimming pool & sports" },
  { id: 5, img: IMGS.dining, tags: ["facilities", "student-life"], alt: "Dining hall & nutrition" },
  { id: 6, img: IMGS.studentsTable, tags: ["student-life", "events"], alt: "Student activities" },
];

export const VALUES = [
  { label: "Faith", Icon: Heart, dark: true,
    desc: "True to our motto, 'On this rock, I will build,' faith is our starting point. We cultivate a spiritually vibrant environment where daily learning is rooted in Christian principles, encouraging children to develop a sincere heart for God." },
  { label: "Excellence", Icon: Star, dark: false,
    desc: "Driven by our mission, we maintain high academic and practical standards. We challenge our diverse community of learners to discover their unique potential and honor God by giving their absolute best in everything they do." },
  { label: "Integrity", Icon: Shield, dark: true,
    desc: "We believe that education must build a firm moral foundation. We instill lifelong godly principles, teaching our students to walk in honesty, self-discipline, and deep respect for themselves and others." },
  { label: "Unity", Icon: Users, dark: false,
    desc: "We are a diverse school family brought together under a shared purpose. By being united in Christ, we foster a safe, inclusive, and collaborative sanctuary where every family and child feels valued and supported." },
];
