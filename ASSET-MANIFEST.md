# Asset Manifest

All Framer-hash filenames have been replaced with descriptive names and sorted into
topical folders under `public/images/`. Update this file whenever a new asset is
added or moved.

## Folder structure

```
public/
├── videos/
│   └── hero.mp4                  Homepage hero background video
└── images/
    ├── og-image.png              Open Graph / Twitter social share
    ├── logo-mark.png             Favicon + nav logo mark
    ├── logo-w3hub.svg            Inline w3.hub mark (used in Footer)
    ├── logo-wordmark.svg         Hero wordmark
    ├── host-w3group.jpg          About-the-host card image (HostSection)
    │
    ├── partners/                 House-partner logos (PartnersSection + future use)
    ├── marquee/                  Tag tiles for the homepage marquee row
    ├── solutions/                Solution-card photos (member/office/event/meeting × 3)
    ├── features/                 Feature-grid webp doodles + bg pattern
    ├── photos/                   Interior photography (coworking / event / meeting)
    ├── stickers/                 Decorative cartoon stickers (PNG originals)
    ├── logos/                    w3.group / w3.fund / w3.hub wordmark variants
    ├── decor/                    Textures, placeholders, promotional artwork
    └── icons/                    Small UI icons (arrows, paperclip)
```

## Currently referenced in code

| Path | Used in |
|---|---|
| `videos/hero.mp4` | `Hero.tsx` |
| `images/og-image.png` | `app/layout.tsx`, `Hero.tsx` (poster) |
| `images/logo-mark.png` | `app/layout.tsx` (icon), `NewsletterSignup.tsx` |
| `images/logo-w3hub.svg` | `Footer.tsx` |
| `images/logo-wordmark.svg` | `Hero.tsx` |
| `images/host-w3group.jpg` | `HostSection.tsx` |
| `images/partners/{ledger,jagermeister,w3-labs}.png` | `PartnersSection.tsx` |
| `images/marquee/{vibes,pizza,hackathons,community-space,flowers,meetups,hairy-friends,demo-days,more-pizza,winners}.{jpg,png}` | `Marquee.tsx` |
| `images/features/{bg-doodle,building,cactus-slim,flower-agave,paperclip}.webp` | `FeatureGrid.tsx`, `PartnersSection.tsx` |
| `images/solutions/{member,office,event,meeting}-{1,2,3}.webp` | `SolutionsCards.tsx` |

## Not yet wired into code (available for future sections)

### `partners/`
`base.png`, `celestia.png`, `google-cloud.png`, `ledger-small.png`, `near.png`,
`solana.png`, `ton.png`

### `photos/`
`coworking-desk-monitors.png`, `coworking-desk-with-flower.png`,
`coworking-lounge.png`, `coworking-open-floor.jpg`, `community-networking.jpg`,
`event-networking.jpg`, `event-space-chairs.png`, `event-space-charitea.png`,
`meeting-room-glass-door.png`, `meeting-room-glass-wall.png`,
`meeting-room-screen.png`, `office-private-glass-room.png`

### `stickers/`
`black-cat.png`, `cactus-ball.png`, `cactus-saguaro.png`, `cactus-tall.png`,
`flower-red-lotus.png`, `flower-red-lotus-2.png`, `jagermeister-monkey.png`,
`rat-painter.png`

> Note: several of these are the original PNGs corresponding to the optimized
> `features/*.webp` versions already in use (cactus, monkey, rat, paperclip). Prefer
> the webp versions in code; keep the PNGs as source-of-truth backups for now.

### `logos/`
`w3-fund.png`, `w3hub-wordmark.png`, `w3hub-wordmark-blurred.svg`

### `decor/`
`building-facade-3d.png`, `community-alpha-cover.png`, `dark-placeholder.png`,
`texture-graffiti-green.png`, `texture-graffiti-light.jpg`

### `icons/`
`arrow-right.svg`, `chevron-left.svg`, `paperclip.png`
