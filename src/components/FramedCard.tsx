import React from "react";
import Image from "next/image";

type Props = {
  frameUrl?: string;      // transparent PNG frame
  imageUrl?: string;      // main photo
  title?: string;         // text on upper banner
  bottomText?: string;    // text between bottom lines
  bgColor?: string;       // background color behind frame
  width?: string;         // customizable width
  height?: string;        // customizable height
};

const FramedCard: React.FC<Props> = ({
  frameUrl,
  imageUrl,
  title,
  bottomText,
  bgColor = "#FAEACB", // default soft ochre
  width = "300px", 
  height = "420px",
}) => {
  const titleFontSize = title && title.length > 24 ? "text-[10px]" : "text-[12px]";
  const bottomTextFontSize = bottomText && bottomText.length > 24 ? "text-[12px]" : "text-[14px]";

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md border border-gray-200 flex items-center justify-center"
      style={{
        backgroundColor: bgColor,
        fontFamily:
          "'Essentiarum', 'Gill Sans', 'Futura', 'Avenir', 'Banschrift', 'Helvetica Neue', sans-serif",
        width,
        height,
      }}
    >
      {/* Main image inside the frame */}
      {imageUrl && (
        <Image
          src={imageUrl}
          loading="eager"
          alt="Main content"
          className="absolute object-cover rounded-lg z-30"
          style={{
            top: "49px",
            left: "49.5%",
            transform: "translateX(-50%)",
            width: "83%",
            height: "65%",
          }}
        />
      )}

      {/* PNG frame overlay (transparent) */}
      {frameUrl && (
        <Image
          src={frameUrl}
          loading="eager"
          alt="Card frame"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none z-20"
        />
      )}

      {/* Top banner title */}
      {title && (
        <div
          className={`absolute top-[28px] left-[100%] -translate-x-[40%] w-[240px] ${titleFontSize} font-bold text-[#0C0C24] text-center whitespace-nowrap overflow-hidden text-ellipsis z-40`}
          style={{
            lineHeight: "1.25",
            transform: "translateX(-50%)",
            textRendering: "optimizeLegibility",
            letterSpacing: "0.15px",
          }}
        >
          {title}
        </div>
      )}

      {/* Bottom text */}
      {bottomText && (
        <div
          className={`absolute bottom-[36px] left-1/2 -translate-x-1/2 ${bottomTextFontSize} font-bold text-[#0C0C24] text-center whitespace-nowrap z-40`}
        >
          {bottomText}
        </div>
      )}
    </div>
  );
};

export default FramedCard;
