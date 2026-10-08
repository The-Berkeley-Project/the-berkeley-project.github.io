import { ApplyBand } from "@/components/ApplyBand";
import { type Album, GalleryView } from "@/components/GalleryView";
import { PageHeader } from "@/components/PageHeader";
import { brand } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Gallery | ${brand.name}`,
  description: "Photos from past Berkeley Project Days.",
};

const numbered = (folder: string, prefix: string, total: number, ext = "jpg") =>
  Array.from({ length: total }, (_, i) => `/photos/${folder}/${prefix}${i + 1}.${ext}`);

const albums: Album[] = [
  {
    id: "fa25",
    label: "Fall 2025",
    photos: [
      "/photos/fa25/img1.jpeg",
      "/photos/fa25/img2.JPEG",
      "/photos/fa25/img3.JPEG",
      "/photos/fa25/img4.JPEG",
      "/photos/fa25/img5.JPEG",
      "/photos/fa25/img6.jpeg",
      "/photos/fa25/img7.JPEG",
      "/photos/fa25/img8.JPEG",
      "/photos/fa25/img9.JPEG",
      "/photos/fa25/img10.JPEG",
      "/photos/fa25/img11.JPEG",
      "/photos/fa25/img12.JPEG",
      "/photos/fa25/img13.JPEG",
      "/photos/fa25/img14.JPG",
      "/photos/fa25/img15.JPG",
      "/photos/fa25/img16.jpg",
      "/photos/fa25/img17.jpg",
      "/photos/fa25/img18.jpeg",
      "/photos/fa25/img19.jpeg",
      "/photos/fa25/img20.jpeg",
      "/photos/fa25/img21.jpeg",
    ],
  },
  { id: "sp25", label: "Spring 2025", photos: numbered("sp25", "sp25_", 24) },
  {
    id: "fa24",
    label: "Fall 2024",
    photos: [
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
      "/photos/fa24/fa24_11.jpg",
      "/photos/fa24/fa24_12.jpg",
      "/photos/fa24/fa24_13.jpg",
      "/photos/fa24/fa24_14.jpg",
      "/photos/fa24/fa24_15.jpeg",
      "/photos/fa24/fa24_16.jpg",
      "/photos/fa24/fa24_17.jpg",
      "/photos/fa24/fa24_18.jpeg",
      "/photos/fa24/fa24_19.jpg",
      "/photos/fa24/fa24_20.jpg",
    ],
  },
  { id: "sp24", label: "Spring 2024", photos: numbered("sp24", "sp24_", 21) },
];

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Photos from Berkeley Project Day" highlight="Photos">
        <p>
          Every semester our Marketing committee travels between sites to
          photograph volunteers at work. Pick a semester to browse.
        </p>
      </PageHeader>

      <section className="bg-bp-paper px-4 pb-24 pt-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <GalleryView albums={albums} />
        </div>
      </section>

      <ApplyBand />
    </>
  );
}
