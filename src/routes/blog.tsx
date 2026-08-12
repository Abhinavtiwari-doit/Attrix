import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { Section, CoverImage, Pill, Reveal } from "@/components/site/primitives";
import { posts } from "@/content/site";

const SITE_URL = "https://attrix.lovable.app";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — Attrix Technologies Blog" },
      { name: "description", content: "Field notes on automation, AI, cloud, CRM, and product engineering — written by the consultants doing the work." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Insights — Attrix Technologies Blog" },
      { property: "og:description", content: "Field notes on automation, AI, cloud, CRM, and product engineering." },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Insights — Attrix Technologies Blog" },
      { name: "twitter:description", content: "Field notes on automation, AI, cloud, CRM, and product engineering." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Attrix Technologies Insights",
          url: `${SITE_URL}/blog`,
          publisher: { "@type": "Organization", name: "Attrix Technologies" },
          blogPost: posts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
            author: { "@type": "Person", name: p.author },
            articleSection: p.category,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
          ],
        }),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (!q) return true;
      return (p.title + p.excerpt + p.author).toLowerCase().includes(q);
    });
  }, [category, query]);

  const [featured, ...rest] = filtered;

  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-2xl">
          <p className="eyebrow">Journal</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Field notes from active engagements.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Written by the people doing the work — not the marketing team.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`inline-flex h-9 items-center rounded-full border px-4 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-hairline bg-background text-ink-soft hover:border-ink/40 hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <label className="relative w-full md:w-72">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="h-9 w-full rounded-full border border-hairline bg-background pl-9 pr-3 text-sm outline-none transition focus:border-brand"
              aria-label="Search articles"
            />
          </label>
        </div>
      </Section>

      <Section className="!pt-6">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-hairline bg-surface p-12 text-center">
            <p className="text-sm text-muted-foreground">No articles match those filters.</p>
          </div>
        ) : (
          <>
            {featured && (
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="card-lift group grid gap-6 rounded-3xl border border-hairline bg-background p-6 md:grid-cols-12 md:p-8"
              >
                <div className="md:col-span-7">
                  <CoverImage src={featured.image} label={`${featured.title} — cover`} aspect="16/9" />
                </div>
                <div className="md:col-span-5 md:flex md:flex-col md:justify-center">
                  <div className="flex items-center gap-2">
                    <Pill>Featured</Pill>
                    <Pill>{featured.category}</Pill>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold md:text-3xl">{featured.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{featured.excerpt}</p>
                  <p className="mt-6 text-xs text-muted-foreground">
                    {featured.author} · {featured.readingTime} · {featured.date}
                  </p>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <Reveal stagger className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="card-lift group rounded-2xl border border-hairline bg-background p-4"
                  >
                    <CoverImage src={p.image} label={`${p.title} — cover`} aspect="16/10" />
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <Pill>{p.category}</Pill>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                      <p className="mt-4 text-[11px] text-muted-foreground">{p.author} · {p.readingTime}</p>
                    </div>
                  </Link>
                ))}
              </Reveal>
            )}
          </>
        )}
      </Section>
    </>
  );
}
