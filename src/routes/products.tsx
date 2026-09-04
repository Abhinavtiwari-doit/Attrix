import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
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
      <Section className="!pt-6">
        <div className="mb-10 flex items-end justify-between gap-5 border-b border-hairline pb-5">
          <div>
            <p className="eyebrow">The catalog</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Pick the layer you need first.</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground sm:block">Start small, connect your existing stack, and expand only when the workflow proves itself.</p>
        </div>
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
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-white/55">Included by default</p>
            <h2 className="mt-3 text-3xl font-bold text-primary-foreground md:text-5xl">Useful on day one. Extendable on day one hundred.</h2>
            <p className="mt-4 text-sm text-white/65 md:text-base">Every product is designed to leave your team with a working foundation, not another isolated subscription.</p>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {[
              ["Working workflows", "The core job is ready to run, not just configure."],
              ["Integration hooks", "Connect the systems you already use through clean extension points."],
              ["Owner-ready docs", "Your operators can understand, maintain, and improve the setup."],
              ["Measured adoption", "Usage and outcome signals show where the product is earning its place."],
            ].map(([title, body]) => (
              <div key={title} className="group grid gap-3 py-5 sm:grid-cols-[1fr_1.2fr_auto] sm:items-center">
                <h3 className="font-semibold text-primary-foreground">{title}</h3>
                <p className="text-sm text-white/55">{body}</p>
                <Check className="h-4 w-4 text-cta transition-transform duration-300 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>
      </Section>
      <section className="container-page py-14 md:py-20">
        <div className="flex flex-col gap-4 border-b border-hairline pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Need something specific?</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">Turn the next product gap into an advantage.</h2>
          </div>
          <Link to="/contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-brand link-underline">
            Request a product conversation <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}

