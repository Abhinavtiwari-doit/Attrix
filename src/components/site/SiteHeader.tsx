import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { services } from "@/content/site";

const productLinks = [
  { to: "/products", label: "Marketplace", desc: "SaaS, dashboards & plugins we ship" },
  { to: "/tools", label: "Free tools", desc: "Utilities for teams and builders" },
  { to: "/courses", label: "Courses", desc: "Learn automation, AI & cloud" },
  { to: "/saas", label: "SaaS", desc: "Our upcoming product — join early access" },
] as const;

const nav = [
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Work" },
  { to: "/team", label: "Team" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMegaOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  // Tap-outside + Escape for desktop dropdowns
  useEffect(() => {
    if (!productsOpen && !megaOpen) return;
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (productsOpen && productsRef.current && !productsRef.current.contains(t)) {
        setProductsOpen(false);
      }
      if (megaOpen && servicesRef.current && !servicesRef.current.contains(t)) {
        setMegaOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setMegaOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen, megaOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-hairline bg-background/85 backdrop-blur-md" : "bg-background"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
            <span className="font-display text-sm font-bold">A</span>
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight">
            Attrix<span className="text-brand">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to);
            if (item.label === "Services") {
              return (
                <div
                  key={item.to}
                  ref={servicesRef}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    to={item.to}
                    aria-haspopup="menu"
                    aria-expanded={megaOpen}
                    onFocus={() => setMegaOpen(true)}
                    className={`inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {megaOpen && (
                    <div role="menu" className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-hairline bg-background p-6 shadow-elevated">
                        <div className="mb-4 flex items-center justify-between">
                          <p className="eyebrow">Our services</p>
                          <Link to="/services" className="text-xs font-medium text-brand link-underline">
                            View all
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              to="/services/$slug"
                              params={{ slug: s.slug }}
                              role="menuitem"
                              className="group rounded-lg p-3 transition hover:bg-surface"
                            >
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">{s.name}</p>
                                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                  {s.tag}
                                </span>
                              </div>
                              <p className="mt-1 text-xs text-muted-foreground">{s.summary}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (item.label === "Products") {
              return (
                <div
                  key={item.to}
                  ref={productsRef}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={productsOpen}
                    onClick={() => setProductsOpen((v) => !v)}
                    onFocus={() => setProductsOpen(true)}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setProductsOpen(true);
                        const first = productsRef.current?.querySelector<HTMLAnchorElement>('[role="menuitem"]');
                        first?.focus();
                      }
                    }}
                    className={`inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium transition ${
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`h-3 w-3 transition ${productsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {productsOpen && (
                    <div role="menu" className="absolute left-1/2 top-full z-50 w-[360px] -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-hairline bg-background p-4 shadow-elevated">
                        <p className="eyebrow mb-3">Products</p>
                        <div className="flex flex-col">
                          {productLinks.map((p) => (
                            <Link
                              key={p.to}
                              to={p.to}
                              role="menuitem"
                              className="rounded-lg p-3 transition hover:bg-surface focus:bg-surface focus:outline-none"
                            >
                              <p className="text-sm font-semibold">{p.label}</p>
                              <p className="mt-0.5 text-xs text-muted-foreground">{p.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition ${
                  active ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden h-9 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 md:inline-flex"
          >
            Start a project <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-hairline lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((item) => {
              if (item.label === "Products") {
                return (
                  <div key={item.to}>
                    <button
                      type="button"
                      aria-expanded={mobileProductsOpen}
                      aria-controls="mobile-products-panel"
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div
                        id="mobile-products-panel"
                        className="ml-3 flex flex-col border-l border-hairline pl-3"
                      >
                        <Link
                          to="/products"
                          className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-ink"
                        >
                          All products
                        </Link>
                        {productLinks.map((p) => (
                          <Link
                            key={p.to}
                            to={p.to}
                            className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:text-ink"
                          >
                            {p.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-md px-2 py-2.5 text-sm font-medium text-ink-soft hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-3 inline-flex h-10 items-center justify-center rounded-lg bg-primary text-sm font-medium text-primary-foreground"
            >
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
