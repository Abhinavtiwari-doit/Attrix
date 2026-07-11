import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Attrix Technologies" },
      { name: "description", content: "Case studies from healthcare, logistics, manufacturing, and startups." },
      { property: "og:title", content: "Projects — Attrix Technologies" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Case studies</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Work that shipped. And what it moved.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Selected projects with the metrics, the tech, and the honest story of how each was built.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }}
              className={`card-lift group grid gap-6 rounded-3xl border border-hairline bg-background p-6 md:grid-cols-12 md:p-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-6">
                <ImagePlaceholder label={`${p.name} — cover`} aspect="4/3" />
              </div>
              <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                <div className="flex items-center justify-between">
                  <Pill>{p.industry}</Pill>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                </div>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">{p.name}</h2>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">{p.summary}</p>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-hairline pt-6">
                  {p.metrics.map((m) => (
                    <div key={m.k}>
                      <dt className="text-[11px] uppercase tracking-widest text-muted-foreground">{m.k}</dt>
                      <dd className="mt-1 font-display text-xl font-bold text-brand">{m.v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-ink-soft">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
