import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, GraduationCap } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { courses } from "@/content/site";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses — Attrix Technologies" },
      { name: "description", content: "Practitioner-led courses on automation, AI, cloud, and no-code development." },
      { property: "og:title", content: "Courses — Attrix Technologies" },
      { property: "og:url", content: "/courses" },
    ],
    links: [{ rel: "canonical", href: "/courses" }],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  return (
    <>
      <Section className="!pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Courses</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Learn from people who ship.</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Practitioner-led programs on automation, AI, cloud, and no-code — built from real engagements, not lecture theory.
          </p>
        </div>
      </Section>
      <Section className="!pt-6">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((c) => (
            <Link key={c.slug} to="/courses/$slug" params={{ slug: c.slug }}
              className="card-lift group grid gap-4 rounded-2xl border border-hairline bg-background p-4 sm:grid-cols-5">
              <div className="sm:col-span-2">
                <ImagePlaceholder label={`${c.name} — cover`} aspect="4/3" />
              </div>
              <div className="sm:col-span-3 sm:flex sm:flex-col sm:justify-between sm:py-2">
                <div>
                  <div className="flex items-center justify-between">
                    <Pill>{c.level}</Pill>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-brand" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {c.duration}</span>
                  <span className="inline-flex items-center gap-1"><GraduationCap className="h-3.5 w-3.5" /> {c.instructor}</span>
                  <span className="ml-auto font-semibold text-brand">{c.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
