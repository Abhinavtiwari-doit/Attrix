import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Rocket, Bell } from "lucide-react";
import { Section, Pill } from "@/components/site/primitives";

export const Route = createFileRoute("/saas")({
  head: () => ({
    meta: [
      { title: "SaaS — Coming Soon | Attrix Technologies" },
      { name: "description", content: "Our upcoming SaaS platform — a purpose-built product from the Attrix team. Join the early-access list." },
      { property: "og:title", content: "SaaS — Coming Soon | Attrix Technologies" },
      { property: "og:description", content: "Our upcoming SaaS platform — a purpose-built product from the Attrix team." },
      { property: "og:url", content: "/saas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/saas" }],
  }),
  component: SaasPage,
});

function SaasPage() {
  return (
    <>
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Pill>
            <Sparkles className="mr-1 inline h-3 w-3" /> Coming soon
          </Pill>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">
            A SaaS built on everything we&apos;ve shipped.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            We&apos;re packaging the automation, AI, and data patterns we deploy for clients into a
            single product. Early access opens soon — leave your email and we&apos;ll reach out first.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Bell className="h-4 w-4" /> Join the waitlist
            </Link>
            <Link
              to="/products"
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-semibold hover:bg-surface"
            >
              Explore products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="!pt-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Rocket, title: "Ship in days, not quarters", body: "Prebuilt workflows, integrations, and dashboards so teams launch fast." },
            { icon: Sparkles, title: "AI where it matters", body: "Agents and copilots wired into your data, with the guardrails production needs." },
            { icon: Bell, title: "Early-access perks", body: "Founding customers get discounted pricing, direct roadmap input, and hands-on onboarding." },
          ].map((f) => (
            <div key={f.title} className="card-lift group rounded-2xl border border-hairline bg-background p-6">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand/10 text-brand">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
