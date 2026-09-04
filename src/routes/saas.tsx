import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Bell,
  Cpu,
  Workflow,
  ShieldCheck,
  Database,
  LineChart,
  Plug,
  Check,
  CircleDot,
} from "lucide-react";
import { Section, Reveal, SectionHeading, Pill } from "@/components/site/primitives";

export const Route = createFileRoute("/saas")({
  head: () => ({
    meta: [
      { title: "Attrix SaaS — Autonomous Operations Platform (Coming Soon)" },
      {
        name: "description",
        content:
          "Attrix SaaS packages the automation, AI agents, and data infrastructure we ship for clients into one platform. Preview the modules, roadmap, and join early access.",
      },
      { property: "og:title", content: "Attrix SaaS — Autonomous Operations Platform" },
      {
        property: "og:description",
        content: "One control plane for agents, workflows, and data. Early access opening soon.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/saas" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Attrix SaaS — Autonomous Operations Platform" },
      {
        name: "twitter:description",
        content: "One control plane for agents, workflows, and data. Early access opening soon.",
      },
    ],
    links: [{ rel: "canonical", href: "/saas" }],
  }),
  component: SaasPage,
});

const modules = [
  { icon: Cpu, code: "M-01", title: "Agent Runtime", body: "Deploy task-scoped AI agents with memory, tool access, and human-in-the-loop approvals." },
  { icon: Workflow, code: "M-02", title: "Flow Builder", body: "Visual, versioned workflows across CRM, billing, support, and internal APIs." },
  { icon: Database, code: "M-03", title: "Unified Data Layer", body: "Warehouse-native sync so every agent and dashboard reads the same source of truth." },
  { icon: LineChart, code: "M-04", title: "Signal Console", body: "Live telemetry on runs, costs, latency, and business outcomes in one board." },
  { icon: Plug, code: "M-05", title: "Connector Grid", body: "Zoho, HubSpot, Slack, Stripe, Postgres, S3 — plus a typed SDK for anything else." },
  { icon: ShieldCheck, code: "M-06", title: "Guardrails", body: "Role scopes, audit trails, PII redaction, and deterministic fallbacks by default." },
];

const roadmap = [
  { phase: "Phase 01", status: "Shipped", title: "Core runtime & connectors", body: "Agent execution engine and the first 20 integrations, battle-tested inside client deployments." },
  { phase: "Phase 02", status: "In build", title: "Flow builder & console", body: "Visual orchestration, run history, and cost telemetry for non-engineering operators." },
  { phase: "Phase 03", status: "Q-next", title: "Private early access", body: "Founding cohort onboarding, migration support, and roadmap co-design sessions." },
  { phase: "Phase 04", status: "Planned", title: "Marketplace", body: "Shareable agent templates and industry packs built by the Attrix team and partners." },
];

const metrics = [
  { value: "40+", label: "Workflows productised" },
  { value: "9.2k", label: "Agent runs / month" },
  { value: "68%", label: "Manual hours removed" },
  { value: "<200ms", label: "Median dispatch" },
];

const faqs = [
  { q: "When does early access open?", a: "We onboard the founding cohort in small batches. Join the waitlist and we'll reach out with a slot and a migration plan." },
  { q: "Is this a replacement for our consulting engagement?", a: "No — it's the same engine, self-serve. Existing clients get their workflows ported at no extra build cost." },
  { q: "Where does our data live?", a: "Warehouse-native. We read from your Postgres, BigQuery, or Snowflake; nothing is copied into a black box." },
];

function SaasPage() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink py-24 text-primary-foreground md:py-32">
        <div className="tech-grid absolute inset-0" />
        <div className="glow-orb left-[10%] top-[-10%] h-72 w-72 bg-brand" />
        <div className="glow-orb right-[8%] top-[30%] h-64 w-64 bg-cta opacity-30" />
        <div className="scanline top-24" />
        <div className="container-page relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
              <Sparkles className="h-3 w-3 text-brand" /> Attrix SaaS · Coming soon
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-primary-foreground md:text-6xl">
              The control plane for
              <br />
              autonomous operations
              <span className="caret-blink text-brand">_</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Every automation, agent, and data pipeline we&apos;ve shipped for clients — packaged
              into one platform your team can run without us in the room.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setJoined(true);
              }}
              className="mx-auto mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                aria-label="Work email"
                className="h-11 flex-1 rounded-lg border border-white/15 bg-white/5 px-4 font-mono text-sm text-primary-foreground placeholder:text-white/40 focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                className="shine inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-brand-foreground transition-transform hover:-translate-y-0.5"
              >
                <Bell className="h-4 w-4" /> {joined ? "You're on the list" : "Request access"}
              </button>
            </form>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-white/40">
              {joined ? "// confirmation queued — we'll be in touch" : "// no spam · founding-cohort pricing"}
            </p>
          </Reveal>

          <Reveal stagger className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="bg-ink px-5 py-6 text-center transition-colors hover:bg-white/5">
                <div className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">{m.value}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">{m.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      <Section>
        <SectionHeading
          eyebrow="Platform modules"
          title="Six systems. One runtime."
          subtitle="Each module ships independently and composes with the rest — start with one, expand when the workflow demands it."
        />
        <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.code}
              className="card-lift group relative overflow-hidden rounded-2xl border border-hairline bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand transition-transform duration-500 group-hover:scale-110">
                  <m.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{m.code}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-brand to-cta transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Console preview */}
      <Section tone="ink">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Signal console</p>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-4xl">
              Watch the machine work.
            </h2>
            <p className="mt-4 text-white/70">
              Every run is traced: which agent fired, what it touched, what it cost, and what it
              changed. No opaque automations, no silent failures.
            </p>
            <ul className="mt-6 space-y-3">
              {["Per-run cost and latency breakdown", "Replay and diff any workflow version", "Alerting on drift, failure, and spend"].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-1 font-mono text-xs">
            <div className="flex items-center gap-1.5 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-2 text-[10px] uppercase tracking-widest text-white/40">attrix · run log</span>
            </div>
            <div className="space-y-1.5 rounded-xl bg-black/50 p-4 text-white/70">
              {[
                ["12:04:11", "agent.invoice_triage", "ok", "312ms"],
                ["12:04:12", "flow.crm_sync", "ok", "88ms"],
                ["12:04:14", "agent.lead_enrich", "ok", "1.2s"],
                ["12:04:19", "guardrail.pii_redact", "ok", "9ms"],
                ["12:04:22", "flow.billing_reconcile", "retry", "2.4s"],
                ["12:04:25", "flow.billing_reconcile", "ok", "640ms"],
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-white/35">{row[0]}</span>
                  <span className="flex-1 truncate text-brand">{row[1]}</span>
                  <span className={row[2] === "ok" ? "text-white/60" : "text-cta"}>{row[2]}</span>
                  <span className="w-12 text-right text-white/40">{row[3]}</span>
                </div>
              ))}
              <div className="pt-2 text-white/40">
                $ attrix watch --live<span className="caret-blink">_</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Roadmap */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Roadmap"
          title="Built in the open, shipped in phases."
          subtitle="We productise only what already runs in production for a paying client."
        />
        <Reveal stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((r) => (
            <div key={r.phase} className="card-lift rounded-2xl border border-hairline bg-background p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.phase}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-hairline px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                  <CircleDot className="h-3 w-3" /> {r.status}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* Perks + FAQ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Founding cohort</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why join early</h2>
            <Reveal stagger className="mt-8 space-y-4">
              {[
                { icon: Rocket, title: "Ship in days, not quarters", body: "Prebuilt workflows, integrations, and dashboards so teams launch fast." },
                { icon: Sparkles, title: "AI where it matters", body: "Agents wired into your data with the guardrails production actually needs." },
                { icon: Bell, title: "Early-access perks", body: "Locked founding pricing, direct roadmap input, and hands-on onboarding." },
              ].map((f) => (
                <div key={f.title} className="hover-glow flex gap-4 rounded-xl border border-hairline bg-background p-5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Straight answers</h2>
            <div className="mt-8 divide-y divide-hairline border-y border-hairline">
              {faqs.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                    {f.q}
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand transition-transform duration-300 group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              <Pill>Warehouse-native</Pill>
              <Pill>SOC-2 track</Pill>
              <Pill>Typed SDK</Pill>
              <Pill>Self-host option</Pill>
            </div>
          </div>
        </div>
      </Section>

    </>
  );
}
