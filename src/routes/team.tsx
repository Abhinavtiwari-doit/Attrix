import { createFileRoute, Link } from "@tanstack/react-router";
import { Linkedin, Github, Globe } from "lucide-react";
import { Section, Reveal } from "@/components/site/primitives";
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

function TeamCard({ m }: { m: TeamMember }) {
  const hasLinks = m.links && (m.links.linkedin || m.links.github || m.links.portfolio);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink p-8 text-primary-foreground transition-all duration-500 hover:-translate-y-1.5 hover:border-cta/50 hover:shadow-[0_20px_60px_-20px_hsl(var(--cta)/0.35)]">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-brand/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-cta/10 blur-2xl transition-opacity duration-700 group-hover:opacity-100 opacity-0" />

      <div className="relative flex items-center gap-5">
        {m.photo ? (
          <img
            src={m.photo}
            alt={`${m.name} headshot`}
            loading="lazy"
            className="h-20 w-20 shrink-0 rounded-xl border border-white/10 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 font-display text-xl font-bold text-brand transition-transform duration-500 group-hover:scale-110">
            {initials(m.name)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white transition-colors duration-300 group-hover:text-cta">
            {m.name}
          </h3>
          <p className="mt-1 truncate text-sm text-cta">{m.role}</p>
          {m.location && (
            <p className="mt-1 truncate text-xs text-white/45">{m.location}</p>
          )}
        </div>
      </div>

      {hasLinks ? (
        <div className="relative mt-5 flex flex-wrap items-center gap-2">
          {m.links?.linkedin && (
            <a
              href={m.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on LinkedIn`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cta/60 hover:text-cta"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {m.links?.github && (
            <a
              href={m.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} on GitHub`}
              className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cta/60 hover:text-cta"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {m.links?.portfolio && (
            <a
              href={m.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${m.name} portfolio`}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 px-3 text-xs text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-cta/60 hover:text-cta"
            >
              <Globe className="h-3.5 w-3.5" /> Portfolio
            </a>
          )}
        </div>
      ) : (
        <p className="relative mt-5 text-xs text-white/40">Profile links coming soon.</p>
      )}
    </article>
  );
}

function TeamPage() {
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
        </div>
      </section>

      {/* ALL TEAM MEMBERS */}
      <Section tone="surface" className="!pt-10">
        <div className="mb-10 flex items-baseline justify-between border-b border-hairline pb-5">
          <div>
            <p className="eyebrow">Everyone at Attrix</p>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">One team, one place.</h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {team.length} people
          </p>
        </div>
        <Reveal stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m) => (
            <TeamCard key={m.name} m={m} />
          ))}
        </Reveal>
      </Section>

      <section className="bg-ink px-5 py-12 text-primary-foreground md:px-8 md:py-16">
        <div className="container-page flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-white/55">Work with us</p>
            <h2 className="mt-2 text-2xl font-bold text-primary-foreground md:text-3xl">The next seat at the table could be yours.</h2>
          </div>
          <Link to="/careers" className="group inline-flex items-center gap-2 text-sm font-semibold text-cta transition-colors hover:text-primary-foreground">
            See open roles <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

