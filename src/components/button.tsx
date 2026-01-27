import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string;        // ← make optional
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children = "Click Me",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const classes =
    "inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors";

  // If href exists → link
  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    
    if (isExternal) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`${classes} ${className}`}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link href={href} className={`${classes} ${className}`}>
        {children}
      </Link>
    );
  }

  // Otherwise → button
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${classes} ${className}`}
    >
      {children}
    </button>
  );
}
