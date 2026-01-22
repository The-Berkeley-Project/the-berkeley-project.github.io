import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  href: string;
  className?: string;
}

export default function Button({ children = "Click Me", href, className = "" }: ButtonProps) {
  return (
    <Link 
      href={href}
      className={`inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}