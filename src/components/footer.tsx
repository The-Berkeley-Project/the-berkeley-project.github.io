import Image from "next/image";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theberkeleyproject/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6.5-8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z" />
        <path d="M21 7.25c-.014-1.337-.144-2.27-.612-3.08a4.12 4.12 0 0 0-1.8-1.8C17.78 1.9 16.85 1.77 15.51 1.75 14.15 1.736 13.82 1.73 12 1.73s-2.15.006-3.51.02c-1.34.014-2.27.144-3.08.612a4.12 4.12 0 0 0-1.8 1.8C3.14 4.47 3.01 5.4 2.99 6.74 2.976 8.1 2.97 8.43 2.97 10.25s.006 2.15.02 3.51c.014 1.34.144 2.27.612 3.08a4.12 4.12 0 0 0 1.8 1.8c.81.468 1.74.598 3.08.612 1.36.014 1.69.02 3.51.02s2.15-.006 3.51-.02c1.34-.014 2.27-.144 3.08-.612a4.12 4.12 0 0 0 1.8-1.8c.468-.81.598-1.74.612-3.08.014-1.36.02-1.69.02-3.51s-.006-2.15-.02-3.51ZM19 13.68c-.012 1.224-.13 1.887-.306 2.326a2.12 2.12 0 0 1-.912.912c-.439.176-1.102.294-2.326.306-1.352.014-1.75.018-3.456.018s-2.104-.004-3.456-.018c-1.224-.012-1.887-.13-2.326-.306a2.12 2.12 0 0 1-.912-.912c-.176-.439-.294-1.102-.306-2.326-.014-1.352-.018-1.75-.018-3.456s.004-2.104.018-3.456c.012-1.224.13-1.887.306-2.326a2.12 2.12 0 0 1 .912-.912c.439-.176 1.102-.294 2.326-.306 1.352-.014 1.75-.018 3.456-.018s2.104.004 3.456.018c1.224.012 1.887.13 2.326.306.395.16.71.476.912.912.176.439.294 1.102.306 2.326.014 1.352.018 1.75.018 3.456s-.004 2.104-.018 3.456Z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@theberkeleyproject",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M20.94 8.1a6.29 6.29 0 0 1-4.28-1.68l.01 7.35a4.87 4.87 0 1 1-4.87-4.88c.19 0 .37.01.55.04l.01 2.56a2.33 2.33 0 1 0 2.32 2.33l-.02-13.72h2.59a3.77 3.77 0 0 0 .03.44 3.72 3.72 0 0 0 3.44 3.23c.19.01.39.02.58 0v2.53a6.07 6.07 0 0 1-.36.01Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:berkeleyproject@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path d="M3.75 5.25h16.5A2.25 2.25 0 0 1 22.5 7.5v9a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 16.5v-9a2.25 2.25 0 0 1 2.25-2.25Zm0 1.7v.2l8.25 5.55 8.25-5.55v-.2H3.75Zm16.5 10.1a.55.55 0 0 0 .55-.55V8.8l-8.5 5.72a.75.75 0 0 1-.84 0L3 8.8v7.7c0 .3.25.55.55.55h16.7Z" />
      </svg>
    ),
  },
];

const sponsors = [
  {
    name: "Perfect Bar",
    logo: "/sponsors/PerfectBar.png",
    href: "https://perfectsnacks.com/",
  },
  {
    name: "Chobani",
    logo: "/sponsors/Chobani.png",
    href: "https://www.chobani.com/",
  },
  {
    name: "Olipop",
    logo: "/sponsors/Olipop.png",
    href: "https://drinkolipop.com/",
  },
  {
    name: "Cult Crackers",
    logo: "/sponsors/CultCrackers1.png",
    href: "https://www.cultcrackers.com/",
  },
  {
    name: "Harmless Harvest",
    logo: "/sponsors/HarmlessHarvest.png",
    href: "https://harmlessharvest.com/",
  },
  {
    name: "LMNT",
    logo: "/sponsors/LMNT.webp",
    href: "https://drinklmnt.com/",
  },
  {
    name: "Shinnyo-en Foundation",
    logo: "/sponsors/Shinnyo-enFoundation.webp",
    href: "https://sef.org/",
  },
  {
    name: "Boichik Bagels",
    logo: "/sponsors/BoichikBagels.avif",
    href: "https://boichikbagels.com/",
  },
];

type FooterProps = {
  logoSrc?: string;
};

export function Footer({ logoSrc = "/bpLogo.png" }: FooterProps) {
  return (
    <footer className="m-0 w-full bg-[#2F5D8C]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-[0.8fr_1.2fr] md:px-10 lg:px-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-center text-center">

          {/* BP LOGO */}
          <Image
            src={logoSrc}
            alt="The Berkeley Project"
            width={420}
            height={220}
            priority
            className="h-auto w-[190px] object-contain md:w-[230px]"
          />

          {/* SOCIALS */}
          <div className="mt-7">
            {/* <h2 className="font-serif text-2xl font-bold text-white">
              Check Out Our Socials!
            </h2> */}

            {/* <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
              Follow us for updates, event photos, and community highlights.
            </p> */}

            <div className="mt-5 flex justify-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#2F5D8C]
                    transition
                    duration-200
                    hover:-translate-y-1
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex w-full flex-col items-center">

          <h2 className="mb-6 text-center font-serif text-2xl font-bold text-white md:text-3xl">
            Special Thanks To Our Sponsors!
          </h2>

          <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  aspect-[1.25/1]
                  items-center
                  justify-center
                  rounded-xl
                  bg-white/75
                  p-4
                  transition
                  duration-200
                  hover:-translate-y-1
                  hover:bg-white
                "
              >
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  width={180}
                  height={100}
                  className="h-auto max-h-[65px] w-auto max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}