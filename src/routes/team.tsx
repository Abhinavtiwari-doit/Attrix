import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Github } from "lucide-react";
import { Section, ImagePlaceholder } from "@/components/site/primitives";
import { team } from "@/content/site";

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

function TeamPage() {
  const depts = Array.from(new Set(team.map((m) => m.dept)));
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
      {depts.map((d) => (
        <Section key={d} className="!py-16" tone={d === "Leadership" ? "surface" : "default"}>
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold">{d}</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {team.filter((m) => m.dept === d).length} people
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {team.filter((m) => m.dept === d).map((m) => (
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
