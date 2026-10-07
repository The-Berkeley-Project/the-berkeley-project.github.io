import Button from "@/components/button";
import { semester } from "@/config/semester";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

const { event, impact, links } = semester;

export function ApplyBand() {
  return (
    <section className="torn-top torn-bottom bg-bp-navy px-4 py-24 text-center text-white sm:px-6">
      <div data-reveal className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Applications close {event.deadline}
        </h2>
        <p className="mt-4 text-lg text-white/75">
          Join about {impact.volunteersPerDay} students on {event.weekdayDate}. It’s
          free, and no experience is needed.
        </p>
        <div className="mt-8">
          <Button href={links.volunteerApply} variant="gold">
            Apply as a volunteer
            <ArrowRight size={18} weight="bold" aria-hidden />
          </Button>
        </div>
      </div>
    </section>
  );
}
