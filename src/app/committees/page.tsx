import { ApplyBand } from "@/components/ApplyBand";
import { PageHeader } from "@/components/PageHeader";
import Button from "@/components/button";
import { Tape } from "@/components/Scrapbook";
import { brand } from "@/config/brand";
import { semester } from "@/config/semester";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Committees | ${brand.name}`,
  description:
    "Meet the executive board and the six student committees that organize Berkeley Project Day.",
};

const { committeeApplications } = semester;

const execBoard = [
  { name: "Sophia Bazini-Barakat", role: "External President", image: "/core/sophia.jpg" },
  { name: "Jordan Cheng", role: "Internal President", image: "/core/jordan.jpg" },
  { name: "Kelly Cheng", role: "Outreach President", image: "/core/kelly.jpg" },
  { name: "Amber Cui", role: "Operations President", image: "/core/amber.jpg" },
  { name: "Arshul Garg", role: "Community President", image: "/core/arshul.jpg" },
];

const committees = [
  {
    title: "External Affairs",
    description:
      "External Affairs organizes the logistics of Berkeley Project Day, helps fundraise, plans the BP Day before and after events, reaches out to campus organizations, and helps choose the BP Day theme, working a little with every other team along the way.",
    members: [
      { name: "Joon Chang", image: "/core/joon.jpg" },
      { name: "Vivianna Tang", image: "/core/vivianna.jpg" },
    ],
  },
  {
    title: "Finance",
    description:
      "Finance feeds volunteers and pays for supplies by fundraising, applying to grants, and reaching out to local businesses and campus organizations. The team manages reimbursements and allocates funding to the other committees so every dollar is accounted for.",
    members: [
      { name: "Chenfei Wang", image: "/core/chenfei.jpg" },
      { name: "Clarisse Nikaido", image: "/core/clarisse.jpg" },
    ],
  },
  {
    title: "Marketing",
    description:
      "Marketing runs promotion and branding for The Berkeley Project: flyers, bookmarks, social media events, and posts. On BP Day, the team travels between sites to photograph volunteers and site leaders at work.",
    members: [
      { name: "Evie Nguyen", image: "/core/evie.jpg" },
      { name: "Caitlyn Lee", image: "/core/caitlyn.jpg" },
    ],
  },
  {
    title: "Site Planning",
    description:
      "Site Planning finds and sets up every BP Day site. Using past site lists and new research, the team contacts community organizers and city workers about projects, then records the details for the rest of the core team.",
    members: [
      { name: "Christina Lu", image: "/core/christina.jpg" },
      { name: "Rohan Sinha", image: "/core/rohan.jpg" },
    ],
  },
  {
    title: "Volunteer",
    description:
      "Volunteer builds the site leader and volunteer applications, selects and trains site leaders, and is responsible for every site leader and volunteer on BP Day, roughly 2,000 people.",
    members: [
      { name: "Nicole Li", image: "/core/nicole.jpg" },
      { name: "Marrissa Kwok", image: "/core/marrissa.jpg" },
    ],
  },
  {
    title: "Web",
    description:
      "Web updates and maintains berkeleyproject.org, shares updates with the BP community, and builds tools that automate work for other committees. Members can take on their own projects, like a tabling sign up bot or a page redesign.",
    members: [
      { name: "Tiger Shi", image: "/core/tiger.jpg" },
      { name: "Nick Choy", image: "/core/nick.jpg" },
    ],
  },
];

function Portrait({
  src,
  name,
  role,
  sizes,
}: {
  src: string;
  name: string;
  role?: string;
  sizes: string;
}) {
  return (
    <div className="group rounded-2xl bg-white p-2.5 pb-4 shadow-bp">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bp-cream">
        <Image
          src={src}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-bp group-hover:scale-[1.05]"
        />
      </div>
      <p className="mt-3 px-1 text-sm font-semibold text-bp-ink">{name}</p>
      {role && <p className="px-1 text-sm text-bp-muted">{role}</p>}
    </div>
  );
}

export default function CommitteesPage() {
  return (
    <>
      <PageHeader
        title="The students who run Berkeley Project Day"
        highlight="students"
        media={
          <div className="relative aspect-[4/3]">
            <Image
              src="/core/core-fa26.jpg"
              alt="The Berkeley Project core team in matching shirts on the Sproul Hall steps"
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        }
      >
        <p>
          Each semester, Berkeley Project Day is organized by six core committees:
          External Affairs, Finance, Marketing, Site Planning, Volunteer, and Web.
          Every member is a UC Berkeley student.
        </p>
      </PageHeader>

      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Executive board
          </h2>
          <ul className="scrap-tilt mt-12 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
            {execBoard.map((member, i) => (
              <li
                key={member.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <Portrait
                  src={member.image}
                  name={member.name}
                  role={member.role}
                  sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bp-cream bg-dots px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 data-reveal className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Committees
          </h2>
          <ul className="mt-8 divide-y divide-bp-line border-y border-bp-line">
            {committees.map((committee) => (
              <li
                key={committee.title}
                data-reveal
                className="grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center md:gap-16"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-bp-ink">{committee.title}</h3>
                  <p className="mt-3 max-w-xl text-base text-bp-muted">
                    {committee.description}
                  </p>
                </div>
                <ul className="scrap-tilt grid grid-cols-2 gap-4 sm:w-80">
                  {committee.members.map((member) => (
                    <li key={member.name}>
                      <Portrait src={member.image} name={member.name} sizes="160px" />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-bp-paper px-4 py-24 sm:px-6">
        <div data-reveal className="relative mx-auto grid max-w-6xl gap-8 rounded-2xl border border-bp-line bg-white p-8 shadow-bp md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <Tape className="-top-3 left-10 -rotate-3" />
          <Tape className="-top-3 right-10 rotate-2" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
              Join a committee
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-bp-muted">
              Committee members plan Berkeley Project Day all semester, from finding
              sites to training site leaders.{" "}
              {committeeApplications.open
                ? `Applications for ${semester.label} are open now.`
                : `Committee applications for ${semester.label} are now closed. Follow @theberkeleyproject on Instagram to hear when they open next semester.`}
            </p>
            {!committeeApplications.open && (
              <p className="mt-4 text-base text-bp-muted">
                You can still volunteer at {semester.event.name} on{" "}
                {semester.event.weekdayDate}. Volunteer applications close{" "}
                {semester.event.deadline}.
              </p>
            )}
          </div>
          {committeeApplications.open && committeeApplications.link ? (
            <Button href={committeeApplications.link}>
              Apply to a committee
              <ArrowRight size={18} weight="bold" aria-hidden />
            </Button>
          ) : (
            <span className="inline-flex -rotate-6 items-center justify-center self-start rounded-lg border-[3px] border-double border-bp-navy/70 px-5 py-2 text-lg font-bold uppercase tracking-widest text-bp-navy/80 md:self-center">
              Applications closed
            </span>
          )}
        </div>
      </section>

      <ApplyBand />
    </>
  );
}
