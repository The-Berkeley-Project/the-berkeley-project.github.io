"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { brand } from "@/config/brand";
import { semester } from "@/config/semester";

const navLinks = [
  { label: "Impact", href: "/impact" },
  { label: "Committees", href: "/committees" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: semester.links.contact },
  { label: "Donate", href: semester.links.donate },
];

function isCurrent(pathname: string, href: string) {
  return href.startsWith("/") && pathname.replace(/\/$/, "") === href;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.cssText = "position:absolute;top:0;height:24px;width:1px;pointer-events:none";
    document.body.prepend(sentinel);
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <div className="fixed left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:top-6 sm:px-6">
      <nav
        aria-label="Main"
        className={`relative w-full rounded-full border px-3 py-2 backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-500 ease-bp sm:px-4 ${
          scrolled || isOpen
            ? "border-bp-line bg-bp-paper/90 shadow-bp"
            : "border-bp-line/70 bg-bp-paper/70 shadow-none"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3 rounded-full pr-2">
            <Image
              src={brand.logo}
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-contain transition-transform duration-500 ease-bp group-hover:-rotate-12"
              priority
            />
            <span className="text-sm font-semibold text-bp-navy">{brand.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`group relative inline-flex min-h-10 items-center rounded-full px-3 transition-colors duration-300 ease-bp hover:text-bp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy ${
                      current ? "text-bp-navy" : "text-bp-ink"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full bg-bp-gold transition-transform duration-500 ease-bp ${
                        current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
            <li className="ml-3">
              <a
                href={semester.links.volunteerApply}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-10 items-center gap-1.5 rounded-full bg-bp-navy px-4 text-sm font-semibold text-white transition-[background-color,box-shadow,translate,scale] duration-300 ease-bp hover:-translate-y-0.5 hover:bg-bp-navy-deep hover:shadow-bp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy focus-visible:ring-offset-2 active:translate-y-0 active:scale-[0.98]"
              >
                Apply
                <ArrowRight
                  size={14}
                  weight="bold"
                  aria-hidden
                  className="transition-transform duration-300 ease-bp group-hover:translate-x-0.5"
                />
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="relative h-11 w-11 rounded-full text-bp-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-500 ease-bp ${
                isOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-current transition-transform duration-500 ease-bp ${
                isOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>

        {isOpen && (
          <ul className="animate-rise absolute left-0 right-0 top-full mt-2 flex flex-col gap-1 rounded-3xl border border-bp-line bg-bp-paper p-2 text-base font-medium shadow-bp md:hidden">
            {navLinks.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`block rounded-full px-4 py-3 transition-colors duration-300 ease-bp hover:bg-bp-cream ${
                      current ? "bg-bp-cream text-bp-navy" : "text-bp-ink"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={semester.links.volunteerApply}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-bp-navy px-4 py-3 font-semibold text-white active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Apply as a volunteer
                <ArrowRight size={16} weight="bold" aria-hidden />
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
