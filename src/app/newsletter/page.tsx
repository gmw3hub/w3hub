import type { Metadata } from "next";
import Newsletter from "@/components/sections/Newsletter";
import NewsletterIntro from "@/components/newsletterpage/NewsletterIntro";

export const metadata: Metadata = {
  title: "Newsletter | w3.hub — The Premiere Builder Club",
  description:
    "Sign up for the w3.hub community newsletter. Every week you'll get curated community updates, event alerts and behind-the-scenes insights from Berlin's builder community.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "Newsletter | w3.hub — The Premiere Builder Club",
    description:
      "Sign up for the w3.hub community newsletter — curated community updates, event alerts and behind-the-scenes insights from Berlin's builder community.",
    images: ["/images/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter | w3.hub — The Premiere Builder Club",
    description:
      "Sign up for the w3.hub community newsletter — curated updates from Berlin's builder community.",
    images: ["/images/og-image.png"],
  },
};

export default function NewsletterPage() {
  return (
    <main className="flex flex-1 flex-col">
      <NewsletterIntro />
      <Newsletter />
    </main>
  );
}
