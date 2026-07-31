"use client";

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
const SEP =
  "font-display text-[44px] font-extrabold leading-none text-white/25 sm:text-[64px] md:text-[80px]";

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        suppressHydrationWarning
        className="font-display text-[44px] font-extrabold leading-none tabular-nums text-white sm:text-[64px] md:text-[80px]"
      >
        {value}
      </span>
      <span className="font-body text-[11px] font-medium uppercase tracking-[0.22em] text-white/40 sm:text-[12px]">
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
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-14 overflow-hidden bg-black px-6 text-center md:gap-16">
      <div className="flex items-start gap-5 sm:gap-8 md:gap-12">
        <Unit value={String(t.d)} label="Days" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.h)} label="Hours" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.m)} label="Minutes" />
        <span className={SEP}>:</span>
        <Unit value={pad(t.s)} label="Seconds" />
      </div>

      <p className="max-w-[680px] font-body text-[18px] font-medium leading-8 text-white/85 sm:text-[22px]">
        w3.hub is becoming part of something much bigger
      </p>

      <a
        href={TYPEFORM}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-black transition-colors hover:bg-white/85"
      >
        Ship happens
      </a>
    </div>
  );
}
