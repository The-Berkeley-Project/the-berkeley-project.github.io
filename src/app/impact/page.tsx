import Image from "next/image";
import SusSiteCard from "@/components/sussitecard";
import { Leaf, Package, School } from "lucide-react";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
      {/* padding before title */}
      <section className="mx-auto max-w-5xl px-6 pt-32 text-center">
        <h1 className="text-4xl font-bold text-[#003262] sm:text-5xl">
          Our Impact
        </h1>
      </section>

      {/* impact picture + caption */}
      <section className="mx-auto mt-10 max-w-5xl px-6 text-center">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-lg">
          <Image
            src="/impactpic.png"
            alt="The Berkeley Project Team"
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-8 max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed">
          Built on the collective drive to improve our community, The Berkeley
          Project has worked with over 100 organizations around the Bay Area.
          Each year, we devote a total of <strong>12,000+ hours</strong> saving
          over <strong>$400,000</strong> in labor costs. More importantly, we
          connect the students of Berkeley to members of the city creating a
          more tight-knit space to live and learn.
        </p>
      </section>

      {/* blue banner with big numbers */}
      <section className="mt-16">
        <div className="w-full rounded-t-[3rem] bg-blue-400 px-6 py-12 text-white shadow-md">
          <div className="grid gap-10 text-center sm:grid-cols-3">
            <div>
              <h2 className="text-5xl font-extrabold">298</h2>
              <p className="mt-2 text-lg uppercase tracking-wide">Sustained Sites</p>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold">1,741</h2>
              <p className="mt-2 text-lg uppercase tracking-wide">Current Volunteers</p>
            </div>
            <div>
              <h2 className="text-5xl font-extrabold">36</h2>
              <p className="mt-2 text-lg uppercase tracking-wide">Semesters</p>
            </div>
          </div>
        </div>
      </section>

      {/* sustained sites */}
      <section className="mx-auto mt-24 max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-black sm:text-5xl">
          Sustained Sites
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-sm text-gray-700 leading-relaxed">
          While planning Berkeley Project Day is the main objective, committee
          members build lasting relationships with community leaders by
          volunteering at sustained sites throughout the semester. These sites
          give us the opportunity to engage in community service just as our
          volunteers do during Berkeley Project Day.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-3">
          <SusSiteCard
            imageSrc="/impactpic.png"
            alt="Fire Trail Gardens"
            title="Fire Trail Gardens"
            description="Rain or shine, Berkeley Bears are always down to volunteer! A group of 50 Cal students and local residents came together to dig up dirty roots to plant new trees!"
            Icon={Leaf}
          />

          <SusSiteCard
            imageSrc="/impactpic.png"
            alt="Berkeley Bowl Distribution"
            title="Berkeley Bowl Distribution"
            description="On a beautiful sunny day, Saturday, March 12, about 20 UC Berkeley volunteers helped with weeding in the Demonstration Garden on Old Tunnel Road. The North Hills community Association garden committee, led by Celine Gyger, organized the event."
            Icon={Package}
          />

          <SusSiteCard
            imageSrc="/impactpic.png"
            alt="Schoolhouse Creek"
            title="Schoolhouse Creek"
            description="Students came together to restore the site by painting and sanding benches, as well as trimming overgrown bushes along the roads!"
            Icon={School}
          />
        </div>
      </section>

      {/* bottom padding */}
      <div className="pb-24" />
    </div>
  );
}
