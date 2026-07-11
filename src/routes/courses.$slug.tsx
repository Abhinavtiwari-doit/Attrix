import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, GraduationCap, Check } from "lucide-react";
import { Section, ImagePlaceholder, Pill } from "@/components/site/primitives";
import { courses } from "@/content/site";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = courses.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.course;
    const title = c ? `${c.name} — Course` : "Course — Attrix Technologies";
    return {
      meta: [
        { title },
        { name: "description", content: c?.blurb ?? "Course." },
        { property: "og:title", content: title },
        { property: "og:url", content: c ? `/courses/${c.slug}` : "/courses" },
      ],
      links: c ? [{ rel: "canonical", href: `/courses/${c.slug}` }] : [],
    };
  },
  notFoundComponent: () => <Section><h1 className="text-3xl font-bold">Course not found</h1></Section>,
  errorComponent: () => <Section><h1 className="text-2xl font-bold">Something went wrong</h1></Section>,
  component: CourseDetail,
});

const curriculum = [
  "Foundations & mental models",
  "The 20% of tools that do 80% of the work",
  "Building your first production workflow",
  "Reliability, monitoring, and rollback",
  "Scaling patterns & anti-patterns",
  "Capstone project with feedback",
];

function CourseDetail() {
  const { course } = Route.useLoaderData();
  return (
    <>
      <Section className="!pb-10">
        <Link to="/courses" className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" /> All courses
        </Link>
        <div className="mt-6 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Pill>{course.level}</Pill>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{course.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{course.blurb}</p>
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm">
              <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand" /> {course.duration}</span>
              <span className="inline-flex items-center gap-1.5"><GraduationCap className="h-4 w-4 text-brand" /> {course.instructor}</span>
              <span className="font-display text-xl font-bold text-brand">{course.price}</span>
            </div>
            <div className="mt-8">
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground">
                Enroll now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder label={`${course.name} — cover`} aspect="4/3" />
          </div>
        </div>
      </Section>

      <Section tone="surface">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow">Curriculum</p>
            <ul className="mt-4 space-y-3">
              {curriculum.map((m, i) => (
                <li key={m} className="flex items-start gap-3 rounded-xl border border-hairline bg-background p-4">
                  <span className="font-mono text-xs font-semibold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-sm">{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">What you get</p>
            <ul className="mt-4 space-y-3">
              {["Live cohort sessions", "Recorded lectures", "Practitioner office hours", "Capstone project review", "Verified certificate"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 text-brand" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
