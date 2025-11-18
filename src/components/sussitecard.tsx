import React from "react";
import Image from "next/image";
import { LucideIcon } from "lucide-react";

interface SusSiteCardProps {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function SusSiteCard({
  imageSrc,
  alt,
  title,
  description,
  Icon,
}: SusSiteCardProps) {
  return (
    <div className="relative flex flex-col rounded-3xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] overflow-hidden">
      {/* image */}
      <div className="relative h-64 w-full">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover rounded-t-3xl"
          loading="eager"
        />
      </div>

      {/* icon */}
      <div className="absolute top-56 left-8 sm:left-10">
        <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100">
          <Icon className="text-[#003262] w-10 h-10" />
        </div>
      </div>

      {/* text */}
      <div className="pt-16 pb-10 px-6 text-left">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-4 text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
}
