import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { StackedCapabilities } from "@/components/site/StackedCapabilities";
import { EngagementIncludes } from "@/components/site/EngagementIncludes";
import { CtaCard } from "@/components/site/CtaCard";
import { BentoFeatures } from "@/components/site/BentoFeatures";
import { ShowcaseRows } from "@/components/site/ShowcaseRows";
import { products } from "@/content/site";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Attrix Technologies" },
      { name: "description", content: "SaaS products, dashboards, plugins, and AI agents built by the Attrix team." },
      { property: "og:title", content: "Products — Attrix Technologies" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Marketplace</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Products we build. Ready when you are.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              SaaS, dashboards, plugins, and AI agents — packaged from the same practices we run for consulting clients.
            </p>
          </div>
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-semibold hover:bg-surface">
            Request a demo
          </Link>
        </div>
      </Section>
      <ShowcaseRows
        eyebrow="Built for adoption"
        title="Products with a job to do."
        subtitle="Focused tools, measured outcomes, and a team behind the rollout when you need it."
      />
      <Section className="!pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <div key={p.slug} className="card-lift group flex flex-col rounded-2xl border border-hairline bg-background p-4">
              <ImagePlaceholder label={`${p.name} — product screenshot`} aspect="16/10" />
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center justify-between">
                  <Pill>{p.category}</Pill>
                  <span className="text-xs font-semibold text-brand">{p.price}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <a href="#" className="inline-flex h-9 items-center gap-1 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground">
                    Buy now <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a href="#" className="inline-flex h-9 items-center rounded-md border border-border px-3 text-xs font-semibold hover:bg-surface">
                    Live demo
                  </a>
                  <a href="#" className="inline-flex h-9 items-center rounded-md px-3 text-xs font-semibold text-muted-foreground hover:text-ink">
                    Docs
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <BentoFeatures />
      <StackedCapabilities />
      <EngagementIncludes />
      <CtaCard eyebrow="Ready?" title="Need a product built like these?" secondaryLabel="See our work" secondaryTo="/projects" />
    </>
  );
}

