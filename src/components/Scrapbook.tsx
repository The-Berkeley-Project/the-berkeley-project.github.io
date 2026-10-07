import type { CSSProperties, ReactNode } from "react";

/** A strip of washi tape. Place inside a `relative` parent that does not clip overflow. */
export function Tape({
  className = "",
  tone = "gold",
  style,
}: {
  className?: string;
  tone?: "gold" | "accent" | "paper";
  style?: CSSProperties;
}) {
  const toneClass = tone === "accent" ? "tape--accent" : tone === "paper" ? "tape--paper" : "";
  return <span aria-hidden className={`tape ${toneClass} ${className}`} style={style} />;
}

/** Hand drawn underline in the semester accent color. */
export function Scribble({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        aria-hidden
        viewBox="0 0 300 16"
        preserveAspectRatio="none"
        className="absolute -bottom-2 left-0 h-3 w-full text-theme-accent"
      >
        <path
          d="M3 11 C 60 3, 120 3, 170 8 S 260 13, 297 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength={1}
          className="animate-draw"
        />
      </svg>
    </span>
  );
}

/** A number circled by hand, like a note in the margin. */
export function CircledNumber({ value, className = "" }: { value: number; className?: string }) {
  return (
    <span className={`relative inline-flex size-16 items-center justify-center ${className}`} aria-hidden>
      <svg viewBox="0 0 64 64" className="absolute inset-0 size-full text-theme-accent">
        <path
          d="M34 6c14 1 25 10 24 25-1 16-13 27-28 26C15 56 5 45 6 30 7 17 17 7 31 6c4 0 7 1 9 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="relative text-3xl font-bold text-bp-navy">{value}</span>
    </span>
  );
}
