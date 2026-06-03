import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "mint" | "dot";
  className?: string;
};

const LABEL =
  "font-body text-[14px] font-bold uppercase tracking-[0.05em] leading-6 text-ink/80";

export default function Eyebrow({ children, variant = "mint", className }: Props) {
  if (variant === "dot") {
    return (
      <div className={`flex items-center gap-2 ${className ?? ""}`}>
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className={LABEL}>{children}</span>
      </div>
    );
  }
  return (
    <span
      className={`inline-flex items-center rounded-full bg-mint px-3 py-1 ${className ?? ""}`}
    >
      <span className={LABEL}>{children}</span>
    </span>
  );
}
