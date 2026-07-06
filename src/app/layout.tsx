import type { Metadata } from "next";
import Script from "next/script";
import { Unbounded, Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import ContactStrip from "@/components/layout/ContactStrip";
import Footer from "@/components/layout/Footer";

// Umami analytics — cookieless, privacy-friendly. Loads only when both env
// vars are set (in Vercel), so it's inert until configured.
//   NEXT_PUBLIC_UMAMI_SRC          e.g. https://cloud.umami.is/script.js
//   NEXT_PUBLIC_UMAMI_WEBSITE_ID   the website UUID from the Umami dashboard
const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC;
const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const HOME_TITLE =
  "w3.hub | Innovation & Startup Hub Berlin – AI, Robotics, Quantum & Blockchain";
const HOME_DESCRIPTION =
  "w3.hub is Berlin's innovation & startup hub in Kreuzberg: 2,500 sqm of coworking, private offices and two 500 sqm event lofts for AI, robotics, quantum and blockchain builders. Book a tour.";

export const metadata: Metadata = {
  metadataBase: new URL("https://w3hub.berlin"),
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "https://w3hub.berlin",
    siteName: "w3.hub",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/logo-mark.png",
  },
};

// schema.org LocalBusiness — one organization node reused across the site.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://w3hub.berlin/#organization",
  name: "w3.hub",
  alternateName: "w3hub Berlin – The Premiere Builder Club",
  description:
    "Berlin's innovation & startup hub for AI, robotics, quantum and blockchain. 2,500 sqm of coworking, private offices and two 500 sqm event lofts in Berlin Kreuzberg.",
  url: "https://w3hub.berlin",
  email: "gm@w3hub.berlin",
  telephone: "+4915214912040",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Möckernstraße 120",
    addressLocality: "Berlin",
    postalCode: "10963",
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 52.4989, longitude: 13.3808 },
  sameAs: [
    "https://de.linkedin.com/company/w3-hub",
    "https://www.instagram.com/w3.hub/",
    "https://luma.com/w3hub",
    "https://x.com/w3_hub",
  ],
  foundingDate: "2022",
  areaServed: "Berlin",
  keywords:
    "Startup Hub Berlin, AI Coworking Berlin, Robotics Hub Berlin, Quantum Startup Berlin, Blockchain Event Space Berlin, Tech Event Space Kreuzberg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {UMAMI_SRC && UMAMI_WEBSITE_ID && (
          <Script
            src={UMAMI_SRC}
            data-website-id={UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <Navbar />
        {children}
        <ContactStrip />
        <Footer />
      </body>
    </html>
  );
}
