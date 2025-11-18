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
        className="h-6 w-6"
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
];

const sponsors = [
  { name: "Asha", logo: "/asha.png" },
  { name: "Berkeley Bowl", logo: "/berkeleybowl.webp" },
  { name: "Target", logo: "/target.png" },
  { name: "The Hidden Cafe", logo: "/hiddencafe.png" },
  { name: "Acme Bread", logo: "/acmelogo.png" },
  { name: "Chipotle", logo: "/chipotle.png" },
  { name: "Snapdragon", logo: "/snapdragon.svg" },
  { name: "Semifreddi's", logo: "/semifreddislogo.png" },
  { name: "GT Synergy", logo: "/gtsynergycircular.png" },
  { name: "Pepsi", logo: "/pepsi.png" },
];

export function Footer() {
  return (
    <footer className="pt-12 bg-white text-white">
      <div className="relative">
        <div className="w-full rounded-t-[3rem] bg-blue-400 px-4 py-12 text-white sm:px-6 sm:py-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
            <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  aria-label={social.label}
                  className="rounded-full border border-white/40 bg-white/10 p-3 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-10 w-full">
              <h2 className="text-center text-lg font-semibold uppercase tracking-wide text-[#FFE08A]">
                Sponsors & Partners
              </h2>
              <p className="mt-4 text-center text-sm text-white/80">
                We’re grateful for the organizations that power Berkeley Project.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="flex h-36 items-center justify-center rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur"
                  >
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={200}
                      height={120}
                      className="h-auto max-h-20 w-auto max-w-full object-contain"
                      loading="eager"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
