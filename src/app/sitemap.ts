import type { MetadataRoute } from "next";

const BASE_URL = "https://w3hub.berlin";

// Public routes. Keep in sync with the app/ directory (exclude removed routes).
const ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/co-working", priority: 0.9 },
  { path: "/event-space", priority: 0.9 },
  { path: "/meeting-rooms", priority: 0.8 },
  { path: "/ecosystem-tours", priority: 0.8 },
  { path: "/community", priority: 0.7 },
  { path: "/event-calendar", priority: 0.7 },
  { path: "/newsletter", priority: 0.6 },
  { path: "/imprint", priority: 0.3 },
  { path: "/privacy-policy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
