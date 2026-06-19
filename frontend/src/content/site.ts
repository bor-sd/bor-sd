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
    "Software engineer and student from Ljubljana, building full-stack and AI apps.",
  description:
    "I'm Bor, a software engineer at Neoproject in Ljubljana. I build full-stack and AI apps with Python, FastAPI, Next.js and PostgreSQL. Right now I'm finishing Gimnazija Šentvid and starting at FRI (University of Ljubljana) this autumn.",
  // Canonical URL — the repo's live Vercel deployment. Swap to a custom domain later.
  url: "https://borskaledemsar.vercel.app",
};

/* ---------------------------------- Hero ----------------------------------- */

export const hero = {
  greeting: "Hi, I'm Bor.",
  headline: "I build full-stack and AI apps.",
  subhead:
    "I'm a software engineer at Neoproject here in Ljubljana, and I'm still finishing high school at Gimnazija Šentvid before I start at FRI this autumn. I've been building real software for about two years now, mostly AI things with Python on the back end and Next.js on the front. When I'm not at my laptop, you'll usually find me on a basketball court or somewhere outdoors.",
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
    "I've been getting paid to build software since 2024. I started out freelancing, then did about ten months at HolyShift, and now I'm at Neoproject working on AI platforms and internal tools. That's where most of my time goes. I also give Hermes a hand with some Odoo work whenever they need it.",
    "Most of what I do sits somewhere between full-stack and AI. On a normal day that means Python and FastAPI on the back end, Next.js and TypeScript on the front, a Postgres database underneath, and usually some kind of AI agent in the middle. I care a lot more about software that actually works and gets used than about something that just looks good in a demo.",
    "I grew up in Medvode, a small town just outside Ljubljana, and I'm wrapping up my last year at Gimnazija Šentvid. This autumn I'm off to FRI, the computer science faculty at the University of Ljubljana.",
    "Away from the screen I play a lot of basketball, run, lift, ski and take photos. There's more on all of that further down if you're curious.",
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
      text: "Mostly AI products at Neoproject, plus the occasional Odoo task for Hermes when they're short a hand. And whenever I get the itch, something of my own on the side.",
    },
    {
      label: "Learning",
      text: "Finishing my last year at ZRI after seven years. I've finally aged out. Started on Pascal way back, these days it's C++.",
    },
    {
      label: "Training for",
      text: "Plenty of running, gym sessions with friends, and the odd hike or trail in the mountains near home now that it's basketball off-season.",
    },
  ],
};

/* --------------------------------- Journey ---------------------------------- */

export type JourneyItem = { year: string; title: string; text: string };

export const journey: JourneyItem[] = [
  {
    year: "2013",
    title: "OŠ Medvode",
    text: "Started primary school in Medvode, the town just outside Ljubljana I still call home.",
  },
  {
    year: "2014",
    title: "First basketball practice",
    text: "Showed up to my first practice at KK Medvode, the local club. Ended up staying nine years.",
  },
  {
    year: "2019",
    title: "First lines of code · ZRI",
    text: "Signed up at ZRI, a programming school for kids in Ljubljana, and wrote my first real code. Started with Pascal, later switched to C++.",
  },
  {
    year: "2021",
    title: "Competitions",
    text: "Left primary school with a handful of national competition results in maths, chemistry and geography, plus a 3rd place in the country for programming in 8th grade.",
  },
  {
    year: "2022",
    title: "Gimnazija Šentvid",
    text: "Started high school at Gimnazija Šentvid (class of 2026) and joined the school team, which meant playing in national tournaments.",
  },
  {
    year: "2023",
    title: "KK Ljubljana",
    text: "Moved from KK Medvode to KK Ljubljana, a bigger club and a faster game.",
  },
  {
    year: "2024",
    title: "Started getting paid to code",
    text: "Took on my first freelance work, and with it my first real clients and deadlines.",
  },
  {
    year: "2025",
    title: "Software Engineer · HolyShift",
    text: "Spent about ten months at HolyShift building an AI platform that tests product ideas against what real buyers are saying. It was my first proper go at agentic AI in production.",
  },
  {
    year: "2026",
    title: "Software Engineer · Neoproject",
    text: "Joined Neoproject in Ljubljana to work on full-stack and AI projects, all while finishing school and my last season at ZRI.",
  },
  {
    year: "Fall 2026",
    title: "FRI · University of Ljubljana",
    text: "Heading to FRI, the CS faculty at the University of Ljubljana, to get the theory side down after a couple of years of mostly just building things.",
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
    title: "HolyShift - AI validation platform",
    description:
      "I spent about ten months on the team that built HolyShift, an AI platform that tests product ideas against what real buyers are actually saying. I worked all over the stack: the agent pipelines, the Python services and the Next.js frontend.",
    tags: ["Agentic AI", "Python", "FastAPI", "Next.js"],
    kind: "team",
    liveUrl: "https://www.holyshift.ai",
    featured: true,
  },
  {
    title: "BizMatch AI - procurement automation",
    description:
      "One of my projects at Neoproject. It takes you from a rough software idea all the way to a finished RFI document: a short AI interview works out what you actually need, a set of agents research vendors at the same time, and you get a clean RFI PDF at the end.",
    tags: ["LangGraph", "FastAPI", "Next.js", "pgvector"],
    kind: "team",
    liveUrl: "https://bizmatch.pro",
    featured: true,
  },
  {
    title: "Stryde - AI activity renamer for Strava",
    description:
      "A little side project. You hook up your Strava and it renames your activities for you, with an AI pipeline writing the names from your route, where you went and how the run actually went.",
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL"],
    kind: "solo",
    featured: true,
    maintenance: true,
  },
  {
    title: "AI Prompt Vault",
    description:
      "Somewhere to save and organise your AI prompts, with categories, tags, favourites and search. It also generates new prompts using frameworks like CO-STAR, RISEN and CRAFT, scores them and helps you make them better.",
    tags: ["Next.js", "FastAPI", "LangGraph", "PostgreSQL"],
    kind: "solo",
    liveUrl: "https://vault.stryde-ai.com",
  },
  {
    title: "Goslarstvo Demšar - workshop website",
    description:
      "Still a work in progress. My family has made violins in Ljubljana for three generations, and I'm rebuilding their website, taking it from an old Joomla site to a proper bilingual Next.js app with a CMS and contact forms.",
    tags: ["Next.js", "TypeScript", "Sanity", "Supabase"],
    kind: "solo",
    wip: true,
    liveUrl: "https://goslarstvo-demsar-website.vercel.app",
  },
  {
    title: "Odoo ERP - Hermes",
    description:
      "I help out at Hermes (hbs.si), the biggest Odoo partner in Slovenia, whenever they need an extra pair of hands. I build custom Odoo modules and features for their clients.",
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
      note: "I show up and do the work, whether it's a training session or a project that's dragging.",
    },
    {
      name: "Competitive & driven",
      note: "I like to win, and I'm the kind of person who sets a goal and actually goes after it.",
    },
    {
      name: "Analytical & data-minded",
      note: "When I can, I'd rather check the numbers than go on a gut feeling.",
    },
    {
      name: "Team player",
      note: "I like working with people, and both sport and coding need a lot of it.",
    },
    {
      name: "Perfectionist",
      note: "Unfinished work frustrates me, and “good enough” is rarely good enough.",
    },
  ],
  hobbies: [
    { name: "Basketball", note: "Training and games, up to 12 hours a week" },
    { name: "Running", note: "10k road runs and trails around home" },
    { name: "Gym & fitness", note: "Lifting, usually with friends" },
    { name: "Photography", note: "Landscapes, streets and friends, all on my iPhone (see the gallery below)" },
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
    "I've been playing basketball since 2014. I started out at KK Medvode, and since 2023 I've been with KK Ljubljana, playing in the top league for my age group. On top of the club season, I also play for Gimnazija Šentvid at the national school tournaments.",
    "Balancing club basketball, the school team and a matura year doesn't really work without a lot of planning. I'll be bringing that same juggling act with me to FRI this autumn.",
    "Sport has taught me a lot that carries straight over to work: showing up on the days you don't feel like it, trusting the people next to you, and making quick calls when there's no time to overthink. I try to bring the same thing to what I build.",
  ],
  facts: [
    { label: "Club", value: "KK Ljubljana" },
    { label: "Jersey", value: "#24" },
    { label: "Position", value: "Wing" },
    { label: "Previously", value: "KK Medvode · 2014-2023" },
    { label: "School team", value: "Gimnazija Šentvid" },
  ],
  highlights: [
    "Got to quarterfinals a few times over the last few years, but never managed to snag a medal. The competition is tough.",
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
  { caption: "TODO: game or training photo" },
  { caption: "TODO: a build in progress" },
  { caption: "TODO: from a run or a summit" },
  { caption: "TODO: one of your own photographs" },
  { caption: "TODO: add a photo" },
  { caption: "TODO: add a photo" },
];

/* ---------------------------------- Contact --------------------------------- */

export const contact = {
  heading: "Say hi.",
  text: "Working on something, got a question or an opportunity, or just want to talk basketball? Drop me a message. Nothing fancy, no forms, it lands straight in my inbox.",
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
