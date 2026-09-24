import React from "react";

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
      <img
        src={card.imageUrl}
        alt="Card image"
        className="w-full md:w-1/2 rounded-xl object-cover mb-6 md:mb-0 md:mr-8"
      />

      {/* Text Section */}
      <div className="text-gray-700 text-lg leading-relaxed md:w-1/2">
        {card.description}
      </div>
    </div>
  );
};

export default longCard;
