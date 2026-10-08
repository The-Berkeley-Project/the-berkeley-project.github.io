import { brand } from "@/config/brand";
import { semester } from "@/config/semester";
import { EnvelopeSimple, InstagramLogo, TiktokLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/theberkeleyproject/", icon: InstagramLogo },
  { label: "TikTok", href: "https://www.tiktok.com/@theberkeleyproject", icon: TiktokLogo },
  { label: "Email", href: "mailto:berkeleyproject@gmail.com", icon: EnvelopeSimple },
];

const sponsors = [
  { name: "Perfect Bar", logo: "/sponsors/PerfectBar.png", href: "https://perfectsnacks.com/?srsltid=AfmBOooe_pFUEwBwHdH1FGDQ7OBDdYY0zOIWPWrobIuVEfQF1rhg2_Iv"},
  { name: "Chobani", logo: "/sponsors/Chobani.png", href: "https://www.chobani.com/" },
  { name: "Olipop", logo: "/sponsors/Olipop.png", href: "https://drinkolipop.com/?srsltid=AfmBOoqSjQd-5w1Z-56X3uwe4ALDiEwur-L5rmCp768XR2dsYTE2ZGPf" },
  { name: "Cult Crackers", logo: "/sponsors/CultCrackers1.png", href: "https://www.cultcrackers.com/?srsltid=AfmBOoqmXSoonCXmfPp8yPulsXcg640tGFEfA1U1zC8oRfYuS08UhUDJ" },
  { name: "Harmless Harvest", logo: "/sponsors/HarmlessHarvest.png", href: "https://harmlessharvest.com/?srsltid=AfmBOopSljvKQn29ZC0h60j9oqc9ATlz6qn149vCBc-AEGP5rNwOrQrD" },
  { name: "LMNT", logo: "/sponsors/LMNT.webp", href: "https://drinklmnt.com/collections/salt?utm_source=google&utm_medium=cpc&utm_campaign=evergreenmisspellcold&gad_source=1&gad_campaignid=21002967780&gbraid=0AAAAAC5L3cfOQghti1BXKnSlNQLH5FGWs&gclid=Cj0KCQiA8KTNBhD_ARIsAOvp6DKU7vjY8fYrrkrIYYryDdlfLZS8MbdUVMwhmrztpoYvNMGxiM1DQVgaAjAlEALw_wcB" },
  { name: "Shinnyo-en Foundation", logo: "/sponsors/Shinnyo-enFoundation.webp", href: "https://sef.org/"},
  { name: "Boichik Bagels", logo: "/sponsors/BoichikBagels.avif", href: "https://boichikbagels.com/?srsltid=AfmBOorYwXdfhTzIjQXMH-kptfjSDO3dukOdljZuAiEYBSr9gxOtd-DO" },
];

type FooterProps = {
  logoSrc?: string;
};

export function Footer({ logoSrc = "/bpLogo.png" }: FooterProps) {
  return (
    <footer className="bg-bp-paper px-4 pb-28 pt-20 sm:px-6 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <Image
            src={logoSrc}
            alt={brand.name}
            width={420}
            height={220}
            className="h-auto w-44 object-contain"
          />
          <p className="mt-4 max-w-xs text-base text-bp-muted">
            The largest community service organization at UC Berkeley. Student run
            since {brand.founded}.
          </p>
          <ul className="mt-6 flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex size-11 items-center justify-center rounded-full bg-bp-cream text-bp-navy transition-colors duration-300 ease-bp hover:bg-bp-line focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy"
                >
                  <Icon size={22} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-bp-ink">Thank you to our sponsors</h2>
          <ul className="scrap-tilt mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {sponsors.map((sponsor) => (
              <li key={sponsor.name}>
                <a
                  href={sponsor.href}
                  aria-label={sponsor.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-24 items-center justify-center rounded-2xl bg-white p-4 shadow-bp transition-shadow duration-300 ease-bp hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={180}
                    height={100}
                    className="h-full max-h-14 w-auto max-w-full object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-bp-line pt-6 text-sm text-bp-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {brand.name}</p>
        <a
          href={semester.links.donate}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full font-semibold text-bp-navy underline decoration-bp-line underline-offset-4 hover:decoration-bp-navy"
        >
          Donate through the ASUC
        </a>
      </div>
    </footer>
  );
}
