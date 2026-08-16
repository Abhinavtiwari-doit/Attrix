import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/primitives";

/** Floating dark CTA card with margin, grid backdrop and glow effects. */
export function CtaCard({
  eyebrow = "Ready?",
  title = "Tell us what you're building.",
  subtitle = "A 30-minute call is usually enough to know if we're a fit — and what the first quarter could look like.",
  primaryLabel = "Book a consultation",
  primaryTo = "/contact",
  secondaryLabel = "See what we've shipped",
  secondaryTo = "/projects",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="px-5 py-14 md:px-8 md:py-20">
      <Reveal className="container-page">
        <div className="group relative overflow-hidden rounded-[28px] bg-ink p-8 shadow-elevated transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-30px_rgb(15_23_42_/_0.55)] md:p-14">
          <div className="tech-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="glow-orb -left-24 -top-24 h-72 w-72 bg-brand/40 transition-opacity duration-700 group-hover:opacity-80" />
          <div className="glow-orb -bottom-28 -right-16 h-80 w-80 bg-cta/35 transition-opacity duration-700 group-hover:opacity-80" />

          <div className="relative grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">{eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className="mt-4 max-w-xl text-sm text-white/65 md:text-base">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-end">
              <Link
                to={primaryTo}
                className="shine group/btn inline-flex h-12 items-center gap-2 rounded-xl bg-cta px-6 text-sm font-semibold text-cta-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex h-12 items-center gap-2 rounded-xl border border-white/20 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
