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
  title: "Event Space | w3.hub",
  description:
    "500 sqm factory loft in Berlin Kreuzberg — the leading event location for AI, robotics, quantum and blockchain conferences, hackathons, meetups and demo days.",
  openGraph: {
    title: "Event Space | w3.hub",
    description:
      "500 sqm factory loft in Berlin Kreuzberg — the leading event location for AI, robotics, quantum and blockchain conferences, hackathons, meetups and demo days.",
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
