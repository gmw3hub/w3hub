"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Circuit goes live 1 Sep 2026, 11:00 Berlin (CEST, UTC+2) = 09:00 UTC.
const LAUNCH_MS = Date.UTC(2026, 8, 1, 9, 0, 0);
const NOTIFY_URL = "https://form.typeform.com/to/n0ZQue8s";
const STORAGE_KEY = "circuit_launch_dismissed";

type T = { d: number; h: number; m: number; s: number };

function remaining(): T {
  const ms = Math.max(0, LAUNCH_MS - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1000),
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function Tile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex min-w-[58px] flex-col items-center gap-1 rounded-xl bg-paper px-2 py-2.5">
      <span suppressHydrationWarning className="font-display text-[22px] font-bold leading-none text-ink tabular-nums">
        {value}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function CircuitLaunchModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [t, setT] = useState<T>(() => remaining());

  // Decide whether to show: not on the stealth screen, before launch, and not
  // previously dismissed. Open shortly after load so it doesn't fight the
  // first paint.
  useEffect(() => {
    if (pathname?.startsWith("/stealth")) return;
    if (Date.now() >= LAUNCH_MS) return;
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // localStorage unavailable (private mode etc.) — just show it.
    }
    if (dismissed) return;
    const id = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(id);
  }, [pathname]);

  // Tick the countdown and lock body scroll while open.
  useEffect(() => {
    if (!open) return;
    const id = setInterval(() => setT(remaining()), 1000);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearInterval(id);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function close() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="circuit-launch-title"
    >
      {/* backdrop */}
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 cursor-default bg-black/60 backdrop-blur-sm"
      />

      <div className="relative w-[min(92vw,440px)] overflow-hidden rounded-[28px] bg-white p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-paper hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Launching soon
        </div>

        <h2
          id="circuit-launch-title"
          className="mt-4 font-display text-[30px] font-bold leading-tight text-ink"
        >
          Circuit goes live
        </h2>
        <p className="mt-2 text-[15px] leading-6 text-muted">
          September 1, 2026 · 11:00 AM CET
        </p>

        <div className="mt-6 flex items-stretch justify-center gap-2">
          <Tile value={String(t.d)} label="Days" />
          <Tile value={pad(t.h)} label="Hours" />
          <Tile value={pad(t.m)} label="Min" />
          <Tile value={pad(t.s)} label="Sec" />
        </div>

        <a
          href={NOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Get notified
        </a>
        <button
          onClick={close}
          className="mt-3 text-[13px] font-medium text-muted underline-offset-4 transition-colors hover:text-ink hover:underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
