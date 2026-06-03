# START HERE — w3.hub Rebuild Starter Kit

This folder contains everything needed to kick off the rebuild of **w3hub.berlin** in
a fresh **Claude Code** session. Follow the steps below in your terminal.

## What's in this folder

- **`CLAUDE.md`** — the full build brief. Claude Code auto-reads a `CLAUDE.md` in the
  project root on startup, so this becomes its standing instructions for the whole project.
- **`download-assets.sh`** — downloads all 55 site assets (hero video + images) from
  Framer's CDN into `public/`.
- **`ASSET-MANIFEST.md`** — a checklist Claude Code fills in to map each downloaded
  image to the component that uses it.
- **`README.md`** — this file.

## Before you start — prerequisites

1. **Node.js 18+** installed (`node -v` to check).
2. **Claude Code** installed. If not:
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```
   (Verify the current install method / package name in the Claude Code docs if this
   command errors — installation details can change.)
3. **Your 4 Figma dev-mode exports** (1400 / 1200 / 800 / 390px) ready to drop in.

## Step-by-step

### 1. Create an empty project folder and move this kit into it
```bash
mkdir w3hub && cd w3hub
# copy CLAUDE.md, download-assets.sh, ASSET-MANIFEST.md, README.md into here
```

### 2. Add your Figma exports
Create a `design/` folder and drop your four breakpoint exports in, named clearly:
```bash
mkdir design
# design/figma-1400.<ext>
# design/figma-1200.<ext>
# design/figma-800.<ext>
# design/figma-390.<ext>
```
(If the export is a folder of HTML/CSS/assets per breakpoint, put each in
`design/1400/`, `design/1200/`, etc.)

### 3. Download the site assets
```bash
chmod +x download-assets.sh
./download-assets.sh
```
This creates `public/images/` and `public/videos/` and fills them. Safe to re-run.
**Do this early** — Framer CDN hashes can rotate if the site is republished.

> Note: the script writes into `./public`, which doesn't exist yet until Claude Code
> scaffolds Next.js. That's fine — the script creates `public/` itself. The Next.js
> scaffold in the next step will use this same `public/` folder.

### 4. Start Claude Code
```bash
claude
```
Then give it this first message:

> Read CLAUDE.md — it's the full brief for this project. Also look at the Figma
> exports in `design/` and the already-downloaded assets in `public/`. Then follow
> the "How to Work" process: scaffold the Next.js + Tailwind + Framer Motion project
> first (using the existing `public/` folder), wire up the fonts and design tokens,
> and build the **Navbar + Hero** for the homepage. Show me the result and ask me
> anything ambiguous before continuing. As you identify what each image in `public/`
> is for, update ASSET-MANIFEST.md and rename files descriptively.

### 5. Iterate
Claude Code will build section by section. After each, run the dev server it sets up
(usually `npm run dev`) and compare against:
- the live site: https://w3hub.berlin/
- your Figma frames at each breakpoint

Tell it precisely what's off ("hero H1 too small at 1400px", "card gap should be
tighter on mobile") and it'll correct. Pixel-perfect comes from iteration, not the
first pass.

## Tips

- Keep `CLAUDE.md` in the **project root** so it's always in context.
- If a session gets long, start a new Claude Code session — `CLAUDE.md` reloads
  automatically, so context is preserved across sessions.
- Build order is set in the brief: **Home first** (highest fidelity), then Solutions
  pages, then Community/About, then the legal/utility pages.
- The two things you'll need to confirm yourself against the live site / Figma:
  per-breakpoint grid column counts, and exact card styling. Everything else is
  specified in `CLAUDE.md`.

You're set. Good luck!.
