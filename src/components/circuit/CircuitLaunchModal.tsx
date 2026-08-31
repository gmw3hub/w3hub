"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Circuit goes live 1 Sep 2026, 11:00 Berlin (CEST, UTC+2) = 09:00 UTC.
// Before this the popup teases the launch with a countdown; from this moment
// on it switches to the "w3.hub is now part of Circuit" message.
const LAUNCH_MS = Date.UTC(2026, 8, 1, 9, 0, 0);
const CIRCUIT_URL = "https://circuit.berlin/";

// Separate dismissal keys so a visitor who dismissed the teaser still sees the
// post-launch message once.
const KEY_TEASER = "circuit_launch_dismissed";
const KEY_JOINED = "circuit_joined_dismissed";

type Phase = "teaser" | "joined";
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
  const [phase, setPhase] = useState<Phase | null>(null);
  const [t, setT] = useState<T>(() => remaining());

  // Decide whether/what to show. `?popup=teaser|joined` forces a phase for
  // previewing and ignores the dismissal flag.
  useEffect(() => {
    if (pathname?.startsWith("/stealth")) return;

    const forced = new URLSearchParams(window.location.search).get("popup");
    const p: Phase =
      forced === "teaser" || forced === "joined"
        ? forced
        : Date.now() < LAUNCH_MS
          ? "teaser"
          : "joined";

    if (!forced) {
      const key = p === "teaser" ? KEY_TEASER : KEY_JOINED;
      let dismissed = false;
      try {
        dismissed = localStorage.getItem(key) === "1";
      } catch {
        // localStorage unavailable (private mode etc.) — just show it.
      }
      if (dismissed) return;
    }

    const id = setTimeout(() => setPhase(p), 700);
    return () => clearTimeout(id);
  }, [pathname]);

  // Tick the countdown only while the teaser is showing.
  useEffect(() => {
    if (phase !== "teaser") return;
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, [phase]);

  // Lock body scroll and wire Esc while open.
  useEffect(() => {
    if (!phase) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function close() {
    try {
      localStorage.setItem(phase === "joined" ? KEY_JOINED : KEY_TEASER, "1");
    } catch {
      // ignore
    }
    setPhase(null);
  }

  if (!phase) return null;

  const joined = phase === "joined";

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
          {joined ? "Now live" : "Launching soon"}
        </div>

        {joined ? (
          <>
            <h2
              id="circuit-launch-title"
              className="mt-4 font-display text-[26px] font-bold leading-tight text-ink"
            >
              w3.hub is now part of Circuit
            </h2>
            <p className="mt-3 text-[15px] leading-6 text-muted">
              Everything we build continues at Circuit. Come see what&rsquo;s next.
            </p>
          </>
        ) : (
          <>
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
          </>
        )}

        <a
          href={CIRCUIT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-accent px-6 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          {joined ? "Explore Circuit" : "Visit circuit.berlin"}
          <span aria-hidden>↗</span>
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
