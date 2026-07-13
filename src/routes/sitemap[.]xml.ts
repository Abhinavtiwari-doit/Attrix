import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, industries, projects, products, courses, posts } from "@/content/site";

const BASE_URL = "https://attrix.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/", "/services", "/solutions", "/products", "/ai-agents", "/tools",
          "/projects", "/courses", "/about", "/team", "/blog", "/careers", "/contact",
        ];
        const dynamic = [
          ...services.map((s) => `/services/${s.slug}`),
          ...industries.map((i) => `/solutions/${i.slug}`),
          ...projects.map((p) => `/projects/${p.slug}`),
          ...courses.map((c) => `/courses/${c.slug}`),
          ...posts.map((p) => `/blog/${p.slug}`),
          ...products.map((p) => `/products#${p.slug}`),
        ];
        const all = [...staticPaths, ...dynamic];
        const today = new Date().toISOString().slice(0, 10);
        const urls = all
          .map(
            (p) =>
              `  <url>\n    <loc>${BASE_URL}${p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
