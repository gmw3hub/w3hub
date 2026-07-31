import type { Metadata } from "next";
import StealthScreen from "@/components/stealth/StealthScreen";

export const metadata: Metadata = {
  title: "w3.hub",
  description: "w3.hub is becoming part of something much bigger.",
  robots: { index: false, follow: false },
};

export default function StealthPage() {
  return <StealthScreen />;
}
