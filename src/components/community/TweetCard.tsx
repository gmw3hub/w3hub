import Image from "next/image";

export type Tweet = {
  name: string;
  handle?: string;
  body: string;
  timestamp?: string;
  likes?: number;
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

function HeartIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0"
    >
      <path
        fill="#f91880"
        d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91z"
      />
    </svg>
  );
}

function ReplyIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0 text-slate-violet-500"
    >
      <path
        fill="currentColor"
        d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="shrink-0 text-slate-violet-500"
    >
      <path
        fill="currentColor"
        d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 11.3 8.46l1.41-1.41c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24l-1.41 1.41 1.41 1.42 1.41-1.42c1.96-1.95 1.96-5.11 0-7.06zm-2.12 3.53L8.83 16.58l-1.41-1.41 7.41-7.41 1.41 1.41zM7.05 14.12l-1.41 1.41c-1.17 1.17-3.07 1.17-4.24 0-1.17-1.17-1.17-3.07 0-4.24l1.41-1.41L1.4 8.46-.02 9.88c-1.95 1.95-1.95 5.11 0 7.06 1.96 1.96 5.12 1.96 7.07 0l1.41-1.41z"
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

      {tweet.timestamp ? (
        <p className="mt-3 font-body text-[13px] text-slate-violet-500">
          {tweet.timestamp}
        </p>
      ) : null}

      <div className="mt-3 flex items-center gap-5 border-t border-dotted border-black/15 pt-3 text-[13px] font-medium text-slate-violet-500">
        <span className="inline-flex items-center gap-1.5">
          <HeartIcon />
          <span>{tweet.likes ?? 0}</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ReplyIcon />
          <span>Reply</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <CopyIcon />
          <span>Copy link</span>
        </span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <Image
            src="/images/logo-mark.png"
            alt=""
            aria-hidden
            width={14}
            height={14}
            className="h-3.5 w-3.5 object-contain opacity-80"
          />
          <span className="text-slate-violet-500">w3.hub</span>
        </span>
      </div>
    </article>
  );
}
