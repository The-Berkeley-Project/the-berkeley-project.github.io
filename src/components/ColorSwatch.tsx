"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

export function ColorSwatch({
  name,
  hex,
  token,
  role,
  dark = false,
}: {
  name: string;
  hex: string;
  token: string;
  role: string;
  dark?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-2xl bg-white p-2.5 pb-4 shadow-bp">
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${name} ${hex}`}
        className={`flex h-28 w-full items-end justify-end rounded-xl p-3 ring-1 ring-inset ring-black/5 transition-transform duration-300 ease-bp hover:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy ${dark ? "text-white" : "text-bp-ink"}`}
        style={{ background: hex }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
          {copied ? <Check size={14} weight="bold" aria-hidden /> : <Copy size={14} aria-hidden />}
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
      <div className="mt-3 px-1">
        <p className="flex items-baseline justify-between gap-2 text-sm font-semibold text-bp-ink">
          {name}
          <span className="font-mono text-xs font-medium uppercase text-bp-muted">{hex}</span>
        </p>
        <p className="mt-0.5 font-mono text-xs text-bp-muted">{token}</p>
        <p className="mt-2 text-sm text-bp-muted">{role}</p>
      </div>
    </div>
  );
}
