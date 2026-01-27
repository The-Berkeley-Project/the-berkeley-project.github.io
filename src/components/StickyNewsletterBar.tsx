
import React from "react";

import {Popover, PopoverTrigger, PopoverContent, Button, Link} from "@heroui/react";

export default function StickyNewsletterBar() {
  return (
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
  );
}