import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { posts } from "@/content/site";

const SITE_URL = "https://attrix.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) {
      return {
        meta: [
          { title: "Article not found — Attrix Blog" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const url = `${SITE_URL}/blog/${p.slug}`;
    const title = `${p.title} — Attrix Insights`;
    const description = p.excerpt;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "author", content: p.author },
        { name: "keywords", content: `${p.category}, Attrix Technologies` },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "article:published_time", content: p.date },
        { property: "article:author", content: p.author },
        { property: "article:section", content: p.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            author: { "@type": "Person", name: p.author },
            datePublished: p.date,
            dateModified: p.date,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            articleSection: p.category,
            publisher: {
              "@type": "Organization",
              name: "Attrix Technologies",
              logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.ico` },
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: p.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => <Section><h1 className="text-3xl font-bold">Post not found</h1></Section>,
  errorComponent: () => <Section><h1 className="text-2xl font-bold">Something went wrong</h1></Section>,
  component: PostDetail,
});

function PostDetail() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <>
      <Section className="!pb-10">
        <div className="mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" /> All articles
          </Link>
          <div className="mt-6 flex items-center gap-2">
            <Pill>{post.category}</Pill>
            <span className="text-xs text-muted-foreground">{post.readingTime} · {post.date}</span>
          </div>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
          <p className="mt-6 text-sm font-semibold">{post.author}</p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <ImagePlaceholder label={`${post.title} — cover`} aspect="16/9" />
        </div>
      </Section>

      <Section className="!pt-6">
        <article className="prose prose-neutral mx-auto max-w-3xl text-[15px] leading-relaxed">
          <p className="text-lg text-ink">
            This is a placeholder article body. In production the blog would render authored MDX or CMS content here — full sections, code blocks, images, and pull quotes — styled with the design system's typography rules.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold">The gap between strategy and shipping</h2>
          <p className="mt-4 text-ink-soft">
            The teams we work with rarely lack ideas. They lack a reliable path from an approved idea to a production system operating in the wild. That gap is where most consulting engagements die — and where the wrong tools, wrong scoping, and wrong incentives compound into missed quarters.
          </p>
          <h2 className="mt-10 font-display text-2xl font-bold">What "good" actually looks like</h2>
          <p className="mt-4 text-ink-soft">
            Good looks like reviewable output every single week. It looks like a system your team can operate without us. It looks like a metric that moved — measurably, in a direction the CFO cares about.
          </p>
          <p className="mt-6 text-ink-soft">
            We'll expand each of these ideas in future posts. If any of this resonates, tell us about the project you keep meaning to start.
          </p>
        </article>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-bold">Keep reading</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-lift rounded-2xl border border-hairline bg-background p-4">
              <ImagePlaceholder label={p.title} aspect="16/10" />
              <div className="p-3">
                <Pill>{p.category}</Pill>
                <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
