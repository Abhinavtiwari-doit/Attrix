import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "ink";
}) {
  const tones = {
    default: "bg-background",
    surface: "bg-surface",
    ink: "bg-ink text-primary-foreground",
  };
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl", invert && "text-primary-foreground")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4 text-base md:text-lg", invert ? "text-white/70" : "text-muted-foreground")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function ImagePlaceholder({
  label,
  aspect = "4/3",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      style={{ aspectRatio: aspect }}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border border-hairline bg-gradient-to-br from-surface to-surface-muted",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklch,var(--color-brand)_10%,transparent),transparent_50%)]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Image
        </span>
        <span className="max-w-xs text-xs text-ink-soft">{label}</span>
      </div>
    </div>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-background px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
      {children}
    </span>
  );
}
