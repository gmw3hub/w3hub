import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://w3hub.berlin"),
  title: "w3.hub | Web3, AI and Tech Coworking and Event Space Berlin",
  description:
    "w3.hub in Berlin Kreuzberg is a coworking and event space for Web3, crypto, blockchain and AI teams. 1,500 sqm factory loft at Gleisdreieck. Book a tour today.",
  openGraph: {
    title: "w3.hub | Web3, AI and Tech Coworking and Event Space Berlin",
    description:
      "w3.hub in Berlin Kreuzberg is a coworking and event space for Web3, crypto, blockchain and AI teams. 1,500 sqm factory loft at Gleisdreieck.",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "w3.hub | Web3, AI and Tech Coworking and Event Space Berlin",
    description:
      "w3.hub in Berlin Kreuzberg is a coworking and event space for Web3, crypto, blockchain and AI teams.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/images/logo-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
