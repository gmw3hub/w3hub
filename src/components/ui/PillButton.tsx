import Link from "next/link";
import type { ReactNode } from "react";
import ArrowCircle from "./ArrowCircle";
import Chevron from "./Chevron";

type Variant = "dark" | "light";
type Size = "md" | "lg";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
};

// Pill with a circular arrow. Hover: the arrow circle turns mint.
// size="md" — Hero CTAs (28px circle, arrow icon, lighter pill geometry)
// size="lg" — Section CTAs (34px circle, chevron, slimmer right-pad)
export default function PillButton({
  href,
  children,
  variant = "dark",
  size = "md",
  external,
  className,
}: Props) {
  const isDark = variant === "dark";
  const isLg = size === "lg";

  const pill = isLg
    ? "group inline-flex items-center gap-3.5 rounded-full py-[3px] pl-5 pr-[3px] text-[16px] font-medium leading-5"
    : "group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[16px] font-medium leading-5";
  const color = isDark ? "bg-ink-800 text-white" : "bg-white text-ink";

  const inner = (
    <>
      <span>{children}</span>
      {isLg ? (
        <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-ink-800 transition-colors group-hover:bg-mint">
          <Chevron />
        </span>
      ) : (
        <ArrowCircle invert={!isDark} size={28} />
      )}
    </>
  );

  const cls = `${pill} ${color} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
