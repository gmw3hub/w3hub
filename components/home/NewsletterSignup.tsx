"use client";

import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";
import ArrowCircle from "@/components/ui/ArrowCircle";

const WEBHOOK_URL = "https://hook.eu1.make.com/8k2nrs83id1yo9pal2ruqiafqgi7f6q7";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "w3hub.berlin – Community Newsletter",
        }),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "loading";

  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] px-5">
        <SectionReveal className="mx-auto max-w-[1040px] rounded-[28px] bg-white ring-1 ring-black/[0.04] shadow-[0_24px_60px_-28px_rgba(16,20,34,0.22)] p-4 md:p-5">
          <div className="grid items-stretch gap-4 md:gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
            {/* Left: green "Community Alpha" panel */}
            <div className="flex min-h-[300px] flex-col justify-between rounded-[20px] bg-gradient-to-b from-[#C2F8CF] to-[#8FEBA4] p-7 md:p-8">
              <h3
                className="font-display text-[34px] font-extrabold leading-[0.95] text-ink md:text-[42px]"
                style={{ textShadow: "2px 3px 0 rgba(255,255,255,0.55)" }}
              >
                Community
                <br />
                Alpha
              </h3>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br from-white to-[#E7E3F6] ring-1 ring-black/[0.06]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-mark.png"
                    alt="w3.hub"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <div className="leading-tight">
                  <p className="text-[13px] font-medium text-ink/70">written by</p>
                  <p className="text-[15px] font-bold text-ink">w3.hub Intern</p>
                </div>
              </div>
            </div>

            {/* Right: heading + copy + form */}
            <div className="flex flex-col justify-center px-1 py-3 md:px-4">
              <h2 className="font-display text-[24px] font-extrabold leading-[1.12] text-ink md:text-[30px]">
                Sign-Up for Our Community
                <br className="hidden md:block" /> Newsletter
              </h2>

              <div className="mt-4 border-t border-dotted border-black/20" />

              <p className="mt-4 font-body text-[15px] font-medium leading-6 text-muted md:text-[16px]">
                Every week, you&apos;ll receive carefully curated community updates,
                event alerts, and behind-the-scenes insights from the home of Web3.
              </p>

              <form
                onSubmit={onSubmit}
                className="mt-6 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-paper sm:p-1.5 sm:ring-1 sm:ring-black/[0.06]"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="Email Address"
                  disabled={status === "success"}
                  className="flex-1 rounded-full bg-paper px-5 py-3 text-[16px] text-ink ring-1 ring-black/[0.06] placeholder:text-black/45 focus:outline-none focus:ring-2 focus:ring-ink/30 sm:bg-transparent sm:ring-0 sm:focus:ring-0"
                />
                <button
                  type="submit"
                  disabled={submitting || status === "success"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink py-2 pl-6 pr-2 text-[16px] font-medium leading-5 text-white disabled:opacity-70"
                >
                  <span>
                    {status === "success"
                      ? "Subscribed"
                      : submitting
                        ? "Subscribing…"
                        : "Subscribe"}
                  </span>
                  <ArrowCircle size={28} />
                </button>
              </form>

              <div aria-live="polite" className="min-h-[20px]">
                {status === "success" && (
                  <p className="mt-2 text-[13px] font-medium text-[#1f9e0c]">
                    Thanks for subscribing! Check your inbox to confirm.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-2 text-[13px] font-medium text-accent">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
