import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Section, Pill } from "@/components/site/primitives";
import { tools } from "@/content/site";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: [
      { title: "Free Tools — Attrix Technologies" },
      { name: "description", content: "Free calculators, generators, and templates from the Attrix team." },
      { property: "og:title", content: "Free Tools — Attrix Technologies" },
      { property: "og:url", content: "/tools" },
    ],
    links: [{ rel: "canonical", href: "/tools" }],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Free tools</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Small utilities. Real leverage.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            The calculators, generators, and templates we use ourselves — free for you to keep.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="card-lift group flex flex-col rounded-2xl border border-hairline bg-background p-6">
              <div className="flex items-center justify-between">
                <Pill>{t.tag}</Pill>
                <Download className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{t.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.blurb}</p>
              <a href="#" className="mt-4 inline-flex h-9 w-max items-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground">
                Open tool
              </a>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
