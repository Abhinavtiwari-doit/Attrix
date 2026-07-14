import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { pricingPlans } from "@/content/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Attrix Technologies" },
      { name: "description", content: "Transparent hourly, project, and retainer pricing. Estimate savings with our ROI calculator." },
      { property: "og:title", content: "Pricing — Attrix Technologies" },
      { property: "og:description", content: "Transparent hourly, project, and retainer pricing with a live ROI estimator." },
      { property: "og:url", content: "https://attrix.lovable.app/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://attrix.lovable.app/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [team, setTeam] = useState(10);
  const [hours, setHours] = useState(5);
  const [cost, setCost] = useState(500);

  const weeklyRecovered = team * hours * 0.7;
  const monthlyHours = Math.round(weeklyRecovered * 4.33);
  const monthlySavings = Math.round(monthlyHours * cost);

  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Pricing</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Transparent pricing. No surprises.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Pick the engagement that fits — from a few hours of expert help to a dedicated monthly retainer.
          </p>
        </div>
      </Section>

      <Section className="!pt-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                p.highlight
                  ? "border-brand/40 bg-gradient-to-b from-brand/5 to-background shadow-elevated"
                  : "border-hairline bg-background"
              }`}
            >
              {p.highlight && (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
              )}
              <span
                className={`inline-flex w-max items-center rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                  p.highlight ? "border-brand/40 bg-brand/10 text-brand" : "border-hairline text-ink-soft"
                }`}
              >
                {p.tag}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{p.name}</h3>
              <div className="mt-4">
                <span className="font-display text-5xl font-bold text-brand">{p.price}</span>
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{p.unit}</p>
              <ul className="mt-6 space-y-3 border-t border-hairline pt-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span className="text-ink-soft">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex h-11 items-center justify-center gap-1.5 rounded-lg text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-hairline hover:bg-surface"
                }`}
              >
                {p.cta} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <div className="rounded-3xl border border-hairline bg-background p-8 md:p-12">
          <p className="eyebrow">— ROI Estimator</p>
          <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
            How much time <span className="text-brand">are you losing?</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Estimate your monthly savings with Attrix automation. Adjust the sliders to match your situation.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <SliderRow
                label="Team size"
                value={team}
                min={1}
                max={200}
                step={1}
                unit={`${team} people`}
                onChange={setTeam}
              />
              <SliderRow
                label="Repetitive hours / person / week"
                value={hours}
                min={1}
                max={40}
                step={1}
                unit={`${hours} hrs`}
                onChange={setHours}
              />
              <SliderRow
                label="Avg. hourly cost per person"
                value={cost}
                min={100}
                max={5000}
                step={50}
                unit={`₹${cost}`}
                onChange={setCost}
              />
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Attrix typically automates 60–80% of repetitive tasks. Estimate uses 70%.
              </p>
            </div>

            <div className="rounded-2xl border border-hairline bg-surface p-8 text-center">
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Monthly savings estimate
              </p>
              <p className="mt-4 font-display text-5xl font-bold text-brand md:text-6xl">
                ₹{monthlySavings.toLocaleString("en-IN")}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">per month recovered</p>
              <div className="mt-8 border-t border-hairline pt-6">
                <p className="text-sm text-muted-foreground">Hours saved per month</p>
                <p className="mt-2 font-display text-4xl font-bold">{monthlyHours}</p>
              </div>
              <Link
                to="/contact"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
              >
                Let's Automate This <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function SliderRow({
  label, value, min, max, step, unit, onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; unit: string;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{label}:</p>
        <p className="font-mono text-xs font-semibold text-brand">{unit}</p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-surface accent-brand"
      />
    </div>
  );
}
