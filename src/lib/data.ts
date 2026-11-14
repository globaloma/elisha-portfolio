export const profile = {
  firstName: "Elisha",
  lastName: "Ibeabuchi",
  fullName: "Elisha Ibeabuchi",
  roles: ["Mobile App Developer", "UI/UX Designer"],
  tagline: "UIUX Design & Mobile Development",
  headlineRoleLine1: "Founder & CEO — Crib Home Rental App",
  headlineRoleLine2: "Mobile App Developer — UI/UX Designer",
  intro:
    "I believe every app should be beautiful and functional, not one or the other. I combine UI/UX design with mobile development to take your product from first sketch to the App Store or Play Store.",
  phone: "+234 810 513 8217",
  phoneHref: "tel:+2348105138217",
  email: "Ibeabuchielisha@gmail.com",
  emailHref: "mailto:Ibeabuchielisha@gmail.com",
  whatsappHref: "https://wa.me/2348105138217",
  location: "Enugu State, Nigeria",
  availability: "24/7 — Always Open",
  resumeHref: "/Elisha_Ibeabuchi_Resume.pdf",
} as const;

export const stats = [
  { value: "1", label: "App Launched" },
  { value: "10+", label: "Designs" },
  { value: "2+", label: "Years" },
] as const;

export const about = {
  paragraphs: [
    "I'm Elisha Ibeabuchi — a UI/UX Designer, Mobile App Developer and Founder & CEO of Crib, based in Enugu, Nigeria. I am also currently building Tranx, a fintech mobile app.",
    "I create modern, user-focused mobile apps and digital experiences that combine clean design and functionality. Passionate about building impactful products, I specialize in UI/UX design, frontend development and mobile app experiences that solve real-world problems.",
    "Currently building Tranx, a fintech app focused on simplifying wallet funding and AI-assisted transfers.",
  ],
  facts: [
    { icon: "map-pin", label: "Enugu, Nigeria" },
    { icon: "smartphone", label: "Mobile App Developer" },
    { icon: "palette", label: "UI/UX Designer" },
    { icon: "building-2", label: "Founder & CEO — Crib" },
    { icon: "rocket", label: "Founder — Tranx" },
    { icon: "message-circle", label: "WhatsApp Me", href: "https://wa.me/2348105138217" },
  ],
} as const;

export const services = [
  {
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually engaging interfaces focused on seamless user experiences and modern digital products.",
  },
  {
    icon: "smartphone",
    title: "Mobile Development",
    description:
      "Building responsive and scalable mobile applications with clean performance, modern functionality and user-centered solutions.",
  },
  {
    icon: "layout-panel-left",
    title: "Product Design",
    description:
      "Transforming ideas into functional digital products through strategic thinking, user flows and problem-solving design approaches.",
  },
] as const;

export const experience = [
  {
    role: "Founder & Product Designer",
    company: "Crib — Enugu, Nigeria",
    period: "2024 — Present",
    points: [
      "Founded and launched a mobile home rental platform.",
      "Designed the complete user experience and user interface.",
      "Developed the application using Flutter and Firebase.",
      "Built features for property discovery, listings, chats, and inspections.",
      "Led product design, development, and overall product direction.",
      "Integrated Paystack for booking payments.",
    ],
  },
  {
    role: "UI/UX Designer & Mobile App Developer",
    company: "Freelance — Enugu, Nigeria",
    period: "2024 — Present",
    points: [
      "Designed user-focused interfaces for web and mobile products.",
      "Created wireframes, prototypes and reusable design systems.",
      "Developed cross-platform applications using Flutter.",
      "Translated client requirements into functional digital experiences.",
    ],
  },
] as const;

export const capabilities = [
  {
    index: "01",
    title: "UI/UX Design",
    items: [
      "User Research & Discovery",
      "User Flows",
      "Wireframing",
      "Prototyping",
      "UI Design",
      "Design Systems",
    ],
  },
  {
    index: "02",
    title: "Mobile App Development",
    items: [
      "Flutter Development",
      "Dart",
      "Cross-Platform Apps",
      "Firebase Integration",
      "API Integration",
      "App Prototyping",
    ],
  },
  {
    index: "03",
    title: "Product Design",
    items: [
      "Product Discovery",
      "Problem Solving",
      "User-Centered Design",
      "Information Architecture",
      "Feature Planning",
      "Design-to-Development",
    ],
  },
] as const;

export const tools = [
  "Figma",
  "Framer",
  "Flutter",
  "Dart",
  "Firebase",
  "Android Studio",
] as const;

export const education = [
  {
    title: "Ordinary National Diploma — Architecture",
    org: "Institute of Management and Technology, Enugu",
    period: "2022 — 2024",
    icon: "ruler",
  },
  {
    title: "B.Sc Computer Science",
    org: "University of Nigeria, Nsukka",
    period: "2026 — Present",
    icon: "graduation-cap",
  },
  {
    title: "UI/UX Design",
    org: "Digital Dreams Academy, Enugu",
    period: "2024",
    icon: "palette",
  },
  {
    title: "Mobile App Development",
    org: "Prime Robotics, Enugu",
    period: "2025",
    icon: "smartphone",
  },
] as const;

export const currentlyBuilding = {
  name: "Tranx — Fintech App",
  subtitle: "AI-Powered Fintech Mobile App",
  status: "In Development",
  description:
    "A modern fintech app that brings wallet funding and AI-assisted transfers into one seamless mobile experience.",
  workingOn: ["Product & UX Design", "Mobile Development", "AI Transfer Experience"],
  tags: ["UI/UX", "Flutter", "Firebase"],
  brand: "#2fd27b",
  href: "/projects/tranx",
  image: "/case-studies/tranx/hero.png",
} as const;

export const socials = [
  { label: "TikTok", icon: "music-2", href: "https://www.tiktok.com/" },
  { label: "WhatsApp", icon: "message-circle", href: "https://wa.me/2348105138217" },
  { label: "Email Address", icon: "mail", href: "mailto:Ibeabuchielisha@gmail.com" },
] as const;

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  tags: string[];
  brand: string;
  accentName: string;
  cta: { label: string; href: string };
  image: string;
  hasCaseStudy: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "crib",
    name: "Crib — Home Rental App",
    shortName: "Crib",
    category: "Home Rental Platform",
    description:
      "A mobile home rental platform that helps users discover apartments, connect with agents, and book property inspections.",
    tags: ["UI/UX", "Flutter", "Firebase"],
    brand: "#1f9d6b",
    accentName: "emerald",
    cta: { label: "View Live", href: "https://getcribapp.com" },
    image: "/cards/crib.png",
    hasCaseStudy: false,
    featured: true,
  },
  {
    slug: "tranx",
    name: "Tranx — Fintech App",
    shortName: "Tranx",
    category: "AI-Powered Fintech",
    description:
      "A fintech mobile app designed to simplify wallet funding and transfers through an AI-powered experience and swift transactions.",
    tags: ["UI/UX", "Flutter", "Fintech"],
    brand: "#2fd27b",
    accentName: "green",
    cta: { label: "View Project", href: "/projects/tranx" },
    image: "/case-studies/tranx/hero.png",
    hasCaseStudy: true,
    featured: true,
  },
  {
    slug: "localbite",
    name: "LocalBite — Food App",
    shortName: "LocalBite",
    category: "Food Ordering",
    description:
      "A food ordering app that focuses on bringing users' favorite local dishes to their doorstep. Users can order local dishes from their favorite vendors.",
    tags: ["UI/UX", "Figma", "Mobile App"],
    brand: "#f97316",
    accentName: "orange",
    cta: { label: "View Project", href: "/projects/localbite" },
    image: "/case-studies/localbite/hero.png",
    hasCaseStudy: true,
  },
  {
    slug: "voltpass",
    name: "VoltPass — Smart Socket App",
    shortName: "VoltPass",
    category: "Smart Home / IoT",
    description:
      "An app for smart socket users, where they can manage their home smart sockets, categorize them by their rooms and so on.",
    tags: ["UI/UX", "Figma", "Mobile App"],
    brand: "#3b82f6",
    accentName: "blue",
    cta: { label: "View Project", href: "/projects/voltpass" },
    image: "/case-studies/voltpass/hero.png",
    hasCaseStudy: true,
  },
  {
    slug: "bookmaker",
    name: "Bookmaker — Betting Website",
    shortName: "Bookmaker",
    category: "Sports Betting",
    description:
      "A betting website for bet enthusiasts where they can get predictions on games and also join a VIP section.",
    tags: ["UI/UX", "Figma", "Web Design"],
    brand: "#eab308",
    accentName: "amber",
    cta: { label: "View Project", href: "/projects/bookmaker" },
    image: "/case-studies/bookmaker/hero.png",
    hasCaseStudy: true,
  },
];

export const navItems = [
  { label: "Home", href: "/#home", icon: "home", section: "home" },
  { label: "About", href: "/#about", icon: "user", section: "about" },
  { label: "Projects", href: "/projects", icon: "layout-grid", section: "projects" },
  { label: "Skills & Capabilities", href: "/#skills", icon: "sparkles", section: "skills" },
  { label: "Contact", href: "/#contact", icon: "phone", section: "contact" },
] as const;
