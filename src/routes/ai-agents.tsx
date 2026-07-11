import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot } from "lucide-react";
import { Section, SectionHeading, Pill } from "@/components/site/primitives";
import { aiAgents } from "@/content/site";

export const Route = createFileRoute("/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents — Attrix Technologies" },
      { name: "description", content: "Purpose-built AI agents for support, sales, ops, and finance — deployed and monitored end-to-end." },
      { property: "og:title", content: "AI Agents — Attrix Technologies" },
      { property: "og:url", content: "/ai-agents" },
    ],
    links: [{ rel: "canonical", href: "/ai-agents" }],
  }),
  component: AiAgentsPage,
});

function AiAgentsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <Pill>AI Agents</Pill>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">Agents that do the work — not just chat about it.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Purpose-built AI agents for the exact workflows where deflection, speed, and consistency move the metric.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {aiAgents.map((a) => (
            <div key={a.name} className="card-lift group rounded-2xl border border-hairline bg-background p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                <Bot className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-base font-semibold">{a.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.blurb}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading eyebrow="Deployment" title="Ship in weeks, monitored from day one."
          subtitle="Agents built on your knowledge base, integrated with your stack, and observed with the same discipline as any production system." />
        <div className="mt-10">
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground">
            Design your agent <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
