"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// Countdown target: 28 Aug 2026, 19:00 Berlin (CEST, UTC+2) = 17:00 UTC.
const TARGET_MS = Date.UTC(2026, 7, 28, 17, 0, 0);
const TYPEFORM = "https://form.typeform.com/to/n0ZQue8s";

type T = { d: number; h: number; m: number; s: number };

function remaining(): T {
  const ms = Math.max(0, TARGET_MS - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

const NUM =
  "font-mono text-[56px] font-bold leading-none tabular-nums text-[#ff2e2e] [text-shadow:0_0_22px_rgba(255,46,46,0.55),0_0_4px_rgba(255,46,46,0.9)] sm:text-[58px] md:text-[84px]";
// Separators only show in the sm+ inline row; on mobile the units form a 2x2 grid.
const SEP =
  "hidden font-mono text-[58px] font-bold leading-none text-[#ff2e2e]/35 sm:block md:text-[84px]";

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <span suppressHydrationWarning className={NUM}>
        {value}
      </span>
      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.3em] text-[#46f89a]/45 sm:text-[11px] sm:tracking-[0.35em]">
        {label}
      </span>
    </div>
  );
}

export default function StealthScreen() {
  const [t, setT] = useState<T>(() => remaining());

  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    document.body.style.overflow = "hidden";
    return () => {
      clearInterval(id);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-12 overflow-hidden bg-black px-6 text-center md:gap-16">
      {/* scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* red glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52% 42% at 50% 42%, rgba(255,46,46,0.11), rgba(0,0,0,0) 70%)",
        }}
      />

      {/* escape hatch to the previous site (drops the /hidden preview cookie) */}
      <a
        href="/hidden"
        className="group absolute right-4 top-4 inline-flex items-center font-mono text-[12px] tracking-wide text-[#46f89a]/55 transition-colors hover:text-[#46f89a] sm:right-6 sm:top-6 sm:text-[13px]"
      >
        <span className="opacity-60 transition-opacity group-hover:opacity-100">&gt;</span>
        <span className="ml-1.5 underline-offset-4 group-hover:underline">
          enter legacy site
        </span>
        <span
          aria-hidden
          className="ml-1 inline-block animate-[blink_1.1s_step-end_infinite] motion-reduce:animate-none"
        >
          ▮
        </span>
      </a>

      <div className="relative grid grid-cols-2 justify-items-center gap-x-12 gap-y-8 sm:flex sm:items-start sm:gap-7 md:gap-10">
        <Unit value={String(t.d)} label="Days" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.h)} label="Hours" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.m)} label="Minutes" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.s)} label="Seconds" />
      </div>

      <p className="relative max-w-[640px] font-mono text-[16px] leading-8 text-[#46f89a] sm:text-[19px]">
        <span className="opacity-55">&gt; </span>
        w3.hub is transitioning into{" "}
        <span className="whitespace-nowrap text-[#ff2e2e] [text-shadow:0_0_10px_rgba(255,46,46,0.6)]">
          [
          <span
            role="img"
            aria-label="redacted"
            className="mx-[2px] inline-block h-[0.92em] w-[7ch] align-middle rounded-[2px] bg-[#0b0b0b] shadow-[inset_0_0_0_1px_rgba(255,46,46,0.4),0_0_12px_rgba(255,46,46,0.28)]"
          />
          ]
        </span>
        <span
          aria-hidden
          className="ml-1 inline-block animate-[blink_1.1s_step-end_infinite] motion-reduce:animate-none"
        >
          ▮
        </span>
      </p>

      <a
        href={TYPEFORM}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center rounded-md border border-[#46f89a]/70 px-8 py-3.5 font-mono text-[15px] font-semibold tracking-wide text-[#46f89a] transition-colors hover:bg-[#46f89a] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#46f89a]"
      >
        Ship happens
      </a>

      <Link
        href="/stealth/imprint"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[11px] tracking-wide text-[#46f89a]/40 underline-offset-4 transition-colors hover:text-[#46f89a]/75 hover:underline"
      >
        Impressum
      </Link>
    </div>
  );
}
