import type { Metadata } from "next";
import Location from "@/components/sections/Location";
import MeetingHero from "@/components/meetingrooms/MeetingHero";
import MeetingRooms from "@/components/meetingrooms/MeetingRooms";
import VirtualTour from "@/components/meetingrooms/VirtualTour";

export const metadata: Metadata = {
  title: "Rent Meeting Rooms in Berlin Kreuzberg | w3.hub",
  description:
    "Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120). Book by the day as member or guest. Ideal for pitches, board meetings and workshops.",
  alternates: { canonical: "/meeting-rooms" },
  openGraph: {
    title: "Rent Meeting Rooms in Berlin Kreuzberg | w3.hub",
    description:
      "Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120). Book by the day as member or guest. Ideal for pitches, board meetings and workshops.",
    url: "https://w3hub.berlin/meeting-rooms",
    siteName: "w3.hub",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Meeting Rooms in Berlin Kreuzberg | w3.hub",
    description:
      "Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120). Book by the day as member or guest. Ideal for pitches, board meetings and workshops.",
    images: ["/images/og-image.png"],
  },
};

export default function MeetingRoomsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <MeetingHero />
      <MeetingRooms />
      <Location />
      <VirtualTour />
    </main>
  );
}
