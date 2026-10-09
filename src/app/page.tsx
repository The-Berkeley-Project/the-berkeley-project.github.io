"use client";

import Image from "next/image";

import Button from "@/components/button";
import { Countdown } from "@/components/Countdown";
import { Footer } from "@/components/footer";

import { MapPin, Bus, Shirt, Clock } from "lucide-react";

export default function Home() {
  /* ========================================
      CAROUSEL PHOTOS
  ======================================== */

  const carouselImages = [
    "/photos/fa25/img1.jpeg",
    "/photos/fa25/img11.JPEG",
    "/photos/fa25/img12.JPEG",
    "/photos/sp25/sp25_2.jpg",
    "/photos/sp25/sp25_4.jpg",
    "/photos/fa24/fa24_1.jpeg",
    "/photos/fa24/fa24_10.jpeg",
    "/photos/fa24/fa24_18.jpeg",
    "/photos/sp24/sp24_1.jpg",
    "/photos/sp24/sp24_12.jpg",
  ];

  /* ========================================
      EVENT SCHEDULE
  ======================================== */

  const events = [
    {
      time: "8:00 AM",
      description: "Meet your Site Leader",
    },
    {
      time: "8:00 – 8:30 AM",
      description: "Check-in + food",
    },
    {
      time: "8:30 – 9:00 AM",
      description: "Opening Ceremony",
    },
    {
      time: "9:00 AM",
      description: "Depart for work sites",
    },
    {
      time: "9:30 – 10:00 AM",
      description: "Orientation + icebreakers",
    },
    {
      time: "10:00 AM",
      description: "Volunteering begins!",
    },
    {
      time: "By 4:00 PM",
      description: "Work ends — thank you!",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FFF4D6] text-[#1F3557]">
      {/* ========================================
          HERO
      ======================================== */}

      <section className="w-full bg-[#FFF4D6] px-6 pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* LEFT SIDE */}

            <div className="order-2 text-left md:order-1">
              <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                <span className="text-[#FDB515]">The</span>{" "}
                <span className="text-[#60A5FA]">Berkeley Project</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#344563] sm:text-lg">
                Established in 2006, The Berkeley Project is the largest
                community service organization at UC Berkeley. Each semester,
                we organize Berkeley Project Day, in which we recruit over{" "}
                <strong>1,500+ volunteers</strong> to work alongside community
                members in beautifying Berkeley.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2wcMlG-AFWcFTg2hshBfXUDiRKN1-2DqFvr_hNN5e-kiNFw/viewform"
                  className="
                    w-full
                    bg-[#2F5D8C]
                    text-center
                    text-lg
                    font-bold
                    text-white
                    hover:bg-[#264D75]
                    sm:w-auto
                    sm:px-10
                    sm:py-4
                  "
                >
                  Join Us!
                </Button>

                <Button
                  href="/impact"
                  className="
                    w-full
                    bg-[#FFCB69]
                    text-center
                    text-lg
                    font-bold
                    text-[#1F3557]
                    hover:bg-[#F5B94F]
                    sm:w-auto
                    sm:px-10
                    sm:py-4
                  "
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* PANDA */}

            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-[400px] md:w-[400px]">
                <img
                  src="/KungFuPanda.png"
                  alt="Berkeley Project mascot"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          PHOTO STRIP
      ======================================== */}

      <section className="w-full bg-[#FFF4D6] pb-8">
        <div
          className="w-full select-none overflow-hidden py-3"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          <div className="carousel-scroll flex gap-3">
            {/* FIRST COPY */}

            <div className="carousel-group flex gap-3 pr-3">
              {carouselImages.map((image, index) => (
                <div
                  key={`group1-${index}`}
                  className="
                    relative
                    aspect-square
                    w-[140px]
                    flex-shrink-0
                    overflow-hidden
                    rounded-xl
                    shadow-sm
                    sm:w-[165px]
                    md:w-[180px]
                  "
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                >
                  <Image
                    src={image}
                    alt={`Berkeley Project Day ${index + 1}`}
                    fill
                    className="
                      object-cover
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                    loading="eager"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* SECOND COPY */}

            <div
              className="carousel-group flex gap-3 pr-3"
              aria-hidden="true"
            >
              {carouselImages.map((image, index) => (
                <div
                  key={`group2-${index}`}
                  className="
                    relative
                    aspect-square
                    w-[140px]
                    flex-shrink-0
                    overflow-hidden
                    rounded-xl
                    shadow-sm
                    sm:w-[165px]
                    md:w-[180px]
                  "
                >
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover"
                    loading="eager"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT IS BP DAY
      ======================================== */}

      <section className="w-full bg-[#DCEEFF]">
        <div
          className="
            mx-auto
            grid
            max-w-6xl
            items-center
            gap-10
            px-6
            py-14
            sm:px-10
            md:grid-cols-[1.4fr_1fr]
          "
        >
          {/* TEXT */}

          <div>
            <h2 className="font-serif text-3xl font-bold text-[#1F3557] sm:text-4xl">
              What is Berkeley Project Day?
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-[#344563]">
              Berkeley Project Day (BP Day) is our largest community service
              event, bringing together <strong>1,500+ volunteers</strong> to
              work with local organizations and community members on hands-on
              service projects across Berkeley.
            </p>
          </div>

          {/* IMAGE */}

          <div className="relative h-52 overflow-hidden rounded-xl sm:h-60">
            <Image
              src="/photos/fa25/img1.jpeg"
              alt="Berkeley Project volunteers"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========================================
          COUNTDOWN
      ======================================== */}

      <section className="w-full bg-[#FFCB69]">
        <div className="mx-auto w-full max-w-[1500px] px-6 py-10 sm:px-10 lg:px-16">
          <Countdown
            targetDate={new Date("2026-11-14T08:00:00")}
            format="long"
            className="w-full"
          />

          <div className="mt-7 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1F3557] sm:text-4xl">
              until Berkeley Project Day!
            </h2>

            <p className="mt-2 text-lg font-bold text-[#1F3557]">
              November 14th, 2026
            </p>

            <p className="mt-1 text-sm text-[#344563] sm:text-base">
              Volunteer & Site Leader applications due October 9th
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT TO EXPECT
      ======================================== */}

      <section className="w-full bg-[#FFF8E8]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-[#1F3557] sm:text-4xl">
            What to Expect on BP Day
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* MEETING LOCATION */}

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFCB69]/40">
                  <MapPin className="h-6 w-6 text-[#2F5D8C]" />
                </div>

                <h3 className="ml-3 text-lg font-bold text-[#1F3557]">
                  Meeting Location
                </h3>
              </div>

              <p className="text-sm leading-6 text-[#344563]">
                Lower Sproul Plaza at 8:00 AM SHARP. Stay the whole day.
              </p>
            </div>

            {/* TRANSPORTATION */}

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFCB69]/40">
                  <Bus className="h-6 w-6 text-[#2F5D8C]" />
                </div>

                <h3 className="ml-3 text-lg font-bold text-[#1F3557]">
                  Transportation
                </h3>
              </div>

              <p className="text-sm leading-6 text-[#344563]">
                Travel by foot or AC Transit. Bring Cal Student IDs and AC
                Transit cards.
              </p>
            </div>

            {/* WHAT TO WEAR */}

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#FFCB69]/40">
                  <Shirt className="h-6 w-6 text-[#2F5D8C]" />
                </div>

                <h3 className="ml-3 text-lg font-bold text-[#1F3557]">
                  What to Wear
                </h3>
              </div>

              <p className="text-sm leading-6 text-[#344563]">
                Closed toe shoes and clothes you don&apos;t mind getting dirty.
                Rain or shine!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          EVENT SCHEDULE
      ======================================== */}

      <section className="w-full bg-[#FFF4D6]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 md:py-16">
          {/* HEADER */}

          <div className="mb-9 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1F3557] sm:text-4xl">
              Event Schedule
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-[#344563] sm:text-base">
              Here&apos;s what your Berkeley Project Day will look like.
            </p>
          </div>

          {/* SCHEDULE CARD */}

          <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-sm">
            {events.map((event, index) => (
              <div
                key={`${event.time}-${event.description}`}
                className={`
                  grid
                  grid-cols-[48px_1fr]
                  items-center
                  gap-3
                  px-5
                  py-5
                  sm:grid-cols-[52px_190px_1fr]
                  sm:gap-5
                  sm:px-8
                  ${
                    index !== events.length - 1
                      ? "border-b border-[#E9E1D1]"
                      : ""
                  }
                `}
              >
                {/* ICON */}

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCEEFF]">
                  <Clock className="h-5 w-5 text-[#2F5D8C]" />
                </div>

                {/* TIME */}

                <p className="col-start-2 font-bold text-[#1F3557] sm:col-auto sm:text-base">
                  {event.time}
                </p>

                {/* DESCRIPTION */}

                <p className="col-start-2 text-sm text-[#344563] sm:col-auto sm:text-base">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          SOCIALS + SPONSORS FOOTER
          ONLY ONE FOOTER
      ======================================== */}

      {/* <Footer /> */}
    </main>
  );
}