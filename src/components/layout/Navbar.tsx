"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SmartLink from "@/components/ui/SmartLink";
import { dropdownMotion, mobileMenuMotion } from "@/lib/animations";

// Persistent CTA whose label/target adapts to the current page.
type Cta = { label: string; short: string; href: string };
const DEFAULT_CTA: Cta = {
  label: "Book a tour",
  short: "Book a tour",
  href: "https://cal.com/quinn-w3/15min",
};
const CTA_BY_PATH: Record<string, Cta> = {
  "/co-working": {
    label: "Apply for trial day",
    short: "Trial day",
    href: "https://form.typeform.com/to/qdGDfsSN",
  },
  "/event-space": {
    label: "Request event space",
    short: "Enquire",
    href: "https://form.typeform.com/to/upEoDN4G",
  },
  "/meeting-rooms": {
    label: "Book a room",
    short: "Book a room",
    href: "https://w3hub.cobot.me/book/29341a3ea9eb11778694f3c80983ea8e/resources",
  },
};
const ctaFor = (pathname: string | null): Cta =>
  (pathname && CTA_BY_PATH[pathname]) || DEFAULT_CTA;

type SubItem = { label: string; href: string };
type DropItem = { label: string; href: string; children?: SubItem[] };
type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "menu"; label: string; items: DropItem[] };

const NAV: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "menu",
    label: "Solutions",
    items: [
      {
        label: "Work Solutions",
        href: "/co-working",
        children: [
          { label: "Memberships", href: "/co-working#memberships" },
          { label: "Offices", href: "/co-working#offices" },
          { label: "Virtual Offices", href: "/co-working#virtual-office" },
        ],
      },
      { label: "Meeting Rooms", href: "/meeting-rooms" },
      { label: "Ecosystem Tours", href: "/ecosystem-tours" },
    ],
  },
  {
    type: "menu",
    label: "Events",
    items: [
      { label: "Event Space", href: "/event-space" },
      { label: "Event Calendar", href: "/event-calendar" },
      { label: "Berlin Blockchain Festival", href: "https://blockchainfestival.berlin/" },
    ],
  },
  {
    type: "menu",
    label: "Community",
    items: [
      { label: "w3.hub Community", href: "/community" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
];

function Caret() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      aria-hidden
      className="ml-1.5 opacity-70"
    >
      <path
        d="M2 3.5L5 6.5L8 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DesktopMenu({ items }: { items: DropItem[] }) {
  return (
    <motion.div
      variants={dropdownMotion}
      initial="hidden"
      animate="show"
      exit="exit"
      className="absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 min-w-[220px] rounded-2xl bg-white shadow-[0_12px_40px_-12px_rgba(16,20,34,0.18)] ring-1 ring-black/4 p-2"
    >
      <ul className="flex flex-col">
        {items.map((it) => (
          <li key={it.href + it.label}>
            <SmartLink
              href={it.href}
              className="block rounded-lg px-3 py-2 text-[14px] leading-5 text-ink/85 hover:bg-paper hover:text-ink transition-colors whitespace-nowrap"
            >
              {it.label}
            </SmartLink>
            {it.children && (
              <ul className="mb-1 ml-4 flex flex-col border-l border-black/8 pl-1.5">
                {it.children.map((c) => (
                  <li key={c.href}>
                    <SmartLink
                      href={c.href}
                      className="block rounded-lg px-3 py-1.5 text-[13px] leading-5 text-ink/60 hover:bg-paper hover:text-ink transition-colors whitespace-nowrap"
                    >
                      {c.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const cta = ctaFor(pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-6 pt-4 md:pt-6 flex items-center justify-center gap-4 pointer-events-auto">
        {/* Persistent CTA (desktop, left) */}
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex absolute left-4 md:left-6 items-center rounded-full bg-ink-800 px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_32px_-12px_rgba(16,20,34,0.35)] transition-colors hover:bg-ink"
        >
          {cta.label}
        </a>
        {/* Center: pill nav (desktop) */}
        <nav
          aria-label="Primary"
          className="hidden min-[720px]:flex items-stretch rounded-full bg-white shadow-[0_8px_32px_-12px_rgba(16,20,34,0.22)] ring-1 ring-black/4 px-2 py-1.5 gap-0.5 lg:px-3 lg:py-2 lg:gap-1"
        >
          {NAV.map((item) => {
            if (item.type === "link") {
              return (
                <div key={item.label} className="flex items-stretch">
                  <SmartLink
                    href={item.href}
                    className="px-3 py-1.5 text-[14px] lg:px-4 lg:py-2 lg:text-[15px] font-medium text-ink/85 hover:bg-paper hover:text-ink transition-colors rounded-full"
                  >
                    {item.label}
                  </SmartLink>
                </div>
              );
            }
            const open = openMenu === item.label;
            return (
              <div
                key={item.label}
                className="relative flex items-stretch"
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 text-[14px] lg:px-4 lg:py-2 lg:text-[15px] font-medium text-ink/85 hover:bg-paper hover:text-ink transition-colors rounded-full"
                  aria-haspopup="menu"
                  aria-expanded={open}
                  onFocus={() => setOpenMenu(item.label)}
                >
                  {item.label}
                  <Caret />
                </button>
                <AnimatePresence>
                  {open && <DesktopMenu items={item.items} />}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* CTA + hamburger (mobile only) */}
        <div className="min-[720px]:hidden absolute right-4 top-4 flex items-center gap-2">
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-ink-800 px-4 text-[13px] font-semibold text-white shadow-[0_6px_24px_-8px_rgba(16,20,34,0.3)]"
          >
            {cta.short}
          </a>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-[0_6px_24px_-8px_rgba(16,20,34,0.25)] ring-1 ring-black/4"
          >
            <span className="sr-only">Toggle menu</span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              {mobileOpen ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 6h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M3 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuMotion}
            initial="hidden"
            animate="show"
            exit="exit"
            className="lg:hidden mx-auto mt-3 max-w-[1400px] px-4 md:px-6 pointer-events-auto"
          >
            <div className="rounded-3xl bg-white shadow-[0_18px_48px_-16px_rgba(16,20,34,0.25)] ring-1 ring-black/4 p-4">
              <ul className="flex flex-col">
                {NAV.flatMap((item) =>
                  item.type === "link"
                    ? [
                        <li key={item.label}>
                          <SmartLink
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-3 text-[15px] font-medium text-ink"
                          >
                            {item.label}
                          </SmartLink>
                        </li>,
                      ]
                    : [
                        <li
                          key={item.label + "-h"}
                          className="px-3 pt-3 pb-1 text-[11px] uppercase tracking-[0.08em] text-slate-violet-500"
                        >
                          {item.label}
                        </li>,
                        ...item.items.map((sub) => (
                          <li key={item.label + sub.href + sub.label}>
                            <SmartLink
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 text-[15px] text-ink/85"
                            >
                              {sub.label}
                            </SmartLink>
                            {sub.children && (
                              <ul className="ml-4 flex flex-col border-l border-black/8 pl-1.5">
                                {sub.children.map((c) => (
                                  <li key={c.href}>
                                    <SmartLink
                                      href={c.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block rounded-lg px-3 py-2 text-[14px] text-ink/60"
                                    >
                                      {c.label}
                                    </SmartLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        )),
                      ],
                )}
                <li className="pt-3">
                  <Link
                    href="/co-working"
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex w-full justify-center items-center rounded-full bg-ink text-white text-[15px] font-medium px-4 py-3"
                  >
                    Become a member
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
