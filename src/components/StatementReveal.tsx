"use client";

import { useEffect, useRef } from "react";

export function StatementReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLSpanElement>(".reveal-word");
    if (!words?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const triggerLine = entry.rootBounds?.bottom ?? 0;
          (entry.target as HTMLElement).dataset.on = String(
            entry.boundingClientRect.top < triggerLine,
          );
        }
      },
      { rootMargin: "0px 0px -45% 0px" },
    );

    words.forEach((word) => observer.observe(word));
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className="max-w-[680px] text-4xl font-semibold leading-tight tracking-tight text-bp-ink md:text-5xl md:leading-tight"
    >
      {text.split(" ").map((word, i) => (
        <span key={i} className="reveal-word">
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
