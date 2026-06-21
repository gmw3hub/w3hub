import Image from "next/image";

type Logo = { src: string; alt: string };

const LOGOS: Logo[] = [
  { src: "/images/logos/w3-fund.webp", alt: "w3.fund" },
  { src: "/images/partners/near.webp", alt: "NEAR" },
  { src: "/images/partners/google-cloud.webp", alt: "Google Cloud" },
  { src: "/images/partners/solana.webp", alt: "Solana" },
  { src: "/images/partners/w3-labs.webp", alt: "w3.labs" },
  { src: "/images/partners/base.webp", alt: "Base" },
  { src: "/images/partners/celestia.webp", alt: "Celestia" },
  { src: "/images/partners/ton.webp", alt: "TON" },
  { src: "/images/partners/ledger.webp", alt: "Ledger" },
];

function Track() {
  // Duplicated once for a seamless -50% loop (marquee-x keyframe in globals.css).
  const items = [...LOGOS, ...LOGOS];
  return (
    <div
      className="flex w-max items-center gap-16 md:gap-24"
      style={{ animation: "marquee-x 40s linear infinite" }}
    >
      {items.map((logo, i) => (
        <Image
          key={logo.alt + i}
          src={logo.src}
          alt={logo.alt}
          width={180}
          height={48}
          className="h-7 w-auto object-contain opacity-80 md:h-8"
        />
      ))}
    </div>
  );
}

export default function PartnerMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-paper py-10 md:py-12">
      <Track />
    </section>
  );
}
