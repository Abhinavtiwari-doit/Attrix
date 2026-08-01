import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Attrix Technologies" },
      { name: "description", content: "Case studies from healthcare, logistics, manufacturing, and startups — filter by category or skill." },
      { property: "og:title", content: "Projects — Attrix Technologies" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const allSkills = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(),
    [],
  );
  const [cat, setCat] = useState<string>("All");
  const [skill, setSkill] = useState<string>("All");

  const filtered = projects.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false;
    if (skill !== "All" && !p.tech.includes(skill)) return false;
    return true;
  });

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

        <div className="mt-10 space-y-4">
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Filter by category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition ${
                    cat === c ? "border-brand bg-brand/10 text-brand" : "border-hairline text-ink-soft hover:bg-surface"
                  }`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Filter by skill</p>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setSkill("All")}
                className={`rounded-full border px-3 py-1 text-[11px] transition ${
                  skill === "All" ? "border-brand bg-brand/10 text-brand" : "border-hairline text-ink-soft hover:bg-surface"
                }`}>All skills</button>
              {allSkills.map((s) => (
                <button key={s} onClick={() => setSkill(s)}
                  className={`rounded-full border px-3 py-1 text-[11px] transition ${
                    skill === s ? "border-brand bg-brand/10 text-brand" : "border-hairline text-ink-soft hover:bg-surface"
                  }`}>{s}</button>
              ))}
            </div>
          </div>
          <p className="pt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {filtered.length} of {projects.length} projects
          </p>
        </div>
      </Section>

      <Section className="!pt-6">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-hairline bg-surface p-12 text-center text-sm text-muted-foreground">
            No projects match those filters yet.
          </div>
        ) : (
          <div className="grid gap-6">
            {filtered.map((p, i) => (
              <div key={p.slug} className="relative">
                <Link to="/projects/$slug" params={{ slug: p.slug }}
                className={`card-lift group grid gap-6 rounded-3xl border border-hairline bg-background p-6 md:grid-cols-12 md:p-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <div className="md:col-span-6">
                  <ImagePlaceholder label={`${p.name} — cover`} aspect="4/3" />
                </div>
                <div className="md:col-span-6 md:flex md:flex-col md:justify-center">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      <Pill>{p.industry}</Pill>
                      <Pill>{p.category}</Pill>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold md:text-3xl">{p.name}</h3>
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
                  {p.demoUrl && <div className="h-11" />}
                </div>
                </Link>
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 inline-flex h-9 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-xs font-semibold text-primary-foreground transition hover:bg-primary/90 md:bottom-8 md:right-8"
                  >
                    <Play className="h-3.5 w-3.5" /> Watch demo
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
