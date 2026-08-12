import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Section, Pill } from "@/components/site/primitives";
import { tools, skills } from "@/content/site";


export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Free Tools — Attrix Technologies" },
      { name: "description", content: "Free calculators, generators, and templates from the Attrix team." },
      { property: "og:title", content: "Free Tools — Attrix Technologies" },
      { property: "og:url", content: "/tools" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Skills & tools</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Small utilities. Real leverage.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            The stack we ship on, and the free calculators, generators, and templates we use ourselves.
          </p>
        </div>
      </Section>

      <Section tone="surface" className="!pt-6">
        <p className="eyebrow">Team stack</p>
        <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">Skills across the practice</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card-lift group rounded-2xl border border-hairline bg-background p-6">
              <p className="font-mono text-[11px] uppercase tracking-widest text-brand">{group.category}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <span key={s} className="rounded-md border border-hairline bg-surface px-2.5 py-1 text-xs text-ink-soft">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <p className="eyebrow">Free tools</p>
        <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">Grab-and-go utilities</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

          {tools.map((t) => (
            <div key={t.name} className="card-lift group flex flex-col rounded-2xl border border-hairline bg-background p-6">
              <div className="flex items-center justify-between">
                <Pill>{t.tag}</Pill>
                <Download className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.blurb}</p>
              <a href="#" className="mt-4 inline-flex h-9 w-max items-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground">
                Open tool
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
