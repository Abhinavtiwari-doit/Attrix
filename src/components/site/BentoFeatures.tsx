import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Cloud, Gauge, LineChart, Workflow } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/components/site/primitives";

/** Bento grid feature breakdown — mixed-size tinted panels. */
export function BentoFeatures() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The platform we build on"
        title="Four capabilities. One operating layer."
        subtitle="Every engagement assembles from the same tested building blocks — so you get speed without bespoke risk."
        align="center"
      />

      <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-6 lg:grid-cols-12">
        {/* Large panel */}
        <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-surface p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 md:col-span-6 lg:col-span-7 lg:row-span-2">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-brand-foreground transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <Workflow className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold tracking-tight md:text-4xl">Workflow automation</h3>
            <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
              Busywork mapped, rebuilt and monitored end-to-end across the tools you already pay for.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { k: "Steps automated", v: "1,400+" },
                { k: "Avg. hours / wk saved", v: "180" },
                { k: "Failure alerting", v: "Real-time" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-hairline bg-background p-4 transition-transform duration-300 hover:-translate-y-1">
                  <p className="font-display text-2xl font-bold text-brand">{s.v}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">{s.k}</p>
                </div>
              ))}
            </div>
            <Link to="/services" className="group/l mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
              Explore automation <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/l:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Two medium */}
        <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-cta/40 md:col-span-3 lg:col-span-5">
          <div className="glow-orb -right-16 -top-20 h-52 w-52 bg-cta/20 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-cta/15 text-cta transition-transform duration-500 group-hover:scale-110">
            <Bot className="h-5 w-5" />
          </span>
          <h3 className="relative mt-5 text-xl font-bold">AI agents & copilots</h3>
          <p className="relative mt-2 text-sm text-muted-foreground">
            Agents wired into real systems — with guardrails, evals and a human escalation path.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-ink p-7 text-primary-foreground transition-all duration-500 hover:-translate-y-1 md:col-span-3 lg:col-span-5">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="glow-orb -bottom-20 -left-16 h-56 w-56 bg-brand/40 opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
          <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-white/10 text-white transition-transform duration-500 group-hover:scale-110">
            <Cloud className="h-5 w-5" />
          </span>
          <h3 className="relative mt-5 text-xl font-bold">Cloud foundations</h3>
          <p className="relative mt-2 text-sm text-white/65">
            Landing zones, CI/CD, cost control and rollback — boring in the best possible way.
          </p>
        </div>

        {/* Bottom row */}
        <div className="group rounded-3xl border border-hairline bg-surface p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 md:col-span-3 lg:col-span-6">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/12 text-brand transition-transform duration-500 group-hover:scale-110">
            <LineChart className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-xl font-bold">Analytics you can trust</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            One source of truth instead of six conflicting exports — modelled, documented, owned by you.
          </p>
        </div>

        <div className="group rounded-3xl border border-hairline bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 md:col-span-3 lg:col-span-6">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand/12 text-brand transition-transform duration-500 group-hover:scale-110">
            <Gauge className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-xl font-bold">Governance & handover</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Access control, audit trails and runbooks so your team can operate it without calling us.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
