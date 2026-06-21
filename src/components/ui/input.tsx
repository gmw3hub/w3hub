import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Input variants. `default` keeps shadcn's stock look; `pill` is w3hub's
// rounded-full paper-tinted field used by the Newsletter signup. Adding a
// new visual? Match its classes verbatim into a new variant — see shadcn.md
// > "Pixel-perfect parity".
const inputVariants = cva(
  "w-full min-w-0 outline-none aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        // w3hub pill — paper background, rounded-full, ink/30 focus ring.
        // Mirrors the Newsletter form's standalone (mobile) styling exactly;
        // call sites can layer responsive overrides via className (e.g. the
        // newsletter form's `sm:bg-transparent sm:ring-0 sm:focus:ring-0`).
        pill: "rounded-full bg-paper px-5 py-3 text-[16px] text-ink ring-1 ring-black/6 outline-none transition-[color,box-shadow] placeholder:text-black/45 focus-visible:ring-[3px] focus-visible:ring-ring/50",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Input({
  className,
  type,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant ?? "default"}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
