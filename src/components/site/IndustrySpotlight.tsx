import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { industries } from "@/content/site";

const outcomes: Record<string, { metric: string; caption: string }> = {
  healthcare: { metric: "-77%", caption: "Patient intake time after automation" },
  finance: { metric: "4.2x", caption: "Faster onboarding checks with clean pipelines" },
  education: { metric: "+38%", caption: "Applicant conversion after CRM rebuild" },
  retail: { metric: "-31%", caption: "Stockouts after inventory intelligence" },
  manufacturing: { metric: "99.9%", caption: "Line visibility across connected plants" },
  "real-estate": { metric: "6 hrs", caption: "Lead-to-lease cycle, down from 3 days" },
  startups: { metric: "21 days", caption: "Brief to production MVP" },
  hospitality: { metric: "+24%", caption: "Direct bookings after guest-flow rework" },
  technology: { metric: "12 min", caption: "Deploy pipeline, previously 2 hours" },
};

/** Dark vertical-tab industry spotlight with an offset accent panel. */
export function IndustrySpotlight() {
  const [active, setActive] = useState(industries[0].slug);
  const current = industries.find((i) => i.slug === active) ?? industries[0];
  const outcome = outcomes[current.slug] ?? { metric: "3x", caption: "Typical improvement in the first quarter" };

  return (
    <Section tone="ink">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-white/50">High-impact solutions</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Built for the realities of your sector.
          </h2>
          <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {industries.map((i) => {
              const on = i.slug === active;
              return (
                <li key={i.slug}>
                  <button
                    onMouseEnter={() => setActive(i.slug)}
                    onFocus={() => setActive(i.slug)}
                    onClick={() => setActive(i.slug)}
                    aria-pressed={on}
                    className={`flex w-full items-center justify-between gap-4 py-4 text-left transition-all duration-300 ${
                      on ? "pl-3 text-primary-foreground" : "text-white/55 hover:pl-2 hover:text-white/90"
                    }`}
                  >
                    <span className="text-lg font-semibold tracking-tight md:text-xl">{i.name}</span>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                        on ? "translate-x-0 text-cta opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <div
            key={current.slug}
            className="route-enter relative overflow-hidden rounded-2xl bg-cta p-8 text-cta-foreground shadow-elevated md:p-10"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-2xl" />
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">{current.name}</p>
            <p className="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">{outcome.metric}</p>
            <p className="mt-2 max-w-xs text-sm opacity-85">{outcome.caption}</p>
            <p className="mt-8 max-w-md text-base font-medium md:text-lg">{current.blurb}</p>
            <Link
              to="/solutions/$slug"
              params={{ slug: current.slug }}
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore {current.name} <ArrowRight className="icon-nudge h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
