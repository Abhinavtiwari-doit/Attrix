import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { Linkedin, Github, Twitter, Youtube } from "lucide-react";

export function SiteFooter() {
  const cols = [
    {
      title: "Company",
      links: [
        { to: "/about", label: "About" },
        { to: "/team", label: "Team" },
        { to: "/careers", label: "Careers" },
        { to: "/blog", label: "Blog" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { to: "/solutions", label: "By industry" },
        { to: "/services", label: "Services" },
        { to: "/ai-agents", label: "AI Agents" },
        { to: "/projects", label: "Case studies" },
      ],
    },
    {
      title: "Products",
      links: [
        { to: "/products", label: "Marketplace" },
        { to: "/tools", label: "Free tools" },
        { to: "/courses", label: "Courses" },
      ],
    },
  ] as const;

  return (
    <footer className="hairline-t bg-surface">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <span className="font-display text-sm font-bold">A</span>
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight">
              Attrix<span className="text-brand">.</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Technology consulting and digital solutions for teams that need to move fast — without breaking what already works.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href={site.socials.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-md border border-hairline hover:bg-background">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={site.socials.github} aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-md border border-hairline hover:bg-background">
              <Github className="h-4 w-4" />
            </a>
            <a href={site.socials.twitter} aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-md border border-hairline hover:bg-background">
              <Twitter className="h-4 w-4" />
            </a>
            <a href={site.socials.youtube} aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-md border border-hairline hover:bg-background">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:col-span-5 md:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold text-ink">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-muted-foreground hover:text-ink">
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
              className="h-10 min-w-0 flex-1 rounded-md border border-input bg-background px-3 text-sm focus:border-brand focus:outline-none"
            />
            <button className="h-10 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="hairline-t">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <span>{site.address}</span>
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
