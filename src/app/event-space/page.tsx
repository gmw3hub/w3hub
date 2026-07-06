import type { Metadata } from "next";
import EventHero from "@/components/eventspace/EventHero";
import AnswerIntro from "@/components/sections/AnswerIntro";
import TheVenue from "@/components/eventspace/TheVenue";
import VenueVideo from "@/components/eventspace/VenueVideo";
import EventHighlights from "@/components/eventspace/EventHighlights";
import VirtualWalkthrough from "@/components/eventspace/VirtualWalkthrough";
import ModularEventSpace from "@/components/eventspace/ModularEventSpace";
import EventFeatures from "@/components/eventspace/EventFeatures";
import EventClients from "@/components/eventspace/EventClients";
import EventPackages from "@/components/eventspace/EventPackages";
import EventFaq from "@/components/eventspace/EventFaq";
import EventCrossSell from "@/components/eventspace/EventCrossSell";
import Location from "@/components/sections/Location";
import UpcomingEvents from "@/components/coworking/UpcomingEvents";

// schema.org EventVenue for the event space, linked to the LocalBusiness org.
const EVENT_VENUE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "w3.hub Event Space",
  url: "https://w3hub.berlin/event-space",
  maximumAttendeeCapacity: 250,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Möckernstraße 120",
    addressLocality: "Berlin",
    postalCode: "10963",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.4989, longitude: 13.3808 },
  isPartOf: { "@id": "https://w3hub.berlin/#organization" },
};

export const metadata: Metadata = {
  title: "Tech Event Space Berlin | Factory Loft, up to 250 Guests | w3.hub",
  description:
    "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. Two 500 sqm listed factory lofts at Gleisdreieck, up to 250 guests. Get a quote.",
  alternates: { canonical: "/event-space" },
  openGraph: {
    title: "Tech Event Space Berlin | Factory Loft, up to 250 Guests | w3.hub",
    description:
      "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. Two 500 sqm listed factory lofts at Gleisdreieck, up to 250 guests. Get a quote.",
    url: "https://w3hub.berlin/event-space",
    siteName: "w3.hub",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Event Space Berlin | Factory Loft, up to 250 Guests | w3.hub",
    description:
      "Event location for AI, robotics, quantum and blockchain conferences, hackathons and meetups in Berlin Kreuzberg. Two 500 sqm listed factory lofts at Gleisdreieck, up to 250 guests. Get a quote.",
    images: ["/images/og-image.png"],
  },
};

export default function EventSpacePage() {
  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_VENUE_JSON_LD) }}
      />
      <EventHero />
      <AnswerIntro
        text="The w3.hub event space in Berlin Kreuzberg offers two 500 sqm lofts for up to 250 guests standing or 100 seated, with an in-house events team, bar and kitchen and a full AV setup. Built for AI, robotics, quantum and blockchain conferences, hackathons and meetups."
        amenities={["av", "team", "coffee", "rooms"]}
      />
      <EventClients />
      <TheVenue />
      <VenueVideo />
      <EventHighlights />
      <VirtualWalkthrough />
      <ModularEventSpace />
      <EventFeatures />
      <EventPackages />
      <EventFaq />
      <EventCrossSell />
      <Location />
      <UpcomingEvents plain />
    </main>
  );
}
