"use client";

import React, { useState } from "react";
import BoxCard from "@/components/BoxCard";
import ImageGrid from "@/components/ImageGrid";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = { img: string };
type GallerySection = { title: string; image: string; gallery: ImageItem[] };
type Galleries = Record<string, GallerySection[]>;
type OpenGallery = { year: string; index: number } | null;

const galleries: Galleries = {
  "2025": [
    {
      title: "SPRING",
      image: "/photos/sp25/sp25.jpg",
      gallery: [
        { img: "/photos/sp25/sp25_1.jpg" },
        { img: "/photos/sp25/sp25_2.jpg" },
        { img: "/photos/sp25/sp25_3.jpg" },
        { img: "/photos/sp25/sp25_4.jpg" },
        { img: "/photos/sp25/sp25_5.jpg" },
        { img: "/photos/sp25/sp25_6.jpg" },
        { img: "/photos/sp25/sp25_7.jpg" },
        { img: "/photos/sp25/sp25_8.jpg" },
        { img: "/photos/sp25/sp25_9.jpg" },
        { img: "/photos/sp25/sp25_10.jpg" },
        { img: "/photos/sp25/sp25_11.jpg" },
        { img: "/photos/sp25/sp25_12.jpg" },
        { img: "/photos/sp25/sp25_13.jpg" },
        { img: "/photos/sp25/sp25_14.jpg" },
        { img: "/photos/sp25/sp25_15.jpg" },
        { img: "/photos/sp25/sp25_16.jpg" },
        { img: "/photos/sp25/sp25_17.jpg" },
        { img: "/photos/sp25/sp25_18.jpg" },
        { img: "/photos/sp25/sp25_19.jpg" },
        { img: "/photos/sp25/sp25_20.jpg" },
        { img: "/photos/sp25/sp25_21.jpg" },
        { img: "/photos/sp25/sp25_22.jpg" },
        { img: "/photos/sp25/sp25_23.jpg" },
        { img: "/photos/sp25/sp25_24.jpg" },
      ],
    },
    {
      title: "FALL",
      image: "/photos/fa25/fa25.jpg",
      gallery: [
        { img: "/photos/fa25/img1.jpeg" },
        { img: "/photos/fa25/img2.JPEG" },
        { img: "/photos/fa25/img3.JPEG" },
        { img: "/photos/fa25/img4.JPEG" },
        { img: "/photos/fa25/img5.JPEG" },
        { img: "/photos/fa25/img6.jpeg" },
        { img: "/photos/fa25/img7.JPEG" },
        { img: "/photos/fa25/img8.JPEG" },
        { img: "/photos/fa25/img9.JPEG" },
        { img: "/photos/fa25/img10.JPEG" },
        { img: "/photos/fa25/img11.JPEG" },
        { img: "/photos/fa25/img12.JPEG" },
        { img: "/photos/fa25/img13.JPEG" },
        { img: "/photos/fa25/img14.JPG" },
        { img: "/photos/fa25/img15.JPG" },
        { img: "/photos/fa25/img16.jpg" },
        { img: "/photos/fa25/img17.jpg" },
        { img: "/photos/fa25/img18.jpeg" },
        { img: "/photos/fa25/img19.jpeg" },
        { img: "/photos/fa25/img20.jpeg" },
        { img: "/photos/fa25/img21.jpeg" },
      ],
    },
  ],
  "2024": [
    {
      title: "SPRING",
      image: "/photos/sp24/sp24.jpg",
      gallery: [
        { img: "/photos/sp24/sp24_1.jpg" },
        { img: "/photos/sp24/sp24_2.jpg" },
        { img: "/photos/sp24/sp24_3.jpg" },
        { img: "/photos/sp24/sp24_4.jpg" },
        { img: "/photos/sp24/sp24_5.jpg" },
        { img: "/photos/sp24/sp24_6.jpg" },
        { img: "/photos/sp24/sp24_7.jpg" },
        { img: "/photos/sp24/sp24_8.jpg" },
        { img: "/photos/sp24/sp24_9.jpg" },
        { img: "/photos/sp24/sp24_10.jpg" },
        { img: "/photos/sp24/sp24_11.jpg" },
        { img: "/photos/sp24/sp24_12.jpg" },
        { img: "/photos/sp24/sp24_13.jpg" },
        { img: "/photos/sp24/sp24_14.jpg" },
        { img: "/photos/sp24/sp24_15.jpg" },
        { img: "/photos/sp24/sp24_16.jpg" },
        { img: "/photos/sp24/sp24_17.jpg" },
        { img: "/photos/sp24/sp24_18.jpg" },
        { img: "/photos/sp24/sp24_19.jpg" },
        { img: "/photos/sp24/sp24_20.jpg" },
        { img: "/photos/sp24/sp24_21.jpg" },
      ],
    },
    {
      title: "FALL",
      image: "/photos/fa24/fa24.jpg",
      gallery: [
        { img: "/photos/fa24/fa24_1.jpeg" },
        { img: "/photos/fa24/fa24_2.jpg" },
        { img: "/photos/fa24/fa24_3.jpeg" },
        { img: "/photos/fa24/fa24_4.jpg" },
        { img: "/photos/fa24/fa24_5.jpg" },
        { img: "/photos/fa24/fa24_6.jpeg" },
        { img: "/photos/fa24/fa24_7.jpg" },
        { img: "/photos/fa24/fa24_8.jpeg" },
        { img: "/photos/fa24/fa24_9.jpg" },
        { img: "/photos/fa24/fa24_10.jpeg" },
        { img: "/photos/fa24/fa24_11.jpg" },
        { img: "/photos/fa24/fa24_12.jpg" },
        { img: "/photos/fa24/fa24_13.jpg" },
        { img: "/photos/fa24/fa24_14.jpg" },
        { img: "/photos/fa24/fa24_15.jpeg" },
        { img: "/photos/fa24/fa24_16.jpg" },
        { img: "/photos/fa24/fa24_17.jpg" },
        { img: "/photos/fa24/fa24_18.jpeg" },
        { img: "/photos/fa24/fa24_19.jpg" },
        { img: "/photos/fa24/fa24_20.jpg" },
      ],
    },
  ],
};

const sortedYears = Object.keys(galleries).sort(
  (a, b) => Number(b) - Number(a)
);

const getInitialOpenGallery = (): OpenGallery => {
  for (const year of sortedYears) {
    if (galleries[year]?.length) {
      return { year, index: 0 };
    }
  }

  return null;
};

const toTitleCase = (value: string): string =>
  value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const allAlbums = sortedYears.flatMap((year) =>
  galleries[year].map((section, index) => ({
    year,
    index,
    image: section.image,
    label: `${toTitleCase(section.title)} ${year}`,
  }))
);

export default function GalleryPage() {
  const [openGallery, setOpenGallery] = useState<OpenGallery>(
    getInitialOpenGallery
  );

  const selectedGallery: GallerySection | null =
    openGallery && galleries[openGallery.year]
      ? galleries[openGallery.year][openGallery.index]
      : null;

  const handleCardClick = (year: string, index: number) => {
    setOpenGallery({ year, index });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white flex flex-col items-center pt-36 pb-24 font-sans">
      <AnimatePresence initial={false} mode="wait">
        {selectedGallery && openGallery && (
          <motion.section
            key={`${openGallery.year}-${openGallery.index}`}
            className="w-full max-w-5xl px-6 mb-20"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.26, ease: "easeInOut" }}
          >
            <div className="rounded-xl shadow-[0_12px_30px_rgba(0,0,0,0.15)] p-6 md:p-8 bg-gradient-to-b from-[#e0f2ff] to-white">
              <h3 className="text-2xl md:text-3xl font-medium tracking-wide text-center mb-6 text-[#003262]">
                {toTitleCase(selectedGallery.title)} {openGallery.year}
              </h3>

              <div className="max-h-[19.5rem] sm:max-h-[25.5rem] md:max-h-[28.5rem] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                {selectedGallery.gallery.length === 0 ? (
                  <motion.p
                    className="text-2xl text-gray-800 font-medium py-20 tracking-wide text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.12, duration: 0.35 }}
                  >
                    Coming Soon!
                  </motion.p>
                ) : (
                  <ImageGrid
                    images={selectedGallery.gallery}
                    onClickImage={(img) => console.log("Clicked:", img)}
                  />
                )}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="w-full max-w-7xl px-6">
        <div className="flex gap-6 overflow-x-auto px-2 pb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {allAlbums.map((album) => {
            const isSelected =
              openGallery?.year === album.year && openGallery.index === album.index;

            return (
              <div
                key={`${album.year}-${album.index}`}
                className="flex-none w-[13.5rem] sm:w-[15.5rem] md:w-[17.5rem]"
              >
                <p className="text-base sm:text-lg font-semibold text-[#003262] mb-3 text-center">
                  {album.label}
                </p>
                <button
                  onClick={() => handleCardClick(album.year, album.index)}
                  className={`w-full cursor-pointer text-left rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003262]/50 ${
                    isSelected ? "ring-4 ring-[#003262]/25" : ""
                  }`}
                  aria-pressed={isSelected}
                >
                  <BoxCard image={album.image} />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
