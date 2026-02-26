import React from "react";
import Image from "next/image";

type Card = {
  id: number;
  imageUrl: string;
  description: string;
};

type Props = {
  card: Card;
};

const longCard: React.FC<Props> = ({ card }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-[#eaf2ff] rounded-2xl shadow-md p-6 md:p-10 w-full">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 aspect-video mb-6 md:mb-0 md:mr-8 rounded-xl overflow-hidden">
        <Image
          src={card.imageUrl}
          fill
          loading="eager"
          alt="Card image"
          className="object-cover rounded-xl"
        />
      </div>

      {/* Text Section */}
      <div className="text-gray-700 text-lg leading-relaxed md:w-1/2">
        {card.description}
      </div>
    </div>
  );
};

export default longCard;
