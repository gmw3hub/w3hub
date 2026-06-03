import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Shared eyebrow typography — used by w3hub `eyebrow-mint` and `eyebrow-dot`
// variants below. Kept here so a future label-style change updates everywhere.
const EYEBROW_LABEL =
  "font-body text-[14px] font-bold uppercase tracking-[0.05em] leading-6 text-ink/80"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "bg-destructive text-white focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40 [a&]:hover:bg-destructive/90",
        outline:
          "border-border text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        ghost: "[a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 [a&]:hover:underline",
        // w3hub eyebrow (mint pill above section headings).
        // Overrides base padding/border/typography for pixel parity with the
        // legacy `Eyebrow` component this replaced.
        "eyebrow-mint": `${EYEBROW_LABEL} bg-mint rounded-full px-3 py-1 border-0 overflow-visible justify-start whitespace-normal`,
        // w3hub eyebrow with leading accent dot (no pill background).
        // Render with `withDot` so the dot lives inside the Badge.
        "eyebrow-dot": `${EYEBROW_LABEL} bg-transparent gap-2 px-0 py-0 border-0 overflow-visible justify-start whitespace-normal`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  withDot,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    // Render a leading accent-color dot. Implicit when variant="eyebrow-dot".
    withDot?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "span"
  const showDot = withDot ?? variant === "eyebrow-dot"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {showDot ? (
        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
      ) : null}
      {children}
    </Comp>
  )
}

export { Badge, badgeVariants }
