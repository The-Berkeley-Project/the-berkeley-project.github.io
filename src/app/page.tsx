import { ApplyBand } from "@/components/ApplyBand";
import SocialEmbeddings from "@/components/SocialEmbeddings";
import Button from "@/components/button";
import { CountUp } from "@/components/CountUp";
import { CircledNumber, Scribble, Tape } from "@/components/Scrapbook";
import { Countdown } from "@/components/Countdown";
import { StatementReveal } from "@/components/StatementReveal";
import StickyApplyBar from "@/components/StickyApplyBar";
import { brand } from "@/config/brand";
import { faq } from "@/config/faq";
import { impactSource, press } from "@/config/press";
import { semester } from "@/config/semester";
import { OutletLogo } from "@/components/OutletLogo";
import { PressCarousel } from "@/components/PressCarousel";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarBlank,
  Clock,
  CloudRain,
  IdentificationCard,
  MapPin,
  Plus,
  TShirt,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const { event, impact, links, theme } = semester;

const steps = [
  {
    title: `Apply by ${event.shortDeadline}`,
    body: "Fill out the volunteer form. It is free, no experience is needed, and you can sign up with friends.",
  },
  {
    title: `Meet at Lower Sproul on ${event.shortDate}`,
    body: `Check in at ${event.meetingTime}, eat breakfast, and meet your site leader and team.`,
  },
  {
    title: `Work at your site until ${event.endTime}`,
    body: "Your team heads out on foot or by AC Transit. Lunch is provided, and you get a free shirt.",
  },
];

const essentials = [
  { icon: TShirt, text: "Closed toe shoes and clothes you don’t mind getting dirty" },
  { icon: IdentificationCard, text: "Your Cal ID and your AC Transit card" },
  { icon: CloudRain, text: "It happens rain or shine, so check the forecast" },
];

const stats = [
  { value: impact.hoursPerYear, label: "volunteer hours every year" },
  { value: impact.laborSaved, label: "in labor costs saved every year" },
  { value: impact.organizations, label: "partner organizations around the Bay Area" },
  { value: impact.semesters, label: "semesters of Berkeley Project Day" },
];

const pressOutlets = press.filter(
  (item, i) => press.findIndex((other) => other.outlet.name === item.outlet.name) === i,
);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-bp-cream px-4 pb-32 pt-32 sm:px-6 md:pt-40">
        <div aria-hidden className="hero-dots pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-bp-cream/0 to-bp-paper"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_1fr] md:gap-12 lg:gap-16">
          <div className="min-w-0">
            <p className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-bp-line bg-bp-paper px-3 py-1.5 text-sm font-semibold text-bp-ink">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
                <span className="relative size-2 rounded-full bg-emerald-500" />
              </span>
              Volunteer applications open
            </p>

            <h1
              className="animate-rise mt-6 text-[clamp(2.25rem,11.5vw,3rem)] font-bold leading-[1.02] tracking-tight text-bp-navy sm:text-6xl lg:text-7xl"
              style={{ "--rise-delay": "60ms" } as React.CSSProperties}
            >
              Volunteer{" "}
              <Scribble>across Berkeley</Scribble>
              <span className="sr-only"> on {event.weekdayDate}</span>
            </h1>

            <ul
              className="animate-rise mt-8 flex flex-wrap gap-x-6 gap-y-3 text-base font-semibold text-bp-ink"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              <li className="flex items-center gap-2">
                <CalendarBlank size={20} className="text-theme-accent" aria-hidden />
                {event.weekdayDate}
              </li>
              <li className="flex items-center gap-2">
                <Clock size={20} className="text-theme-accent" aria-hidden />
                {event.meetingTime} to {event.endTime}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={20} className="text-theme-accent" aria-hidden />
                {event.meetingPlace}
              </li>
            </ul>

            <p
              className="animate-rise mt-6 max-w-[480px] text-lg text-bp-muted"
              style={{ "--rise-delay": "180ms" } as React.CSSProperties}
            >
              One day of community service with about {impact.volunteersPerDay} UC
              Berkeley students. It’s free, no experience is needed, and breakfast,
              lunch, and a shirt are on us.
            </p>

            <div
              className="animate-rise mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
              style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            >
              <Button href={links.volunteerApply}>
                Apply as a volunteer
                <ArrowRight size={18} weight="bold" aria-hidden />
              </Button>
              <p className="text-sm text-bp-muted">
                Closes <span className="font-semibold text-bp-ink">{event.deadline}</span>
              </p>
            </div>
          </div>

          <div
            className="animate-rise group relative mx-2 sm:mx-6"
            style={{ "--rise-delay": "200ms" } as React.CSSProperties}
          >
            <div
              aria-hidden
              className="absolute inset-0 rotate-[5deg] overflow-hidden rounded-2xl bg-bp-line photo-frame transition-transform duration-700 ease-bp group-hover:rotate-[8deg] group-hover:translate-x-2"
            >
              <Image
                src={semester.heroBackPhoto}
                alt=""
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative -rotate-1 transition-transform duration-700 ease-bp group-hover:rotate-0">
              <Tape className="-top-3 left-1/2 -ml-12 -rotate-3" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bp-line photo-frame">
                <Image
                  src={semester.heroPhoto}
                  alt="Berkeley Project volunteers gathered on the Sproul Hall steps"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Image
              src={theme.mascot}
              alt={theme.mascotAlt}
              width={160}
              height={160}
              className="animate-float pointer-events-none absolute -bottom-10 -left-8 h-auto w-24 drop-shadow-md sm:w-32"
            />
          </div>
        </div>

        <div
          className="animate-rise relative mx-auto mt-16 flex max-w-6xl flex-col gap-6 rounded-2xl border border-bp-line bg-white p-6 shadow-bp md:flex-row md:items-center md:justify-between md:p-8"
          style={{ "--rise-delay": "360ms" } as React.CSSProperties}
        >
          <Tape tone="accent" className="-top-3 left-8 -rotate-2" />
          <Tape tone="accent" className="-top-3 right-8 rotate-3" />
          <div>
            <h2 className="text-xl font-semibold text-bp-ink">Countdown to {event.name}</h2>
            <p className="mt-1 text-sm text-bp-muted">
              Check in at {event.meetingPlace} at {event.meetingTime}
            </p>
          </div>
          <Countdown
            targetDate={event.dateISO}
            format="long"
            valueClassName="text-3xl md:text-4xl text-theme-accent"
            labelClassName="text-sm text-bp-muted"
          />
        </div>
      </section>

      {/* What BP is */}
      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <h2 className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
              What {brand.name} is
            </h2>
            <div className="mt-6 space-y-4 text-lg text-bp-muted">
              <p>
                {brand.name} is the largest community service organization at UC
                Berkeley. Students started it in {brand.founded} as a single day of
                service, and it is still fully student run and not for profit.
              </p>
              <p>
                Each semester we organize {event.name}. About{" "}
                {impact.volunteersPerDay} volunteers split into teams, each led by a
                trained site leader, and spend the day at schools, parks, gardens,
                creeks, and community centers across the city.
              </p>
              <p>
                Past projects include painting roads, restoring Schoolhouse Creek,
                planting trees, making meals for unhoused neighbors, and helping at
                senior centers.
              </p>
            </div>
          </div>

          <div
            data-reveal
            className="group relative rotate-1 transition-[rotate] duration-700 ease-bp hover:rotate-0"
            style={{ "--reveal-delay": "150ms" } as React.CSSProperties}
          >
            <Tape className="-top-3 -left-4 -rotate-[30deg]" />
            <Tape className="-bottom-3 -right-4 -rotate-[30deg]" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-bp-cream photo-frame">
              <Image
                src={semester.aboutPhoto}
                alt="A team of Berkeley Project volunteers with a wheelbarrow and rakes at a street planting site"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-bp group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="torn-top bg-bp-navy px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight md:text-4xl">
            Impact each year
          </h2>

          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                className="flex flex-col-reverse justify-end gap-2"
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <dt className="text-base text-white/75">{stat.label}</dt>
                <dd className="text-4xl font-bold tracking-tight text-bp-gold md:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-sm text-white/70">
            Hours and labor savings as cited in the{" "}
            <a
              href={impactSource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/40 underline-offset-4 transition-colors duration-300 ease-bp hover:text-white hover:decoration-bp-gold"
            >
              {impactSource.label}
            </a>{" "}
            in {impactSource.outlet}.
          </p>

          <Link
            href={links.impact}
            className="mt-6 inline-flex items-center gap-2 rounded-full text-base font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors duration-300 ease-bp hover:decoration-bp-gold"
          >
            See our full impact
            <ArrowUpRight size={18} weight="bold" aria-hidden />
          </Link>
        </div>
      </section>

      {/* Statement */}
      <section className="torn-top torn-bottom bg-bp-gold px-4 py-24 sm:px-6 md:py-32">
        <div className="mx-auto max-w-6xl">
          <StatementReveal
            text="Since 2006, our goal has been to change the relationship between UC Berkeley students and the people of Berkeley through hands on service."
          />
        </div>
      </section>

      {/* In the news */}
      <section className="bg-bp-cream bg-dots px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div data-reveal>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-bp-muted">Featured in</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
              In the news
            </h2>
            <ul className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6" aria-label="Outlets that have covered us">
              {pressOutlets.map((item) => (
                <li key={item.outlet.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded transition-[translate] duration-300 ease-bp hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy focus-visible:ring-offset-4"
                  >
                    <OutletLogo outlet={item.outlet} area={5700} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="mt-10" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
            <PressCarousel items={press} />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            How {event.name} works
          </h2>

          <ol className="mt-12 grid gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal
                className="group"
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <CircledNumber
                  value={i + 1}
                  className="transition-transform duration-500 ease-bp group-hover:-translate-y-1 group-hover:-rotate-6"
                />
                <h3 className="mt-4 text-xl font-semibold text-bp-ink">{step.title}</h3>
                <p className="mt-2 text-base text-bp-muted">{step.body}</p>
              </li>
            ))}
          </ol>

          <div
            data-reveal
            className="relative mt-16 grid gap-12 rounded-2xl border border-bp-line bg-bp-cream bg-dots p-8 shadow-bp md:grid-cols-2 md:p-12"
          >
            <Tape className="-top-3 left-1/2 -ml-12 rotate-2" />
            <div>
              <h3 className="text-xl font-semibold text-bp-ink">What to wear and bring</h3>
              <ul className="mt-6 space-y-4">
                {essentials.map(({ icon: Icon, text }) => (
                  <li key={text} className="group/item flex gap-3 text-base text-bp-muted">
                    <Icon
                      size={24}
                      className="shrink-0 text-bp-navy transition-transform duration-300 ease-bp group-hover/item:-rotate-12 group-hover/item:scale-110"
                      aria-hidden
                    />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-bp-ink">
                Schedule for {event.weekdayDate}
              </h3>
              <dl className="mt-6 divide-y divide-bp-line">
                {semester.schedule.map((item) => (
                  <div key={item.time} className="grid grid-cols-[8rem_1fr] gap-4 py-3">
                    <dt className="text-sm font-semibold text-bp-ink">{item.time}</dt>
                    <dd className="text-sm text-bp-muted">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-bp-paper px-4 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-2xl font-bold tracking-tight text-bp-navy">
            Photos from past Berkeley Project Days
          </h2>
          <div className="scrap-tilt mt-8 grid grid-cols-2 gap-5 md:grid-cols-4 md:grid-rows-2">
            {semester.photos.map((photo, i) => (
              <div
                key={photo.src}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                className={`group relative overflow-hidden rounded-2xl bg-bp-cream photo-frame ${
                  i === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-square"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition-transform duration-700 ease-bp group-hover:scale-[1.04]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bp-cream bg-dots px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Questions before you apply
          </h2>
          <div data-reveal className="mt-8 divide-y divide-bp-line border-y border-bp-line">
            {faq.map((item) => (
              <details key={item.q} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-6 text-lg font-semibold text-bp-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    size={20}
                    weight="bold"
                    className="shrink-0 text-bp-navy transition-transform duration-300 ease-bp group-open:rotate-45"
                    aria-hidden
                  />
                </summary>
                <p className="pb-6 text-base text-bp-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SocialEmbeddings />
      <ApplyBand />
      <StickyApplyBar />
    </>
  );
}
