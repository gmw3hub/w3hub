import Link from "next/link";
import type { ReactNode } from "react";
import ArrowCircle from "./ArrowCircle";

type Variant = "dark" | "light";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

// Pill with a circular arrow icon. Hover does ONE thing: the arrow circle
// switches to the mint accent. No scale, no elevation, no pill recolor.
export default function PillButton({
  href,
  children,
  variant = "dark",
  className,
}: Props) {
  const isDark = variant === "dark";
  return (
    <Link
      href={href}
      className={
        "group inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-[16px] font-medium leading-5 " +
        (isDark ? "bg-ink text-white" : "bg-white text-ink") +
        " " +
        (className ?? "")
      }
    >
      <span>{children}</span>
      <ArrowCircle invert={!isDark} size={28} />
    </Link>
  );
}
