import { ApplyBand } from "@/components/ApplyBand";
import { PageHeader } from "@/components/PageHeader";
import { CountUp } from "@/components/CountUp";
import { Tape } from "@/components/Scrapbook";
import { SiteMap } from "@/components/SiteMap";
import { brand } from "@/config/brand";
import { impactSource, partnerQuotes } from "@/config/press";
import { semester } from "@/config/semester";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { sites } from "@/config/sites";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Our impact | ${brand.name}`,
  description: `${semester.impact.hoursPerYear} volunteer hours and ${semester.impact.laborSaved} in labor saved every year across ${semester.impact.organizations} partner organizations.`,
};

const { impact } = semester;

const stats = [
  { value: String(sites.length), label: "sites on our map across Berkeley" },
  { value: "1,741", label: "current volunteers" },
  { value: impact.semesters, label: "semesters of Berkeley Project Day" },
  { value: impact.hoursPerYear, label: "volunteer hours every year" },
  { value: impact.laborSaved, label: "in labor costs saved every year" },
  { value: impact.organizations, label: "partner organizations around the Bay Area" },
];

const sustainedSites = [
  {
    src: "/bproads.JPEG",
    title: "Berkeley Roads",
    body: "About 50 Cal students and local residents came together, rain or shine, to paint new roads.",
  },
  {
    src: "/bpwheelbarrow.JPEG",
    title: "North Hills Demonstration Garden",
    body: "About 20 UC Berkeley volunteers weeded the Demonstration Garden on Old Tunnel Road with the North Hills Community Association garden committee, led by Celine Gyger.",
  },
  {
    src: "/bpschoolhouse.JPEG",
    title: "Schoolhouse Creek",
    body: "Students restored the site by painting and sanding benches and trimming overgrown bushes along the roads.",
  },
];

const serviceTypes = [
  { label: "Gardening", percent: 46.7 },
  { label: "Landscaping", percent: 23.3 },
  { label: "Cleaning", percent: 20.0 },
  { label: "Litter and trash pickup", percent: 10.0 },
];

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        title="Our impact"
        highlight="impact"
        media={
          <div className="relative aspect-[4/3] sm:aspect-[21/9]">
            <Image
              src="/impactpic.png"
              alt="Berkeley Project volunteers making heart shapes with their hands on Lower Sproul Plaza"
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <p>
          {brand.name} has worked with {impact.organizations} organizations around
          the Bay Area. Each year our volunteers give{" "}
          {impact.hoursPerYear} hours of service, saving over {impact.laborSaved}{" "}
          in labor costs, and connect Berkeley students with the people who live
          in the city.
        </p>
      </PageHeader>

      <section className="torn-top bg-bp-navy px-4 py-24 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight md:text-4xl">
            By the numbers
          </h2>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                className="flex flex-col-reverse justify-end gap-2"
                style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
              >
                <dt className="text-base text-white/75">{stat.label}</dt>
                <dd className="text-4xl font-bold tracking-tight text-bp-gold md:text-5xl">
                  <CountUp value={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-sm text-white/70">
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
        </div>
      </section>

      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Sustained sites
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg text-bp-muted">
            Between Berkeley Project Days, committee members volunteer at sustained
            sites throughout the semester. It keeps us working alongside the same
            community partners all year.
          </p>

          <ul className="scrap-tilt mt-14 grid items-start gap-12 md:grid-cols-3 md:gap-8">
            {sustainedSites.map((site, i) => (
              <li
                key={site.title}
                data-reveal
                className="group relative rounded-2xl bg-white p-3 pb-6 shadow-bp"
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <Tape className={`-top-3 left-1/2 -ml-12 ${i % 2 ? "rotate-3" : "-rotate-3"}`} />
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-bp-cream">
                  <Image
                    src={site.src}
                    alt={`Volunteers at ${site.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-bp group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-2">
                  <h3 className="mt-5 text-xl font-semibold text-bp-ink">{site.title}</h3>
                  <p className="mt-2 text-base text-bp-muted">{site.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bp-cream bg-dots px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            From our partners
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg text-bp-muted">
            What the community organizations we work with have written about
            Berkeley Project Day.
          </p>

          <ul className="mt-14 grid items-start gap-12 md:grid-cols-2 md:gap-10">
            {partnerQuotes.map((item, i) => (
              <li
                key={item.org}
                data-reveal
                className={`relative rounded-2xl bg-white p-8 shadow-bp transition-[rotate] duration-700 ease-bp hover:rotate-0 ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                }`}
                style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
              >
                <Tape className={`-top-3 left-8 ${i % 2 ? "rotate-3" : "-rotate-3"}`} tone={i % 2 ? "accent" : "gold"} />
                <figure>
                  <blockquote className="text-xl font-medium leading-relaxed text-bp-ink md:text-2xl">
                    <span aria-hidden className="mr-1 font-bold text-bp-gold">“</span>
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-bp-line pt-4">
                    <p className="text-base font-semibold text-bp-navy">{item.org}</p>
                    <p className="mt-1 text-sm text-bp-muted">{item.context}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-bp-navy underline decoration-bp-navy/30 underline-offset-4 transition-colors duration-300 ease-bp hover:decoration-bp-navy"
                    >
                      Read their post
                      <ArrowUpRight size={16} weight="bold" aria-hidden />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16">
          <div data-reveal>
            <h2 className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
              Types of service
            </h2>
            <p className="mt-6 text-lg text-bp-muted">
              Most of our work is outdoors, from environmental restoration to
              neighborhood cleanups. This is how our service time breaks down.
            </p>
          </div>

          <dl className="space-y-6">
            {serviceTypes.map((type, i) => (
              <div
                key={type.label}
                data-reveal
                style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-base font-semibold text-bp-ink">{type.label}</dt>
                  <dd className="text-base font-semibold tabular-nums text-bp-navy">
                    {type.percent.toFixed(1)}%
                  </dd>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-bp-line" aria-hidden>
                  <div
                    className="reveal-bar h-full rounded-full bg-bp-navy"
                    style={{ width: `${type.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-bp-cream bg-dots px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Where we volunteer
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg text-bp-muted">
            {sites.length} schools, gardens, creeks, and community organizations
            across Berkeley that our teams have worked with. Pick a site to find
            it on the map.
          </p>
          <div className="mt-10">
            <SiteMap />
          </div>
        </div>
      </section>

      <ApplyBand />
    </>
  );
}
