import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// w3hub Card surfaces. Each variant captures ONE wrapper look used across the
// site — radius + background + border/ring + shadow. Layout (flex, grid,
// padding, content gaps) belongs at the call site via `className`.
//
// Adding a new surface? Grep for the existing visual recipe first — odds are
// it already exists or is a token swap away. See shadcn.md > "Consolidation
// rule" and "Pixel-perfect parity".
const cardVariants = cva("text-card-foreground", {
  variants: {
    surface: {
      // Standard white card: bg-white + 3xl radius + signature 3px warm-grey
      // drop shadow + 1px black/10 ring. Used by FAQ items, Solution cards,
      // Benefit tiles, HousePartners cards, VibesMarquee cards, AboutHost.
      default: "rounded-3xl bg-white shadow-card ring-1 ring-black/10",
      // Bordered: bg-white + 3xl radius + warm-grey HARDWARE border (takes
      // 1px of layout space) + signature shadow. Used by Events card.
      "bordered-warm":
        "rounded-3xl bg-white border border-warm-grey shadow-card",
      // Ring-warm: bg-white + 3xl radius + warm-grey RING (no layout shift) +
      // signature shadow. Used by Location card.
      "ring-warm": "rounded-3xl bg-white shadow-card ring-1 ring-warm-grey",
      // Elevated: 28px radius + faint black/4 ring + deep drop shadow. Used
      // by the Newsletter hero card.
      elevated:
        "rounded-[28px] bg-white ring-1 ring-black/4 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.18)]",
      // Mint accent: 19px radius + bg-mint, no shadow. Used inside Location.
      mint: "rounded-[19px] bg-mint",
      // Surfaceless: no wrapper styling — useful when the call site overrides
      // everything via className and just wants the Card data-slot semantics.
      none: "",
    },
  },
  defaultVariants: {
    surface: "default",
  },
})

function Card({
  className,
  surface,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-surface={surface ?? "default"}
      className={cn(cardVariants({ surface }), className)}
      {...props}
    />
  )
}

// Optional shadcn-style slots — kept available for future use, but most
// w3hub sections drive content layout via direct Tailwind classes on
// children rather than these slots.
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  cardVariants,
}
