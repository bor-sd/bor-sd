# bor-sd — personal website

Personal site of Bor Skale Demšar — software engineer and student in Ljubljana.

A single-page, fully static site: hero → about → journey → projects → skills →
profile → basketball → gallery → contact. No backend, no database, no CMS —
it prerenders to plain HTML and serves from Vercel's edge.

## How it's put together

- **Next.js (App Router)** + TypeScript strict + Tailwind CSS v4
- **All content lives in [`src/content/site.ts`](src/content/site.ts)** — every
  word, link, project, photo path and social handle. Editing the site means
  editing that one file; components never hardcode copy.
- Design tokens (the "warm paper" palette) are CSS variables in
  [`src/app/globals.css`](src/app/globals.css) — swap them to re-skin everything.
- Components are grouped by role: `components/sections/` (one per page
  section), `components/layout/` (nav, menu, footer), `components/ui/`
  (primitives), `components/brand/` (logo), `components/seo/` (JSON-LD).
- SEO: per-page metadata, generated OG image and favicon, `sitemap.xml`,
  `robots.txt`, JSON-LD `Person` schema.

Images go in `public/` (`me.jpg`, `gallery/`, `resume.pdf`) and are referenced
from `site.ts`.
