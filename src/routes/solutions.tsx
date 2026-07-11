import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { industries } from "@/content/site";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions by Industry — Attrix Technologies" },
      { name: "description", content: "Solutions engineered for healthcare, finance, retail, manufacturing, and more." },
      { property: "og:title", content: "Solutions by Industry — Attrix Technologies" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Solutions by industry</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Domain-fluent teams for nine sectors.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We arrive on day one already speaking your business — regulatory constraints, unit economics, and all.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <Link key={i.slug} to="/solutions/$slug" params={{ slug: i.slug }}
              className="card-lift group rounded-2xl border border-hairline bg-background p-8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-brand">Industry</p>
                  <h3 className="mt-3 text-xl font-bold">{i.name}</h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{i.blurb}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
