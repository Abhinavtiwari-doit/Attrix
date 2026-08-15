import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, Reveal } from "@/components/site/primitives";
import { services } from "@/content/site";

/** Left scenario list + right detail panel (tab pattern). */
export function UseCases() {
  const [active, setActive] = useState(services[0].slug);
  const current = services.find((s) => s.slug === active) ?? services[0];

  return (
    <Section>
      <p className="eyebrow">Use cases</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        One team. Every kind of build.
      </h2>
      <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
        Same senior bench, tuned to the job you need done. Pick a scenario to see how we run it.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Engagement scenarios"
          className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {services.map((s) => {
            const on = s.slug === active;
            return (
              <button
                key={s.slug}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(s.slug)}
                className={`shrink-0 rounded-xl border px-4 py-4 text-left text-sm font-semibold transition-all duration-300 lg:w-full ${
                  on
                    ? "border-brand/40 bg-brand/10 text-brand shadow-soft"
                    : "border-hairline bg-background text-ink hover:-translate-y-0.5 hover:border-brand/30 hover:bg-surface"
                }`}
              >
                <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {s.tag}
                </span>
                <span className="mt-1 block">{s.name}</span>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-8">
          <div
            key={current.slug}
            className="route-enter rounded-2xl border border-hairline bg-background p-6 shadow-soft md:p-9"
          >
            <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{current.summary}</h3>
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{current.details}</p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {current.benefits.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3 rounded-xl border border-hairline bg-surface p-4 md:p-6">
              <div className="rounded-lg bg-background p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Client</p>
                <p className="mt-1 text-sm">
                  We&apos;re losing hours a week on this and nobody owns it end to end.
                </p>
              </div>
              <div className="rounded-lg border border-brand/25 bg-brand/5 p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-brand">Attrix</p>
                <p className="mt-1 text-sm">
                  We map it in week one, ship the first working slice in week two, and hand you the runbook.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              {current.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/services/$slug"
              params={{ slug: current.slug }}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              Explore {current.name} <ArrowRight className="icon-nudge h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
