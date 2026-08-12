import { Play } from "lucide-react";
import { Section, SectionHeading, Reveal } from "@/components/site/primitives";
import { videoTutorials, youtubeThumb, youtubeWatch } from "@/content/site";

export function VideoTutorials({ tone = "surface" }: { tone?: "default" | "surface" | "ink" }) {
  return (
    <Section tone={tone}>
      <SectionHeading
        eyebrow="Walkthroughs"
        title="Watch how we built it."
        subtitle="Recorded project tutorials on our YouTube channel — click a thumbnail to play."
        invert={tone === "ink"}
      />
      <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {videoTutorials.map((v) => (
          <a
            key={v.youtubeId}
            href={youtubeWatch(v.youtubeId)}
            target="_blank"
            rel="noopener noreferrer"
            className="card-lift group block overflow-hidden rounded-2xl border border-hairline bg-background"
          >
            <div className="zoom-media relative aspect-video overflow-hidden bg-surface">
              <img
                src={youtubeThumb(v.youtubeId)}
                alt={`${v.title} — video thumbnail`}
                loading="lazy"
                width={480}
                height={360}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="animate-pulse-ring absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cta text-cta-foreground transition-transform duration-500 group-hover:scale-110">
                <Play className="h-5 w-5 fill-current" />
              </span>
              {v.duration && (
                <span className="absolute bottom-2 right-2 rounded bg-ink/80 px-1.5 py-0.5 font-mono text-[10px] text-white">
                  {v.duration}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand">{v.category}</p>
              <h3 className="mt-2 text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-brand">
                {v.title}
              </h3>
            </div>
          </a>
        ))}
      </Reveal>
    </Section>
  );
}
