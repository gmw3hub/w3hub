"use client";

import { useState } from "react";
import ArrowCircle from "@/components/ui/ArrowCircle";
import { Input } from "@/components/ui/input";

const WEBHOOK_URL = "https://hook.eu1.make.com/8k2nrs83id1yo9pal2ruqiafqgi7f6q7";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
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
    <>
      <form
        onSubmit={onSubmit}
        className="mt-6 flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:rounded-full sm:bg-paper sm:p-1.5 sm:ring-1 sm:ring-black/6 sm:outline-none sm:transition-[color,box-shadow] sm:focus-within:ring-[3px] sm:focus-within:ring-mint"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email Address
        </label>
        <Input
          id="newsletter-email"
          type="email"
          required
          variant="pill"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Email Address"
          disabled={status === "success"}
          aria-describedby="newsletter-status"
          className="flex-1 sm:bg-transparent sm:ring-0 sm:focus-visible:ring-0"
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

      <div id="newsletter-status" aria-live="polite" className="min-h-[20px]">
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
    </>
  );
}
