import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Section, ImagePlaceholder, Pill, Reveal } from "@/components/site/primitives";
import { projects, site } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Work — Attrix Technologies case studies" },
      { name: "description", content: "Case studies from healthcare, logistics, manufacturing, and startups — filter by category or skill." },
      { property: "og:title", content: "Work — Attrix Technologies case studies" },
      { property: "og:description", content: "Shipped work with the metrics, the stack, and the honest story behind each build." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://attrix.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://attrix.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], []);
  const allSkills = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tech))).sort(), []);
  const [cat, setCat] = useState<string>("All");
  const [skill, setSkill] = useState<string>("All");

  const filtered = projects.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false;
    if (skill !== "All" && !p.tech.includes(skill)) return false;
    return true;
  });

  const [hero, ...others] = filtered;
  const proofStats = [
    { value: String(projects.length), label: "documented builds" },
    { value: String(new Set(projects.map((p) => p.industry)).size), label: "industries represented" },
    { value: String(new Set(projects.flatMap((p) => p.tech)).size), label: "tools in production" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="tech-grid absolute inset-0 opacity-50" />
          <div className="animate-blob absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="animate-float absolute -right-24 top-40 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        </div>
        <div className="container-page pb-12 pt-20 md:pb-16 md:pt-28">
          <div className="max-w-3xl">
            <p className="animate-fade-up eyebrow">Selected work</p>
            <h1 className="animate-fade-up mt-3 text-[38px] font-bold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-6xl md:text-7xl">
              Work that shipped. <span className="text-brand">And what it moved.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-base text-muted-foreground [animation-delay:160ms] md:text-lg">
              Case studies with the metrics, the stack, and the honest story of how each one was built.
            </p>
          </div>

          {/* Filters */}
          <div className="animate-fade-up mt-12 rounded-3xl border border-hairline bg-surface p-6 [animation-delay:240ms] md:p-8">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                        cat === c ? "border-brand bg-brand text-brand-foreground" : "border-hairline bg-background text-ink-soft hover:border-brand/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Skill</p>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSkill("All")}
                    className={`rounded-full border px-3 py-1 text-[11px] transition-all duration-300 hover:-translate-y-0.5 ${
                      skill === "All" ? "border-brand bg-brand/10 text-brand" : "border-hairline bg-background text-ink-soft hover:border-brand/40"
                    }`}
                  >
                    All skills
                  </button>
                  {allSkills.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSkill(s)}
                      className={`rounded-full border px-3 py-1 text-[11px] transition-all duration-300 hover:-translate-y-0.5 ${
                        skill === s ? "border-brand bg-brand/10 text-brand" : "border-hairline bg-background text-ink-soft hover:border-brand/40"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-6 border-t border-hairline pt-4 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              {filtered.length} of {projects.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <Section className="!pt-4">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-hairline bg-surface p-14 text-center text-sm text-muted-foreground">
            No projects match those filters yet.
          </div>
        ) : (
          <div className="space-y-5">
            {/* Featured */}
            <Reveal>
              <div className="group relative overflow-hidden rounded-[28px] border border-hairline bg-ink p-6 text-primary-foreground transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated md:p-10">
                <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
                <div className="glow-orb -right-24 -top-28 h-80 w-80 bg-brand/35 opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative grid gap-8 md:grid-cols-12 md:items-center">
                  <div className="md:col-span-6">
                    <div className="overflow-hidden rounded-2xl border border-white/10">
                      <ImagePlaceholder label={`${hero.name} — cover`} aspect="4/3" />
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-white/70">{hero.industry}</span>
                      <span className="rounded-full border border-cta/50 px-2.5 py-1 text-[11px] text-cta">{hero.category}</span>
                    </div>
                    <h2 className="mt-5 font-display text-3xl font-bold tracking-tight md:text-4xl">{hero.name}</h2>
                    <p className="mt-3 text-sm text-white/65 md:text-base">{hero.summary}</p>
                    <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                      {hero.metrics.map((m) => (
                        <div key={m.k}>
                          <dt className="text-[10px] uppercase tracking-widest text-white/45">{m.k}</dt>
                          <dd className="mt-1 font-display text-xl font-bold text-cta">{m.v}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/projects/$slug"
                        params={{ slug: hero.slug }}
                        className="shine inline-flex h-10 items-center gap-2 rounded-lg bg-cta px-5 text-xs font-semibold text-cta-foreground transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Read case study <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <a
                        href={hero.demoUrl ?? site.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/d inline-flex h-10 items-center gap-2 rounded-lg border border-white/20 px-5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                      >
                        <Play className="h-3.5 w-3.5 transition-transform duration-300 group-hover/d:scale-125" /> Watch demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Rest */}
            <Reveal stagger className="grid gap-5 md:grid-cols-2">
              {others.map((p) => (
                <div
                  key={p.slug}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-hairline bg-background p-4 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-soft"
                >
                  <Link to="/projects/$slug" params={{ slug: p.slug }} className="flex flex-1 flex-col">
                    <div className="overflow-hidden rounded-2xl">
                      <ImagePlaceholder label={`${p.name} — cover`} aspect="16/10" />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          <Pill>{p.industry}</Pill>
                          <Pill>{p.category}</Pill>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold transition-colors duration-300 group-hover:text-brand md:text-2xl">{p.name}</h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                      <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-hairline pt-5">
                        {p.metrics.map((m) => (
                          <div key={m.k}>
                            <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">{m.k}</dt>
                            <dd className="mt-1 font-display text-lg font-bold text-brand">{m.v}</dd>
                          </div>
                        ))}
                      </dl>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-ink-soft">{t}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                  <a
                    href={p.demoUrl ?? site.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/demo shine mx-4 mb-4 inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-primary px-3.5 text-xs font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                  >
                    <Play className="h-3.5 w-3.5 transition-transform duration-300 group-hover/demo:scale-125" /> Watch demo
                  </a>
                </div>
              ))}
            </Reveal>
          </div>
        )}
      </Section>

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-white/55">The evidence ledger</p>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-5xl">Proof before promises.</h2>
            <p className="mt-4 max-w-md text-sm text-white/65 md:text-base">Every case study is a compact record of the problem, the system, and the movement that followed.</p>
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/10 border-y border-white/10">
            {proofStats.map((stat) => (
              <div key={stat.label} className="px-4 py-6 first:pl-0 last:pr-0 sm:px-6">
                <p className="font-display text-3xl font-bold text-cta md:text-5xl">{stat.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-widest text-white/45">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from(new Set(projects.map((p) => p.category))).map((category) => {
            const count = projects.filter((p) => p.category === category).length;
            return (
              <div key={category} className="group flex items-center justify-between border-b border-white/10 py-3 text-sm text-white/65 transition-colors duration-300 hover:text-primary-foreground">
                <span>{category}</span>
                <span className="font-mono text-xs text-brand transition-transform duration-300 group-hover:translate-x-1">{String(count).padStart(2, "0")}</span>
              </div>
            );
          })}
        </div>
      </Section>
      <section className="container-page py-14 md:py-20">
        <div className="flex flex-col gap-4 border-y border-hairline py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Your turn</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Bring us the stubborn problem.</h2>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand link-underline">
            Start a project <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
