import React from "react";

type Props = {
  title?: string;
  image: string;
};

export default function BoxCard({ title, image }: Props) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
        transition-transform duration-300 hover:scale-[1.02] aspect-square 
        max-w-[400px] mx-auto">

      <img src={image} alt={title || "Gallery Cover"} className="w-full h-full object-cover" />

      <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
        <h3 className="text-white text-2xl font-semibold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
}
