/**
 * Central content config — every word, link, project and image on the site
 * lives here. Edit this file, push, and Vercel redeploys. Components never
 * hardcode copy. Anything marked TODO is a placeholder waiting for the real
 * thing.
 */

import type { ComponentType } from "react";
import { Mail } from "lucide-react";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/ui/icons";

/* ---------------------------------- Site ----------------------------------- */

export const site = {
  name: "Bor Skale Demšar",
  monogram: "BSD",
  role: "Software Engineer",
  location: "Ljubljana, Slovenia",
  email: "bor.skale.demsar@gmail.com",
  tagline:
    "Software engineer & student in Ljubljana — building full-stack and AI-driven systems.",
  description:
    "Bor Skale Demšar is a software engineer at Neoproject and final-year student at Gimnazija Šentvid in Ljubljana, Slovenia — building full-stack and AI-driven systems with Python, FastAPI, Next.js and PostgreSQL.",
  // TODO: switch to your custom domain if you buy one later
  url: "https://bor-sd.vercel.app",
};

/* ---------------------------------- Hero ----------------------------------- */

export const hero = {
  greeting: "Hi, I'm Bor.",
  headline: "I build full-stack and AI-driven systems.",
  subhead:
    "Software engineer at Neoproject in Ljubljana and final-year student at Gimnazija Šentvid. Two years of production work across agentic AI, Python back ends and Next.js front ends — plus a life away from the editor that keeps me sharp.",
  // TODO: drop a square portrait at frontend/public/me.jpg and set this to "/me.jpg"
  photo: null as string | null,
  ctas: [
    { label: "See my work", href: "#projects", primary: true },
    { label: "Say hi", href: "#contact", primary: false },
  ],
};

/* ---------------------------------- About ---------------------------------- */

export const about = {
  paragraphs: [
    "I'm a software engineer from Ljubljana, currently at Neoproject d.o.o. and finishing my final year at Gimnazija Šentvid. I've been shipping production software since 2024 — first freelance, then ten months building an AI product at HolyShift, now full-stack client work at Neoproject.",
    "My lane is full-stack and AI-driven systems: agentic AI development, Python and FastAPI back ends, Next.js and TypeScript front ends, PostgreSQL underneath. I like software that is typed, measured and actually deployed — not demos.",
    "Away from the keyboard I play competitive basketball, run, lift, ski and shoot photos — the full picture is further down the page.",
  ],
  facts: [
    { label: "Role", value: "Software Engineer · Neoproject" },
    { label: "School", value: "Gimnazija Šentvid, class of 2026" },
    { label: "Based in", value: "Medvode · Ljubljana" },
    { label: "Focus", value: "Full-stack & agentic AI" },
  ],
};

/* ----------------------------------- Now ------------------------------------ */

// Your low-effort heartbeat: update these three lines now and then, push,
// and the site feels alive. The date shows on the page.
export const now = {
  updatedAt: "June 2026",
  items: [
    {
      label: "Working on",
      text: "Client projects at Neoproject — and finishing gimnazija on the side.",
    },
    {
      label: "Learning",
      text: "TODO — what you're currently digging into (e.g. agent architectures, system design).",
    },
    {
      label: "Training for",
      text: "TODO — what's next on the court or the road (e.g. the autumn season, a 10k).",
    },
  ],
};

/* --------------------------------- Journey ---------------------------------- */

export type JourneyItem = { year: string; title: string; text: string };

export const journey: JourneyItem[] = [
  {
    year: "2014",
    title: "First basketball practice",
    text: "Joined organised training in primary school — KK Ljubljana became the second home it still is.",
  },
  {
    year: "2019",
    title: "First lines of code",
    text: "Wrote my first programs and discovered that building things beats consuming them.",
  },
  {
    year: "2022",
    title: "Gimnazija Šentvid",
    text: "Started gimnazija in Ljubljana — class of 2026 — and with it the juggling act between school, training and a growing list of side projects.",
  },
  {
    year: "2024",
    title: "Code turns professional",
    text: "Took on freelance software work — real clients, real deadlines, real production bugs.",
  },
  {
    year: "2025",
    title: "Software Engineer · HolyShift",
    text: "Ten months building an AI platform that validates product ideas against real buyer signals — my first deep run at agentic AI in production.",
  },
  {
    year: "2026",
    title: "Software Engineer · Neoproject",
    text: "Joined Neoproject d.o.o. in Ljubljana, shipping full-stack and AI work — while closing out my final year of school.",
  },
];

// TODO: drop your CV at frontend/public/resume.pdf, then set this to "/resume.pdf"
export const resumeUrl: string | null = null;

/* --------------------------------- Projects --------------------------------- */

export type Project = {
  title: string;
  description: string;
  tags: string[];
  kind: "solo" | "team";
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

// TODO: these are templates seeded from your LinkedIn + GitHub — sharpen the
// descriptions with specifics (what exactly you built) when you get a minute.
export const projects: Project[] = [
  {
    title: "HolyShift — AI validation platform",
    description:
      "Part of the product team behind HolyShift, an AI platform that validates product ideas by listening to real buyer signals. I worked across the stack — agentic pipelines, Python services and the Next.js front end. (TODO: swap in one or two specific features you shipped.)",
    tags: ["Agentic AI", "Python", "FastAPI", "Next.js"],
    kind: "team",
    liveUrl: "https://www.holyshift.ai",
    featured: true,
  },
  {
    title: "Goslarstvo Demšar — workshop website",
    description:
      "My family runs a third-generation violin workshop in Ljubljana, and I'm rebuilding its web presence — from a legacy Joomla site to a bilingual Next.js app with a Sanity CMS, custom design system and Supabase-backed enquiry forms.",
    tags: ["Next.js", "TypeScript", "Sanity", "Supabase"],
    kind: "solo",
    // TODO: add live + repo links once it ships
    featured: true,
  },
  {
    title: "Project Trainer",
    description:
      "A TypeScript training app. (TODO: one-liner on what it does — what it tracks, who it's for, and why you built it.)",
    tags: ["TypeScript", "Web"],
    kind: "solo",
    repoUrl: "https://github.com/bor-sd/project_trainer",
  },
  {
    title: "Client work · Neoproject",
    description:
      "Day-job engineering at Neoproject d.o.o. — full-stack client projects in production. (TODO: feature a project you're allowed to show, or remove this card.)",
    tags: ["Python", "Next.js", "PostgreSQL"],
    kind: "team",
  },
];

/* ---------------------------------- Skills ---------------------------------- */

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"],
  },
  {
    title: "AI & agents",
    items: ["Agentic AI development", "LLM integrations", "AI-driven products"],
  },
  {
    title: "Frameworks",
    items: ["FastAPI", "Next.js", "React", "Django", "Flask"],
  },
  {
    title: "Data, infra & tooling",
    items: [
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Prisma",
      "GitHub Actions",
      "Playwright",
      "Figma",
    ],
  },
];

/* ---------------------------------- Profile --------------------------------- */

export const profile = {
  traits: [
    {
      name: "Disciplined & consistent",
      note: "Training-schedule reliability — shows up daily, on the court and in the repo.",
    },
    {
      name: "Competitive & driven",
      note: "Keeps score, sets goals, chases them down.",
    },
    {
      name: "Analytical & data-minded",
      note: "Evidence over vibes — measure first, decide second.",
    },
    {
      name: "Team player & communicator",
      note: "Locker rooms and stand-ups run on the same skills.",
    },
    {
      name: "Perfectionist",
      note: "Details get sweated — “good enough” rarely is.",
    },
  ],
  hobbies: [
    { name: "Basketball", note: "KK Ljubljana — the serious one" },
    { name: "Running", note: "Kilometres to clear the head" },
    { name: "Gym & fitness", note: "The strength behind the sport" },
    { name: "Photography", note: "The eye behind the gallery below" },
    { name: "Skiing & mountains", note: "Slovenia's backyard, used properly" },
    { name: "Tech", note: "Hardware, tools, whatever's new" },
  ],
  // TODO — MOCK PICKS so you can judge the layout. Replace every item with
  // your real favourites before deploy.
  shelf: [
    {
      category: "Podcasts & YouTube",
      items: ["Lex Fridman Podcast", "Fireship", "ThePrimeagen"],
    },
    {
      category: "Music",
      items: ["Travis Scott", "Fred again..", "Hans Zimmer for focus"],
    },
    {
      category: "Gear & tools",
      items: ["VS Code + Claude Code", "Custom 75% keyboard", "Garmin watch"],
    },
  ],
};

/* -------------------------------- Basketball -------------------------------- */

export const basketball = {
  paragraphs: [
    "Basketball has been part of my life since 2014 — longer than code. I train and compete with Košarkarski klub Ljubljana in structured youth leagues, and represent Gimnazija Šentvid in national school tournaments.",
    "The court taught me things a terminal can't: showing up on the days you don't feel like it, trusting your teammates, reading a fast situation and making the call anyway. I bring the same discipline to every project I ship.",
  ],
  facts: [
    { label: "Club", value: "KK Ljubljana" },
    { label: "School team", value: "Gimnazija Šentvid" },
    { label: "Playing since", value: "2014" },
  ],
  // TODO: real highlights — tournament runs, season results, personal bests
  highlights: [
    "TODO — a season or tournament highlight",
    "TODO — another moment worth bragging about",
  ],
};

/* ---------------------------------- Gallery --------------------------------- */

export type GalleryItem = {
  // Put photos in frontend/public/gallery/ and reference them as "/gallery/<file>"
  src?: string;
  caption: string;
};

export const gallery: GalleryItem[] = [
  { caption: "TODO — game or training photo" },
  { caption: "TODO — a build in progress" },
  { caption: "TODO — from a run or a summit" },
  { caption: "TODO — one of your own photographs" },
  { caption: "TODO — add a photo" },
  { caption: "TODO — add a photo" },
];

/* ---------------------------------- Contact --------------------------------- */

export const contact = {
  heading: "Say hi.",
  text: "Whether it's a project, a question, an opportunity, or just basketball talk — my inbox is open. No forms, no funnels; it lands straight in my mail.",
};

export type Social = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

export const socials: Social[] = [
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "GitHub", href: "https://github.com/bor-sd", icon: GitHubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bor-skaledemsar",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/borskaledemsar",
    icon: InstagramIcon,
  },
];

/* ----------------------------------- Nav ------------------------------------ */

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Profile", href: "#profile" },
  { label: "Court", href: "#court" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
