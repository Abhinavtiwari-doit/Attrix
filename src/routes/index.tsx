import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Cloud, Cpu, BarChart3, Workflow, Boxes, Shield, Star } from "lucide-react";
import { Section, SectionHeading, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { services, industries, stats, clientLogos, technologies, projects, testimonials, process } from "@/content/site";
import heroTeam from "@/assets/hero-team.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { name: "description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { property: "og:title", content: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { property: "og:description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceIcons: Record<string, typeof Zap> = {
  "business-automation": Workflow,
  "ai-integration": Sparkles,
  "cloud-aws": Cloud,
  "crm-consulting": Boxes,
  "software-development": Cpu,
  "no-code-development": Zap,
  "data-analytics": BarChart3,
  "digital-transformation": Shield,
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]">
          <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-cta/10 blur-3xl" />
        </div>
        <div className="container-page grid gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1 text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono uppercase tracking-widest text-ink-soft">Now booking Q3 engagements</span>
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]">
              Technology that moves the business — <span className="text-brand">not just the demo.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Attrix Technologies partners with ambitious teams to design, ship, and operate the automation, AI, cloud, and software that measurably grows the business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Start a project <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projects" className="inline-flex h-12 items-center gap-2 rounded-lg border border-border px-6 text-sm font-semibold hover:bg-surface">
                See case studies
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <ImagePlaceholder label="Product photography — team collaborating around a dashboard" aspect="4/5" />
              <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-xl border border-hairline bg-background p-4 shadow-elevated md:block">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <p className="text-xs font-medium">System health</p>
                </div>
                <p className="mt-2 font-display text-xl font-bold">99.98%</p>
                <p className="text-[11px] text-muted-foreground">Uptime across managed clients</p>
              </div>
              <div className="absolute -right-4 -top-4 hidden w-56 rounded-xl border border-hairline bg-background p-4 shadow-elevated md:block">
                <p className="eyebrow">Automation</p>
                <p className="mt-1 text-sm font-semibold">180+ hrs / week saved</p>
                <p className="text-[11px] text-muted-foreground">Across active client workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logo cloud */}
        <div className="hairline-t">
          <div className="container-page py-10">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Trusted by teams shipping serious software
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-5">
              {clientLogos.slice(0, 10).map((l) => (
                <div key={l} className="text-center font-display text-sm font-semibold text-muted-foreground/70">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="A senior team across every layer of your stack."
            subtitle="From boardroom strategy to on-call engineers — one accountable partner instead of three."
          />
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-brand link-underline">
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s) => {
            const Icon = serviceIcons[s.slug] ?? Zap;
            return (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="card-lift group rounded-2xl border border-hairline bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-brand transition group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.tag}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-ink">
                  Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why teams pick us"
              title="Outcomes, not deliverables."
              subtitle="We're paid on the business metric moving — not on lines of code or pretty slides."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Senior consultants only — no juniors on your account",
                "Fixed-scope engagements with weekly reviewable output",
                "Fluent across automation, AI, cloud, CRM, and product",
                "Handover documentation your team can actually maintain",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-brand-foreground">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-hairline bg-background p-6">
                <p className="eyebrow">Before</p>
                <p className="mt-3 font-display text-3xl font-bold text-ink-soft line-through decoration-cta/60">40 min</p>
                <p className="text-xs text-muted-foreground">Manual patient intake</p>
              </div>
              <div className="rounded-2xl border border-brand/40 bg-background p-6 shadow-soft">
                <p className="eyebrow">After</p>
                <p className="mt-3 font-display text-3xl font-bold text-brand">9 min</p>
                <p className="text-xs text-muted-foreground">Automated intake</p>
              </div>
              <div className="rounded-2xl border border-hairline bg-background p-6">
                <p className="eyebrow">Before</p>
                <p className="mt-3 font-display text-3xl font-bold text-ink-soft line-through decoration-cta/60">4 tools</p>
                <p className="text-xs text-muted-foreground">Fragmented ops stack</p>
              </div>
              <div className="rounded-2xl border border-brand/40 bg-background p-6 shadow-soft">
                <p className="eyebrow">After</p>
                <p className="mt-3 font-display text-3xl font-bold text-brand">1 console</p>
                <p className="text-xs text-muted-foreground">Unified operations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Domain fluency across nine sectors."
          subtitle="We arrive on day one already speaking your business — not spending three months learning it."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to="/solutions/$slug"
              params={{ slug: i.slug }}
              className="card-lift group flex items-center justify-between rounded-xl border border-hairline bg-background p-5"
            >
              <div>
                <p className="text-base font-semibold">{i.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i.blurb}</p>
              </div>
              <ArrowUpRight className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </Section>

      {/* TECHNOLOGY ECOSYSTEM */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Ecosystem"
          title="Fluent across the tools you already use."
          subtitle="We standardize on proven stacks — and integrate cleanly with whatever else you're running."
          invert
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(technologies).map(([category, items]) => (
            <div key={category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/50">{category}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {items.map((t) => (
                  <li key={t} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/85">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured work" title="Case studies from the last 12 months." />
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-brand link-underline">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="card-lift group rounded-2xl border border-hairline bg-background p-3">
              <ImagePlaceholder label={`Case study cover — ${p.name}`} aspect="4/3" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Pill>{p.industry}</Pill>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-ink-soft">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="surface">
        <SectionHeading eyebrow="Voices" title="What our clients say." />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-hairline bg-background p-8">
              <div className="flex gap-0.5 text-cta">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-surface font-display text-sm font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section>
        <SectionHeading eyebrow="How we work" title="A seven-step process, refined over 120+ engagements." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="rounded-xl border border-hairline bg-background p-6">
              <p className="font-mono text-xs font-semibold text-brand">{p.step}</p>
              <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink" className="!py-24">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="Have a project in mind? Let's talk."
              subtitle="A 30-minute call is usually enough to know if we're a fit — and what the first quarter could look like."
              invert
            />
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-lg bg-cta px-6 text-sm font-semibold text-cta-foreground hover:brightness-105">
              Book a consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projects" className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-6 text-sm font-semibold text-white hover:bg-white/10">
              See what we've shipped
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
