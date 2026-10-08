"use client";

import { useEffect, useRef, useState } from "react";

/** Counts a stat like "$400,000" or "12,000+" up from zero when it scrolls into view. */
export function CountUp({ value, duration = 1400 }: { value: string; duration?: number }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : NaN;
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const [, prefix, , suffix] = match;
    const format = (n: number) => `${prefix}${Math.round(n).toLocaleString("en-US")}${suffix}`;
    let frame = 0;
    setDisplay(format(0));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setDisplay(format(target * (1 - Math.pow(1 - t, 4))));
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <span className="sr-only">{value}</span>
      <span aria-hidden>{display}</span>
    </span>
  );
}
