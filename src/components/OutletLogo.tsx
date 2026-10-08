import type { Outlet } from "@/config/press";
import Image from "next/image";

/**
 * Logos have very different proportions, so each is sized to cover about the same
 * area rather than the same height. `area` is in square pixels.
 */
export function OutletLogo({
  outlet,
  area,
  className = "",
}: {
  outlet: Outlet;
  area: number;
  className?: string;
}) {
  const aspect = outlet.width / outlet.height;
  const height = Math.round(Math.sqrt(area / aspect));
  return (
    <Image
      src={outlet.logo}
      alt={outlet.name}
      width={Math.round(height * aspect)}
      height={height}
      className={`h-auto max-w-full ${className}`}
    />
  );
}
