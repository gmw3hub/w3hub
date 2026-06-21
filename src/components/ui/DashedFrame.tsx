import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  /** Extra classes on the OUTER paper frame (e.g. radius overrides). */
  className?: string;
  /** Extra classes on the INNER dashed panel — put content padding here. */
  innerClassName?: string;
  /** Dashed border open at the bottom — panel bleeds into the next section. */
  topOnly?: boolean;
};

// The w3.hub "ticket" frame: a paper card whose dashed border floats ~6px
// inside the edge. The outer paper provides the 6px gap (p-1.5); the inner
// div draws the dash. Radii are concentric (outer = inner + 6px).
export default function DashedFrame({
  children,
  className,
  innerClassName,
  topOnly = false,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-[40px] bg-paper p-1.5",
        topOnly && "rounded-b-none",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-[34px] border-2 border-dashed border-[#96908D]/50",
          topOnly && "rounded-b-none border-b-0",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
