import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import NewsletterForm from "./NewsletterForm";

export default function Newsletter() {
  return (
    <section className="w-full bg-paper py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1136px] px-5 md:px-8">
        <SectionReveal className="mx-auto max-w-[1040px] rounded-[28px] bg-white ring-1 ring-black/4 shadow-[0_24px_60px_-28px_rgba(16,20,34,0.22)] p-4 md:p-5">
          <div className="grid items-stretch gap-4 md:gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
            <div className="flex min-h-[300px] flex-col justify-between rounded-[20px] bg-linear-to-b from-[#C2F8CF] to-[#8FEBA4] p-7 md:p-8">
              <h3
                className="font-display text-[34px] font-extrabold leading-[0.95] text-ink md:text-[42px]"
                style={{ textShadow: "2px 3px 0 rgba(255,255,255,0.55)" }}
              >
                Community
                <br />
                Alpha
              </h3>

              <div className="mt-8 flex items-center gap-3">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-[14px] bg-linear-to-br from-white to-[#E7E3F6] ring-1 ring-black/6">
                  <Image
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

            <div className="flex flex-col justify-center px-1 py-3 md:px-4">
              <h2 className="font-display text-[24px] font-extrabold leading-[1.12] text-ink md:text-[30px]">
                Sign-Up for Our Community
                <br className="hidden md:block" /> Newsletter
              </h2>

              <div className="mt-4 border-t border-dotted border-black/20" />

              <p className="mt-4 font-body text-[15px] font-medium leading-6 text-muted md:text-[16px]">
                Every week, you&apos;ll receive carefully curated community updates,
                event alerts, and behind-the-scenes insights from Berlin&apos;s builder community.
              </p>

              <NewsletterForm />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
