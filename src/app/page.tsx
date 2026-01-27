
"use client";

import SocialEmbeddings from "@/components/SocialEmbeddings";
import Button from "@/components/button";
import { Countdown } from "@/components/Countdown";
import { Schedule } from "@/components/Schedule";
import { MapPin, Bus, Shirt } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import StickyNewsletterBar from "@/components/StickyNewsletterBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full px-4 pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
          
          {/* LEFT SIDE TEXT */}
          <div className="text-left">
            
            {/* Gradient Title */}
            <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              <span className="text-[#FDB515]">The</span>{" "}
              <span className="text-[#60A5FA]">Berkeley Project</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              Established in 2006, The Berkeley Project is the largest community
              service organization at UC Berkeley. Each semester, we organize
              Berkeley Project Day, in which we recruit over{" "}
              <strong>1,500+ volunteers</strong> to work alongside community members
              in beautifying Berkeley.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Our next <strong>Berkeley Project Day</strong> is happening{" "}
              <strong>April 11th, 2026</strong>! Applications to join our mission as a
              committee member are open now and are due <strong>February 6th at 5 pm</strong>. Check back for applications for Site Leaders and Volunteers after committee member applications close.  
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                href="https://tinyurl.com/bpCMapp26"
                className="w-full text-center text-base font-semibold sm:w-auto sm:px-6 sm:py-2"
              >
                Apply Now
              </Button>

              <Button
                href="/impact"
                className="w-full text-center text-base font-semibold sm:w-auto sm:px-6 sm:py-2"
              >
                Learn More 
              </Button>
            </div>

          </div> {/* CLOSE LEFT SIDE TEXT DIV */}

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 md:h-[420px] md:w-[420px]">
              <img
                src="/duck.png"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blue Banner with Countdown */}
      <section className="mt-16">
        <div className="w-full rounded-t-[3rem] bg-blue-400 py-12 text-center text-white sm:px-6">
          <h2 className="text-2xl font-semibold text-white/95 sm:text-3xl">
            Berkeley Project Day Countdown!
          </h2>
          <p className="mt-2 text-sm text-white/80 sm:text-base">
            April 11th, 2026 • Applications for committees due February 6th at 5 pm
          </p>
          <div className="mt-6 sm:mt-8">
            <Countdown
              targetDate={new Date('2026-04-11T08:00:00')}
              format="long"
            />
          </div>
        </div>
      </section>

      {/* What to Expect on BP Day Section */}
      <section className="w-full py-12 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            What to Expect on BP Day
          </h2>

          {/* Three Cards */}
          <div className="grid grid-cols-1 gap-6 pb-4 md:grid-cols-3 md:pb-12">

            {/* Meeting Location Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">Meeting Location</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Upper Sproul Plaza at 8:00 AM SHARP. Stay the whole day.
              </p>
            </div>
            
            {/* Transportation Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Bus className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">Transportation</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Travel by foot or AC transit. Bring Cal Student IDs and AC transit cards
              </p>
            </div>
            
            {/* What to Wear Card */}
            <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Shirt className="w-8 h-8 text-black" />
                <h3 className="text-xl font-bold text-black ml-3">What to Wear</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Closed toe shoes and clothes you don&apos;t mind getting dirty. Rain or shine!
              </p>
            </div>

          </div>

          {/* Carousel */}
          <div className="w-full mb-12 sm:mb-16">
            <Carousel
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
              autoScroll={true}
            >
              <CarouselContent className="-ml-2 sm:-ml-4">
                {[
                  "/photos/fa25/img1.jpeg",
                  "/photos/fa25/img11.JPEG",
                  "/photos/fa25/img12.JPEG",
                  "/photos/sp25/sp25_2.jpg",
                  "/photos/sp25/sp25_4.jpg",
                  "/photos/fa24/fa24_1.jpeg",
                  "/photos/fa24/fa24_18.jpeg",
                  "/photos/sp24/sp24_1.jpg",
                  "/photos/sp24/sp24_12.jpg",
                  "/photos/sp23/sp23_10.jpg",

                ].map((image, index) => (
                  <CarouselItem 
                    key={index} 
                    basis="basis-1/2 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="relative aspect-square rounded-lg overflow-hidden ml-2 md:ml-4">
                      <Image
                        src={image}
                        alt={`Berkeley Project Day ${index + 1}`}
                        fill
                        className="object-cover"
                        loading="eager"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Event Schedule */}
          <div className="w-full mt-12 mb-8 sm:mt-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
              <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm sm:p-8">
                <Schedule
                  title="Event Schedule"
                  events={[
                    { time: "8:00 AM", description: "Meet Site Leader..." },
                    { time: "8:00-8:30 AM", description: "Check in + food" },
                    { time: "8:30-9:00 AM", description: "Opening Ceremony" },
                    { time: "9:00 AM", description: "Depart for work sites" },
                    { time: "9:30-10:00 AM", description: "Orientation + icebreakers" },
                    { time: "10:00 AM", description: "Volunteering begins!" },
                    { time: "By 4:00 PM", description: "Work ends. Thank you!" },
                  ]}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <SocialEmbeddings />
      <StickyNewsletterBar />    

    </div>
  );
}
