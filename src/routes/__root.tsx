import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  useRouterState,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="eyebrow">Error 404</p>
          <h1 className="mt-4 text-5xl font-bold">Page not found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you're looking for has moved or no longer exists.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
            >
              Back home
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-5 text-sm font-medium transition hover:bg-surface"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-surface"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const GOOGLE_VERIFICATION = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;
const BING_VERIFICATION = import.meta.env.VITE_BING_SITE_VERIFICATION as string | undefined;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { name: "description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { name: "author", content: "Attrix Technologies" },
      { name: "theme-color", content: "#0b0f19" },
      { property: "og:site_name", content: "Attrix Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@attrix" },
      { property: "og:title", content: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { name: "twitter:title", content: "Attrix Technologies — Digital Transformation, Automation & AI" },
      { property: "og:description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      { name: "twitter:description", content: "Enterprise-grade consulting for automation, AI, cloud, CRM, and custom software. Trusted by 120+ teams across 40+ countries." },
      ...(GOOGLE_VERIFICATION ? [{ name: "google-site-verification", content: GOOGLE_VERIFICATION }] : []),
      ...(BING_VERIFICATION ? [{ name: "msvalidate.01", content: BING_VERIFICATION }] : []),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Attrix Technologies",
          description: "Technology consulting and digital solutions — automation, AI, cloud, CRM, and custom software.",
          url: "https://attrix.lovable.app",
          logo: "https://attrix.lovable.app/favicon.ico",
        }),
      },
      ...(GA_ID
        ? [
            { src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`, async: true },
            {
              children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`,
            },
          ]
        : []),
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div key={pathname} className="route-enter">
      {children}
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const isNavigating = useRouterState({ select: (s) => s.status === "pending" });
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <div
          aria-hidden="true"
          className={`route-progress ${isNavigating ? "is-active" : ""}`}
        />
        <SiteHeader />
        <main className="flex-1">
          <RouteTransition>
            <Outlet />
          </RouteTransition>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
