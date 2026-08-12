import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Star, Quote } from "lucide-react";
import { testimonials } from "@/content/site";
import { cn } from "@/lib/utils";

const INTERVAL = 6000;

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [dir, setDir] = useState<1 | -1>(1);
  const count = testimonials.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number, direction: 1 | -1) => {
      setDir(direction);
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const next = useCallback(() => go(index + 1, 1), [go, index]);
  const prev = useCallback(() => go(index - 1, -1), [go, index]);

  useEffect(() => {
    if (!playing) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, count, index]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
  };

  const active = testimonials[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPlaying(false)}
      onMouseLeave={() => setPlaying(true)}
      onFocus={() => setPlaying(false)}
      onBlur={() => setPlaying(true)}
      className="group relative mt-12 overflow-hidden rounded-3xl border border-hairline bg-background p-8 outline-none transition-shadow duration-500 focus-visible:ring-2 focus-visible:ring-brand/50 md:p-12"
    >
      <Quote className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 text-brand/5 transition-transform duration-700 group-hover:scale-110 group-hover:text-brand/10" />

      <div aria-live="polite" aria-atomic="true" className="relative min-h-[220px] md:min-h-[200px]">
        {testimonials.map((t, i) => (
          <figure
            key={t.name}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className={cn(
              "transition-all duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]",
              i === index
                ? "relative translate-x-0 opacity-100"
                : cn(
                    "pointer-events-none absolute inset-0 opacity-0",
                    dir === 1 ? "-translate-x-6" : "translate-x-6",
                  ),
            )}
          >
            <div className="flex gap-0.5 text-cta">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star
                  key={s}
                  style={{ transitionDelay: `${s * 70}ms` }}
                  className={cn(
                    "h-4 w-4 fill-current transition-all duration-500",
                    i === index ? "scale-100 opacity-100" : "scale-75 opacity-0",
                  )}
                />
              ))}
            </div>
            <blockquote className="mt-5 max-w-3xl font-display text-xl font-semibold leading-snug md:text-2xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-surface font-display text-sm font-bold transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                {t.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => go(i, i > index ? 1 : -1)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === index ? "w-10 bg-brand" : "w-4 bg-hairline hover:bg-ink-soft/40",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause testimonial rotation" : "Play testimonial rotation"}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-brand"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <span className="sr-only">
        Testimonial {index + 1} of {count}: {active.quote} — {active.name}, {active.role}
      </span>
    </div>
  );
}
