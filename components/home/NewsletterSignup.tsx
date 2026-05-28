"use client";

import { useState } from "react";
import SectionReveal from "@/components/ui/SectionReveal";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to actual newsletter backend (Beehiiv / Mailchimp etc.)
    setSubmitted(true);
  }

  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8 lg:px-12">
        <SectionReveal className="mx-auto max-w-[920px] rounded-3xl bg-white ring-1 ring-black/[0.04] shadow-[0_12px_40px_-20px_rgba(16,20,34,0.18)] p-8 md:p-12 lg:p-14 grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-display font-extrabold text-ink text-[22px] md:text-[24px] leading-[1.15] md:leading-8">
              Sign-Up for Our Community<br className="hidden md:block" /> Newsletter
            </h2>
            <p className="mt-3 font-body text-[15px] md:text-[16px] leading-6 font-medium text-muted max-w-[58ch]">
              Every week, you&apos;ll receive carefully curated community updates, event alerts, and behind-the-scenes insights from the home of Web3.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="w-full lg:w-[420px] flex flex-col sm:flex-row items-stretch gap-2 rounded-full sm:bg-paper sm:p-1.5 sm:ring-1 sm:ring-black/[0.06]"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 rounded-full sm:rounded-full bg-paper sm:bg-transparent ring-1 ring-black/[0.06] sm:ring-0 px-5 py-3 text-[16px] text-ink placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-ink/30"
              disabled={submitted}
            />
            <button
              type="submit"
              disabled={submitted}
              className="rounded-full bg-ink text-white text-[16px] font-medium leading-[19.2px] px-6 py-3 hover:bg-ink-800 transition-colors disabled:opacity-60"
            >
              {submitted ? "Subscribed" : "Subscribe"}
            </button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}
