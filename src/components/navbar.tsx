"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Impact", href: "/impact" },
  { label: "Committees", href: "/committees" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Contact",
    href: "https://3smvlc5hjy8.typeform.com/to/LHxG3Orl",
  },
  { label: "Donate", href: "http://www.asuc.org/donate" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed left-1/2 top-6 z-50 w-full max-w-6xl -translate-x-1/2 px-4 sm:px-6">
      <nav className="relative w-full rounded-full bg-white px-6 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
        <div className="flex items-center justify-between md:gap-6 md:justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Berkeley Project logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-contain cursor-pointer transition-opacity hover:opacity-80"
              priority
            />
          </Link>

          <ul className="hidden md:flex md:items-center md:gap-6 md:text-sm md:font-medium md:uppercase md:tracking-wide md:ml-auto">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-black transition-colors hover:text-[#003262]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <ul className="absolute left-0 right-0 top-full mt-3 flex flex-col gap-2 rounded-3xl bg-white p-4 text-sm font-medium uppercase tracking-wide shadow-[0_12px_30px_rgba(0,0,0,0.15)] md:hidden">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-3 py-2 text-center text-black transition-colors hover:bg-[#f2f2f2]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
