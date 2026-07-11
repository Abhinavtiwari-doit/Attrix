import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { site } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Attrix Technologies" },
      { name: "description", content: "Start a project, book a consultation, or just say hello." },
      { property: "og:title", content: "Contact — Attrix Technologies" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How quickly can you start?", a: "For most engagements, we can kick off within 1–2 weeks." },
  { q: "Do you sign NDAs?", a: "Yes, always. We'll countersign yours or send ours before the first working session." },
  { q: "Do you work with startups?", a: "Yes — a third of our clients are pre-Series B. We have a dedicated MVP practice." },
  { q: "What if my project isn't a fit?", a: "We'll tell you honestly and, when we can, refer you to a firm we trust." },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Section className="!pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Let's build something worth signing.</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Tell us about your project. If we're a fit, we'll send back a concrete first-quarter plan within three business days.
            </p>

            <dl className="mt-10 grid gap-4">
              {[
                { icon: Mail, label: "Email", value: site.email },
                { icon: Phone, label: "Phone", value: site.phone },
                { icon: MessageCircle, label: "WhatsApp", value: site.whatsapp },
                { icon: MapPin, label: "Studio", value: site.address },
                { icon: Clock, label: "Hours", value: "Mon–Fri · 9:00–19:00 IST" },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-3 rounded-xl border border-hairline bg-background p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-surface text-brand">
                    <row.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{row.label}</p>
                    <p className="mt-0.5 text-sm font-medium">{row.value}</p>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="md:col-span-6">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl border border-hairline bg-background p-6 md:p-8 shadow-soft"
            >
              <h2 className="text-xl font-bold">Start a project</h2>
              <p className="mt-1 text-sm text-muted-foreground">A partner replies within one business day.</p>

              <div className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Work email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Acme Inc." />
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Department</label>
                  <select className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-brand focus:outline-none">
                    <option>New project inquiry</option>
                    <option>AI & agents</option>
                    <option>Automation</option>
                    <option>Cloud & DevOps</option>
                    <option>Careers</option>
                    <option>Press & partnerships</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project brief</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="What are you trying to build or fix? Budget range and timeline help too."
                    className="mt-2 w-full rounded-md border border-input bg-background p-3 text-sm focus:border-brand focus:outline-none"
                  />
                </div>
                <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  {sent ? "Thanks — we'll be in touch." : <>Send message <ArrowRight className="h-4 w-4" /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-bold">Frequently asked</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
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

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-md border border-input bg-background px-3 text-sm focus:border-brand focus:outline-none"
      />
    </div>
  );
}
