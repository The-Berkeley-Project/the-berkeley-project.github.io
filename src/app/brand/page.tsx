import Button from "@/components/button";
import { ColorSwatch } from "@/components/ColorSwatch";
import { PageHeader } from "@/components/PageHeader";
import { CircledNumber, Scribble, Tape } from "@/components/Scrapbook";
import { brand } from "@/config/brand";
import { semester } from "@/config/semester";
import { ArrowRight, CalendarBlank, Check, Clock, MapPin, X } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: `Brand guide | ${brand.name}`,
  description: "Colors, type, spacing, and the scrapbook style used across the Berkeley Project site.",
  robots: { index: false },
};

const sections = [
  { id: "logo", label: "Logo" },
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "spacing", label: "Spacing" },
  { id: "scrapbook", label: "Scrapbook kit" },
  { id: "components", label: "Components" },
  { id: "motion", label: "Motion" },
  { id: "voice", label: "Voice" },
  { id: "semester", label: "Semester theme" },
];

const coreColors = [
  { name: "Berkeley Blue", hex: "#003262", token: "bp-navy", role: "Headlines, primary buttons, the impact band.", dark: true },
  { name: "California Gold", hex: "#FDB515", token: "bp-gold", role: "Tape, stats on navy, the quote band. Use sparingly.", dark: false },
  { name: "Navy deep", hex: "#00264D", token: "bp-navy-deep", role: "Hover state for navy buttons.", dark: true },
  { name: "Gold deep", hex: "#E9A40C", token: "bp-gold-deep", role: "Hover state for gold buttons.", dark: false },
];

const neutralColors = [
  { name: "Ink", hex: "#0B1F33", token: "bp-ink", role: "Body text and small headings.", dark: true },
  { name: "Muted", hex: "#4F5D6B", token: "bp-muted", role: "Supporting text, captions, meta.", dark: true },
  { name: "Cream", hex: "#F8F2E4", token: "bp-cream", role: "Dot paper sections and page headers.", dark: false },
  { name: "Paper", hex: "#FFFCF5", token: "bp-paper", role: "Page background everywhere.", dark: false },
  { name: "Line", hex: "#E8E0CF", token: "bp-line", role: "Borders, dividers, image placeholders.", dark: false },
  { name: "White", hex: "#FFFFFF", token: "white", role: "Cards, polaroids, photo borders.", dark: false },
];

const contrast = [
  { fg: "#003262", bg: "#FFFCF5", label: "Navy on paper", ratio: "12.6", use: "Any size" },
  { fg: "#0B1F33", bg: "#FFFCF5", label: "Ink on paper", ratio: "16.3", use: "Any size" },
  { fg: "#4F5D6B", bg: "#F8F2E4", label: "Muted on cream", ratio: "6.0", use: "Any size" },
  { fg: "#FDB515", bg: "#003262", label: "Gold on navy", ratio: "7.2", use: "Any size" },
  { fg: "#0B1F33", bg: "#FDB515", label: "Ink on gold", ratio: "9.4", use: "Any size" },
  { fg: semester.theme.accent, bg: "#FFFFFF", label: "Accent on white", ratio: "3.0", use: "Large text and marks only" },
];

const typeScale = [
  { name: "Display", classes: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]", spec: "48 / 60 / 72px, Bold, tight", sample: "Volunteer across Berkeley", use: "Homepage hero only" },
  { name: "Page title", classes: "text-4xl sm:text-5xl font-bold tracking-tight leading-tight", spec: "36 / 48px, Bold, tight", sample: "Our impact", use: "Inner page headers" },
  { name: "Section heading", classes: "text-3xl md:text-4xl font-bold tracking-tight", spec: "30 / 36px, Bold, tight", sample: "How the day works", use: "Every section h2" },
  { name: "Card heading", classes: "text-xl font-semibold", spec: "20px, Semibold", sample: "What to wear and bring", use: "Cards, steps, panels" },
  { name: "Lead", classes: "text-lg md:text-xl text-bp-muted", spec: "18 / 20px, Regular, muted", sample: "One Saturday, no experience needed. Bring a friend.", use: "Intro paragraphs" },
  { name: "Body", classes: "text-base text-bp-muted", spec: "16px, Regular, muted", sample: "Teams of ten to twenty students work at a single site for the day.", use: "Default paragraphs" },
  { name: "Small", classes: "text-sm font-semibold text-bp-ink", spec: "14px, Semibold", sample: "Closes Friday, October 9", use: "Labels, captions, meta" },
];

const weights = [
  { weight: 400, label: "Regular", use: "Body" },
  { weight: 500, label: "Medium", use: "Nav links" },
  { weight: 600, label: "Semibold", use: "Buttons, card headings" },
  { weight: 700, label: "Bold", use: "Headlines, stats" },
];

const spacing = [
  { px: 8, tw: "2", use: "Icon to label" },
  { px: 16, tw: "4", use: "Paragraph gap" },
  { px: 24, tw: "6", use: "Card padding, page gutter" },
  { px: 48, tw: "12", use: "Between blocks" },
  { px: 64, tw: "16", use: "Columns on desktop" },
  { px: 96, tw: "24", use: "Section padding" },
];

const radii = [
  { label: "Full", cls: "rounded-full", value: "9999px", use: "Buttons, pills, icon buttons" },
  { label: "2xl", cls: "rounded-2xl", value: "16px", use: "Cards, photos, panels" },
  { label: "xl", cls: "rounded-xl", value: "12px", use: "Photos inside polaroids" },
  { label: "lg", cls: "rounded-lg", value: "8px", use: "Stamps, focus rings" },
];

const motion = [
  { name: "Scroll reveal", spec: "800ms, fade + 20px rise, staggered 80 to 120ms", where: "Section content as it enters view" },
  { name: "Page load rise", spec: "900ms, fade + 16px rise", where: "Hero and page header" },
  { name: "Hand drawn line", spec: "1100ms draw, 500ms delay", where: "Scribble underlines" },
  { name: "Hover lift", spec: "300ms, 2px up + soft shadow", where: "Buttons, cards" },
  { name: "Straighten", spec: "600ms, tilt to 0deg", where: "Pinned photos and cards on hover" },
  { name: "Tick", spec: "450ms rise per digit", where: "Countdown" },
];

const voice = [
  { do: "Saturday, November 14. Meet at Lower Sproul at 8 AM.", dont: "Join us for an unforgettable day of making a difference!" },
  { do: "It’s free, no experience is needed, and lunch and a shirt are on us.", dont: "Anyone can be a changemaker." },
  { do: "2,000 students working with 100+ partner organizations.", dont: "Massive impact across the community." },
];

function Section({
  id,
  eyebrow,
  title,
  intro,
  dots = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  dots?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-28 px-4 py-20 sm:px-6 md:py-24 ${dots ? "bg-bp-cream bg-dots" : "bg-bp-paper"}`}>
      <div className="mx-auto max-w-6xl">
        <p data-reveal className="text-sm font-semibold uppercase tracking-widest text-bp-muted">
          {eyebrow}
        </p>
        <h2 data-reveal className="mt-3 text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
          {title}
        </h2>
        {intro && (
          <p data-reveal className="mt-4 max-w-2xl text-lg text-bp-muted">
            {intro}
          </p>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <h3 className="mb-5 text-xl font-semibold text-bp-ink">{children}</h3>;
}

function Spec({ name, children }: { name: string; children: ReactNode }) {
  return (
    <figure className="flex flex-col">
      <div className="relative flex min-h-48 flex-1 items-center justify-center rounded-2xl bg-bp-paper p-8 shadow-bp ring-1 ring-bp-line">
        {children}
      </div>
      <figcaption className="mt-3 px-1 text-sm font-semibold text-bp-ink">{name}</figcaption>
    </figure>
  );
}

export default function BrandPage() {
  return (
    <>
      <PageHeader title="The Berkeley Project brand guide" highlight="brand guide">
        <p>
          The colors, type, spacing, and scrapbook pieces that make up the site.
          Navy, gold, and paper stay the same every semester. The theme accent
          and mascot change each term.
        </p>
        <nav aria-label="Brand guide sections" className="pt-4">
          <ul className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="block rounded-full border border-bp-line bg-white px-4 py-2 text-sm font-semibold text-bp-ink transition-[background-color,border-color] duration-300 ease-bp hover:border-bp-navy hover:text-bp-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <Section
        id="logo"
        eyebrow="01"
        title="Logo"
        intro="The wordmark sets “the” vertically beside “berkeley,” with “project” underneath. Give it clear space equal to the height of the “b” on every side."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Spec name="Primary, on paper">
            <Image src="/bpLogo.png" alt={`${brand.name} logo`} width={420} height={220} className="h-auto w-56" />
          </Spec>
          <Spec name="On white cards">
            <div className="rounded-xl bg-white p-6 shadow-bp">
              <Image src="/bpLogo.png" alt="" width={420} height={220} className="h-auto w-44" />
            </div>
          </Spec>
          <Spec name="On navy, place on a white tile">
            <div className="absolute inset-0 rounded-2xl bg-bp-navy" />
            <div className="relative rounded-xl bg-white p-5">
              <Image src="/bpLogo.png" alt="" width={420} height={220} className="h-auto w-40" />
            </div>
          </Spec>
        </div>
        <ul className="mt-8 grid gap-3 text-base text-bp-muted sm:grid-cols-3">
          <li className="flex gap-2"><X size={20} className="mt-0.5 shrink-0 text-bp-navy" aria-hidden />Do not recolor, stretch, or rotate it.</li>
          <li className="flex gap-2"><X size={20} className="mt-0.5 shrink-0 text-bp-navy" aria-hidden />Do not put it straight onto a photo.</li>
          <li className="flex gap-2"><X size={20} className="mt-0.5 shrink-0 text-bp-navy" aria-hidden />Do not add tape or tilt to the logo.</li>
        </ul>
      </Section>

      <Section
        id="color"
        eyebrow="02"
        title="Color"
        intro="UC Berkeley's own blue and gold on warm paper instead of pure white. Navy carries most of the weight. Gold is the spark, so keep it rare. Click a swatch to copy its hex."
        dots
      >
        <Label>Core</Label>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {coreColors.map((c) => (
            <ColorSwatch key={c.token} {...c} />
          ))}
        </div>

        <div className="mt-14">
          <Label>Paper and neutrals</Label>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {neutralColors.map((c) => (
              <ColorSwatch key={c.token} {...c} />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Label>Proportion</Label>
            <div className="flex h-14 overflow-hidden rounded-2xl shadow-bp" role="img" aria-label="Roughly 60 percent paper, 20 percent cream, 12 percent navy, 5 percent gold, 3 percent accent">
              <span className="w-[60%] bg-bp-paper" />
              <span className="w-[20%] bg-bp-cream" />
              <span className="w-[12%] bg-bp-navy" />
              <span className="w-[5%] bg-bp-gold" />
              <span className="w-[3%] bg-theme-accent" />
            </div>
            <p className="mt-4 text-base text-bp-muted">
              Mostly paper and cream, navy for text and one big band, a little
              gold, and a touch of the semester accent.
            </p>
          </div>
          <div>
            <Label>Contrast pairs</Label>
            <ul className="grid gap-3 sm:grid-cols-2">
              {contrast.map((c) => (
                <li key={c.label} className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-bp">
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold ring-1 ring-inset ring-black/5"
                    style={{ background: c.bg, color: c.fg }}
                    aria-hidden
                  >
                    Aa
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-bp-ink">{c.label}</span>
                    <span className="block text-sm text-bp-muted">{c.ratio}:1 · {c.use}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="type"
        eyebrow="03"
        title="Type"
        intro="One family, Manrope, for everything. It is rounded and friendly in bold and stays easy to read at small sizes. The handmade feeling comes from drawn marks, not a script font."
      >
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr] [&>*]:min-w-0">
          <div className="relative rounded-2xl bg-white p-6 shadow-bp sm:p-8">
            <Tape className="-top-3 left-8 -rotate-3" />
            <p className="text-8xl font-bold leading-none tracking-tight text-bp-navy md:text-9xl">Aa</p>
            <p className="mt-6 text-2xl font-bold text-bp-ink">Manrope</p>
            <p className="mt-2 break-all text-base text-bp-muted">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 ! ? &amp; @ $ %
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {weights.map((w) => (
              <li key={w.weight} className="min-w-0 rounded-2xl bg-white p-4 shadow-bp sm:p-5">
                <p className="text-4xl text-bp-navy" style={{ fontWeight: w.weight }}>Ag</p>
                <p className="mt-3 text-sm font-semibold text-bp-ink">{w.label} {w.weight}</p>
                <p className="text-sm text-bp-muted">{w.use}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14">
          <Label>Type scale</Label>
          <ul className="divide-y divide-bp-line border-y border-bp-line">
            {typeScale.map((t) => (
              <li key={t.name} className="grid gap-3 py-7 md:grid-cols-[220px_1fr] md:gap-10">
                <div>
                  <p className="text-sm font-semibold text-bp-ink">{t.name}</p>
                  <p className="mt-1 text-sm text-bp-muted">{t.spec}</p>
                  <p className="text-sm text-bp-muted">{t.use}</p>
                </div>
                <p className={`min-w-0 ${t.classes} ${t.classes.includes("text-bp-") ? "" : "text-bp-navy"}`}>{t.sample}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base text-bp-muted">
            Headings use balanced wrapping and paragraphs avoid single word last lines.
            Keep body text under about 70 characters per line.
          </p>
        </div>
      </Section>

      <Section
        id="spacing"
        eyebrow="04"
        title="Spacing, corners, and depth"
        intro="Everything sits on a 4px grid. Content is capped at 1152px wide. Sections breathe with 96px of padding, so each one reads as its own page of the scrapbook."
        dots
      >
        <div className="grid gap-10 lg:grid-cols-2 [&>*]:min-w-0">
          <div>
            <Label>Spacing scale</Label>
            <ul className="space-y-4 rounded-2xl bg-white p-5 shadow-bp sm:p-6">
              {spacing.map((s) => (
                <li key={s.px} className="grid grid-cols-[48px_1fr] items-center gap-x-4 gap-y-1">
                  <span className="font-mono text-sm text-bp-muted">{s.px}px</span>
                  <span className="h-3 rounded-full bg-bp-navy" style={{ width: `${(s.px / 96) * 100}%` }} />
                  <span className="col-start-2 text-sm text-bp-muted">
                    <span className="font-mono">{s.tw}</span> · {s.use}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Label>Corner radius</Label>
            <ul className="grid grid-cols-2 gap-3 sm:gap-4">
              {radii.map((r) => (
                <li key={r.label} className="min-w-0 rounded-2xl bg-white p-4 shadow-bp sm:p-5">
                  <span className={`block h-16 w-full border-2 border-bp-navy bg-bp-cream ${r.cls}`} />
                  <p className="mt-3 text-sm font-semibold text-bp-ink">{r.label} · {r.value}</p>
                  <p className="text-sm text-bp-muted">{r.use}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <Label>Depth</Label>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl border border-bp-line bg-bp-paper p-6">
              <p className="text-sm font-semibold text-bp-ink">Flat</p>
              <p className="text-sm text-bp-muted">Line border only. Lists and FAQ rows.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-bp">
              <p className="text-sm font-semibold text-bp-ink">Pinned</p>
              <p className="text-sm text-bp-muted">White with <span className="font-mono">shadow-bp</span>. Cards and polaroids.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <p className="text-sm font-semibold text-bp-ink">Hovered</p>
              <p className="text-sm text-bp-muted">Slightly deeper shadow, only on interaction.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="scrapbook"
        eyebrow="05"
        title="Scrapbook kit"
        intro="Pieces borrowed from flyers, notebooks, and photo albums. They sit around content, never on top of text or buttons, and each one has a single job."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Spec name="Dot paper: cream sections and headers">
            <div className="absolute inset-0 rounded-2xl bg-bp-cream bg-dots" />
          </Spec>

          <Spec name="Washi tape: gold, accent, and paper">
            <div className="relative h-24 w-40 rounded-lg bg-white shadow-bp">
              <Tape className="-top-3 -left-6 -rotate-12" />
              <Tape tone="accent" className="-right-6 top-8 rotate-6" />
              <Tape tone="paper" className="-bottom-3 left-6 -rotate-3" />
            </div>
          </Spec>

          <Spec name="Photo frame: 5px white border">
            <div className="relative aspect-[4/3] w-48 overflow-hidden rounded-2xl bg-bp-line photo-frame">
              <Image src={semester.photos[1].src} alt="" fill sizes="192px" className="object-cover" />
            </div>
          </Spec>

          <Spec name="Polaroid: people and places">
            <div className="w-40 -rotate-2 rounded-2xl bg-white p-2.5 pb-4 shadow-bp">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bp-cream">
                <Image src={semester.photos[4].src} alt="" fill sizes="160px" className="object-cover" />
              </div>
              <p className="mt-3 px-1 text-sm font-semibold text-bp-ink">Site leader</p>
              <p className="px-1 text-sm text-bp-muted">Fall 2025</p>
            </div>
          </Spec>

          <Spec name="Torn edge: between big color bands">
            <div className="absolute inset-x-0 bottom-0 h-1/2 overflow-visible rounded-b-2xl">
              <div className="torn-top h-full rounded-b-2xl bg-bp-navy" />
            </div>
          </Spec>

          <Spec name="Tilt: grids of pinned items">
            <ul className="scrap-tilt grid w-full grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <li key={i} className="aspect-square rounded-xl bg-white shadow-bp" />
              ))}
            </ul>
          </Spec>

          <Spec name="Scribble: one key phrase per headline">
            <p className="text-3xl font-bold tracking-tight text-bp-navy">
              <Scribble>across Berkeley</Scribble>
            </p>
          </Spec>

          <Spec name="Circled number: ordered steps">
            <div className="flex gap-2">
              <CircledNumber value={1} />
              <CircledNumber value={2} />
              <CircledNumber value={3} />
            </div>
          </Spec>

          <Spec name="Stamp: closed or finished states">
            <span className="inline-flex -rotate-6 items-center justify-center rounded-lg border-[3px] border-double border-bp-navy/70 px-5 py-2 text-lg font-bold uppercase tracking-widest text-bp-navy/80">
              Applications closed
            </span>
          </Spec>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-bp">
            <p className="flex items-center gap-2 text-sm font-semibold text-bp-ink"><Check size={18} weight="bold" className="text-emerald-600" aria-hidden />Use it like this</p>
            <ul className="mt-3 space-y-2 text-base text-bp-muted">
              <li>Tape on the corners of hero photos, featured cards, and the countdown.</li>
              <li>One scribble per headline, on the words that matter.</li>
              <li>Tilts under 1.5 degrees, straightening on hover.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-bp">
            <p className="flex items-center gap-2 text-sm font-semibold text-bp-ink"><X size={18} weight="bold" className="text-bp-navy" aria-hidden />Avoid</p>
            <ul className="mt-3 space-y-2 text-base text-bp-muted">
              <li>Tape over text, buttons, or faces.</li>
              <li>Tilted paragraphs or tilted buttons.</li>
              <li>More than two tape strips on one item.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="components"
        eyebrow="06"
        title="Components"
        intro="Buttons are always pills. Navy is the main action, gold is for actions on navy, and outline is the quiet option on dark backgrounds. Icons are Phosphor, regular weight, bold inside buttons."
        dots
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Spec name="Navy: primary action on light">
            <Button href="#components">
              Apply to volunteer
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Button>
          </Spec>
          <Spec name="Gold: primary action on navy">
            <div className="absolute inset-0 rounded-2xl bg-bp-navy" />
            <Button href="#components" variant="gold" className="relative">
              Apply to volunteer
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Button>
          </Spec>
          <Spec name="Outline: secondary on navy">
            <div className="absolute inset-0 rounded-2xl bg-bp-navy" />
            <Button href="#components" variant="outlineLight" className="relative">
              See our impact
            </Button>
          </Spec>
          <Spec name="Status pill">
            <p className="inline-flex items-center gap-2.5 rounded-full border border-bp-line bg-bp-paper px-3 py-1.5 text-sm font-semibold text-bp-ink">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              Volunteer applications open
            </p>
          </Spec>
          <Spec name="Event details row">
            <ul className="space-y-2 text-base font-semibold text-bp-ink">
              <li className="flex items-center gap-2"><CalendarBlank size={20} className="text-theme-accent" aria-hidden />{semester.event.weekdayDate}</li>
              <li className="flex items-center gap-2"><Clock size={20} className="text-theme-accent" aria-hidden />{semester.event.meetingTime} to {semester.event.endTime}</li>
              <li className="flex items-center gap-2"><MapPin size={20} className="text-theme-accent" aria-hidden />{semester.event.meetingPlace}</li>
            </ul>
          </Spec>
          <Spec name="Stat">
            <div className="absolute inset-0 rounded-2xl bg-bp-navy" />
            <dl className="relative text-white">
              <dd className="text-5xl font-bold tracking-tight text-bp-gold">{semester.impact.volunteersPerDay}</dd>
              <dt className="mt-1 text-base text-white/80">students in one day</dt>
            </dl>
          </Spec>
        </div>
      </Section>

      <Section
        id="motion"
        eyebrow="07"
        title="Motion"
        intro="Calm and physical, like paper settling onto a table. Every transition uses one easing curve, cubic-bezier(0.32, 0.72, 0, 1): fast at the start, slow to land. Nothing blurs, bounces, or loops except the mascot. Reduced motion turns it all off."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {motion.map((m, i) => (
            <li
              key={m.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="rounded-2xl bg-white p-6 shadow-bp transition-[translate,box-shadow] duration-300 ease-bp hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-xl font-semibold text-bp-ink">{m.name}</p>
              <p className="mt-2 font-mono text-sm text-bp-navy">{m.spec}</p>
              <p className="mt-2 text-base text-bp-muted">{m.where}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="voice"
        eyebrow="08"
        title="Voice"
        intro="Plain and specific, like a friend telling you the plan. Lead with the facts a student needs to say yes: when, where, what it costs, what they will do. No slogans."
        dots
      >
        <ul className="grid gap-4">
          {voice.map((v) => (
            <li key={v.do} className="grid gap-4 md:grid-cols-2">
              <p className="flex gap-3 rounded-2xl bg-white p-5 text-base text-bp-ink shadow-bp">
                <Check size={20} weight="bold" className="mt-0.5 shrink-0 text-emerald-600" aria-label="Write" />
                {v.do}
              </p>
              <p className="flex gap-3 rounded-2xl border border-bp-line bg-bp-paper/60 p-5 text-base text-bp-muted line-through decoration-bp-muted/40">
                <X size={20} weight="bold" className="mt-0.5 shrink-0 text-bp-navy" aria-label="Avoid" />
                {v.dont}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="semester"
        eyebrow="09"
        title="Semester theme"
        intro={`Each term adds one accent color and one mascot on top of the core brand. This term is ${semester.theme.name}. Swap both in src/config/semester.ts and every accent on the site updates.`}
      >
        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.3fr]">
          <div className="relative rounded-2xl bg-white p-6 shadow-bp">
            <Tape tone="accent" className="-top-3 right-8 rotate-3" />
            <div className="flex items-center gap-6">
              <Image
                src={semester.theme.mascot}
                alt={semester.theme.mascotAlt}
                width={160}
                height={160}
                className="animate-float h-32 w-auto"
              />
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-bp-muted">{semester.label}</p>
                <p className="mt-1 text-2xl font-bold text-bp-navy">{semester.theme.name}</p>
                <p className="mt-3 inline-flex items-center gap-2 font-mono text-sm text-bp-ink">
                  <span className="size-5 rounded-full bg-theme-accent ring-1 ring-black/5" aria-hidden />
                  {semester.theme.accent}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-bp">
            <p className="text-xl font-semibold text-bp-ink">Where the accent shows up</p>
            <ul className="mt-4 grid gap-2 text-base text-bp-muted sm:grid-cols-2">
              <li>Scribble underlines</li>
              <li>Circled step numbers</li>
              <li>Countdown digits</li>
              <li>Event detail icons</li>
              <li>Accent tape strips</li>
              <li>The hero mascot</li>
            </ul>
            <p className="mt-5 text-sm text-bp-muted">
              Pick an accent that reaches at least 3:1 on white and on navy. It is used
              for large text and marks only, never body copy or buttons.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
