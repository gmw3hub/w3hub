import type { Metadata } from "next";
import Location from "@/components/sections/Location";
import MeetingHero from "@/components/meetingrooms/MeetingHero";
import MeetingRooms from "@/components/meetingrooms/MeetingRooms";
import VirtualTour from "@/components/meetingrooms/VirtualTour";

export const metadata: Metadata = {
  title: "Rent Meeting Rooms in Berlin Kreuzberg | w3.hub Coworking",
  description:
    "Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120). Bookable for members and guests — ideal for Web3, crypto and AI teams needing a pitch room, board meeting or investor update.",
  openGraph: {
    title: "Rent Meeting Rooms in Berlin Kreuzberg | w3.hub Coworking",
    description:
      "Professional meeting rooms in Berlin Kreuzberg (Möckernstraße 120). Bookable for members and guests — ideal for Web3, crypto and AI teams.",
    images: ["/images/og-image.png"],
    type: "website",
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
