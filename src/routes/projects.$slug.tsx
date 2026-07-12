import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { projects } from "@/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — Case Study` : "Case Study — Attrix Technologies";
    return {
      meta: [
        { title },
        { name: "description", content: p?.summary ?? "Case study." },
        { property: "og:title", content: title },
        { property: "og:url", content: p ? `/projects/${p.slug}` : "/projects" },
        { property: "og:type", content: "article" },
      ],
      links: p ? [{ rel: "canonical", href: `/projects/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <Section><h1 className="text-3xl font-bold">Project not found</h1></Section>
  ),
  errorComponent: () => <Section><h1 className="text-2xl font-bold">Something went wrong</h1></Section>,
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <Section className="!pb-10">
        <Link to="/projects" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" /> All projects
        </Link>
        <div className="mt-6">
          <Pill>{project.industry}</Pill>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">{project.name}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.summary}</p>
        </div>
        <div className="mt-10">
          <ImagePlaceholder label={`${project.name} — hero`} aspect="16/9" />
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-8 md:grid-cols-3">
          {project.metrics.map((m: { k: string; v: string }) => (
            <div key={m.k} className="rounded-2xl border border-hairline bg-background p-8">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.k}</p>
              <p className="mt-3 font-display text-4xl font-bold text-brand">{m.v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { title: "The challenge", body: "Legacy tooling, fragmented data, and a team stretched thin by manual work that didn't scale." },
            { title: "Our approach", body: "Two-week discovery, a phased roadmap, and weekly reviewable output shipped end-to-end by a senior team." },
            { title: "The result", body: "Measured improvement across the metrics the business actually cares about — with a documented system the client owns." },
          ].map((b) => (
            <div key={b.title}>
              <p className="eyebrow">{b.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <p className="text-sm font-semibold">Stack:</p>
          {project.tech.map((t: string) => (
            <span key={t} className="rounded-md border border-hairline bg-background px-2.5 py-1 text-xs">{t}</span>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground">
            Start a project like this <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
