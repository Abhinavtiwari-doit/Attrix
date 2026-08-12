import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, Pill } from "@/components/site/primitives";
import { services } from "@/content/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Attrix Technologies" },
      { name: "description", content: "Automation, AI, cloud, CRM, and software services delivered by senior consultants." },
      { property: "og:title", content: "Services — Attrix Technologies" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Services</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            Consulting that ships production software.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Eight practice areas, one accountable partner. Fixed-scope engagements, senior teams, weekly reviewable output.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="card-lift group flex flex-col justify-between rounded-2xl border border-hairline bg-background p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Pill>{String(i + 1).padStart(2, "0")} · {s.tag}</Pill>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.details}</p>
                <ul className="mt-5 space-y-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="text-sm text-ink">• {b}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {s.technologies.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-ink-soft">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="ink">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <SectionHeading eyebrow="Ready?" title="Tell us what you're building." invert />
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-cta px-6 text-sm font-semibold text-cta-foreground">
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
