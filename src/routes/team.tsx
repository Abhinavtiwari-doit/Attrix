import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, Globe } from "lucide-react";
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

function TeamCard({ m }: { m: TeamMember }) {
  const hasLinks = m.links && (m.links.linkedin || m.links.github || m.links.portfolio);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-hairline bg-background p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-soft">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-brand/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative flex items-center gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-surface font-display text-base font-bold text-brand transition-transform duration-500 group-hover:scale-110">
          {initials(m.name)}
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold transition-colors duration-300 group-hover:text-brand">
            {m.name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{m.role}</p>
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
              className="grid h-9 w-9 place-items-center rounded-lg border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
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
              className="grid h-9 w-9 place-items-center rounded-lg border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
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
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-hairline px-3 text-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
            >
              <Globe className="h-3.5 w-3.5" /> Portfolio
            </a>
          )}
        </div>
      ) : (
        <p className="relative mt-5 text-xs text-muted-foreground">Profile links coming soon.</p>
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

      <CtaCard eyebrow="Hiring?" title="Want this team on your account?" secondaryLabel="See open roles" secondaryTo="/careers" />
    </>
  );
}

