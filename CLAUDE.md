# Project Brief: Rebuild w3.hub (w3hub.berlin) in Next.js

## Role & Goal

You are a senior frontend engineer. Your task is to rebuild the **w3.hub** marketing
website — currently hosted on Framer at **https://w3hub.berlin/** — as a clean,
owned, production-grade codebase. The goal is a **visually faithful (~95%) replica**:
same layout, typography, colors, spacing, responsive behavior, and animations, but
written as maintainable code we control rather than Framer's proprietary output.

Treat the live site and the provided Figma exports as the **source of truth**. When
this document and the Figma/live site disagree, the Figma/live site wins — flag the
discrepancy in a comment rather than guessing silently.

---

## Tech Stack (required)

- **Next.js** (App Router, latest stable) with **TypeScript**
- **Tailwind CSS** for all styling (use design tokens defined below; avoid arbitrary
  one-off values where a token exists)
- **Framer Motion** for all animations and scroll/hover interactions
- **next/font** for self-hosted Google Fonts (no render-blocking external font CSS)
- **next/image** for all raster images
- Deploy target: Vercel (keep config Vercel-friendly, but no vendor lock-in)

Do **not** install component kits (no MUI, Chakra, shadcn) unless I approve it first.
Build the components by hand to match the design.

---

## How to Work (process — follow this order)

1. **Scaffold first.** Create the Next.js project, install deps, set up Tailwind +
   fonts + the design-token config. Get a blank styled page rendering before building
   sections.
2. **Build section-by-section, not page-by-page-in-one-shot.** For each section:
   build it → run the dev server → compare against the Figma frame and live site →
   self-correct spacing/sizing/color → only then move on.
3. **Mobile + desktop together.** Every section must be checked at all four provided
   breakpoints (see below) before it's considered done.
4. **Stop and ask** if a design detail is ambiguous and not resolvable from the Figma
   files or live site. Don't invent brand content.
5. After each page is complete, give me a short summary of what's done and what still
   needs polish (especially animations, which always need a second pass).

---

## Reference Materials You Have

- **Live site:** https://w3hub.berlin/ — inspect it directly for exact computed
  styles, easing, and interaction behavior.
- **Figma dev-mode exports** at four breakpoints: **1400px / 1200px / 800px / 390px**.
  Use these as the authoritative layout/measurement spec. The breakpoint set tells you
  the responsive system — design at these widths and interpolate between them.
- **Page list screenshot** (Framer Pages panel) — defines the routes to build.
- **Hero screenshot** — defines the top of the homepage.
- Original Framer-published HTML (for asset URLs, meta tags, exact copy).

### Asset note
The original assets are hosted on `framerusercontent.com`. **Download them locally**
into `/public` rather than hot-linking Framer's CDN (we don't want a dependency on
Framer infrastructure).

A ready-made **`download-assets.sh`** script is provided that pulls all 55 media
assets (1 video + 54 images) into `./public/images` and `./public/videos`. Run it
once after scaffolding:

```bash
chmod +x download-assets.sh && ./download-assets.sh
```

It gives friendly names to the three key assets:
- **Hero background video** → `public/videos/hero.mp4`
- **Favicon / logo mark** → `public/images/logo-mark.png`
- **OG / social image** → `public/images/og-image.png`

All other images keep their original Framer hash filenames — **rename each to
something descriptive as you wire it into its component** (e.g. a partner logo →
`partner-xyz.svg`). As you build each section, identify which downloaded asset maps to
which slot by cross-referencing the live site's DOM. If any asset 404s when the script
runs, grab the equivalent from the live site's Network tab and note it.

---

## Routes to Build (from the Pages panel)

Build these as App Router routes. Match nav labels to the live site (note: nav groups
some of these under dropdowns — see Navigation below).

| Route | Page |
|---|---|
| `/` | Home |
| `/co-working` | Co-working |
| `/event-space` | Event Space |
| `/meeting-rooms` | Meeting Rooms |
| `/community` | Community |
| `/about-us` | About Us |
| `/event-calendar` | Event Calendar |
| `/newsletter` | Newsletter |
| `/imprint` | Imprint |
| `/privacy-policy` | Privacy Policy |

**Priority:** Build `/` (Home) **first and to the highest fidelity** — it's the most
complex and most important. Then do the Solutions pages (`/co-working`,
`/event-space`, `/meeting-rooms`), then `/community` and `/about-us`, then the simpler
legal/utility pages.

If full content for the secondary pages isn't visible in references, scaffold the page
structure faithfully and use clearly-marked placeholders for missing copy, then ask me.

---

## Design Tokens

### Typography
Two families, self-hosted via `next/font/google`:

- **Unbounded** — primary display/UI font. Weights in use: **400, 500, 600, 700, 800**.
  Used for headings, nav, buttons, body. This is the dominant brand font (note the
  geometric, rounded-but-techy character — it's what gives the site its look).
- **Caveat** — weight **700** only. Used sparingly as a handwritten accent
  (decorative labels / annotations). Do not overuse.

Match the live site's font sizes and line-heights per breakpoint from Figma. The hero
H1 ("Berlin's Home for Web3, AI and Frontier Tech") is a large, tight, multi-line
Unbounded heading in heavy weight.

### Color palette
Pulled from the source. Build these as Tailwind theme tokens:

| Token | Hex | Usage |
|---|---|---|
| `accent` (orange) | `#FF4200` | Primary brand accent / highlights |
| `ink` / near-black | `#000000`, `#101422`, `#181A1C` | Text, dark UI, buttons |
| `paper` / off-white | `#FBF9F8` | Light backgrounds |
| neutral warm grey | `#DDD8D4` | Borders, muted surfaces |
| slate-violet | `#4D4A69`, `#6A6784`, `#626C84` | Secondary text |
| cool grey-blue | `#BFCBDA` | Subtle accents |
| mint | `#B5F7C4` | Soft highlight (sparingly) |
| grey | `#96908D`, `#B2B2B2` | Muted text/icons |

Sample the live site to confirm exact background/text pairings per section.

---

## Key Layout & Component Specs

### Navigation (sticky top bar)
- Pill-shaped, centered nav bar floating over the hero (white rounded container with
  subtle shadow), items separated by thin vertical dividers.
- Items (desktop): **Home | Solutions ▾ | Events ▾ | Berlin Blockchain Festival |
  Community ▾ | About Us**
- Dropdown contents and order (exact):
  - **Solutions** ▾
    1. Work Solutions → `/co-working`
    2. Event Space → `/event-space`
    3. Meeting Rooms → `/meeting-rooms`
  - **Events** ▾
    1. Event Space → `/event-space`
    2. Berlin Blockchain Festival → (festival page/section — link as on live site)
    3. Event Calendar → `/event-calendar`
  - **Community** ▾
    1. w3.hub Community → `/community`
    2. Newsletter → `/newsletter`
- Note: "Berlin Blockchain Festival" appears both as a top-level nav item and inside
  the Events dropdown. Wire both to the same destination as the live site.
- Mobile (390px): collapses to a hamburger → full-screen or slide-down menu. Match
  the live mobile menu behavior.
- Animate dropdowns and the mobile menu with Framer Motion (fade + slight slide,
  short easing — match the live site's feel, which is quick and smooth).

### Hero (homepage)
- **Full-width background video**, autoplaying, muted, looping, `playsInline`, with a
  poster frame for first paint. Video covers the section (`object-fit: cover`).
- Section height: **100vh**.
- Overlay content bottom-left: small `w3.hub` wordmark, then the large H1
  "Berlin's Home for Web3, AI and Frontier Tech".
- Two pill buttons: **"Become a member"** and **"Host an event"**, each black pill with
  a circular arrow icon on the right.
- Likely a subtle scroll-cue / downward animated arrow near the bottom — replicate if
  present on live.
- Ensure text remains legible over video (the live site relies on the video's own
  tones; add a subtle gradient/scrim only if needed for contrast, matching the original
  as closely as possible).

### Homepage sections (in order, from the live site)
1. **Hero** (above)
2. **"Part of the w3.hub Family" / Events** — upcoming events with a "See all events" CTA
3. **"Berlin's Premier Coworking & Event Ecosystem for Web3"** — intro + feature grid:
   *Web3 Native Space*, *Bang For Your Buck*, *Community First*, *Prime Location & Setup*
4. **"Our Custom Solutions tailored to your needs"** — cards for *Become a member*,
   *Office Space*, *Event Space*, *Meeting Rooms*, each with a "Learn more" link
5. **Marquee / scrolling tags** — horizontally scrolling list:
   *Vibessss · Pizza · Hackathons · Community Space · Flowers · Meetups · Hairy Friends ·
   Demo Days · More Pizza · Winners* (animate as an infinite marquee, alternating row
   directions — match live)
6. **"Our House Partners"** — partner logos grid + "Become a house partner" CTA
7. **Community Newsletter sign-up** — heading + subscribe form
8. **Location Details** — Building & Surroundings (3 floors, 500sqm each; built 1905,
   renovated 2022; at Gleisdreieck Park) + Public Transportation (U1, U7 at
   Möckernbrücke; U2, U3 from Gleisdreieck; S1, S2, S25, S26 at Anhalter Bahnhof)
9. **"About the host" / w3.group** — "Fueling Web3 from Berlin" block with
   "Learn about w3.group" CTA
10. **FAQ** — accordion: *What is w3.hub? / Where is w3.hub located? / Who uses w3.hub? /
    What does a membership cost? / Can I book w3.hub for an event? / Who runs w3.hub?*
    (animate expand/collapse with Framer Motion height/opacity)
11. **Footer** — "Berlin's Home of Web3" + link columns (Work, Solutions, Meeting Rooms,
    Community, About Us, Events, Event Calendar, Event Space, Berlin Blockchain Week,
    Companies: w3.group / w3.fund / w3.labs / w3.vision), address
    "Berlin, Möckernstraße 120", "© 2025 w3.hub – All rights reserved", Imprint &
    Privacy Policy links.

Confirm exact section order, copy, and imagery against the live site as you build —
the above is the verified structure but visual details (card styles, image crops,
exact grid columns per breakpoint) come from Figma + live inspection.

### Buttons
- Primary: solid black pill, white Unbounded text, circular arrow icon on the right
  (the arrow sits in its own filled circle). Hover: subtle scale / arrow nudge via
  Framer Motion.

### Animations (Framer Motion) — match the live site's character: smooth, quick, subtle
- Section reveal on scroll (fade + small upward translate, staggered for grids/cards).
- Infinite horizontal marquee for the tags row.
- Nav dropdown + mobile menu transitions.
- FAQ accordion expand/collapse.
- Button hover micro-interactions.
- Hero scroll cue.
Use `whileInView` with `once: true` for scroll reveals; respect
`prefers-reduced-motion` (disable/curtail motion when set).

---

## Responsive Rules

Map the four Figma breakpoints to Tailwind screens and design for each:
- **390px** → mobile (base styles)
- **800px** → tablet
- **1200px** → small desktop
- **1400px** → large desktop (and scale up gracefully beyond 1400)

Match the Figma layout exactly at each width; interpolate fluidly in between. Pay
special attention to: hero (video fill + text sizing), the solutions/feature grids
(column counts change per breakpoint), nav (pill bar → hamburger), and footer columns.

---

## Meta / SEO (from original)

- `<title>`: **w3.hub | Web3, AI and Tech Coworking and Event Space Berlin**
- Meta description: *"w3.hub in Berlin Kreuzberg is a coworking and event space for
  Web3, crypto, blockchain and AI teams. 1,500 sqm factory loft at Gleisdreieck. Book
  a tour today."*
- Open Graph + Twitter card with the OG image (downloaded locally).
- Per-page titles/descriptions via the App Router `metadata` export.
- Favicon from the downloaded logo mark.

---

## Project Structure (suggested)

```
app/
  layout.tsx          # fonts, <html>, global metadata
  page.tsx            # Home
  co-working/page.tsx
  event-space/page.tsx
  meeting-rooms/page.tsx
  community/page.tsx
  about-us/page.tsx
  event-calendar/page.tsx
  newsletter/page.tsx
  imprint/page.tsx
  privacy-policy/page.tsx
components/
  layout/   Navbar.tsx  Footer.tsx  MobileMenu.tsx
  home/     Hero.tsx  EventsSection.tsx  FeatureGrid.tsx  SolutionsCards.tsx
            Marquee.tsx  PartnersSection.tsx  NewsletterSignup.tsx
            LocationDetails.tsx  HostSection.tsx  FaqAccordion.tsx
  ui/       Button.tsx  PillNav.tsx  SectionReveal.tsx (Framer Motion wrappers)
lib/        animations.ts  (shared motion variants & easings)
public/     videos/  images/  fonts(if not using next/font)  logos/
tailwind.config.ts  # design tokens above
```

---

## Definition of Done (per page)

- [ ] Visually matches Figma + live site at 390 / 800 / 1200 / 1400px
- [ ] All assets local (no `framerusercontent.com` references remain)
- [ ] Animations implemented and matching the live feel; reduced-motion respected
- [ ] Real copy (no lorem) — content matches the live site
- [ ] Semantic, accessible HTML (landmarks, alt text, focusable nav/accordion, labels)
- [ ] No TypeScript or console errors; Lighthouse pass (perf/a11y) is a stretch goal
- [ ] Links wired between pages and to the correct anchors/CTAs

---

## First Step

Start by scaffolding the project, wiring up Tailwind with the design tokens and the
two fonts (Unbounded 400–800, Caveat 700), then build the **Navbar + Hero** for the
homepage and show me the result before continuing. Ask me anything ambiguous before
you start coding.
