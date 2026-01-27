
import React from "react";

import {Popover, PopoverTrigger, PopoverContent, Button, Link} from "@heroui/react";

export default function StickyNewsletterBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-400 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <Popover placement="top">
              <PopoverTrigger>
                <Button>Join our Newsletter</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="px-1 py-2">
                  <Button
                          as={Link}
                          color="primary"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSeRAxBgF2D0hR7vx9aoeLNkEQD3yIk_i_eoZX0DGVdnTm1r4A/viewform"
                          variant="solid"
                          className="font-medium"
                          isExternal
                    >
                    Sign Up
                    </Button>
                  <div className="text-small">to receive updates about volunteering opportunities 
                  and news about The Berkeley Project!t</div>
                </div>
              </PopoverContent>
            </Popover>
        </div>
      </div>
    </div>
          

  );

}