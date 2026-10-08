"use client";

import { OutletLogo } from "@/components/OutletLogo";
import { Tape } from "@/components/Scrapbook";
import type { PressItem } from "@/config/press";
import { ArrowUpRight, CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";

const arrowButton =
  "flex size-11 items-center justify-center rounded-full border border-bp-navy/20 bg-white text-bp-navy shadow-bp transition-[background-color,opacity] duration-300 ease-bp hover:bg-bp-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy disabled:pointer-events-none disabled:opacity-35";

export function PressCarousel({ items }: { items: PressItem[] }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateEdges = useCallback(() => {
    const list = listRef.current;
    if (!list) return;
    setAtStart(list.scrollLeft <= 4);
    setAtEnd(list.scrollLeft + list.clientWidth >= list.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateEdges();
    window.addEventListener("resize", updateEdges);
    return () => window.removeEventListener("resize", updateEdges);
  }, [updateEdges]);

  const scroll = (direction: 1 | -1) => {
    const list = listRef.current;
    const card = list?.querySelector("li");
    if (!list || !card) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    list.scrollBy({
      left: direction * (card.getBoundingClientRect().width + 24),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <div className="flex justify-end gap-3">
        <button type="button" className={arrowButton} onClick={() => scroll(-1)} disabled={atStart} aria-label="Previous articles">
          <CaretLeft size={20} weight="bold" aria-hidden />
        </button>
        <button type="button" className={arrowButton} onClick={() => scroll(1)} disabled={atEnd} aria-label="Next articles">
          <CaretRight size={20} weight="bold" aria-hidden />
        </button>
      </div>

      <ul
        ref={listRef}
        onScroll={updateEdges}
        aria-label="News articles about the Berkeley Project"
        className="no-scrollbar -mx-4 mt-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-8 pt-6 sm:-mx-6 sm:scroll-px-6 sm:px-6"
      >
        {items.map((item, i) => (
          <li key={item.url} className="w-[82%] shrink-0 snap-start sm:w-[22rem]">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-bp transition-[rotate,translate] duration-500 ease-bp hover:-translate-y-1 hover:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <Tape className={`-top-3 left-1/2 -ml-12 ${i % 2 ? "rotate-3" : "-rotate-3"}`} tone={i % 3 === 2 ? "accent" : "gold"} />
              <div className="flex h-8 items-center">
                <OutletLogo outlet={item.outlet} area={2700} />
              </div>
              <p className="mt-2 text-sm text-bp-muted">{item.date}</p>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-bp-ink">
                <span aria-hidden className="mr-1 text-2xl font-bold leading-none text-bp-gold">
                  “
                </span>
                {item.excerpt}
              </blockquote>
              <p className="mt-6 border-t border-bp-line pt-4 text-sm font-semibold text-bp-navy">
                {item.title}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-bp-muted transition-colors duration-300 ease-bp group-hover:text-bp-navy">
                Read the article
                <ArrowUpRight size={16} weight="bold" aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
