import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button, Link} from "@heroui/react";

export default function StickyNewsletterBar() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Popover placement="top" backdrop="transparent">
        <PopoverTrigger>
          <Button 
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-800 transition-all"
            size="lg"
          >
            Join our Newsletter
          </Button>
        </PopoverTrigger> 
        <PopoverContent className="bg-[#E3F9FF] rounded-xl shadow-xl p-4 max-w-sm">
          <div className="flex flex-col gap-3">
            <div className="text-sm text-gray-700 leading-relaxed">
              Sign up to receive updates about volunteering opportunities 
              and news about The Berkeley Project!
            </div>
            <Button
              as={Link}
              color="primary"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeRAxBgF2D0hR7vx9aoeLNkEQD3yIk_i_eoZX0DGVdnTm1r4A/viewform"
              variant="solid"
              className="font-medium bg-[#61AFFC] rounded-lg w-full"
              isExternal
            >
              Sign Up
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
