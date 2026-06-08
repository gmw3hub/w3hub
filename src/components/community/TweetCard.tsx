import Image from "next/image";

export type Tweet = {
  name: string;
  handle?: string;
  body: string;
};

function VerifiedMark() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0 text-[#1d9bf0]"
    >
      <path
        fill="currentColor"
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
      />
    </svg>
  );
}

function XLogo() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      className="shrink-0 text-ink"
    >
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

export default function TweetCard({ tweet }: { tweet: Tweet }) {
  const initial = tweet.name.charAt(0).toUpperCase();
  return (
    <article className="group break-inside-avoid rounded-3xl bg-white p-5 shadow-card ring-1 ring-black/10 transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-mint to-[#8FEBA4] font-display text-[16px] font-bold text-ink">
            {initial}
          </span>
          <div className="leading-tight">
            <p className="flex items-center gap-1 font-body text-[15px] font-bold text-ink">
              {tweet.name}
              {tweet.handle ? <VerifiedMark /> : null}
            </p>
            {tweet.handle ? (
              <p className="font-body text-[14px] text-slate-violet-500">
                {tweet.handle}
              </p>
            ) : null}
          </div>
        </div>
        <XLogo />
      </div>

      <p className="mt-3.5 font-body text-[15px] leading-6 text-ink/85">
        {tweet.body}
      </p>

      <div className="mt-4 flex items-center gap-2 border-t border-dotted border-black/15 pt-3">
        <Image
          src="/images/logo-mark.png"
          alt=""
          aria-hidden
          width={16}
          height={16}
          className="h-4 w-4 object-contain opacity-80"
        />
        <span className="font-body text-[13px] font-medium text-slate-violet-500">
          on w3.hub
        </span>
      </div>
    </article>
  );
}
