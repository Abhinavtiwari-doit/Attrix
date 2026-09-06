import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { ArrowRight, Linkedin, Github, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  const cols = [
    {
      title: "Menu",
      links: [
        { to: "/services", label: "Services" },
        { to: "/projects", label: "Work" },
        { to: "/pricing", label: "Pricing" },
        { to: "/blog", label: "Insights" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { to: "/about", label: "About" },
        { to: "/team", label: "Team" },
        { to: "/careers", label: "Careers" },
        { to: "/solutions", label: "By industry" },
        { to: "/ai-agents", label: "AI Agents" },
      ],
    },
    {
      title: "More products",
      links: [
        { to: "/products", label: "Marketplace" },
        { to: "/tools", label: "Free tools" },
        { to: "/courses", label: "Courses" },
        { to: "/saas", label: "Attrix SaaS" },
      ],
    },
  ] as const;

  return (
    <footer className="relative overflow-hidden bg-surface">
      <div className="container-page relative z-10 grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="group flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
              <span className="font-display text-sm font-bold">A</span>
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight">
              Attrix<span className="text-brand">.</span>
            </span>
          </Link>
          <p className="mt-5 font-display text-lg font-bold tracking-tight">
            Technology that moves the business.
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Automation, AI, cloud, CRM and custom software — designed, shipped and operated by a senior pod that stays accountable.
          </p>
          <Link
            to="/contact"
            className="group mt-6 inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <div className="mt-7 flex items-center gap-3">
            {[
              { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: site.socials.github, label: "GitHub", Icon: Github },
              { href: site.socials.twitter, label: "Twitter", Icon: Twitter },
              { href: site.socials.youtube, label: "YouTube", Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md border border-hairline bg-background transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-ink">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="link-underline text-sm text-muted-foreground transition-colors hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-span-3">
          <p className="text-sm font-semibold">Newsletter</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Monthly notes on automation, AI, and cloud — no fluff.
          </p>
          <form className="mt-4 flex gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm transition-colors focus:border-brand focus:outline-none"
            />
            <button className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>

      {/* HubSpot-style centered bottom bar */}
      <div className="hairline-t relative z-10 bg-background/40">
        <div className="container-page flex flex-col items-center gap-5 py-10 text-center">
          <div className="flex w-full items-center gap-5">
            <span aria-hidden className="h-px flex-1 bg-hairline" />
            <div className="flex items-center gap-3">
              {[
                { href: site.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
                { href: site.socials.github, label: "GitHub", Icon: Github },
                { href: site.socials.twitter, label: "Twitter", Icon: Twitter },
                { href: site.socials.youtube, label: "YouTube", Icon: Youtube },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/5 hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <span aria-hidden className="h-px flex-1 bg-hairline" />
          </div>

          <Link to="/" className="group flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
              <span className="font-display text-sm font-bold">A</span>
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Attrix<span className="text-brand">.</span>
            </span>
          </Link>

          <p className="text-xs text-muted-foreground">
            Copyright © {new Date().getFullYear()} {site.name}, Inc.
          </p>

          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs">
            {[
              { label: "Legal Center", href: "#" },
              { label: "Privacy Policy", href: "#" },
              { label: "Security", href: "#" },
              { label: "Website Accessibility", href: "#" },
              { label: "Manage Cookies", href: "#" },
            ].map((l, i) => (
              <span key={l.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-muted-foreground/50">|</span>}
                <a
                  href={l.href}
                  className="underline decoration-hairline underline-offset-4 transition-colors duration-300 hover:text-brand hover:decoration-brand"
                >
                  {l.label}
                </a>
              </span>
            ))}
          </nav>

          <p className="text-xs text-muted-foreground/70">{site.address}</p>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.18em] whitespace-nowrap text-center font-display text-[22vw] font-bold leading-none tracking-tighter text-ink/[0.06]">
          Attrix
        </p>
      </div>
    </footer>
  );
}
