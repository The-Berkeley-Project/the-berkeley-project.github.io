import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type ImageItem = { img: string };
export type ImageGridProps = {
  images: ImageItem[];
  onClickImage?: (img: string) => void;
};

export default function ImageGrid({ images, onClickImage }: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback(
    (index: number) => {
      setLightboxIndex(index);
      onClickImage?.(images[index].img);
      document.body.style.overflow = "hidden";
    },
    [images, onClickImage]
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const next = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % images.length
    );

  const prev = () =>
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + images.length) % images.length
    );

  // Keyboard controls
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox]);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6 md:grid-cols-3">
        <AnimatePresence>
          {images.map((item, index) => (
            <motion.div
              key={item.img}
              className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-50 shadow-sm transition hover:shadow-lg"
              onClick={() => openLightbox(index)}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 95,
                damping: 13,
                delay: index * 0.04,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative aspect-[4/3] w-full">
                <img
                  src={item.img}
                  alt=""
                  className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-[200] p-8 sm:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {/* backdrop closes */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={closeLightbox}
            />

            <motion.img
              key={images[lightboxIndex].img}
              src={images[lightboxIndex].img}
              alt="Selected"
              className="relative max-h-[90vh] max-w-[95vw] rounded-md shadow-2xl object-contain z-[210]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            />

            {/* Close */}
            <motion.button
              onClick={closeLightbox}
              className="absolute top-8 right-10 text-white text-5xl font-light hover:opacity-80 z-[220]"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              &times;
            </motion.button>

            {/* Prev */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-8 text-white text-6xl font-light hover:opacity-90 z-[220] select-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8249;
            </motion.button>

            {/* Next */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-8 text-white text-6xl font-light hover:opacity-90 z-[220] select-none"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              &#8250;
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
