import type { ReactNode } from "react";
import { Scribble, Tape } from "@/components/Scrapbook";

/**
 * Cream dot-paper header shared by inner pages.
 * `highlight` must be a substring of `title`; it gets the hand drawn underline.
 * `media` renders below the intro on the same paper, with tape on its corners.
 */
export function PageHeader({
  title,
  highlight,
  media,
  children,
}: {
  title: string;
  highlight?: string;
  media?: ReactNode;
  children?: ReactNode;
}) {
  const at = highlight ? title.indexOf(highlight) : -1;
  const heading =
    at >= 0 && highlight ? (
      <>
        {title.slice(0, at)}
        <Scribble>{highlight}</Scribble>
        {title.slice(at + highlight.length)}
      </>
    ) : (
      title
    );

  return (
    <section className="relative overflow-hidden bg-bp-cream px-4 pb-24 pt-32 sm:px-6 md:pt-40">
      <div aria-hidden className="hero-dots pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-bp-cream/0 to-bp-paper"
      />
      <div className="relative mx-auto max-w-6xl">
        <h1 className="animate-rise max-w-[760px] text-4xl font-bold leading-tight tracking-tight text-bp-navy sm:text-5xl sm:leading-[1.05]">
          {heading}
        </h1>
        {children && (
          <div
            className="animate-rise mt-6 max-w-2xl space-y-4 text-lg text-bp-muted md:text-xl"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            {children}
          </div>
        )}
        {media && (
          <div
            className="animate-rise relative mt-14 -rotate-[0.6deg]"
            style={{ "--rise-delay": "240ms" } as React.CSSProperties}
          >
            <Tape className="-top-3 left-10 -rotate-6" />
            <Tape className="-top-3 right-10 rotate-6" />
            <div className="relative overflow-hidden rounded-2xl bg-bp-line photo-frame">{media}</div>
          </div>
        )}
      </div>
    </section>
  );
}
