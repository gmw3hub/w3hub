import Link from "next/link";
import Image from "next/image";

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
      { label: "w3.fund", href: "https://w3.fund", external: true },
      { label: "w3.labs", href: "https://w3.labs", external: true },
      { label: "w3.vision", href: "https://w3.vision", external: true },
    ],
  },
];

function FooterLink({ item }: { item: Item }) {
  const className =
    "text-[14px] font-medium leading-5 tracking-[0.01em] text-white hover:opacity-70 transition-opacity";
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

export default function Footer() {
  return (
    <footer className="w-full bg-ink-900 text-white">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12 py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr,2fr] gap-10 md:gap-16">
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Image
                  src="/images/logo-mark.png"
                  alt="w3.hub"
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </span>
              <span className="font-display text-[18px] font-medium text-white">w3.hub</span>
            </Link>
            <p className="text-[14px] font-semibold leading-5 text-slate-violet-700">
              Berlin&apos;s Home of Web3
            </p>
            <p className="text-[12px] font-medium leading-4 text-slate-violet-900">
              Berlin, Möckernstraße 120
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-10">
            {COLUMNS.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <h4 className="text-[12px] font-medium leading-4 text-slate-violet-500 uppercase tracking-wider">
                  {col.heading}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {col.items.map((it) => (
                    <li key={it.label + it.href}>
                      <FooterLink item={it} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] font-medium leading-4 text-slate-violet-500">
            © 2025 w3.hub – All rights reserved
          </p>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/imprint"
                className="text-[12px] font-medium leading-4 text-slate-violet-500 hover:text-white transition-colors"
              >
                Imprint
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-[12px] font-medium leading-4 text-slate-violet-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
