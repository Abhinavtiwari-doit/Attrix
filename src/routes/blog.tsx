import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { posts } from "@/content/site";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Attrix Technologies" },
      { name: "description", content: "Field notes on automation, AI, cloud, CRM, and product engineering." },
      { property: "og:title", content: "Blog — Attrix Technologies" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <Section className="!pb-10">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Journal</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Field notes from active engagements.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Written by the people doing the work — not the marketing team.
            </p>
          </div>
        </div>
      </Section>

      <Section className="!pt-6">
        <Link to="/blog/$slug" params={{ slug: featured.slug }} className="card-lift group grid gap-6 rounded-3xl border border-hairline bg-background p-6 md:grid-cols-12 md:p-8">
          <div className="md:col-span-7">
            <ImagePlaceholder label={`${featured.title} — cover`} aspect="16/9" />
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

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-lift group rounded-2xl border border-hairline bg-background p-4">
              <ImagePlaceholder label={`${p.title} — cover`} aspect="16/10" />
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
        </div>
      </Section>
    </>
  );
}
