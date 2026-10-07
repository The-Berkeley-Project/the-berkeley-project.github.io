"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades up every element marked with `data-reveal` as it scrolls into view.
 * Elements already on screen when a page loads are shown without animating.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const elements = [...document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown])")];

    if (!root.classList.contains("reveal-ready")) {
      for (const el of elements) {
        if (el.getBoundingClientRect().top < window.innerHeight) el.dataset.shown = "";
      }
      root.classList.add("reveal-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.shown = "";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    for (const el of elements) if (!("shown" in el.dataset)) observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
