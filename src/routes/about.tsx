import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, ImagePlaceholder } from "@/components/site/primitives";
import { values, timeline, industries, stats } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Attrix Technologies" },
      { name: "description", content: "Our story, mission, values, and the industries we serve." },
      { property: "og:title", content: "About — Attrix Technologies" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">About Attrix</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">A senior team, built for outcomes.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Attrix Technologies was founded in 2019 to close the gap between glossy strategy decks and software that actually ships. Today we're a global team across engineering, AI, cloud, design, and delivery — trusted by 120+ organizations in 40+ countries.
            </p>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder label="Team collaborating in the studio" aspect="4/5" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-2xl font-bold">Move the business metric.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Every engagement ties back to a measurable outcome the business cares about. If we can't name it, we don't sign it.
            </p>
          </div>
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="mt-3 text-2xl font-bold">The default partner for serious teams.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              A firm that senior operators trust to design and deliver the technology that runs their business.
            </p>
          </div>
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 text-2xl font-bold">Ship, measure, refine.</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Weekly reviewable output, short feedback loops, and honest scope from the first meeting to the last.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Core values" title="Six commitments we won't compromise." />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className="card-lift group rounded-2xl border border-hairline bg-background p-8">
              <p className="font-mono text-xs font-semibold text-brand">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-bold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading eyebrow="Timeline" title="From two people to a global team." invert />
        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {timeline.map((t) => (
            <li key={t.year} className="hover-lift rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]">
              <p className="font-mono text-xs font-semibold text-cta">{t.year}</p>
              <h3 className="mt-2 text-base font-bold text-white">{t.title}</h3>
              <p className="mt-2 text-xs text-white/60">{t.body}</p>
            </li>
          ))}
        </ol>
        <dl className="mt-16 grid gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold text-white">{s.value}</dt>
              <dd className="mt-1 text-xs text-white/60">{s.label}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section>
        <SectionHeading eyebrow="Industries" title="Where we work." />
        <div className="mt-10 flex flex-wrap gap-2">
          {industries.map((i) => (
            <Link key={i.slug} to="/solutions/$slug" params={{ slug: i.slug }}
              className="rounded-full border border-hairline bg-background px-4 py-2 text-sm hover:border-ink">
              {i.name}
            </Link>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground">
            Work with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
