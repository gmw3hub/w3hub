import type { CSSProperties } from "react";

type Variant = "light" | "dark-tight" | "dark-wide";

const STYLES: Record<Variant, CSSProperties> = {
  light: {
    backgroundImage: "radial-gradient(circle, #B2B2B2 1.6px, transparent 1.8px)",
    backgroundSize: "11px 4px",
  },
  "dark-tight": {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.30) 2px, transparent 2.3px)",
    backgroundSize: "7.07px 5px",
  },
  "dark-wide": {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.30) 2px, transparent 2.3px)",
    backgroundSize: "11.87px 5px",
  },
};

const BASE: CSSProperties = {
  backgroundRepeat: "repeat-x",
  backgroundPosition: "left center",
};

type Props = {
  variant?: Variant;
  className?: string;
};

export default function DottedDivider({ variant = "light", className }: Props) {
  return (
    <div
      aria-hidden
      className={className ?? "h-1 w-full"}
      style={{ ...BASE, ...STYLES[variant] }}
    />
  );
}
