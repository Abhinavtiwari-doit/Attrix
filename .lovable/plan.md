## Attrix Technologies — Build Plan

A premium, agency-grade marketing site. Handcrafted feel, not AI-flashy. Black/white base, blue + orange accents, generous whitespace, strong typography, image-forward layouts.

### Design System (foundation — done first)
- Rewrite `src/styles.css` tokens: neutrals (white → near-black), brand blue, accent orange, muted gray. Semantic tokens for surface/border/muted/accent. Subtle shadow + radius scale.
- Fonts via `<link>` in `__root.tsx`: Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (labels).
- Button variants: `primary` (black), `accent` (blue), `outline`, `ghost`, `cta` (orange). Card variants: `elevated`, `bordered`, `feature`.
- Shared primitives in `src/components/site/`: `SiteHeader` (sticky nav with Services mega menu, mobile drawer), `SiteFooter`, `Section`, `Container`, `Eyebrow`, `SectionHeading`, `StatBlock`, `LogoCloud`, `ImagePlaceholder`.

### Routes (file-based, each with unique layout + head metadata)
```
/                    Home
/services            Services overview + mega grid
/services/$slug      Detail page (dynamic, static list)
/solutions           Industries index
/solutions/$slug     Industry detail
/products            Marketplace grid
/ai-agents           AI agents showcase
/tools               Utilities index
/projects            Case studies grid
/projects/$slug      Case study detail
/courses             Learning catalog
/courses/$slug       Course detail
/about               Story, mission, values, timeline
/team                Leadership + departments
/blog                Blog index
/blog/$slug          Blog post
/careers             Roles + culture
/contact             Form, map, channels
```
Plus `sitemap.xml` route + `robots.txt`.

### Home sections
Hero (headline, dual CTA, hero image placeholder, trust badges) → Client logo cloud → Stats strip → Services overview (7 premium cards) → Why Choose Us (before/after comparison) → Industries grid (9 tiles) → Technology Ecosystem (tabbed categories: Cloud, Automation, AI, CRM, Dev, Analytics, Infra) → Featured Projects (3 case study cards) → Process (7 steps) → Testimonials → CTA band.

### Content strategy
- Static data files in `src/content/` (services, industries, products, projects, courses, team, jobs, posts, technologies, testimonials) so pages stay data-driven and dynamic route loaders read from them.
- All imagery uses labeled placeholder blocks (aspect-ratio boxes with prompt hints) — real photography wired in later. No AI-generated images in v1.

### Animations
Tailwind-based subtle: fade-in on scroll (IntersectionObserver hook), hover lift on cards, underline-grow on nav links, accordion for FAQs, counter for stats. No parallax, particles, or glow.

### SEO
Per-route `head()` with title/description/OG/Twitter; canonical + og:url self-references; Organization JSON-LD on root; Article schema on blog; BreadcrumbList on deep routes; sitemap.xml lists all static routes; `robots.txt` allows all.

### Scope note
This is ~20 route files + shared components + content. I'll build in one pass: design system → shared shell → home → all other routes with representative but real (not lorem) content and consistent quality.
