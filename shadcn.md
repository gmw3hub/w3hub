# Building Components with shadcn (w3hub)

How we build UI in this repo. The rule is one sentence:

> **Restyle shadcn primitives in place to match our tokens. Don't wrap, don't fork, don't reimplement.**

shadcn primitives *are* our components. The files in [src/components/ui/](src/components/ui/) are not vendored upstream code — they are ours, edited freely, picked up by every screen. Our visual identity lives in CSS tokens (see [src/app/globals.css](src/app/globals.css)), and the primitives reference those tokens, so the look propagates for free.

---

## Why this rule

- **One source of truth for the look.** Brand accent (`#FF4200`) changes once in `globals.css`, every primitive updates. No `W3PillButton` chasing `Button`.
- **Composability over proliferation.** A solutions card section is `Card + Badge + Button`, not three hand-rolled siblings.
- **Accessibility, keyboard, focus traps stay correct.** Radix already solved them; reimplementing means re-introducing the bugs Radix fixed.
- **Less code to review and own.** If two screens need a colored pill, both use `Badge` — not two near-identical files that drift.

---

## The user-update rule

When the user asks to change how a button/card/badge/etc. looks or behaves, **update the primitive in [src/components/ui/](src/components/ui/), not the call site.** A change to `Button` cascades to every CTA on the site for free — that's the point.

Exception: the user explicitly scopes the change to one place ("just on the hero", "only this card"). In that case, prefer adding a **variant** to the primitive over hardcoding classes at the call site — variants are reusable, hardcoded classes drift.

If you find yourself editing the same Tailwind classes in two `.tsx` files in one PR, stop. The primitive needs a variant.

---

## The workflow

### 1. Search the registry first

Before writing any UI element, ask: is this a `Button`, `Card`, `Badge`, `Accordion`, `Input`, `Select`, `Dialog`, `Popover`, `Tabs`, `DropdownMenu`, `Sheet`, `Tooltip`, `Separator`, `NavigationMenu`?

```bash
# In Claude Code: use the shadcn MCP tools when available
mcp__shadcn__search_items_in_registries
mcp__shadcn__view_items_in_registries

# Or from the shell:
npx shadcn@latest search <keyword>
npx shadcn@latest view @shadcn/<name>
```

### 2. Install via the CLI

```bash
npx shadcn@latest add <name>
```

Files land in `src/components/ui/`. Treat them as ours from this point — commit them, edit them, ship them.

w3hub's existing primitives are **PascalCase** (`PillButton.tsx`, `Eyebrow.tsx`) but the shadcn CLI emits **lowercase-kebab** (`button.tsx`, `dropdown-menu.tsx`). Keep the shadcn output **as-is** — don't rename. The convention in this repo: shadcn primitives use the CLI's lowercase-kebab names; our app-level components (`Hero.tsx`, `Navbar.tsx`) stay PascalCase. Mixing is fine — the casing tells you at a glance which is which.

### 3. Align tokens, not primitives

shadcn primitives reference canonical CSS variables (`--primary`, `--background`, `--foreground`, `--accent`, `--border`, …). [src/app/globals.css](src/app/globals.css) defines those variables on top of our brand tokens (`--color-accent`, `--color-ink`, `--color-paper`, etc.) via an alias layer. Once aligned, the primitive picks up our look automatically.

If the primitive looks wrong out of the box, **fix the token first**, not the primitive. Brand orange is `--primary`. Surface neutrals are `--background` / `--card` / `--muted`. Hover/selected tint is `--accent`. Errors are `--destructive`. If you're tempted to add `className="bg-accent"` to a primitive, that means `--primary` is wrong — go fix it.

### 4. If you must touch the primitive, edit it directly

Edit Tailwind classes inside `button.tsx`, `card.tsx`, `badge.tsx`. Add or refine variants in the existing CVA block. **Never** create `W3Button.tsx`, `BrandedCard.tsx`, or `CustomBadge.tsx` to override one prop or one color. The primitive **is** the branded version.

### 5. Compose, don't proliferate

If one screen needs a `Card` with a status strip on top, either:

- Add a `statusStrip` slot or `tone` variant inside `card.tsx` (preferred — every screen now has it), **or**
- Compose at the call site: `<Card><CardStatusStrip tone="accent" />...</Card>`.

Do **not** create `CardWithStatusStrip.tsx`. The cost of a third file is small; the cost of three files diverging across a year of edits is large.

---

## Token-driven theming

w3hub uses **Tailwind v4** with a single stylesheet at [src/app/globals.css](src/app/globals.css). Two layers:

### Layer 1: brand tokens (our identity)

```css
@theme {
  --color-accent: #ff4200;     /* brand orange */
  --color-ink: #000000;
  --color-ink-900: #101422;
  --color-ink-800: #181a1c;
  --color-paper: #fbf9f8;
  --color-warm-grey: #ddd8d4;
  --color-mint: #b5f7c4;
  /* ...etc */
}
```

These are the **source of truth** for the brand. They're what designers reference. Don't rename them to shadcn-canonical names — they describe the brand (`ink`, `paper`, `warm-grey`), not the role.

### Layer 2: shadcn canonical aliases (the bridge)

```css
@theme {
  /* shadcn canon, aliased to brand tokens */
  --color-primary: var(--color-accent);
  --color-primary-foreground: #ffffff;
  --color-background: var(--color-paper);
  --color-foreground: var(--color-ink);
  --color-card: #ffffff;
  --color-card-foreground: var(--color-ink);
  --color-muted: var(--color-warm-grey);
  --color-muted-foreground: var(--color-slate-violet-500);
  --color-border: rgba(0, 0, 0, 0.10);
  --color-input: rgba(0, 0, 0, 0.06);
  --color-ring: var(--color-ink);

  /* shadcn `--accent` is the MUTED HOVER-TINT slot, not the brand accent.
     Brand color goes to `--primary`. Painting `--accent` brand-orange makes
     every dropdown row look selected. */
  --color-accent-hover: var(--color-paper);     /* hover wash */
  --color-accent-foreground: var(--color-ink);

  --color-destructive: #c24141;
  --color-destructive-foreground: #ffffff;
}
```

**The bridge is load-bearing.** Tailwind v4 generates utility classes (`bg-X`, `text-X`, `border-X`) from `--color-X` declarations inside `@theme`. Every shadcn-canonical name must be aliased here or the utility silently resolves to nothing — no compile error, no warning, just a dead class.

### Token naming rules

- **Brand tokens describe the brand.** `--color-accent`, `--color-ink`, `--color-paper`, `--color-warm-grey`, `--color-mint`. These never get renamed.
- **Shadcn-canonical names describe the role.** `--color-primary`, `--color-background`, `--color-foreground`, `--color-card`, `--color-muted`, `--color-border`, `--color-ring`, `--color-destructive`. These are the *bridge*, aliased to brand tokens.
- **Pair every surface with `-foreground`.** `--color-background` / `--color-foreground`, `--color-card` / `--color-card-foreground`, `--color-primary` / `--color-primary-foreground`. shadcn primitives rely on this pairing.
- **`--accent` ≠ brand.** The brand accent is `--color-accent` (brand token) → aliased to `--color-primary` (shadcn role). shadcn's `--accent` is the muted hover-tint slot — keep it neutral. Inline-comment this guard above the bridge so a future contributor doesn't paint everything orange by mistake.
- **No hex literals in components.** All color values live in `globals.css`. If you write `bg-[#ff4200]` anywhere outside `globals.css`, you're doing it wrong — use `bg-accent` (brand) or `bg-primary` (role).
- **One token, one purpose.** Don't redefine `--color-mint` to mean "success green" — it's the soft mint accent. If you need a true success token, alias `--color-success: var(--color-mint)` in the bridge layer.

---

## Custom vs extend vs restyle — the three buckets

Every UI need lands in one of three buckets. Pick the right one before writing code.

### Bucket A — Custom component (rare)

A new file in `src/components/` (sections, layout) is justified **only when the thing is bigger than a primitive** — it has its own semantic identity, behavior shape, or composes several primitives into a recognizable unit.

Good reasons:
- `Hero` — full-bleed video background + overlay text + dual CTA.
- `VibesMarquee` — duplicated horizontally scrolling row with seamless wrap.
- `Faq` — accordion list driven by content array.
- `DoodleBackdrop` — decorative animated background.
- Charts, sparklines, custom timelines.

Bad reasons (these belong in Bucket B or C):
- "I want a button with different colors" → Bucket C, restyle the variant.
- "I need a card with a border instead of shadow" → Bucket B, add a `bordered` variant to `card.tsx`.
- "Same `Badge` but with a leading dot" → Bucket B, add `dot` prop or `dot` variant.

If your "custom component" is a primitive plus 3 lines of style or one extra prop, it's not a custom component — it's an extension that's been over-built. Move the change into the primitive.

#### Authoring patterns for Bucket A components

Two patterns recur. Follow both.

**1. Extend `ComponentProps<'div'>` (or the relevant element) and spread rest props onto the root.**

```tsx
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ComponentProps<"section"> & {
  title: ReactNode;
  eyebrow?: ReactNode;
};

export default function FeatureSection({ title, eyebrow, className, children, ...rest }: Props) {
  return (
    <section {...rest} className={cn("py-16 md:py-24", className)}>
      {/* … */}
    </section>
  );
}
```

Caller-supplied `className` wins on conflict — that's the whole point of `cn()`.

**2. Use `cva` for any axis with 2+ values.**

If the component has variants — `tone`, `size`, `density`, anything with discrete options — declare them with `cva` and derive the prop type with `VariantProps`. Don't write `size === 'lg' ? '...' : size === 'md' ? '...' : ...` branches.

```tsx
import { cva, type VariantProps } from "class-variance-authority";

const eventCard = cva("rounded-3xl shadow-card transition-all", {
  variants: {
    tone: {
      light: "bg-white text-ink ring-1 ring-black/10",
      dark: "bg-ink-800 text-white",
    },
    size: {
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
  defaultVariants: { tone: "light", size: "md" },
});
```

Variant names follow canonical token names: `accent`, `mint`, `ink` for w3hub brand colors; `primary`, `destructive`, `muted` for shadcn role names. **Don't** use editorial jargon (`hero-style`, `pretty`, `subtle`).

### Bucket B — Extend the shadcn primitive

Minimal functional additions — a new prop, a new variant, a new slot, a tiny piece of behavior — go **inside the primitive file**. Edit `button.tsx`, `card.tsx`, `badge.tsx` directly.

Examples:
- Pill button with circular arrow icon → add `pill` variant + arrow slot to `button.tsx`.
- Badge with leading dot → add `dot` prop or `dot` variant in `badge.tsx`.
- Card with optional bordered surface → add `surface="shadow" | "bordered"` variant in `card.tsx`.
- Input with rounded-full pill styling for newsletter → add `pill` variant to `input.tsx`.

The rule: if 2+ screens would benefit, the change goes in the primitive. The primitive *is* ours — extending it is the intended workflow, not a violation.

When you extend, expect to skip future `npx shadcn@latest add <name>` updates for that primitive (or merge them by hand). That's the cost of vendoring on first install — accept it explicitly rather than working around it with a sibling wrapper file.

**Variant names follow the token name.** When adding a CVA variant, use the canonical token name verbatim — `accent` not `orange`, `mint` not `green`, `ink` not `dark`, `paper` not `cream`. The variant prop becomes self-documenting (`<Button variant="accent">` reads like the token), and a future token rename cascades through grep cleanly.

### Bucket C — Restyle only

Pure look-and-feel changes (color, spacing, radius, typography). Two paths:

1. **Token-level** — if the change should propagate everywhere (brand accent, page background, base font), edit the CSS variable in [globals.css](src/app/globals.css). The primitive picks it up.
2. **Variant-level** — if only some call sites want it (e.g. a `ghost` button variant), add the variant in the primitive's CVA block. Now every screen has access by name.

Never hardcode the look at the call site (`className="bg-[#181a1c]"`). Hex literals belong in the token layer; per-screen restyling belongs in a named variant.

---

## Pixel-perfect parity is non-negotiable

When you migrate an existing component into a shadcn primitive variant, the rendered output must be **byte-for-byte identical** to what was there before. Same padding, same radius, same shadow, same font weight, same letter-spacing, same hover state. The user inspects pixels — "close enough" is not the bar.

Workflow for any migration:

1. **Read the source component and every call site.** Note every Tailwind class on every element. Note inline styles. Note conditional class strings.
2. **Author the new variant by literally copying those classes** into the primitive's CVA block. Do not "clean up" or "improve" classes during migration — that's a separate PR.
3. **Diff the rendered class string** the new variant produces against the original. If `<Button variant="pill-dark">` does not emit the same final class list as the old `<PillButton variant="dark">`, fix the variant until it does.
4. **Visually verify** — load the page in the dev server, compare against the previous commit. Side-by-side or before/after screenshot.
5. **Only after the variant is pixel-equivalent** delete the old component.

If the old component had a quirk (a specific `px-1.5`, a non-standard radius, a custom shadow), the quirk goes into the variant. Don't normalize it to the closest Tailwind default — that changes pixels. If the design system actually wants normalization, that's a separate decision the user makes, not a side-effect of migration.

---

## Consolidation rule — before adding a new file

> Before creating any new file in `src/components/ui/` or `src/components/sections/`, grep the codebase for the visual pattern you're about to build. If 2+ existing files repeat similar Tailwind classes (`rounded-3xl shadow-card ring-1 ring-black/10`, `rounded-full bg-ink text-white`, `uppercase tracking-wider text-xs`), the primitive already exists in spirit and just needs a variant.

When in doubt, **read all instances first.** Two cards that look similar might have semantically different roles — a *clickable solution card* and a *static partner logo card* both use `rounded-3xl shadow-card` but behave differently. Unifying them under one variant is fine if the variants are clearly named; collapsing them into one prop-less primitive is not.

The validation rule: **before unifying two visually similar components, list every Tailwind class on each side and verify the differences are token swaps, not behavioral.** If the differences are behavioral (one is a link, one is a button, one is interactive, one is decorative), they stay separate — but they should still compose the same primitive (`Card`), not duplicate its surface styling.

---

## Anti-patterns (concrete, in this repo)

- ❌ **A `W3PillButton.tsx` re-implementing what `Button` with a `pill` variant already does.** Edit `button.tsx`'s `pill` variant — that variant *is* the brand pill.
- ❌ **A `MintBadge.tsx` and `DotBadge.tsx` as two sibling files.** Use `Badge` with `variant="mint"` and `variant="dot"`.
- ❌ **Defining `--color-orange` / `--color-cream` / `--color-cta`.** Use the brand canon (`--color-accent`, `--color-paper`) or the shadcn role (`--color-primary`, `--color-background`).
- ❌ **`className="bg-[#ff4200]"`** anywhere outside `globals.css`. Hex literals never appear in components — only in token definitions.
- ❌ **Pasting `rounded-3xl shadow-card ring-1 ring-black/10` into a fourth file** because you didn't grep first. The primitive variant exists or needs to.

---

## Audit checklist before merging UI work

- [ ] Searched the shadcn registry for what you're building?
- [ ] If you added a custom component, can it be replaced by composing 2–3 shadcn primitives? If yes, do that.
- [ ] Token names canonical (brand tokens describe brand, role tokens alias them)?
- [ ] Did you change Tailwind classes inside the primitive file, or did you wrap it in a sibling? If wrapped, move the change into the primitive.
- [ ] Primitive still picks up `--color-primary` / `--color-accent` automatically, or did you hardcode a value?
- [ ] No hex literals in components. No editorial token names.
- [ ] Before unifying two similar components: listed Tailwind classes on each side, confirmed differences are token swaps not behavioral.
