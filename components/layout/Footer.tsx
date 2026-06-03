import Link from "next/link";

type Item = { label: string; href: string; external?: boolean };
type Column = { heading: string; items: Item[] };

const COLUMNS: Column[] = [
  {
    heading: "Work",
    items: [
      { label: "Work Solutions", href: "/co-working" },
      { label: "Meeting Rooms", href: "/meeting-rooms" },
      { label: "Community", href: "/community" },
      { label: "About Us", href: "/about-us" },
    ],
  },
  {
    heading: "Events",
    items: [
      { label: "Event Calendar", href: "/event-calendar" },
      { label: "Event Space", href: "/event-space" },
      { label: "Berlin Blockchain Week", href: "https://blockchainfestival.berlin/", external: true },
    ],
  },
  {
    heading: "Companies",
    items: [
      { label: "w3.group", href: "https://w3.group", external: true },
      { label: "w3.fund", href: "https://www.w3.fund/", external: true },
      { label: "w3.labs", href: "https://w3labs.xyz", external: true },
      { label: "w3.vision", href: "https://www.w3.vision/", external: true },
    ],
  },
];

const SOCIALS: { label: string; href: string; icon: "x" | "linkedin" }[] = [
  { label: "X (Twitter)", href: "https://x.com/w3_hub", icon: "x" },
  { label: "LinkedIn", href: "https://de.linkedin.com/company/w3-hub", icon: "linkedin" },
];

function FooterLink({ item }: { item: Item }) {
  // Live site: Inter 500 / 14px / 0.01em / #4D4A69
  const className =
    "text-[14px] font-medium leading-5 tracking-[0.01em] text-slate-violet-700 hover:text-ink transition-colors";
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

function SocialIcon({ icon }: { icon: "x" | "linkedin" }) {
  if (icon === "x") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M11.59 8.62 17.2 2.5h-1.33l-4.87 5.31L7.1 2.5H2.6l5.88 8.34L2.6 17.5h1.33l5.14-5.6 4.1 5.6h4.5l-6.1-8.88Zm-1.82 1.98-.6-.83L4.42 3.46h2.04l3.83 5.3.6.83 4.98 6.88h-2.04l-4.06-5.62Z"
          fill="#4D4A69"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d="M5.06 3.5a1.56 1.56 0 1 1-.01 3.12 1.56 1.56 0 0 1 .01-3.12ZM3.7 7.8h2.72v8.7H3.7V7.8Zm4.43 0h2.6v1.19h.04c.36-.69 1.25-1.41 2.57-1.41 2.75 0 3.26 1.81 3.26 4.16v4.76h-2.72v-4.22c0-1.01-.02-2.3-1.4-2.3-1.4 0-1.62 1.1-1.62 2.23v4.29H8.13V7.8Z"
        fill="#4D4A69"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFEFC] border-t border-black/[0.06]">
      <div className="mx-auto w-full max-w-[1152px] px-6 py-10">
        <div className="flex flex-col gap-12">
          {/* Row 1: brand + link columns + socials */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-6">
            <div className="md:w-[556px] flex flex-col gap-6">
              <Link href="/" className="inline-flex items-center" aria-label="w3.hub home">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-wordmark.svg"
                  alt="w3.hub"
                  width={121}
                  height={32}
                  className="h-8 w-auto [filter:brightness(0)]"
                />
              </Link>
              <p className="text-[14px] font-semibold leading-5 text-slate-violet-700">
                Berlin&apos;s Home of Web3
              </p>
            </div>

            <div className="flex-1 md:pl-4 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:flex lg:gap-4">
              {COLUMNS.map((col) => (
                <div key={col.heading} className="flex flex-1 flex-col gap-2">
                  <h4 className="text-[12px] font-medium leading-4 text-slate-violet-500">
                    {col.heading}
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {col.items.map((it) => (
                      <li key={it.label + it.href}>
                        <FooterLink item={it} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-2 flex flex-1 items-start gap-4 sm:col-span-3 lg:col-span-1">
                {SOCIALS.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: address pill + copyright + legal */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-6">
            <div className="md:w-[556px]">
              <div
                className="inline-flex items-center gap-[9px] rounded-[10px] bg-[#FCFCFC] py-[9px] pl-2 pr-3"
                style={{
                  boxShadow:
                    "0px 1px 1px rgba(13, 9, 64, 0.15), inset 0px 1px 0px rgba(255, 255, 255, 0.16)",
                }}
              >
                <span className="relative h-3 w-3 rounded-full bg-[rgba(7,8,37,0.30)]">
                  <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#29A90F] shadow-[0_0_4px_1px_rgba(213,255,65,0.9)]" />
                </span>
                <span className="text-[12px] font-medium leading-4 text-slate-violet-900">
                  Berlin, Möckernstraße 120
                </span>
              </div>
            </div>

            <div className="flex-1 md:pl-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <p className="text-[12px] font-medium leading-4 text-slate-violet-500">
                © 2025 w3.hub - All rights reserved
              </p>
              <ul className="flex items-center gap-6">
                <li>
                  <Link
                    href="/imprint"
                    className="text-[12px] font-medium leading-4 text-slate-violet-500 hover:text-ink transition-colors"
                  >
                    Imprint
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-[12px] font-medium leading-4 text-slate-violet-500 hover:text-ink transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
