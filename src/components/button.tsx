import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "navy" | "gold" | "outlineLight";
}

const variantClasses = {
  navy: "bg-bp-navy text-white hover:bg-bp-navy-deep focus-visible:ring-bp-navy",
  gold: "bg-bp-gold text-bp-ink hover:bg-bp-gold-deep focus-visible:ring-bp-gold",
  outlineLight:
    "bg-transparent text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 focus-visible:ring-white",
} as const;

export default function Button({
  children = "Click Me",
  href,
  onClick,
  className = "",
  variant = "navy",
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold",
    "transition-[background-color,box-shadow,translate,scale] duration-300 ease-bp hover:-translate-y-0.5 hover:shadow-bp active:translate-y-0 active:scale-[0.98]",
    "[&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-bp hover:[&>svg]:translate-x-1",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
