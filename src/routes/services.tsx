import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, Pill } from "@/components/site/primitives";
import { process, services } from "@/content/site";

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
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow text-white/55">Our delivery rhythm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              A service is only useful when it reaches the finish line.
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/65 md:text-base">
              Every practice follows the same accountable path, adapted to the risk and pace of your work.
            </p>
          </div>
          <ol className="grid gap-0 border-y border-white/10">
            {process.map((step) => (
              <li key={step.step} className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-white/10 py-5 last:border-0 md:grid-cols-[4rem_1fr_auto] md:items-center">
                <span className="font-mono text-xs text-cta transition-transform duration-300 group-hover:translate-x-1">{step.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-primary-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/55">{step.body}</p>
                </div>
                <ArrowRight className="hidden h-4 w-4 text-brand transition-transform duration-300 group-hover:translate-x-1 md:block" />
              </li>
            ))}
          </ol>
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
      <section className="container-page py-14 md:py-20">
        <div className="flex flex-col gap-5 border-y border-hairline py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow">Next move</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Know the bottleneck. Now make it disappear.</h2>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand link-underline">
            Talk to the delivery team <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

