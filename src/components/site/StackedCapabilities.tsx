import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Cloud, Cpu, Database, LineChart, Sparkles, Workflow } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { technologies } from "@/content/site";

const meta: Record<string, { icon: typeof Cloud; note: string }> = {
  Cloud: { icon: Cloud, note: "Landing zones, cost control, and zero-drama migrations." },
  Automation: { icon: Workflow, note: "End-to-end busywork removal across your existing tools." },
  AI: { icon: Sparkles, note: "Agents and copilots wired into real business systems." },
  CRM: { icon: Boxes, note: "Pipelines, scoring, and revenue plumbing that stays clean." },
  Development: { icon: Cpu, note: "Production software — typed, tested, and handed over." },
  Analytics: { icon: LineChart, note: "One source of truth instead of six conflicting exports." },
  Infrastructure: { icon: Database, note: "Repeatable deploys with rollback baked in." },
};

const entries = Object.entries(technologies);

/** Layered stack of capability cards — click a band to expand its stack. */
export function StackedCapabilities() {
  const [active, setActive] = useState(entries[0][0]);

  return (
    <Section tone="surface">
      <div className="max-w-3xl">
        <p className="eyebrow">Skills & stack</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Seven practices. One stacked bench.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Open a layer to see the exact tools we run in production for that practice.
        </p>
      </div>

      <div className="mt-12 space-y-[-14px]">
        {entries.map(([category, items], idx) => {
          const on = category === active;
          const Icon = meta[category]?.icon ?? Cpu;
          return (
            <div
              key={category}
              style={{ zIndex: idx + 1 }}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                on
                  ? "border-brand/35 bg-background shadow-elevated"
                  : "border-hairline bg-background/85 hover:-translate-y-1 hover:border-brand/25"
              }`}
            >
              <button
                type="button"
                aria-expanded={on}
                onClick={() => setActive(category)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-9"
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-lg transition-all duration-300 ${
                      on ? "bg-brand text-brand-foreground" : "bg-surface text-brand"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-soft">{category}</span>
                </span>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(items.length).padStart(2, "0")}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ${on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-8 px-6 pb-9 md:grid-cols-12 md:px-9">
                    <div className="md:col-span-6">
                      <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{category}</h3>
                      <p className="mt-3 max-w-md text-sm text-muted-foreground md:text-base">
                        {meta[category]?.note ?? "Production-grade delivery in this practice area."}
                      </p>
                      <Link
                        to="/services"
                        className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                      >
                        Explore {category} <ArrowRight className="icon-nudge h-4 w-4" />
                      </Link>
                    </div>
                    <div className="md:col-span-6">
                      <div className="flex flex-wrap gap-2 rounded-2xl border border-hairline bg-surface p-5">
                        {items.map((t) => (
                          <span
                            key={t}
                            className="rounded-lg border border-hairline bg-background px-3 py-1.5 text-xs font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:text-brand"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
