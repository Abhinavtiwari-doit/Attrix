import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, MapPin, Globe, ArrowUpRight } from "lucide-react";
import { Section, Reveal } from "@/components/site/primitives";
import { CtaCard } from "@/components/site/CtaCard";
import { team, type TeamMember } from "@/content/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Attrix Technologies" },
      { name: "description", content: "The people behind Attrix — leadership, engineering, design, and delivery." },
      { property: "og:title", content: "Team — Attrix Technologies" },
      { property: "og:description", content: "Senior engineers, designers and operators who work on your account directly." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://attrix.lovable.app/team" },
    ],
    links: [{ rel: "canonical", href: "https://attrix.lovable.app/team" }],
  }),
  component: TeamPage,
});

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

/** Dark spotlight card for core team members. */
function SpotlightCard({ m }: { m: TeamMember }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-ink p-7 text-primary-foreground transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:shadow-elevated">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="glow-orb -right-20 -top-24 h-64 w-64 bg-brand/35 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] font-display text-xl font-bold tracking-tight transition-transform duration-500 group-hover:scale-105">
            {initials(m.name)}
          </span>
          <ArrowUpRight className="h-4 w-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cta" />
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold">{m.name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-cta">{m.role}</p>
        {m.location && (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-white/50">
            <MapPin className="h-3 w-3" /> {m.location}
          </p>
        )}

        <div className="mt-7 flex flex-wrap gap-2">
          <a
            href={m.links?.linkedin ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
          >
            <Linkedin className="h-3.5 w-3.5" /> LinkedIn
          </a>
          {m.links?.portfolio && (
            <a
              href={m.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="shine inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-cta text-xs font-semibold text-cta-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <Globe className="h-3.5 w-3.5" /> Portfolio
            </a>
          )}
          {m.links?.github && (
            <a
              href={m.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function TeamPage() {
  const featured = team.filter((m) => m.bio);
  const rest = team.filter((m) => !m.bio);
  const depts = Array.from(new Set(rest.map((m) => m.dept)));

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="tech-grid absolute inset-0 opacity-50" />
          <div className="animate-blob absolute -left-32 top-0 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
          <div className="animate-float absolute -right-16 top-32 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        </div>
        <div className="container-page pb-14 pt-20 md:pb-20 md:pt-28">
          <div className="max-w-3xl">
            <p className="animate-fade-up eyebrow">Team</p>
            <h1 className="animate-fade-up mt-3 text-[38px] font-bold leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-6xl md:text-7xl">
              Senior people. <span className="text-brand">Every account.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-2xl text-base text-muted-foreground [animation-delay:160ms] md:text-lg">
              No sales team followed by a bench of juniors. The people on your first call are the people doing the work.
            </p>
          </div>
          <dl className="animate-fade-up mt-12 grid grid-cols-2 gap-6 border-t border-hairline pt-9 [animation-delay:240ms] sm:grid-cols-4">
            {[
              { v: `${team.length}`, k: "People on the bench" },
              { v: `${depts.length + 1}`, k: "Disciplines covered" },
              { v: "40+", k: "Projects shipped" },
              { v: "0", k: "Junior-only accounts" },
            ].map((s) => (
              <div key={s.k} className="transition-transform duration-300 hover:-translate-y-1">
                <dt className="font-display text-3xl font-bold">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.k}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CORE TEAM */}
      <Section tone="surface">
        <div className="max-w-2xl">
          <p className="eyebrow">Core team</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            The founders and engineers driving delivery.
          </h2>
        </div>
        <Reveal stagger className="mt-12 grid gap-5 lg:grid-cols-3">
          {featured.map((m) => (
            <SpotlightCard key={m.name} m={m} />
          ))}
        </Reveal>
      </Section>

      {/* DEPARTMENTS */}
      {depts.map((d) => (
        <Section key={d} className="!py-16">
          <div className="mb-10 flex items-baseline justify-between border-b border-hairline pb-5">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{d}</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {rest.filter((m) => m.dept === d).length} people
            </p>
          </div>
          <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest
              .filter((m) => m.dept === d)
              .map((m) => (
                <div
                  key={m.name}
                  className="group relative overflow-hidden rounded-2xl border border-hairline bg-background p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-soft"
                >
                  <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-brand/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="relative flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface font-display text-sm font-bold text-brand transition-transform duration-500 group-hover:scale-110">
                      {initials(m.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-base font-semibold transition-colors duration-300 group-hover:text-brand">
                        {m.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                  <div className="relative mt-5 flex items-center gap-1.5">
                    <a
                      href={m.links?.linkedin ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={m.links?.github ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on GitHub`}
                      className="grid h-8 w-8 place-items-center rounded-md border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              ))}
          </Reveal>
        </Section>
      ))}

      <CtaCard eyebrow="Hiring?" title="Want this team on your account?" secondaryLabel="See open roles" secondaryTo="/careers" />
    </>
  );
}
