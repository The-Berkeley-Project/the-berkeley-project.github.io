"use client";

import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type Album = { id: string; label: string; photos: string[] };

const iconButton =
  "flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 ease-bp hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

export function GalleryView({ albums }: { albums: Album[] }) {
  const [albumId, setAlbumId] = useState(albums[0]?.id);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const album = albums.find((a) => a.id === albumId) ?? albums[0];
  const count = album?.photos.length ?? 0;
  const isOpen = openIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, step]);

  if (!album) return null;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a semester">
        {albums.map((a) => {
          const selected = a.id === album.id;
          return (
            <button
              key={a.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setAlbumId(a.id)}
              className={`min-h-11 rounded-full px-5 text-base font-semibold transition-colors duration-300 ease-bp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bp-navy focus-visible:ring-offset-2 ${
                selected
                  ? "bg-bp-navy text-white"
                  : "bg-bp-cream text-bp-ink hover:bg-bp-line"
              }`}
            >
              {a.label}
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-bp-muted">
        {count} photos from {album.label}
      </p>

      <ul className="scrap-tilt mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {album.photos.map((src, i) => (
          <li key={src}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`Open photo ${i + 1} from ${album.label}`}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-bp-cream photo-frame focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bp-navy"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 ease-bp group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label={`${album.label} photo viewer`}
        onClose={() => setOpenIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpenIndex(null);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-bp-ink p-0 text-white backdrop:bg-bp-ink"
      >
        {openIndex !== null && (
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between px-4 py-4 sm:px-6">
              <p className="text-sm tabular-nums text-white/75" aria-live="polite">
                {openIndex + 1} of {count}
              </p>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className={iconButton}
                aria-label="Close photo viewer"
              >
                <X size={22} aria-hidden />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1"
              onClick={(e) => {
                if (e.target === e.currentTarget) setOpenIndex(null);
              }}
            >
              <Image
                key={album.photos[openIndex]}
                src={album.photos[openIndex]}
                alt={`Photo ${openIndex + 1} from ${album.label}`}
                fill
                sizes="100vw"
                className="pointer-events-none object-contain px-4 sm:px-20"
              />
            </div>

            <div className="flex items-center justify-center gap-4 py-6">
              <button type="button" onClick={() => step(-1)} className={iconButton} aria-label="Previous photo">
                <CaretLeft size={22} aria-hidden />
              </button>
              <button type="button" onClick={() => step(1)} className={iconButton} aria-label="Next photo">
                <CaretRight size={22} aria-hidden />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
