import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { industries, projects } from "@/content/site";

export const Route = createFileRoute("/solutions/$slug")({
  loader: ({ params }) => {
    const industry = industries.find((i) => i.slug === params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.industry;
    const title = i ? `${i.name} Solutions — Attrix Technologies` : "Industry — Attrix Technologies";
    return {
      meta: [
        { title },
        { name: "description", content: i?.blurb ?? "Industry solutions." },
        { property: "og:title", content: title },
        { property: "og:url", content: i ? `/solutions/${i.slug}` : "/solutions" },
      ],
      links: i ? [{ rel: "canonical", href: `/solutions/${i.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <Section>
      <h1 className="text-3xl font-bold">Industry not found</h1>
      <Link to="/solutions" className="mt-4 text-sm text-brand">Back to solutions</Link>
    </Section>
  ),
  errorComponent: () => <Section><h1 className="text-2xl font-bold">Something went wrong</h1></Section>,
  component: IndustryDetail,
});

function IndustryDetail() {
  const { industry } = Route.useLoaderData();
  return (
    <>
      <Section className="!pb-10">
        <Link to="/solutions" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" /> All industries
        </Link>
        <div className="mt-6 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Pill>Industry</Pill>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{industry.name} solutions.</h1>
            <p className="mt-5 text-lg text-muted-foreground">{industry.blurb}</p>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder label={`${industry.name} — hero visual`} aspect="4/3" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Challenges", body: "Fragmented tooling, regulatory friction, and manual work that scales linearly with headcount." },
            { title: "Our approach", body: "A staged roadmap that ships value each quarter — no multi-year transformation theater." },
            { title: "Outcomes", body: "Fewer tools, tighter feedback loops, and measurable cost or revenue movement per initiative." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-hairline bg-background p-8">
              <p className="eyebrow">{b.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold">Related case studies</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }}
              className="card-lift rounded-2xl border border-hairline bg-background p-4">
              <ImagePlaceholder label={p.name} aspect="4/3" />
              <div className="p-2">
                <Pill>{p.industry}</Pill>
                <h3 className="mt-3 text-base font-semibold">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/contact" className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground">
            Discuss your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
