import Button from "@/components/button";
import { semester } from "@/config/semester";

export default function StickyApplyBar() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <Button
        href={semester.links.volunteerApply}
        className="w-full shadow-[0_8px_24px_rgba(0,50,98,0.3)]"
      >
        Join now
      </Button>
    </div>
  );
}
