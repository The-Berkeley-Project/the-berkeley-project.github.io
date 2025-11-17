import React from "react";
export default function StickyNewsletterBar() {
    return (
      <div className= "hidden md:block fixed bottom-6 left-1/9 -translate-x-1/2 bg-sky-100 border-2 border-yellow-300 shadow-md rounded-xl px-6 py-3 text-blue-600 font-bold text-lg z-50">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRAxBgF2D0hR7vx9aoeLNkEQD3yIk_i_eoZX0DGVdnTm1r4A/viewform" className="text-blue-600 font-bold text-lg">
          Join our Newsletter
        </a>
      </div>
    );
  }
