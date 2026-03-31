import React from "react";
import Image from "next/image";

type Props = {
  frameUrl?: string;      // transparent PNG frame
  imageUrl?: string;      // main photo
  title?: string;         // text on upper banner
  bottomText?: string;    // text between bottom lines
  bgColor?: string;       // background color behind frame
  borderColor?: string;   // border color for committee theme
  width?: string;         // customizable width
  height?: string;        // customizable height
};

const FramedCard: React.FC<Props> = ({
  frameUrl,
  imageUrl,
  title,
  bottomText,
  bgColor = "#FAEACB", // default soft ochre
  borderColor,
  width = "300px", 
  height = "420px",
}) => {
  // Helper function to darken color for border
  const getBorderColor = () => {
    if (borderColor) return borderColor;
    // Default pastel pink if no border color specified
    return '#FFB6C1';
  };
  const titleFontSize = title && title.length > 24 ? "text-[10px]" : "text-[12px]";
  const bottomTextFontSize = bottomText && bottomText.length > 24 ? "text-[14px]" : "text-[16px]";

  return (
    <div
      className="relative overflow-hidden flex items-center justify-center rounded-lg"
      style={{
        backgroundColor: bgColor,
        fontFamily:
          "'Essentiarum', 'Gill Sans', 'Futura', 'Avenir', 'Banschrift', 'Helvetica Neue', sans-serif",
        width,
        height,
        border: frameUrl ? 'none' : `4px solid ${getBorderColor()}`,
        boxShadow: frameUrl ? '0 8px 16px rgba(0,0,0,0.2)' : `0 4px 0 ${getBorderColor()}40, 0 8px 16px rgba(0,0,0,0.1)`,
      }}
    >

      {/* Main image inside the frame */}
      {imageUrl && (
        <div
          className={`absolute z-30 overflow-hidden ${frameUrl ? 'rounded-sm border-2 border-black' : 'rounded-lg border-2 border-black'}`}
          style={{
            top: frameUrl ? "49px" : "20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: frameUrl ? "83%" : "85%",
            height: frameUrl ? "calc(100% - 180px)" : "calc(100% - 120px)",
          }}
        >
          <Image
            src={imageUrl}
            fill
            loading="eager"
            alt="Main content"
            className="object-cover"
            sizes="(max-width: 768px) 230px, 220px"
          />
        </div>
      )}

      {/* PNG frame overlay (Snoopy border) - touching edges */}
      {frameUrl && (
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
        >
          <Image
            src={frameUrl}
            fill
            loading="eager"
            alt="Card frame"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Top banner title */}
      {title && frameUrl && (
        <div
          className={`absolute top-[28px] left-1/2 -translate-x-1/2 w-[240px] ${titleFontSize} font-semibold text-black text-center whitespace-nowrap overflow-hidden text-ellipsis z-40`}
          style={{
            lineHeight: "1.25",
            textRendering: "optimizeLegibility",
            letterSpacing: "0.02em",
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
          }}
        >
          {title}
        </div>
      )}

      {/* Bottom text */}
      {bottomText && (
        <div
          className={`absolute ${frameUrl ? 'bottom-[65px]' : 'bottom-[16px]'} left-1/2 -translate-x-1/2 ${bottomTextFontSize} font-semibold text-black text-center z-50 px-2`}
          style={{
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)',
            letterSpacing: '0.01em',
            maxWidth: '85%',
            wordWrap: 'normal',
            overflowWrap: 'break-word',
            whiteSpace: 'normal',
            lineHeight: '1.4',
          }}
        >
          {bottomText}
        </div>
      )}
    </div>
  );
};

export default FramedCard;
