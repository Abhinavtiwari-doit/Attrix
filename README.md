# Attrix Technologies — Website

The official marketing website for **Attrix Technologies**: an automation, AI, cloud, and software consultancy. Built as a fast, SEO-friendly, fully content-driven site — nearly every word, card, image, and link lives in one editable data file, so non-developers can update the site without touching page code.

**Live site:** https://attrix.lovable.app

---

## Table of Contents

1. [Tech Stack](#1-tech-stack)
2. [Project Structure](#2-project-structure)
3. [Getting Started Locally](#3-getting-started-locally)
4. [Editing Content (No Coding Required)](#4-editing-content-no-coding-required)
   - [Site-wide info](#site-wide-info)
   - [Team members & photos](#team-members--photos)
   - [Projects & demo videos](#projects--demo-videos)
   - [Services, industries, products](#services-industries-products)
   - [Blog posts](#blog-posts)
   - [Pricing](#pricing)
   - [Jobs, courses, tools, video tutorials](#jobs-courses-tools-video-tutorials)
   - [Testimonials, stats, logos](#testimonials-stats-logos)
5. [Adding / Replacing Images](#5-adding--replacing-images)
6. [SEO, Analytics & Sitemap](#6-seo-analytics--sitemap)
7. [Building & Deploying](#7-building--deploying)
8. [Troubleshooting](#8-troubleshooting)

---

## 1. Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | TanStack Start v1 (React 19, file-based routing) |
| Build tool | Vite 7 |
| Styling | Tailwind CSS v4 (`src/styles.css`) |
| Icons | lucide-react |
| Fonts | Plus Jakarta Sans, Inter, JetBrains Mono |
| Content | Static typed data in `src/content/site.ts` |
| Package manager | Bun |

---

## 2. Project Structure

```text
src/
├── content/site.ts          ← ALL written content lives here (edit this!)
├── assets/                  ← Images imported into content (blog covers, heroes)
├── styles.css               ← Design tokens: colors, fonts, animations
├── routes/                  ← One file = one page URL
│   ├── __root.tsx           ← Site shell (header, footer, fonts)
│   ├── index.tsx            ← Homepage (/)
│   ├── services.tsx         ← /services
│   ├── services.$slug.tsx   ← /services/:slug (auto-generated per service)
│   ├── projects.tsx         ← /projects
│   ├── blog.tsx             ← /blog
│   ├── blog.$slug.tsx       ← /blog/:slug
│   ├── team.tsx, about.tsx, pricing.tsx, contact.tsx, ...
│   └── sitemap[.]xml.ts     ← XML sitemap
├── components/site/         ← Reusable sections (header, footer, carousels…)
└── public/                  ← favicon, robots.txt
```

**Golden rule:** routes/pages read from `src/content/site.ts`. To change what the site *says*, edit that file. To change how it *looks*, edit the route/component files and `styles.css`.

---

## 3. Getting Started Locally

**Prerequisites:** [Bun](https://bun.sh) (or Node.js 20+ with npm).

```bash
# 1. Clone the repo
git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
bun install

# 3. Start the dev server
bun run dev
# → http://localhost:8080

# 4. Production build
bun run build
bun run preview    # preview the production build locally
```

Other scripts: `bun run lint` (ESLint), `bun run format` (Prettier).

---

## 4. Editing Content (No Coding Required)

Open **`src/content/site.ts`**. It is a list of plain data objects — change the quoted text, save, and the site updates everywhere automatically. Keep commas and quotes intact, and keep each entry inside its `{ ... }` braces.

### Site-wide info

At the top of the file, `site` holds the company name, email, phone, socials, etc.:

```ts
export const site = {
  name: "Attrix Technologies",
  email: "hello@attrix.tech",
  // ...
};
```

### Team members & photos

In the `team` array, each person is one block:

```ts
{
  name: "Abhinav Tiwari",
  role: "Founder · Automation & Data Engineer",
  dept: "Leadership",
  location: "Panipat, Haryana · Remote",
  photo: "https://…/headshot.jpg",        // optional — see Section 5
  links: {
    linkedin: "https://www.linkedin.com/in/…",
    github: "https://github.com/…",
    portfolio: "https://…",
  },
},
```

- **Add a member:** copy an existing block, paste it, change the values.
- **Remove a member:** delete the whole `{ ... },` block.
- **No photo?** Delete the `photo:` line — the card automatically shows the person's initials.
- Cards on `/team` show name, title, location, and the LinkedIn/GitHub/Portfolio buttons (a button only appears if its link exists).

### Projects & demo videos

In the `projects` array:

```ts
{
  slug: "vireo-patient-intake",                    // URL: /projects/vireo-patient-intake (lowercase, hyphens, unique)
  name: "Vireo Health — Patient Intake Platform",
  industry: "Healthcare",
  category: "Product Engineering",                 // drives the filter chips on /projects
  summary: "A HIPAA-aligned intake system…",
  tech: ["React", "Supabase", "n8n", "AWS"],        // drives the skills filter
  demoUrl: "https://www.youtube.com/watch?v=XXXX",  // adds the "Watch demo" button
  metrics: [
    { k: "Turnaround", v: "-62%" },
    { k: "Staff hours saved / wk", v: "180" },
  ],
},
```

`category` must be one of: `"AI & Machine Learning"`, `"Data & Analytics"`, `"Zoho & Business Apps"`, `"Automation & Operations"`, `"Product Engineering"`. Delete `demoUrl` to hide the demo button.

### Services, industries, products

- `services` — cards on `/services`; each `slug` automatically gets a detail page at `/services/<slug>`.
- `industries` — tiles on `/solutions`; same auto-detail-page behavior.
- `products`, `aiAgents`, `tools` — the Products dropdown pages.

Edit name, tagline, benefits list, and `technologies` arrays in place.

### Blog posts

In the `posts` array (each slug gets a full page at `/blog/<slug>`, and `category` powers the blog filters):

```ts
{
  image: blogAutomation,                            // imported at top of file — see Section 5
  slug: "automation-that-pays-back",
  title: "Automation that pays back in a quarter",
  excerpt: "A pragmatic framework…",
  author: "Rohan Verma",
  date: "2026-05-14",                               // YYYY-MM-DD
  category: "Automation",
  readingTime: "6 min",
},
```

**Add a new post:** put the cover image in `src/assets/`, add `import blogNew from "@/assets/blog-new.jpg";` next to the other blog imports at the top of `site.ts`, then add the post block.

### Pricing

`pricingPlans` — the three tiers on `/pricing` (name, price, period, `features` list, `highlighted` flag, CTA label/link). The ROI calculator's sliders are configured in `src/routes/pricing.tsx` if rates change.

### Jobs, courses, tools, video tutorials

- `jobs` — open roles on `/careers` (the Apply button uses the role's email/link).
- `courses` — catalog on `/courses` (+ auto detail pages).
- `videoTutorials` — YouTube tutorial shelf: each entry is `{ title, youtubeId, … }`. `youtubeId` is the part after `watch?v=` in a YouTube URL; thumbnails and watch links are generated automatically via the `youtubeThumb` / `youtubeWatch` helpers.

### Testimonials, stats, logos

- `testimonials` — the homepage carousel (quote, author, role, company).
- `stats` — the numbers strip (value + label).
- `clientLogos` — the "trusted by" marquee (name + optional logo URL).
- `process`, `values`, `timeline` — homepage/about narrative sections.
- `skills` — homepage skills grid: `{ category: "AI & ML", items: ["Python", …] }`. Add/remove strings to update the chips.

---

## 5. Adding / Replacing Images

There are two kinds of images:

**A. Bundled images** (blog covers, hero art) — files in `src/assets/`:

```bash
# 1. Drop your file in, e.g. src/assets/blog-security.jpg
# 2. Import it at the top of src/content/site.ts:
import blogSecurity from "@/assets/blog-security.jpg";
# 3. Use it:  image: blogSecurity
```

Use `.jpg` for photos (smaller files), `.png` only when you need transparency. Keep images under ~500 KB where possible.

**B. URL images** (team headshots, video thumbnails) — set the `photo:` / URL field to any absolute `https://` image URL (e.g. hosted on a CDN, or an image uploaded through Lovable's asset system).

**Replacing the homepage hero:** the hero images are `src/assets/hero-abstract.jpg` and `src/assets/hero-team.jpg` — overwrite the files (same name) or swap the import in `src/routes/index.tsx`.

---

## 6. SEO, Analytics & Sitemap

- **Per-page metadata** (title, description, OpenGraph, Twitter cards, canonical) lives in each route's `head()` function — edit the strings in the route file for that page.
- **Structured data (JSON-LD):** Organization schema in `__root.tsx`, Article schema on blog posts, BreadcrumbList on detail pages — generated automatically.
- **Sitemap:** `/sitemap.xml` is generated by `src/routes/sitemap[.]xml.ts` — it includes every route and content slug automatically.
- **robots.txt:** `public/robots.txt`.
- **Google Analytics:** the GA4 measurement ID is configured in `src/routes/__root.tsx` — replace the `G-XXXXXXX` ID with your own to move properties.

---

## 7. Building & Deploying

```bash
bun run build     # outputs a production build
```

The site deploys via **Lovable** — press *Publish* in the Lovable editor to ship the latest version to https://attrix.lovable.app. Every git push/merge into the connected branch can be republished the same way. The build is edge-deployable (Cloudflare Workers target) and can also be hosted on any platform that supports TanStack Start output.

**Typical update workflow:**

```bash
git checkout -b content/update-team
# edit src/content/site.ts, add images to src/assets/
bun run dev          # check it locally at http://localhost:8080
git add -A && git commit -m "Update team photos and add new blog post"
git push origin content/update-team
# open a PR, merge, then Publish from Lovable
```

---

## 8. Troubleshooting

| Symptom | Fix |
| --- | --- |
| Page went blank after a content edit | A missing comma/quote in `site.ts`. Run `bun run dev` — the terminal shows the exact line. |
| New blog/service page 404s | The `slug` must be unique, lowercase, letters/numbers/hyphens only. |
| Image not showing | Check the import path at the top of `site.ts` and that the file exists in `src/assets/` (case-sensitive). |
| Team card shows initials | That member has no `photo:` field — expected fallback. |
| "Watch demo" button missing | Add `demoUrl` to that project block. |
| Build fails with a route/path error | A `Link to="..."` points to a page file that doesn't exist — check spelling of the route file in `src/routes/`. |

---

© Attrix Technologies. All rights reserved.
