import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { services } from "@/content/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, params }) => {
    const s = loaderData?.service;
    const title = s ? `${s.name} — Attrix Technologies` : "Service — Attrix Technologies";
    const desc = s?.summary ?? "Services from Attrix Technologies.";
    const url = `https://attrix.lovable.app/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: s ? [{ rel: "canonical", href: url }] : [],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                name: s.name,
                serviceType: s.tag,
                description: s.details,
                url,
                provider: { "@type": "Organization", name: "Attrix Technologies", url: "https://attrix.lovable.app" },
                areaServed: "Global",
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: `${s.name} — benefits`,
                  itemListElement: s.benefits.map((b: string) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: b } })),
                },
              }),
            },
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://attrix.lovable.app/" },
                  { "@type": "ListItem", position: 2, name: "Services", item: "https://attrix.lovable.app/services" },
                  { "@type": "ListItem", position: 3, name: s.name, item: url },
                ],
              }),
            },
          ]
        : [],
    };
  },
  notFoundComponent: () => (
    <Section>
      <p className="eyebrow">Not found</p>
      <h1 className="mt-3 text-3xl font-bold">Service not found</h1>
      <Link to="/services" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        <ArrowLeft className="h-4 w-4" /> Back to services
      </Link>
    </Section>
  ),
  errorComponent: () => (
    <Section>
      <h1 className="text-2xl font-bold">Something went wrong</h1>
    </Section>
  ),
  component: ServiceDetail,
});

const faqs = [
  { q: "How long does a typical engagement take?", a: "Most projects run 6–14 weeks. We scope tight, ship weekly, and never lock you into open-ended retainers." },
  { q: "Do you work fixed-price or time-and-materials?", a: "Both. We default to fixed-scope with fixed price for well-defined outcomes, and T&M with a cap for open-ended discovery." },
  { q: "Who owns the code and IP?", a: "You do — always. On day one. Full source, docs, and handover included." },
  { q: "Do you offer ongoing support?", a: "Yes, via managed-services plans with SLAs. Optional and never bundled unnecessarily." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <Section className="!pb-10">
        <Link to="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" /> All services
        </Link>
        <div className="mt-6 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Pill>{service.tag}</Pill>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">{service.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{service.details}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">
                Book a consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex h-11 items-center gap-2 rounded-lg border border-border px-5 text-sm font-semibold hover:bg-surface">
                Related case studies
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder label={`${service.name} — hero visual`} aspect="4/3" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="eyebrow">Benefits</p>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-brand" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Technologies</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((t: string) => (
                <li key={t} className="rounded-md border border-hairline bg-background px-2.5 py-1 text-xs">{t}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Timeline & deliverables</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Typical engagement runs 6–14 weeks. Deliverables include a shipped system, source code, architecture docs, and a hand-over playbook.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions." />
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-hairline bg-background p-6">
              <p className="text-sm font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
