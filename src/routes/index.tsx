import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Zap, Cloud, Cpu, BarChart3, Workflow, Boxes, Shield } from "lucide-react";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { VideoTutorials } from "@/components/site/VideoTutorials";
import { UseCases } from "@/components/site/UseCases";
import { IndustrySpotlight } from "@/components/site/IndustrySpotlight";
import { EngagementIncludes } from "@/components/site/EngagementIncludes";
import { StackedCapabilities } from "@/components/site/StackedCapabilities";
import { CtaCard } from "@/components/site/CtaCard";
import { Section, SectionHeading, ImagePlaceholder, Pill, Reveal } from "@/components/site/primitives";
import { services, industries, stats, clientLogos, projects, process } from "@/content/site";
import heroTeam from "@/assets/hero-team.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { name: "description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { property: "og:title", content: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { property: "og:description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { property: "og:url", content: "https://attrix.lovable.app/" },
      { property: "og:image", content: `https://attrix.lovable.app${heroTeam}` },
      { name: "twitter:image", content: `https://attrix.lovable.app${heroTeam}` },
    ],
    links: [{ rel: "canonical", href: "https://attrix.lovable.app/" }],
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
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="tech-grid absolute inset-0 opacity-60" />
          <div className="animate-blob absolute -left-40 top-0 h-96 w-96 rounded-full bg-brand/10 blur-3xl" />
          <div className="animate-float absolute -right-20 top-40 h-80 w-80 rounded-full bg-cta/10 blur-3xl" />
        </div>

        <div className="container-page pb-16 pt-20 md:pb-24 md:pt-28">
          <div className="max-w-4xl">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-hairline bg-background px-3 py-1 text-xs transition-colors hover:border-brand/50">
              <span className="animate-pulse-ring h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono uppercase tracking-widest text-ink-soft">Now booking Q3 engagements</span>
            </div>
            <h1 className="animate-fade-up mt-7 text-[40px] font-bold leading-[1.03] tracking-tight [animation-delay:80ms] sm:text-6xl md:text-7xl lg:text-[80px]">
              Accelerate your journey from AI investment to{" "}
              <span className="text-brand">enterprise impact.</span>
            </h1>
            <p className="animate-fade-up mt-7 max-w-2xl text-base text-muted-foreground [animation-delay:160ms] md:text-lg">
              Attrix designs, ships, and operates the automation, AI, cloud, and software that measurably grows the business — not just the demo.
            </p>
            <div className="animate-fade-up mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
              <Link to="/contact" className="shine group inline-flex h-12 items-center gap-2 rounded-lg bg-cta px-6 text-sm font-semibold text-cta-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105">
                Start a project <ArrowRight className="icon-nudge h-4 w-4" />
              </Link>
              <Link to="/projects" className="group inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-background px-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:bg-surface">
                See case studies <ArrowRight className="icon-nudge h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Command bar */}
          <div className="animate-fade-up mt-14 rounded-2xl bg-ink p-4 shadow-elevated [animation-delay:320ms] md:p-6">
            <Link
              to="/contact"
              className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-cta" />
              <span className="flex-1 truncate text-sm text-white/70">
                Tell Attrix what you want to automate, build, or migrate…
              </span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowRight className="h-4 w-4 text-white" />
              </span>
            </Link>
            <p className="mt-4 text-center text-xs text-white/45">
              Not sure where to start? See how we agentify an enterprise:
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {industries.slice(0, 4).map((i) => (
                <Link
                  key={i.slug}
                  to="/solutions/$slug"
                  params={{ slug: i.slug }}
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
                >
                  <ArrowRight className="h-3 w-3 text-cta transition-transform duration-300 group-hover:translate-x-0.5" />
                  {i.name}
                </Link>
              ))}
            </div>
          </div>

          <dl className="animate-fade-up mt-14 grid grid-cols-2 gap-6 border-t border-hairline pt-10 [animation-delay:400ms] sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="transition-transform duration-300 hover:-translate-y-1">
                <dt className="font-display text-3xl font-bold transition-colors duration-300 hover:text-brand">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>



        {/* Logo cloud */}
        <div className="hairline-t">
          <div className="container-page py-14">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Trusted by 120+ teams
              </span>
              <p className="max-w-xl text-sm text-muted-foreground">
                From venture-backed startups to Fortune 1000 operators — teams shipping serious software choose Attrix.
              </p>
            </div>
            <div className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <div className="flex animate-[marquee_40s_linear_infinite] gap-3 whitespace-nowrap">
                {[...clientLogos, ...clientLogos].map((l, i) => (
                  <div
                    key={`${l}-${i}`}
                    className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg border border-hairline bg-background px-5 font-display text-sm font-semibold tracking-tight text-ink-soft transition hover:border-ink/40 hover:text-ink"
                  >
                    {l}
                  </div>
                ))}
              </div>
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
        <Reveal stagger className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-surface text-brand transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-brand-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{s.tag}</span>
                </div>
                <h3 className="mt-6 text-lg font-semibold transition-colors duration-300 group-hover:text-brand">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-ink">
                  Learn more <ArrowUpRight className="icon-nudge-up h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </Reveal>

      </Section>

      {/* USE CASES */}
      <UseCases />

      {/* WHY CHOOSE */}
      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Why teams pick us"
              title="Outcomes, not deliverables."
              subtitle="We're paid on the business metric moving — not on lines of code or pretty slides."
            />
            <Reveal stagger as="div" className="mt-8 space-y-4">
              {[
                "Senior consultants only — no juniors on your account",
                "Fixed-scope engagements with weekly reviewable output",
                "Fluent across automation, AI, cloud, CRM, and product",
                "Handover documentation your team can actually maintain",
              ].map((item) => (
                <div key={item} className="group flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-brand-foreground transition-transform duration-300 group-hover:scale-125">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm transition-colors duration-300 group-hover:text-brand">{item}</span>
                </div>
              ))}
            </Reveal>

          </div>
          <div className="lg:col-span-7">
            <Reveal stagger className="grid grid-cols-2 gap-4">
              <div className="hover-lift rounded-2xl border border-hairline bg-background p-6">
                <p className="eyebrow">Before</p>
                <p className="mt-3 font-display text-3xl font-bold text-ink-soft line-through decoration-cta/60">40 min</p>
                <p className="text-xs text-muted-foreground">Manual patient intake</p>
              </div>
              <div className="hover-lift rounded-2xl border border-brand/40 bg-background p-6 shadow-soft">
                <p className="eyebrow">After</p>
                <p className="mt-3 font-display text-3xl font-bold text-brand">9 min</p>
                <p className="text-xs text-muted-foreground">Automated intake</p>
              </div>
              <div className="hover-lift rounded-2xl border border-hairline bg-background p-6">
                <p className="eyebrow">Before</p>
                <p className="mt-3 font-display text-3xl font-bold text-ink-soft line-through decoration-cta/60">4 tools</p>
                <p className="text-xs text-muted-foreground">Fragmented ops stack</p>
              </div>
              <div className="hover-lift rounded-2xl border border-brand/40 bg-background p-6 shadow-soft">
                <p className="eyebrow">After</p>
                <p className="mt-3 font-display text-3xl font-bold text-brand">1 console</p>
                <p className="text-xs text-muted-foreground">Unified operations</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* VISUAL BAND */}
      <section className="container-page py-10">
        <Reveal className="group relative overflow-hidden rounded-3xl border border-hairline">
          <img
            src={heroAbstract}
            alt="Isometric visualization of Attrix data, automation, and AI stack"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </Reveal>
      </section>

      {/* INDUSTRY SPOTLIGHT */}
      <IndustrySpotlight />

      {/* ENGAGEMENT INCLUDES */}
      <EngagementIncludes />

      {/* INDUSTRIES */}
      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Domain fluency across nine sectors."
          subtitle="We arrive on day one already speaking your business — not spending three months learning it."
        />
        <Reveal stagger className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {industries.map((i) => (
            <Link
              key={i.slug}
              to="/solutions/$slug"
              params={{ slug: i.slug }}
              className="card-lift group flex items-center justify-between rounded-xl border border-hairline bg-background p-5"
            >
              <div>
                <p className="text-base font-semibold transition-colors duration-300 group-hover:text-brand">{i.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{i.blurb}</p>
              </div>
              <ArrowUpRight className="icon-nudge-up ml-3 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-brand" />
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* SKILLS / STACK */}
      <StackedCapabilities />


      {/* PROJECTS */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Featured work" title="Case studies from the last 12 months." />
          <Link to="/projects" className="inline-flex items-center gap-1 text-sm font-semibold text-brand link-underline">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="card-lift group rounded-2xl border border-hairline bg-background p-3">
              <ImagePlaceholder label={`Case study cover — ${p.name}`} aspect="4/3" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Pill>{p.industry}</Pill>
                  <ArrowUpRight className="icon-nudge-up h-4 w-4 text-muted-foreground group-hover:text-brand" />
                </div>
                <h3 className="mt-4 text-lg font-semibold transition-colors duration-300 group-hover:text-brand">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-surface px-2 py-0.5 text-[11px] text-ink-soft transition-colors duration-300 hover:bg-brand/10 hover:text-brand">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* TESTIMONIALS */}
      <Section tone="surface">
        <SectionHeading eyebrow="Voices" title="What our clients say." />
        <TestimonialsCarousel />
      </Section>

      {/* VIDEO WALKTHROUGHS */}
      <VideoTutorials tone="default" />

      {/* PROCESS */}
      <Section>
        <SectionHeading eyebrow="How we work" title="A seven-step process, refined over 120+ engagements." />
        <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="card-lift group rounded-xl border border-hairline bg-background p-6">
              <p className="font-mono text-xs font-semibold text-brand transition-transform duration-300 group-hover:translate-x-1">{p.step}</p>
              <h3 className="mt-3 text-base font-semibold transition-colors duration-300 group-hover:text-brand">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* CTA */}
      <CtaCard />

    </>
  );
}
