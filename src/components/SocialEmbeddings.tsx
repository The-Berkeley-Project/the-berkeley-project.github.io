"use client";

import React, { useState, useEffect } from "react";
import { TikTokEmbed, InstagramEmbed } from "react-social-media-embed";

/**
 * Displays BP's latest TikTok video, Instagram post, and newsletter.
 */

// need to hardcode these for now
const TOK_URL = "https://www.tiktok.com/@theberkeleyproject/video/7567922093875072270";
const INSTAGRAM_URL = "https://www.instagram.com/p/DRA1mG7Euj4/?hl=en";
const NEWSLETTER_URL = "https://mailchi.mp/1bba304049d5/wvsb2orl0s-14191777?e=d52d57f621";

type Props = {
  tiktokUrl?: string;
  instagramUrl?: string;
  newsletterUrl?: string;
};

// Reusable card shell
function SocialCard({
  platform,
  headerBg,
  headerTextColor = "text-white",
  icon,
  children,
  followHref,
  followLabel,
  followBg = "bg-blue-600",
  caption,
}: {
  platform: string;
  headerBg: string;
  headerTextColor?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  followHref: string;
  followLabel: string;
  followBg?: string;
  caption: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col bg-white-50 border-2 border-black rounded-2xl shadow-[6px_6px_0px_#d8dddf] hover:shadow-[6px_6px_0px_#d8dddf] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all overflow-hidden w-[270px]">
      {/* Card header bar */}
      <div className={`${headerBg} border-b-2 border-black px-3 py-2 flex items-center justify-between`}>
        <span className={`${headerTextColor} font-extrabold text-sm tracking-wide`}>{platform}</span>
        <span className={headerTextColor}>{icon}</span>
      </div>

      {/* Embed area */}
      <div className="relative border-b-2 border-black overflow-hidden" style={{ height: 350 }}>
        {children}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-3">
        <p className="text-sm font-medium text-black leading-snug">{caption}</p>
        <a
          href={followHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`self-start inline-flex items-center gap-1.5 ${followBg} text-white border-2 border-black rounded-lg px-3 py-1.5 text-xs font-extrabold shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000] hover:-translate-x-px hover:-translate-y-px transition-all no-underline`}
        >
          {followLabel}
        </a>
      </div>
    </div>
  );
}

const SocialEmbeddings: React.FC<Props> = ({
  tiktokUrl = TOK_URL,
  instagramUrl = INSTAGRAM_URL,
  newsletterUrl = NEWSLETTER_URL,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full py-8 px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-black text-black mb-3">
          Check Out Our Socials!
        </h2>
        <p className="text-lg font-semibold text-gray-600">
          See the impact we&apos;re making in the Berkeley community through our social media
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center mb-16">

        {/* TikTok */}
        <SocialCard
          platform="TikTok"
          headerBg="bg-slate-700"
          followHref={tiktokUrl}
          followLabel="▶ Follow on TikTok"
          followBg="bg-slate-700"
          caption={<><strong className="font-extrabold">@theberkeleyproject</strong><br />Behind the scenes volunteering, event recaps, and community moments!</>}
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 106.34 6.34V8.69a8.16 8.16 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z"/>
            </svg>
          }
        >
          {isMounted ? (
            <div style={{ transform: "scale(0.85)", transformOrigin: "top left", width: "118%", marginTop: "-8px" }}>
              <TikTokEmbed url={tiktokUrl} width={315} />
            </div>
          ) : (
            <div className="animate-pulse bg-gray-200 w-full h-full" />
          )}
        </SocialCard>

        {/* Newsletter */}
        <SocialCard
          platform="Newsletter"
          headerBg="bg-blue-400"
          followHref={newsletterUrl}
          followLabel="✉ Subscribe"
          followBg="bg-blue-400"
          caption={<><strong className="font-extrabold">berkeleyproject@gmail.com</strong><br />Read our latest events, volunteer spotlights, and community updates!</>}
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          }
        >
          <iframe
            src={newsletterUrl}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Berkeley Project Newsletter"
          />
        </SocialCard>

        {/* Instagram */}
        <SocialCard
          platform="Instagram"
          headerBg="bg-gradient-to-r from-purple-300 via-pink-300 to-orange-200"
          followHref={instagramUrl}
          followLabel="📷 Follow on Instagram"
          followBg="bg-gradient-to-r from-purple-300 to-pink-300"
          caption={<><strong className="font-extrabold">@theberkeleyproject</strong><br />Stay up to date with our latest Berkeley Project information!</>}
          icon={
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          }
        >
          {isMounted ? (
            <div style={{ transform: "scale(0.85)", transformOrigin: "top left", width: "118%", marginLeft: "-8px" }}>
              <InstagramEmbed url={instagramUrl} width={330} />
            </div>
          ) : (
            <div className="animate-pulse bg-gray-200 w-full h-full" />
          )}
        </SocialCard>

      </div>
    </section>
  );
};

export default SocialEmbeddings;
