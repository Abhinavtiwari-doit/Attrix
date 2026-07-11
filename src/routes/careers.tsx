import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, DollarSign, Briefcase } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/primitives";
import { jobs } from "@/content/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Attrix Technologies" },
      { name: "description", content: "Open roles across engineering, AI, cloud, design, and delivery. Remote-friendly." },
      { property: "og:title", content: "Careers — Attrix Technologies" },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const perks = [
  { title: "Remote-first", body: "Work from anywhere. Optional hubs in Bengaluru and Lisbon." },
  { title: "Meaningful work", body: "Every project moves a real business metric — you'll see the impact." },
  { title: "Senior-only bench", body: "You'll be surrounded by operators who've shipped serious systems." },
  { title: "Learning budget", body: "$2,000/yr for books, courses, and conferences." },
  { title: "Real ownership", body: "Equity for full-timers. Profit-share for extended contractors." },
  { title: "Grown-up culture", body: "No performative hustle. Ship well, take your weekends." },
];

const process = [
  { title: "Intro call", body: "30 minutes with a partner to align on scope, fit, and expectations." },
  { title: "Portfolio review", body: "Walk us through work you've shipped end-to-end." },
  { title: "Paid work sample", body: "A small paid project that mirrors the actual role." },
  { title: "Offer", body: "Compensation, start date, and onboarding plan." },
];

export function CareersPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Careers</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Come build the work you'd be proud to sign.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We hire senior operators who want to do the best work of their careers — with grown-up expectations on all sides.
          </p>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading eyebrow="Life at Attrix" title="What working here actually looks like." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-hairline bg-background p-6">
              <h3 className="text-base font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Open roles" title="We're hiring." />
        <div className="mt-10 divide-y divide-hairline overflow-hidden rounded-2xl border border-hairline bg-background">
          {jobs.map((j) => (
            <div key={j.id} className="grid gap-4 p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-widest text-brand">{j.id} · {j.dept}</p>
                <h3 className="mt-2 text-lg font-semibold">{j.role}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span className="inline-flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {j.experience}</span>
                  <span className="inline-flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {j.salary}</span>
                </div>
              </div>
              <button className="inline-flex h-10 items-center gap-1.5 justify-self-start rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground md:justify-self-end">
                Apply <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading eyebrow="Hiring process" title="What to expect." invert />
        <ol className="mt-12 grid gap-4 md:grid-cols-4">
          {process.map((p, i) => (
            <li key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs font-semibold text-cta">0{i + 1}</p>
              <h3 className="mt-3 text-base font-bold text-white">{p.title}</h3>
              <p className="mt-2 text-xs text-white/70">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
