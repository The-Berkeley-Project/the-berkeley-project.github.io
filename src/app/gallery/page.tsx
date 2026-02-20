"use client";

import React, { useState } from "react";
import BoxCard from "@/components/BoxCard";
import ImageGrid from "@/components/ImageGrid";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = { img: string };
type GallerySection = { title: string; image: string; gallery: ImageItem[] };
type Galleries = Record<string, GallerySection[]>;
type OpenGallery = { year: string; index: number } | null;

export default function GalleryPage() {
  const [openGallery, setOpenGallery] = useState<OpenGallery>(null);

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


  const selectedGallery: GallerySection | null =
    openGallery && galleries[openGallery.year]
      ? galleries[openGallery.year][openGallery.index]
      : null;

  const handleCardClick = (year: string, index: number) => {
    setOpenGallery({ year, index });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E3F9FF] to-white flex flex-col items-center pt-36 pb-24 font-sans">
      {/* 2025 SECTION */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 uppercase tracking-wide">
        2025
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl px-6 mb-24">
        {galleries["2025"].map((section, index) => (
          <div
            key={`2025-${index}`}
            onClick={() => handleCardClick("2025", index)}
            className="cursor-pointer"
          >
            <BoxCard title={section.title} image={section.image} />
          </div>
        ))}
      </div>

      {/* 2024 SECTION */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 uppercase tracking-wide">
        2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl px-6 mb-24">
        {galleries["2024"].map((section, index) => (
          <div
            key={`2024-${index}`}
            onClick={() => handleCardClick("2024", index)}
            className="cursor-pointer"
          >
            <BoxCard title={section.title} image={section.image} />
          </div>
        ))}
      </div>

      {/* 2023 SECTION */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-10 uppercase tracking-wide">
        2023
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl px-6 mb-24">
        {galleries["2023"].map((section, index) => (
          <div
            key={`2023-${index}`}
            onClick={() => handleCardClick("2023", index)}
            className="cursor-pointer"
          >
            <BoxCard title={section.title} image={section.image} />
          </div>
        ))}
      </div>

        
      {/* MODAL */}
    <AnimatePresence>
      {selectedGallery && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* The modal card itself */}
          <motion.div
            className={`relative w-full max-w-[88vw] rounded-md shadow-[0_12px_30px_rgba(0,0,0,0.2)] mt-14 mb-14 p-8 font-sans transition-all duration-300
              bg-gradient-to-b from-[#e0f2ff] to-white`}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenGallery(null)}
              className="absolute top-5 right-7 text-3xl font-light text-gray-700 hover:opacity-80 z-10"
              aria-label="Close gallery"
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-medium uppercase tracking-wide text-center mb-6 text-[#003262]">
              {selectedGallery.title} Gallery
            </h2>

            {/* Scrollable ImageGrid or Coming Soon */}
            <div className="max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pt-6">
              {selectedGallery.gallery.length === 0 ? (
                <motion.p
                  className="text-2xl text-gray-800 font-medium py-32 tracking-wide text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
</div>
  );
}