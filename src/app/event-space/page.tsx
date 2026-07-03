import type { Metadata } from "next";
import EventHero from "@/components/eventspace/EventHero";
import TheVenue from "@/components/eventspace/TheVenue";
import VenueVideo from "@/components/eventspace/VenueVideo";
import EventHighlights from "@/components/eventspace/EventHighlights";
import VirtualWalkthrough from "@/components/eventspace/VirtualWalkthrough";
import ModularEventSpace from "@/components/eventspace/ModularEventSpace";
import EventFeatures from "@/components/eventspace/EventFeatures";
import Location from "@/components/sections/Location";
import UpcomingEvents from "@/components/coworking/UpcomingEvents";

export const metadata: Metadata = {
  title: "Tech Event Space Berlin | 500 sqm Factory Loft | w3.hub",
  description:
    "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. 500 sqm listed factory loft at Gleisdreieck. Get a quote.",
  alternates: { canonical: "/event-space" },
  openGraph: {
    title: "Tech Event Space Berlin | 500 sqm Factory Loft | w3.hub",
    description:
      "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. 500 sqm listed factory loft at Gleisdreieck. Get a quote.",
    url: "https://w3hub.berlin/event-space",
    siteName: "w3.hub",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Event Space Berlin | 500 sqm Factory Loft | w3.hub",
    description:
      "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. 500 sqm listed factory loft at Gleisdreieck. Get a quote.",
    images: ["/images/og-image.png"],
  },
};

export default function EventSpacePage() {
  return (
    <main className="flex flex-1 flex-col">
      <EventHero />
      <TheVenue />
      <VenueVideo />
      <EventHighlights />
      <VirtualWalkthrough />
      <ModularEventSpace />
      <EventFeatures />
      <Location />
      <UpcomingEvents plain />
    </main>
  );
}
