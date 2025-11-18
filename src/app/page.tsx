// "use client";

// import SocialEmbeddings from "@/components/SocialEmbeddings";
// import Button from "@/components/Button";
// import { Countdown } from "@/components/Countdown";
// import { Schedule } from "@/components/Schedule";
// import { MapPin, Bus, Shirt } from "lucide-react";
// import { 
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white text-gray-900">
//       {/* Hero Section */}
//       <section className="w-full pt-32 pb-10 px-4 min-h-[480px]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
//           {/* LEFT SIDE TEXT */}
//           <div className="text-left">
//             {/* Gradient Title */}
//             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//               {/* <span className="bg-gradient-to-r from-[#F7B733] to-[#003262] text-transparent bg-clip-text"> */}
//               <span className="text-[#FDB515]">
//                 The
//               </span>{" "}
//               <span className="text-[#60A5FA]">Berkeley Project</span>
//             </h1>

//             {/* Description */}
//             <p className="text-gray-700 mt-6 text-base md:text-lg leading-relaxed">
//               Established in 2006, The Berkeley Project is the largest community
//               service organization at UC Berkeley. Each semester, we organize
//               Berkeley Project Day, in which we recruit over{" "}
//               <strong>2,000+ volunteers</strong> to work alongside community members
//               in beautifying Berkeley.
//             </p>

//             <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
//               Our next <strong>Berkeley Project Day</strong> is happening{" "}
//               <strong>November 8th, 2025</strong>! Applications are open now and are
//               due <strong>October 15th</strong> (October 8th for organization
//               sign-ups).
//             </p>

//             {/* Buttons */}
//           <div className="flex gap-4 mt-6">
//             <Button
//               className="px-6 py-2 bg-[#0067E6] hover:bg-[#004ad8] text-white rounded-lg shadow-md hover:shadow-lg"
//             >
//               Apply Now
//             </Button>

//             <Button
//               className="px-6 py-2 bg-[#0067E6] hover:bg-[#004ad8] text-white rounded-lg shadow-md hover:shadow-lg"
//             >
//               Learn More
//             </Button>
//           </div>
          

//           {/* RIGHT SIDE IMAGE */}
//           <div className="flex justify-center md:justify-end">
//             <div className="bg-[#E6F7F2] rounded-full p-12 relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
//               <img
//                 src="/your-image.png"
//                 alt="BP Mascot"
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </div>

//         </div>
//       </section>



//       {/* Blue Banner with Countdown */}
//       <section className="relative mt-16">
//         <div className="w-full h-48 bg-blue-400 rounded-t-[3rem]"></div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-white">
//             Berkeley Project Day Countdown!
//           </h2>
//           <div className="scale-75 md:scale-90">
//             <Countdown
//               targetDate={new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 29 * 60 * 1000 + 5 * 1000)}
//               format="long"
//             />
//           </div>
//         </div>
//       </section>
      
//       {/* What to Expect on BP Day Section */}
//       <section className="w-full py-12 px-4 bg-white">
//         <div className="mx-auto max-w-6xl">
//           <h2 className="text-4xl font-bold text-center mb-12 text-black">
//             What to Expect on BP Day
//           </h2>
          
//           {/* Three Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {/* Meeting Location Card */}
//             <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-8 h-8 text-black" />
//                 <h3 className="text-xl font-bold text-black ml-3">Meeting Location</h3>
//               </div>
//               <p className="text-gray-700 text-sm">
//                 Lower Sproul Plaza at 8:00 AM SHARP. Stay the whole day.
//               </p>
//             </div>
            
//             {/* Transportation Card */}
//             <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center mb-4">
//                 <Bus className="w-8 h-8 text-black" />
//                 <h3 className="text-xl font-bold text-black ml-3">Transportation</h3>
//               </div>
//               <p className="text-gray-700 text-sm">
//                 Travel by foot or AC transit. Bring Cal Student IDs and AC transit cards
//               </p>
//             </div>
            
//             {/* What to Wear Card */}
//             <div className="rounded-2xl bg-gray-50 shadow-sm p-6 hover:shadow-md transition-shadow">
//               <div className="flex items-center mb-4">
//                 <Shirt className="w-8 h-8 text-black" />
//                 <h3 className="text-xl font-bold text-black ml-3">What to Wear</h3>
//               </div>
//               <p className="text-gray-700 text-sm">
//                 Closed toe shoes and clothes you don&apos;t mind getting dirty. Rain or shine!
//               </p>
//             </div>
//           </div>
          
//           {/* Carousel */}
//           <div className="w-full mb-16">
//             <Carousel
//               className="w-full"
//               opts={{
//                 align: "start",
//                 loop: true,
//               }}
//               autoScroll={true}
//             >
//               <CarouselContent className="-ml-2 md:-ml-4">
//                 {[
//                   "/photos/fa24/fa24_1.jpeg",
//                   "/photos/fa24/fa24_2.JPG",
//                   "/photos/fa24/fa24_3.jpeg",
//                   "/photos/fa24/fa24_4.JPG",
//                   "/photos/fa24/fa24_5.JPG",
//                   "/photos/fa24/fa24_6.jpeg",
//                   "/photos/fa24/fa24_7.JPG",
//                   "/photos/fa24/fa24_8.jpeg",
//                   "/photos/fa24/fa24_9.JPG",
//                   "/photos/fa24/fa24_10.jpeg",
//                 ].map((image, index) => (
//                   <CarouselItem key={index} basis="basis-1/2 md:basis-1/3 lg:basis-1/5">
//                     <div className="relative aspect-square rounded-lg overflow-hidden ml-2 md:ml-4">
//                       <Image
//                         src={image}
//                         alt={`Berkeley Project Day ${index + 1}`}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>
//                   </CarouselItem>
//                 ))}
//               </CarouselContent>
//             </Carousel>
//           </div>
          
//           {/* Event Schedule */}
//           <div className="w-full mt-16 mb-8">
//             <div className="mx-auto max-w-4xl px-6">
//               <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-200">
//                 <Schedule
//                   title="Event Schedule"
//                   events={[
//                     {
//                       time: "8:00 AM",
//                       description: "Meet Site Leads(s) at Lower Sproul Plaza at your designated location",
//                     },
//                     {
//                       time: "8:00-8:30 AM",
//                       description: "Check in with your Site Leader. Grab a nametag and some food",
//                     },
//                     {
//                       time: "8:30-9:00 AM",
//                       description: "Opening Ceremony with speeches and performances",
//                     },
//                     {
//                       time: "9:00 AM",
//                       description: "Depart for work sites",
//                     },
//                     {
//                       time: "9:30-10:00 AM",
//                       description: "Arrive at site, follow safety/education orientation and icebreakers",
//                     },
//                     {
//                       time: "10:00 AM",
//                       description: "Volunteering begins!",
//                     },
//                     {
//                       time: "By 4:00 PM",
//                       description: "Work ends. Thank you for volunteering!",
//                     },
//                   ]}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <SocialEmbeddings />
//     </div>
//   );
// }
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
              <strong>2,000+ volunteers</strong> to work alongside community members
              in beautifying Berkeley.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-700 sm:text-lg">
              Our next <strong>Berkeley Project Day</strong> is happening{" "}
              <strong>November 8th, 2025</strong>! Applications are open now and are
              due <strong>October 15th</strong> (October 8th for organization
              sign-ups).
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="w-full text-center text-base font-semibold sm:w-auto sm:px-6 sm:py-2"
              >
                Apply Now
              </Button>

              <Button
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
            November 8th, 2025 • Applications due October 15th
          </p>
          <div className="mt-6 sm:mt-8">
            <Countdown
              targetDate={new Date(Date.now() + 29 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 29 * 60 * 1000 + 5 * 1000)}
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
                Lower Sproul Plaza at 8:00 AM SHARP. Stay the whole day.
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
                  "/photos/fa24/fa24_1.jpeg",
                  "/photos/fa24/fa24_2.jpg",
                  "/photos/fa24/fa24_3.jpeg",
                  "/photos/fa24/fa24_4.jpg",
                  "/photos/fa24/fa24_5.jpg",
                  "/photos/fa24/fa24_6.jpeg",
                  "/photos/fa24/fa24_7.jpg",
                  "/photos/fa24/fa24_8.jpeg",
                  "/photos/fa24/fa24_9.jpg",
                  "/photos/fa24/fa24_10.jpeg",
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
