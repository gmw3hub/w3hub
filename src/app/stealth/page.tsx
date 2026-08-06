import type { Metadata } from "next";
import StealthScreen from "@/components/stealth/StealthScreen";

const OG_DESCRIPTION =
  "w3.hub is transitioning into [redacted]. Something much bigger — 28.08.2026.";

export const metadata: Metadata = {
  title: "w3.hub",
  description: OG_DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: {
    title: "w3.hub",
    description: OG_DESCRIPTION,
    url: "https://w3hub.berlin",
    siteName: "w3.hub",
    type: "website",
    images: [{ url: "/images/stealth-og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "w3.hub",
    description: OG_DESCRIPTION,
    images: ["/images/stealth-og.png"],
  },
};

export default function StealthPage() {
  return <StealthScreen />;
}
