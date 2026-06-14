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
    "Software engineer and student in Ljubljana. I build full-stack and AI apps.",
  description:
    "Bor Skale Demšar — software engineer at Neoproject in Ljubljana. I build full-stack and AI apps with Python, FastAPI, Next.js and PostgreSQL. Finishing Gimnazija Šentvid, starting at FRI (University of Ljubljana) in fall 2026.",
  // Canonical URL — the repo's live Vercel deployment. Swap to a custom domain later.
  url: "https://borskaledemsar.vercel.app",
};

/* ---------------------------------- Hero ----------------------------------- */

export const hero = {
  greeting: "Hi, I'm Bor.",
  headline: "I build full-stack and AI apps.",
  subhead:
    "I'm a software engineer at Neoproject in Ljubljana. I'm also finishing high school at Gimnazija Šentvid, and I start at FRI this autumn. I've been building real software for about two years — mostly AI stuff, Python backends and Next.js frontends. When I'm not coding I'm usually playing basketball or somewhere outside.",
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
    "I'm a software engineer from Ljubljana. I've been getting paid to build software since 2024 — I started out freelancing, then spent about ten months at HolyShift, and now I'm at Neoproject building AI platforms and internal tools. That's my main focus; I also help out with some Odoo work at Hermes when they need it.",
    "Most of what I do is full-stack and AI: building agents, Python and FastAPI on the backend, Next.js and TypeScript on the frontend, Postgres underneath. I mostly care about shipping things that actually work, not just demos.",
    "I grew up in Medvode, just outside Ljubljana, and I'm finishing my last year at Gimnazija Šentvid right now. This autumn I'm starting at FRI, the computer science faculty at the University of Ljubljana.",
    "Outside of code I play basketball, run, lift, ski and take photos. There's more on all of that further down.",
  ],
  facts: [
    { label: "Role", value: "Software Engineer · Neoproject" },
    { label: "Also", value: "Odoo · Hermes (hbs.si)" },
    { label: "School", value: "Gimnazija Šentvid, class of 2026" },
    { label: "Next", value: "FRI · Univ. of Ljubljana, fall 2026" },
    { label: "Based in", value: "Medvode · Ljubljana" },
    { label: "Focus", value: "Full-stack & agentic AI" },
    { label: "Languages", value: "SL · EN (C1) · DE (B1) · HR/SR" },
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
      text: "Mostly building AI products at Neoproject — plus the odd Odoo task for Hermes when they need a hand. When inspiration strikes, I also work on personal projects.",
    },
    {
      label: "Learning",
      text: "Finishing up at ZRI after seven years — I've basically aged out. Started on Pascal, moved to C++.",
    },
    {
      label: "Training for",
      text: "Lots of runs, gym sessions with friends, and a few hikes and trails in the mountains around home during the basketball off-season.",
    },
  ],
};

/* --------------------------------- Journey ---------------------------------- */

export type JourneyItem = { year: string; title: string; text: string };

export const journey: JourneyItem[] = [
  {
    year: "2013",
    title: "OŠ Medvode",
    text: "Started primary school in Medvode, just outside Ljubljana — still home.",
  },
  {
    year: "2014",
    title: "First basketball practice",
    text: "Started playing at KK Medvode, my local club. Stuck with it for the next nine years.",
  },
  {
    year: "2019",
    title: "First lines of code · ZRI",
    text: "Started learning to code at ZRI, a programming school for kids in Ljubljana. Began with Pascal, then moved to C++.",
  },
  {
    year: "2021",
    title: "Competitions",
    text: "Finished primary school with some national competition results in maths, chemistry and geography — and 3rd in the country in programming in 8th grade.",
  },
  {
    year: "2022",
    title: "Gimnazija Šentvid",
    text: "Started high school at Gimnazija Šentvid (class of 2026) and started playing for the school team in national tournaments.",
  },
  {
    year: "2023",
    title: "KK Ljubljana",
    text: "Switched from KK Medvode to KK Ljubljana — a bigger club and a higher level.",
  },
  {
    year: "2024",
    title: "Started getting paid to code",
    text: "Picked up freelance dev work — first real clients and deadlines.",
  },
  {
    year: "2025",
    title: "Software Engineer · HolyShift",
    text: "Spent about ten months at HolyShift building an AI platform that checks product ideas against real buyer signals. First time doing agentic AI properly in production.",
  },
  {
    year: "2026",
    title: "Software Engineer · Neoproject",
    text: "Joined Neoproject in Ljubljana, working on full-stack and AI projects — while finishing school and my last season at ZRI.",
  },
  {
    year: "Fall 2026",
    title: "FRI · University of Ljubljana",
    text: "Starting at FRI, the CS faculty at the University of Ljubljana, to get the formal computer science side down after two years of building things.",
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
  wip?: boolean;
  maintenance?: boolean;
};

// Descriptions are drawn from the real repos/products. Most code is private,
// so cards only link out where something is publicly live (liveUrl).
export const projects: Project[] = [
  {
    title: "HolyShift — AI validation platform",
    description:
      "I spent about ten months on the team building HolyShift, an AI platform that checks product ideas against real buyer signals. I worked across the whole stack — the agent pipelines, the Python services and the Next.js frontend.",
    tags: ["Agentic AI", "Python", "FastAPI", "Next.js"],
    kind: "team",
    liveUrl: "https://www.holyshift.ai",
    featured: true,
  },
  {
    title: "BizMatch AI — procurement automation",
    description:
      "Built this at Neoproject. It takes software procurement from a rough idea to a finished RFI document: an AI interview works out what you need, agents research vendors in parallel, and it generates the RFI PDF at the end.",
    tags: ["LangGraph", "FastAPI", "Next.js", "pgvector"],
    kind: "team",
    liveUrl: "https://bizmatch.pro",
    featured: true,
  },
  {
    title: "Stryde — AI activity renamer for Strava",
    description:
      "A side project of mine. You connect your Strava and it renames your activities for you — an AI pipeline writes the names from your route, where you went and how you did.",
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL"],
    kind: "solo",
    featured: true,
    maintenance: true,
  },
  {
    title: "AI Prompt Vault",
    description:
      "A full app for saving and organising AI prompts — categories, tags, favourites and search. It also has a generator that builds prompts using known frameworks (CO-STAR, RISEN, CRAFT), scores them and helps you improve them.",
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL"],
    kind: "solo",
    liveUrl: "https://vault.stryde-ai.com",
  },
  {
    title: "Goslarstvo Demšar — workshop website",
    description:
      "Work in progress. My family has run a violin workshop in Ljubljana for three generations, and I'm rebuilding their website — moving it off an old Joomla site to a bilingual Next.js app with a CMS and contact forms.",
    tags: ["Next.js", "TypeScript", "Sanity", "Supabase"],
    kind: "solo",
    wip: true,
    liveUrl: "https://goslarstvo-demsar-website.vercel.app",
  },
  {
    title: "Odoo ERP — Hermes",
    description:
      "I help out at Hermes (hbs.si) when they need it — they're the biggest Odoo partner in Slovenia. I build custom Odoo modules and features on top of Odoo for their clients.",
    tags: ["Odoo", "Python", "ERP"],
    kind: "team",
    liveUrl: "https://www.hbs.si/en_US",
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
    items: ["Automatization", "AI Agents", "LangGraph", "LLM integrations", "AI-driven products"],
  },
  {
    title: "Frameworks",
    items: ["Odoo","FastAPI", "Next.js", "React", "Django", "Flask"],
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
      note: "I show up and put in the work, whether it's training or a project.",
    },
    {
      name: "Competitive & driven",
      note: "I like winning, and I set goals and actually chase them.",
    },
    {
      name: "Analytical & data-minded",
      note: "I'd rather look at the data than guess.",
    },
    {
      name: "Team player",
      note: "I work well with people — sport and dev both need it.",
    },
    {
      name: "Perfectionist",
      note: "Unfinished work frustrates me — “good enough” is rarely good enough.",
    },
  ],
  hobbies: [
    { name: "Basketball", note: "Training and games, up to 12 hours a week" },
    { name: "Running", note: "10k road runs and trails around home" },
    { name: "Gym & fitness", note: "Lifting, usually with friends" },
    { name: "Photography", note: "Landscapes, streets and friends, all on my iPhone — see the gallery below" },
    { name: "Skiing & mountains", note: "On skis since I was a kid; climbed Triglav" },
    { name: "Tech", note: "Hardware, tools, whatever's new gets my attention" },
  ],
  // Things I actually use and like.
  shelf: [
    {
      category: "Podcasts",
      items: ["Waveform podcast", "Hardfork", "Mind the game", "The Deep 3 podcast"],
    },
    {
      category: "YouTube",
      items: ["MKBHD", "Veritasium", "The Odd1s Out", "Mark Rober"],
    },
    {
      category: "Music",
      items: ["Eminem", "J. Cole", "JID", "Kendrick Lamar", "Central Cee"],
    },
    {
      category: "Gear",
      items: ["Custom 75% keyboard", "Suunto watch", "Logitech MX Master 3", "Airpods Pro 2"],
    },
    {
      category: "Tools",
      items: ["VS Code + Claude Code", "Zen browser", "Docker", "Discord", "Localsend"],
    },
    {
      category: "Brands",
      items: ["Nike", "Adidas", "Apple", "ASUS", "Brooks"],
    },
  ],
};

/* -------------------------------- Basketball -------------------------------- */

export const basketball = {
  paragraphs: [
    "I've been playing basketball since 2014. I started at KK Medvode and since 2023 I've played for KK Ljubljana in the top league for my age. On top of club ball, I play for Gimnazija Šentvid in national school tournaments.",
    "Juggling club basketball, the school team and a matura year takes a lot of planning. I'll be taking that same balancing act with me to FRI this autumn.",
    "Sport has taught me a lot that helps with work too — showing up when you don't feel like it, trusting your team and making quick calls under pressure. I bring that into the things I build.",
  ],
  facts: [
    { label: "Club", value: "KK Ljubljana" },
    { label: "Jersey", value: "#24" },
    { label: "Position", value: "Wing" },
    { label: "Previously", value: "KK Medvode · 2014–2023" },
    { label: "School team", value: "Gimnazija Šentvid" },
  ],
  highlights: [
    "Got to quarterfinals a few times over the last few years, but never managed to snag a medal — the competition is tough.",
    "National champ with the school team in 2025 and 3x3 national champ in 2026."
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
  text: "Got a project, a question, an opportunity, or just want to talk basketball? Send me a message — no forms, it goes straight to my email.",
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
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Profile", href: "#profile" },
  { label: "Court", href: "#court" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
