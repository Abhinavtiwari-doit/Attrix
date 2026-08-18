import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/components/site/primitives";

type Row = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  bullets: string[];
  to?: string;
  panel: { label: string; rows: { k: string; v: string }[] };
};

const defaultRows: Row[] = [
  {
    eyebrow: "Service",
    title: "Find the hours your team is",
    accent: "quietly losing",
    body: "We map every manual step across your ops stack, price the waste, and rebuild the worst offenders first.",
    bullets: ["Process audit in week one", "Cost-of-delay per workflow", "Rebuild shipped in 30 days"],
    to: "/services",
    panel: {
      label: "Automation audit",
      rows: [
        { k: "Manual steps found", v: "137" },
        { k: "Hours / week reclaimed", v: "180" },
        { k: "Payback period", v: "6 weeks" },
      ],
    },
  },
  {
    eyebrow: "Product",
    title: "Ship software that survives",
    accent: "the handover",
    body: "Typed, tested, documented product engineering that your own team can extend after we leave.",
    bullets: ["Code in your repos from day one", "Weekly reviewable demos", "Runbooks + training included"],
    to: "/products",
    panel: {
      label: "Delivery snapshot",
      rows: [
        { k: "Test coverage", v: "86%" },
        { k: "Deploys / week", v: "12" },
        { k: "Rollback time", v: "< 2 min" },
      ],
    },
  },
];

/** Alternating product/service showcase rows with a visual data panel. */
export function ShowcaseRows({
  rows = defaultRows,
  eyebrow = "Showcase",
  title = "What working with Attrix actually looks like.",
  subtitle = "Two motions, one bench of senior people — audit the waste, then build the replacement.",
}: {
  rows?: Row[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <Section tone="surface">
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className="mt-16 space-y-20 md:space-y-28">
        {rows.map((r, i) => (
          <Reveal key={r.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className={i % 2 ? "md:order-2" : ""}>
              <div className="group relative overflow-hidden rounded-3xl border border-hairline bg-gradient-to-br from-brand/12 via-background to-cta/10 p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated">
                <div className="tech-grid pointer-events-none absolute inset-0 opacity-25" />
                <div className="relative rounded-2xl border border-hairline bg-background p-5 shadow-soft transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.panel.label}</p>
                  <div className="mt-4 space-y-3">
                    {r.panel.rows.map((row) => (
                      <div key={row.k} className="flex items-center justify-between border-b border-hairline pb-3 last:border-0 last:pb-0">
                        <span className="text-xs text-muted-foreground">{row.k}</span>
                        <span className="font-display text-lg font-bold text-brand">{row.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={i % 2 ? "md:order-1" : ""}>
              <p className="eyebrow">{r.eyebrow}</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                {r.title} <span className="text-brand">{r.accent}</span>
              </h3>
              <p className="mt-4 text-sm text-muted-foreground md:text-base">{r.body}</p>
              <ul className="mt-6 space-y-3">
                {r.bullets.map((b) => (
                  <li key={b} className="group/li flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-brand-foreground transition-transform duration-300 group-hover/li:scale-125">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm transition-colors duration-300 group-hover/li:text-brand">{b}</span>
                  </li>
                ))}
              </ul>
              {r.to && (
                <Link to={r.to} className="group/l mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/l:translate-x-1" />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
