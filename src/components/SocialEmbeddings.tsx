"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { EnvelopeSimple, InstagramLogo, TiktokLogo } from "@phosphor-icons/react";
import { socialFeatured } from "@/config/social";

/**
 * Displays BP's latest TikTok video, Instagram post, and newsletter.
 */

const TikTokEmbed = dynamic(
  () => import("react-social-media-embed").then((m) => m.TikTokEmbed),
  { ssr: false },
);
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((m) => m.InstagramEmbed),
  { ssr: false },
);

const { tiktokPost: TOK_URL, instagramPost: INSTAGRAM_URL, newsletter: NEWSLETTER_URL } =
  socialFeatured;

type Props = {
  tiktokUrl?: string;
  instagramUrl?: string;
  newsletterUrl?: string;
};

function SocialCard({
  platform,
  icon,
  children,
  followHref,
  followLabel,
  caption,
}: {
  platform: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  followHref: string;
  followLabel: string;
  caption: string;
}) {
  return (
    <article className="flex w-full max-w-[320px] flex-col overflow-hidden rounded-2xl border border-bp-line bg-white transition-[translate,box-shadow] duration-500 ease-bp hover:-translate-y-1 hover:shadow-bp">
      <header className="flex items-center justify-between border-b border-bp-line px-4 py-3">
        <h3 className="text-sm font-semibold text-bp-ink">{platform}</h3>
        <span className="text-bp-navy">{icon}</span>
      </header>

      <div className="relative overflow-hidden border-b border-bp-line bg-bp-cream" style={{ height: 350 }}>
        {children}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <p className="text-sm text-bp-muted">{caption}</p>
        <a
          href={followHref}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start rounded-full text-sm font-semibold text-bp-navy underline decoration-bp-line underline-offset-4 transition-colors duration-300 ease-bp hover:decoration-bp-navy"
        >
          {followLabel}
        </a>
      </div>
    </article>
  );
}

const SocialEmbeddings: React.FC<Props> = ({
  tiktokUrl = TOK_URL,
  instagramUrl = INSTAGRAM_URL,
  newsletterUrl = NEWSLETTER_URL,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isNear, setIsNear] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNear(true);
        observer.disconnect();
      },
      { rootMargin: "600px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bp-paper px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div data-reveal>
          <h2 className="text-3xl font-bold tracking-tight text-bp-navy md:text-4xl">
            Follow along
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-bp-muted">
            Event recaps, volunteer spotlights, and updates from @theberkeleyproject.
          </p>
        </div>

        <div data-reveal className="scrap-tilt mt-12 grid grid-cols-1 items-start justify-items-center gap-8 md:grid-cols-3 md:justify-items-stretch">
          <SocialCard
            platform="TikTok"
            icon={<TiktokLogo size={20} aria-hidden />}
            followHref={tiktokUrl}
            followLabel="Follow on TikTok"
            caption="Behind the scenes from volunteering, event recaps, and community moments."
          >
            {isNear ? (
              <div className="flex justify-center">
                <div className="shrink-0 origin-top scale-[0.75]">
                  <TikTokEmbed url={tiktokUrl} width={315} />
                </div>
              </div>
            ) : (
              <div className="h-full w-full animate-pulse bg-bp-line" />
            )}
          </SocialCard>

          <SocialCard
            platform="Newsletter"
            icon={<EnvelopeSimple size={20} aria-hidden />}
            followHref={newsletterUrl}
            followLabel="Read the newsletter"
            caption="Our latest events, volunteer spotlights, and community updates."
          >
            <iframe
              src={newsletterUrl}
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: "none" }}
              title="Berkeley Project newsletter"
            />
          </SocialCard>

          <SocialCard
            platform="Instagram"
            icon={<InstagramLogo size={20} aria-hidden />}
            followHref={instagramUrl}
            followLabel="Follow on Instagram"
            caption="Photos and announcements from The Berkeley Project."
          >
            {isNear ? (
              <div className="flex justify-center">
                <div className="shrink-0 origin-top scale-[0.75]">
                  <InstagramEmbed url={instagramUrl} width={330} />
                </div>
              </div>
            ) : (
              <div className="h-full w-full animate-pulse bg-bp-line" />
            )}
          </SocialCard>
        </div>
      </div>
    </section>
  );
};

export default SocialEmbeddings;
