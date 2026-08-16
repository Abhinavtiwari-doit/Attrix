import { Bell, GitBranch, LineChart, ShieldCheck, Timer, Users } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/components/site/primitives";

const highlights = [
  { icon: Bell, title: "Instant alerts", body: "Every workflow ships with monitoring, retries, and a human escalation path." },
  { icon: LineChart, title: "Who converts", body: "Attribution wired into the build, so you see which motion actually earns revenue." },
  { icon: Timer, title: "Drop-off", body: "We instrument each step and hunt the stage quietly leaking your pipeline." },
];

const included = [
  { icon: Users, title: "Senior pod", body: "Named engineers, no rotating juniors." },
  { icon: GitBranch, title: "Your repo", body: "Code and automations live in your accounts from day one." },
  { icon: ShieldCheck, title: "Governance", body: "Access control, audit trails, and rollback baked in." },
  { icon: Timer, title: "Weekly demo", body: "Reviewable output every Friday — never a black box." },
  { icon: LineChart, title: "Metric baseline", body: "We measure before and after, and publish both." },
  { icon: Bell, title: "Runbook handover", body: "Docs your team can operate without calling us." },
];

/** Metric-card row + "every engagement includes" grid. */
export function EngagementIncludes() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Detailed breakdown"
        title="You see exactly what the work is doing."
        subtitle="No opaque retainers. Every engagement is instrumented, reported, and handed over."
      />

      <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-3">
        {highlights.map((h) => (
          <div key={h.title} className="card-lift group rounded-2xl border border-hairline bg-background p-6">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <h.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold transition-colors duration-300 group-hover:text-brand">{h.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{h.body}</p>
          </div>
        ))}
      </Reveal>

      <p className="mt-16 eyebrow">Every engagement includes</p>
      <Reveal stagger className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
        {included.map((i) => (
          <div key={i.title} className="group bg-background p-6 transition-colors duration-300 hover:bg-surface">
            <i.icon className="h-5 w-5 text-brand transition-transform duration-300 group-hover:scale-110" />
            <h3 className="mt-4 text-sm font-semibold">{i.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{i.body}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
