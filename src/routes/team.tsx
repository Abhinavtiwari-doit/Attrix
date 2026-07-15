import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github, MapPin, Globe } from "lucide-react";
import { Section, ImagePlaceholder } from "@/components/site/primitives";
import { team, type TeamMember } from "@/content/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Attrix Technologies" },
      { name: "description", content: "The people behind Attrix — leadership, engineering, design, and delivery." },
      { property: "og:title", content: "Team — Attrix Technologies" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

function DetailedCard({ m }: { m: TeamMember }) {
  return (
    <div className="rounded-2xl border border-hairline bg-background p-6 md:p-8">
      <div className="text-center">
        <h3 className="font-display text-2xl font-bold">{m.name}</h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-brand">{m.role}</p>
        {m.location && (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" /> {m.location}
          </p>
        )}
      </div>
      {m.bio && <p className="mt-5 text-sm leading-relaxed text-ink-soft">{m.bio}</p>}
      {m.experience && (
        <ul className="mt-6 space-y-2">
          {m.experience.map((e) => (
            <li key={e} className="rounded-lg border border-hairline bg-surface px-3 py-2 text-xs text-ink-soft">
              › {e}
            </li>
          ))}
        </ul>
      )}
      {m.tags && (
        <div className="mt-6 flex flex-wrap gap-1.5">
          {m.tags.map((t) => (
            <span key={t} className="rounded-md border border-hairline bg-surface px-2 py-1 text-[11px] text-ink-soft">{t}</span>
          ))}
        </div>
      )}
      <div className="mt-6 grid grid-cols-2 gap-2">
        <a href={m.links?.linkedin ?? "#"} className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-hairline text-xs hover:bg-surface">
          <Linkedin className="h-3.5 w-3.5" /> LinkedIn
        </a>
        {m.links?.portfolio ? (
          <a href={m.links.portfolio} className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary text-xs font-semibold text-primary-foreground">
            <Globe className="h-3.5 w-3.5" /> Portfolio
          </a>
        ) : (
          <a href="#" className="inline-flex h-9 items-center justify-center gap-1.5 rounded-md border border-hairline text-xs hover:bg-surface">
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        )}
      </div>
    </div>
  );
}

function TeamPage() {
  const featured = team.filter((m) => m.bio && m.skillBars);
  const rest = team.filter((m) => !(m.bio && m.skillBars));
  const depts = Array.from(new Set(rest.map((m) => m.dept)));
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Team</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Senior people. Every account.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            You won't get a sales team followed by a bench of juniors. The people on your first call are the people doing the work.
          </p>
        </div>
      </Section>

      <Section tone="surface" className="!pt-10">
        <div className="mb-8">
          <p className="eyebrow">Core team</p>
          <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">The founders & engineers driving delivery</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((m) => <DetailedCard key={m.name} m={m} />)}
        </div>
      </Section>

      {depts.map((d) => (
        <Section key={d} className="!py-16">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold">{d}</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {rest.filter((m) => m.dept === d).length} people
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {rest.filter((m) => m.dept === d).map((m) => (
              <div key={m.name} className="card-lift rounded-2xl border border-hairline bg-background p-4">
                <ImagePlaceholder label={`${m.name} — headshot`} aspect="1/1" />
                <div className="p-3">
                  <p className="text-base font-semibold">{m.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
                  <div className="mt-3 flex items-center gap-1.5">
                    <a href="#" aria-label="LinkedIn" className="grid h-7 w-7 place-items-center rounded-md border border-hairline hover:bg-surface">
                      <Linkedin className="h-3 w-3" />
                    </a>
                    <a href="#" aria-label="GitHub" className="grid h-7 w-7 place-items-center rounded-md border border-hairline hover:bg-surface">
                      <Github className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
