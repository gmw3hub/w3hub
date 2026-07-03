import Image from "next/image";
import Link from "next/link";
import SmartLink from "@/components/ui/SmartLink";

type Item = { label: string; href: string };
type Column = { heading: string; items: Item[] };

const COLUMNS: Column[] = [
  {
    heading: "Work",
    items: [
      { label: "Work Solutions", href: "/co-working" },
      { label: "Meeting Rooms", href: "/meeting-rooms" },
      { label: "Ecosystem Tours", href: "/ecosystem-tours" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    heading: "Events",
    items: [
      { label: "Event Calendar", href: "/event-calendar" },
      { label: "Event Space", href: "/event-space" },
      { label: "Berlin Blockchain Week", href: "https://blockchainfestival.berlin/" },
    ],
  },
  {
    heading: "Companies",
    items: [
      { label: "w3.group", href: "https://w3.group" },
    ],
  },
];

const SOCIALS: { label: string; href: string; icon: "x" | "linkedin" }[] = [
  { label: "X (Twitter)", href: "https://x.com/w3_hub", icon: "x" },
  { label: "LinkedIn", href: "https://de.linkedin.com/company/w3-hub", icon: "linkedin" },
];

const FOOTER_LINK_CLS =
  "text-[14px] font-medium leading-5 tracking-[0.01em] text-slate-violet-700 hover:text-ink transition-colors";

function SocialIcon({ icon }: { icon: "x" | "linkedin" }) {
  if (icon === "x") {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.70763 11.194L3.89062 16.667M15.6306 3.33301L11.0996 8.48001M7.99963 4.00201C7.84863 3.77901 7.59663 3.64601 7.32763 3.64601H4.28962C4.16962 3.64601 4.05963 3.71301 4.00363 3.81901C3.94763 3.92501 3.95462 4.05301 4.02162 4.15201L12.0746 16.025C12.2256 16.247 12.4766 16.381 12.7456 16.381H15.7836C15.9036 16.381 16.0146 16.314 16.0706 16.208C16.1266 16.102 16.1196 15.974 16.0526 15.874L7.99963 4.00201Z"
          stroke="#4D4A69"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.1823 7.81737C14.6033 7.63337 15.9303 8.19138 16.6003 9.51737C17.0683 10.4454 17.0773 11.4474 17.0833 12.4594V16.6884C17.0833 16.9054 16.9063 17.0824 16.6883 17.0824C15.9703 17.0844 15.2983 17.0824 14.5793 17.0824C14.3603 17.0834 14.1833 16.9064 14.1823 16.6884C14.1803 15.1464 14.1823 13.9434 14.1823 12.4024C14.1833 12.2724 14.1613 12.1424 14.1523 12.0124C13.8733 10.1214 11.2293 10.1144 11.0263 11.9344C10.9963 12.1384 11.0073 12.3444 11.0053 12.5504C11.0053 14.0424 11.0073 15.1964 11.0053 16.6884C11.0053 16.7934 10.9633 16.8934 10.8893 16.9684C10.8143 17.0424 10.7133 17.0844 10.6083 17.0834H8.46732C8.36132 17.0844 8.26032 17.0424 8.18632 16.9674C8.11132 16.8924 8.07032 16.7914 8.07032 16.6864C8.07832 13.9194 8.11232 11.1614 8.07532 8.39437C8.07432 8.28837 8.11532 8.18537 8.19032 8.11037C8.26432 8.03437 8.36632 7.99237 8.47332 7.99237H10.6093C10.8283 7.99237 11.0053 8.17037 11.0053 8.38837V9.12437C11.5053 8.33837 12.2473 7.94937 13.1823 7.81737ZM3.02832 8.38837C3.02832 8.16937 3.20632 7.99237 3.42432 7.99237H5.57832C5.79732 7.99237 5.97432 8.16937 5.97432 8.38837C5.97432 11.1554 5.97632 13.9214 5.97332 16.6884C5.97332 16.7934 5.93232 16.8934 5.85732 16.9684C5.78332 17.0424 5.68232 17.0844 5.57732 17.0834H3.42732C3.32232 17.0844 3.22132 17.0424 3.14632 16.9684C3.07232 16.8934 3.03032 16.7934 3.03032 16.6884C3.02732 13.9214 3.03032 11.1544 3.02832 8.38837Z"
        stroke="#4D4A69"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91699 4.50199C2.91699 3.62599 3.62599 2.91699 4.50199 2.91699C5.37699 2.91699 6.08699 3.62599 6.08699 4.50199C6.08699 5.37699 5.37699 6.08699 4.50199 6.08699C3.62599 6.08699 2.91699 5.37699 2.91699 4.50199Z"
        stroke="#4D4A69"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFEFC] border-t border-black/6">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8 lg:px-12 py-10">
        <div className="flex flex-col gap-12">
          {/* Row 1: brand + link columns + socials */}
          <div className="flex flex-col gap-10 md:flex-row md:gap-6">
            <div className="md:w-[556px] flex flex-col gap-6">
              <Link href="/" className="inline-flex items-center" aria-label="w3.hub home">
                <Image
                  src="/images/logo-w3hub.svg"
                  alt="w3.hub"
                  width={137}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-[14px] font-semibold leading-5 text-slate-violet-700">
                The Premiere Builder Club
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
                        <SmartLink href={it.href} className={FOOTER_LINK_CLS}>
                          {it.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-2 flex flex-1 items-start gap-4 sm:col-span-3 lg:col-span-1 lg:justify-end">
                {SOCIALS.map((s) => (
                  <SmartLink
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <SocialIcon icon={s.icon} />
                  </SmartLink>
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
