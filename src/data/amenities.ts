// Amenity data, maintained in one place and reused across pages.
// icon = key mapped to an inline SVG in the rendering component.
export type Amenity = { key: string; title: string; desc: string };

export const AMENITIES: Amenity[] = [
  { key: "wifi", title: "Fast fiber internet", desc: "Fiber connection throughout the building." },
  { key: "clock", title: "24/7 access", desc: "Round-the-clock building access for Pro members." },
  { key: "av", title: "High-end AV setup", desc: "Stage, sound, screens and streaming-ready tech for events." },
  { key: "team", title: "In-house events team", desc: "Planning, setup and support included with the venue." },
  { key: "rooms", title: "Meeting rooms", desc: "Bookable by the hour or day, for members and guests." },
  { key: "desk", title: "Ergonomic workstations", desc: "Proper desks, proper chairs, fast internet." },
  { key: "coffee", title: "Kitchen, coffee & snacks", desc: "Community kitchen with free coffee, tea and snacks." },
  { key: "booth", title: "Phone & focus booths", desc: "Quiet booths for calls and deep work." },
  { key: "bike", title: "Showers & bike parking", desc: "Showers on site, plenty of bike parking out front." },
  { key: "access", title: "Step-free access", desc: "Accessible entry throughout (no on-site car parking)." },
  { key: "mail", title: "Business address & printing", desc: "Company registration, mail service and on-site printing." },
  { key: "roaming", title: "Global roaming", desc: "Work from betahaus locations 2× per month (Pro)." },
];

// Per-page highlight rows: the four most relevant amenity keys per offer.
export const AMENITY_HIGHLIGHTS: Record<string, string[]> = {
  coworking: ["clock", "desk", "rooms", "roaming"],
  events: ["av", "team", "coffee", "rooms"],
  meetingrooms: ["av", "rooms", "coffee", "access"],
};
