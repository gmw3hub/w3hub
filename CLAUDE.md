# w3.hub — Project Guide

A Next.js rebuild of the **w3.hub** marketing site (live: https://w3hub.berlin).
Goal: a visually faithful (~95%) replica of the Framer original — same layout,
typography, colors, spacing, responsive behavior, animations — as owned,
maintainable code.

**Source of truth:** live site + Figma exports. If this doc disagrees with them,
the design wins — flag the discrepancy, don't guess.

---

## Tech Stack

- **Next.js 15** App Router + **TypeScript**
- **Tailwind v4** — config lives in `src/app/globals.css` via `@theme` (not `tailwind.config.ts`)
- **Framer Motion** — all scroll/hover/transition animations
- **next/font/google** — Unbounded + Inter, self-hosted
- **next/image** — every raster image
- Deploy: Vercel-friendly, no vendor lock-in

Do **not** add component kits (MUI, Chakra, shadcn) without approval. Build by hand.

---

## Repo Map

```
src/
  app/
    layout.tsx              # fonts, <html>, global <Navbar>/<Footer>
    page.tsx                # Home — composes sections in order
    globals.css             # Tailwind v4 @theme tokens, prefers-reduced-motion rule
    imprint/page.tsx
    privacy-policy/page.tsx
  components/
    sections/               # page sections — server components by default
      Hero.tsx              (shell)   ──► HeroOverlay.tsx        (client: animated overlay)
      Events.tsx
      Benefits.tsx
      Solutions.tsx         (shell)   ──► SolutionCard.tsx       (client: carousel)
      VibesMarquee.tsx
      HousePartners.tsx
      Newsletter.tsx        (shell)   ──► NewsletterForm.tsx     (client: form state)
      Location.tsx
      AboutHost.tsx
      Faq.tsx               (shell)   ──► FaqItem.tsx            (client: accordion state)
    layout/
      Navbar.tsx            # client (dropdown + mobile menu state)
      Footer.tsx
    ui/                     # cross-cutting primitives — reuse aggressively
      ArrowCircle.tsx       # circular arrow icon used inside PillButton
      Chevron.tsx           # 7×12 right/left chevron
      DoodleBackdrop.tsx    # green textured backdrop (#AEEFBD + bg-doodle.webp)
      DottedDivider.tsx     # variants: "light" | "dark-tight" | "dark-wide"
      Eyebrow.tsx           # variants: "mint" pill | "dot" (orange dot + label)
      PillButton.tsx        # link button; variants: "dark"|"light", sizes: "md"|"lg", external?
      SectionReveal.tsx     # whileInView wrapper — supports index/step/y for stagger
      SmartLink.tsx         # auto-detects external (https://) → <a target=_blank>; else <Link>
    legal/
      LegalPage.tsx         # exports LegalPage, LegalSection, LegalBullets
  lib/
    animations.ts           # easeOutSoft, fadeUp, dropdownMotion, mobileMenuMotion,
                            # heroStagger, staggerFadeUp(index, y, step)
public/
  videos/hero.mp4
  images/                   # logos, partners/, solutions/, marquee/, features/, …
```

---

## Coding Principles

These exist because this codebase will be heavily AI-edited. Each one prevents a
specific regression a one-shot edit tends to introduce.

> **Before building or restyling ANY UI, read [`shadcn.md`](./shadcn.md).** It is
> the design-system playbook for this repo: the brand tokens, the shadcn-based
> primitives, the "custom vs extend vs restyle" decision rule, the consolidation
> rule, and the anti-patterns. New work must reuse the existing primitives in
> `src/components/ui/` and match the current visual style + tokens — do not invent
> one-off colours, buttons, cards, or shadows.

### 1. Server-first; client islands only when forced
Default to server components. Reach for `"use client"` only when the file needs
one of: `useState`/`useEffect`, event handlers, browser APIs, or framer-motion
hooks (`whileInView`, etc.). If only part of a section is interactive, split that
part into its own client child (see `Hero` / `HeroOverlay`, `Faq` / `FaqItem`).

### 2. Reuse the `ui/` primitives — don't reinvent
Before writing inline JSX for a button, card chrome, dotted line, eyebrow label,
chevron, doodle background, or shadow, **check `src/components/ui/` first**. If
the primitive exists, use it. If a near-variant is needed, extend the existing
primitive with a prop rather than copy-pasting.

Common substitutions:
- Dark CTA pill with chevron → `<PillButton size="lg">` (use `external` for `https://…`)
- Hero CTA pill → `<PillButton variant="light">`
- `0px 3px 0px #DDD8D4` drop shadow → `shadow-card`
- Green doodle backdrop → `<DoodleBackdrop />` (don't inline the `#AEEFBD` + url)
- Dotted line under headings → `<DottedDivider variant="light"|"dark-tight"|"dark-wide" />`
- "EVENTS"-style label → `<Eyebrow variant="mint"|"dot">`
- Any link that might be external → `<SmartLink>`

### 3. Animations go through `lib/animations.ts` and `SectionReveal`
Don't define inline `Variants` objects in components. Use `fadeUp`, `heroStagger`,
or `staggerFadeUp(index, y, step)`. For "fade-in on scroll", use `<SectionReveal>`
— it already supports `index`/`step`/`y`/`style`/`as` for staggered grids and
absolutely-positioned overlays, so the server outer component doesn't need
`"use client"`.

The site honors `prefers-reduced-motion` via a global CSS rule in `globals.css`.
Don't add per-component reduced-motion logic unless the global rule isn't enough.

### 4. Tokens over arbitrary values
Tailwind v4 `@theme` tokens live in `src/app/globals.css`. Use them:

| Use case             | Token                                                        |
|----------------------|--------------------------------------------------------------|
| Accent orange        | `bg-accent` / `text-accent` (#FF4200)                        |
| Near-black surfaces  | `bg-ink`, `bg-ink-800`, `bg-ink-900`                         |
| Off-white            | `bg-paper`                                                   |
| Borders / dividers   | `border-warm-grey` (#DDD8D4)                                 |
| Secondary text       | `text-slate-violet-{400,500,700,900}`                        |
| Mint highlight       | `bg-mint` / `text-mint`                                      |
| Muted text/icons     | `text-muted`, `text-muted-2`, `text-muted-3`                 |
| Signature card shadow| `shadow-card` (= `0px 3px 0px var(--color-warm-grey)`)       |
| Font families        | `font-display` (Unbounded), `font-body` (Inter)              |
| Custom breakpoints   | `md:` 800px, `lg:` 1200px, `xl:` 1400px (Figma reference set)|

If you reach for `bg-[#xxxxxx]`, first check whether a token covers it. If you
need a *new* token (used 3+ times), add it under `@theme` in `globals.css`
rather than repeating literals.

### 5. Images
- Raster (`.png`, `.jpg`, `.webp`) → `<Image>` from `next/image` with explicit
  `width`/`height` (or `fill` + `sizes`). Above-the-fold images get `priority`.
- SVG → also `<Image>` is fine (it passes through without optimization). Avoid
  raw `<img>`; if unavoidable, keep the `eslint-disable-next-line` comment.
- Decorative images: `alt=""` + `aria-hidden`. Don't ship empty alts otherwise.

### 6. Don't add features that weren't asked for
This is a marketing site. Keep components dumb. Skip "future-proofing" props,
extra variants, feature flags, theming layers, etc. Match the design. Stop.

### 7. Keep comments rare
Don't narrate WHAT the code does (`// Cards`, `// Background video`). Only
explain non-obvious WHY — hidden constraints, Figma-frame coordinates, the
reason for a workaround. If removing the comment wouldn't confuse a future
reader, don't write it.

### 8. Verify before claiming done
After UI changes, run the dev server and check visually at all four breakpoints.
For type/lint:

```bash
npx tsc --noEmit       # type-check
npx eslint src         # lint
```

Both must be clean.

---

## Section Order on Home

`src/app/page.tsx` composes the home page. Order matches the live site:

1. `<Hero />` — full-bleed video, headline, two light pill CTAs, scroll cue
2. `<Events />` — "Part of the w3.hub Family" + Luma calendar embed
3. `<Benefits />` — "Berlin's Premier Coworking & Event Ecosystem" + 4-feature grid
4. `<Solutions />` — "Our Custom Solutions" — 4 cards with carousel
5. `<VibesMarquee />` — two infinite rows of vibe photos (CSS keyframe, GPU-driven)
6. `<HousePartners />` — partner logos + "Become a house partner" CTA
7. `<Newsletter />` — Community Alpha sign-up form
8. `<Location />` — building/transport facts + Google Maps embed
9. `<AboutHost />` — w3.group block with "Learn about w3.group" CTA
10. `<Faq />` — accordion of 6 Q&As

Section visual details (paddings, exact colors, image crops, grid columns per
breakpoint) come from Figma + live inspection, **not from prose in this doc**.

---

## Responsive

Tailwind v4 breakpoints in `globals.css` map to the Figma frames:

| Width   | Tailwind     | Figma frame    |
|---------|--------------|----------------|
| 390px   | base         | mobile         |
| 800px   | `md:`        | tablet         |
| 1200px  | `lg:`        | small desktop  |
| 1400px  | `xl:`        | large desktop  |

Match each frame at its width; interpolate fluidly between. The grid clamps at
`max-w-[1136px]` for most sections (`max-w-[800px]` for Benefits/Solutions).

---

## SEO / Metadata

- Root `<title>`: `w3.hub | Web3, AI and Tech Coworking and Event Space Berlin`
- Description and OG image set in `src/app/layout.tsx`
- Per-page titles/descriptions via the `metadata` export
- Favicon: `/images/logo-mark.png`

---

## Routes

| Route               | Status                  |
|---------------------|-------------------------|
| `/`                 | built                   |
| `/co-working`       | not yet built           |
| `/event-space`      | not yet built           |
| `/meeting-rooms`    | not yet built           |
| `/community`        | not yet built           |
| `/about-us`         | not yet built           |
| `/event-calendar`   | not yet built           |
| `/newsletter`       | not yet built           |
| `/imprint`          | built (uses `LegalPage`)|
| `/privacy-policy`   | built (uses `LegalPage`)|

When building secondary pages, reuse `<Newsletter>`, `<Faq>`, `<Location>`,
`<HousePartners>`, `<AboutHost>` where the live site uses them. Don't duplicate.

---

## Reference Docs

When working on this codebase, prefer the official docs for the libraries below
over training-data recall. Quick links:

- **Next.js 15 App Router** — https://nextjs.org/docs/app
  - LLM-friendly index: https://nextjs.org/llms.txt
  - Server vs Client components: https://nextjs.org/docs/app/getting-started/server-and-client-components
  - `next/image`: https://nextjs.org/docs/app/api-reference/components/image
  - `next/font`: https://nextjs.org/docs/app/api-reference/components/font
  - `metadata` API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Tailwind CSS v4** — https://tailwindcss.com/docs
  - `@theme` directive: https://tailwindcss.com/docs/theme
  - Upgrade-from-v3 notes (useful since most LLM training is on v3): https://tailwindcss.com/docs/upgrade-guide
- **Framer Motion** — https://www.framer.com/motion/
  - `whileInView`: https://www.framer.com/motion/scroll-animations/
  - Variants + stagger: https://www.framer.com/motion/animation/#variants
- **React 19** — https://react.dev/reference/react
- **TypeScript** — https://www.typescriptlang.org/docs/

For asset URLs and original markup, see `ASSET-MANIFEST.md` and the original
Framer-published HTML in `design/` (if present).

---

## Reference Materials

- **Live site:** https://w3hub.berlin/ — authoritative for computed styles,
  easing curves, and interaction feel. Use DevTools.
- **Figma dev-mode exports** at four frames: 1400px / 1200px / 800px / 390px.
  Authoritative for layout/measurements.
- **`download-assets.sh`** — re-downloads original media into `/public` if any
  asset is missing. Renames the three key files (`hero.mp4`, `logo-mark.png`,
  `og-image.png`); other Framer-hash files have already been renamed
  topically — see `ASSET-MANIFEST.md`.

---

## Definition of Done (per page)

- [ ] Visually matches Figma + live site at 390 / 800 / 1200 / 1400px
- [ ] All assets local (no `framerusercontent.com` references)
- [ ] Animations match the live feel; `prefers-reduced-motion` respected
- [ ] Real copy (no lorem) — content matches the live site
- [ ] Semantic, accessible HTML (landmarks, alt text, focusable nav/accordion, labels)
- [ ] No TypeScript or ESLint errors
- [ ] All cross-page links wired correctly
- [ ] Server components used wherever possible (client islands only where needed)
- [ ] Existing `ui/` primitives used instead of inlining patterns
