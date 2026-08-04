import type { Metadata } from "next";
import StealthImprint from "@/components/stealth/StealthImprint";

export const metadata: Metadata = {
  title: "Impressum — w3.hub",
  robots: { index: false, follow: false },
};

export default function StealthImprintPage() {
  return <StealthImprint />;
}
