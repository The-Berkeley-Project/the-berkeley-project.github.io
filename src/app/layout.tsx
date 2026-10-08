import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RevealObserver } from "@/components/RevealObserver";
import Script from "next/script";
import { semester } from "@/config/semester";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const description = `Apply to volunteer for Berkeley Project Day on ${semester.event.weekdayDate}. Join ${semester.impact.volunteersPerDay} UC Berkeley students for one free day of community service across Berkeley. No experience needed.`;

export const metadata: Metadata = {
  title: "The Berkeley Project | Volunteer for Berkeley Project Day",
  description,
  openGraph: {
    title: "The Berkeley Project | Volunteer for Berkeley Project Day",
    description,
    images: [semester.heroPhoto],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeStyle = {
    ["--theme-accent" as string]: semester.theme.accent,
  };

  return (
    <html lang="en" style={themeStyle}>
      <body
        className={`${manrope.variable} font-sans text-bp-ink antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-bp-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <RevealObserver />
        </div>
        <div aria-hidden className="paper-grain" />

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "5c2d9823eb7741848734c7a39f30648f"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
