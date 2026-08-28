import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Stealth mode runs between these two moments (Berlin time, CEST/UTC+2):
//   activates  1 Aug 2026, 00:01  (= 31 Jul 22:01 UTC)
//   ends      28 Aug 2026, 19:00  (= 28 Aug 17:00 UTC) — the countdown target;
//             after this the normal site returns automatically.
// Override with the STEALTH_MODE env var:
//   "on"  -> force stealth now (for preview)
//   "off" -> force the normal site regardless of the window (kill switch)
const ACTIVATION_MS = Date.UTC(2026, 6, 31, 22, 1, 0);
const DEACTIVATION_MS = Date.UTC(2026, 7, 28, 17, 0, 0);

// Secret preview bypass: visiting /hidden drops this cookie and unlocks the
// full normal site for that browser while stealth is active. /hidden?off
// clears it again.
const PREVIEW_COOKIE = "w3hub_preview";
const PREVIEW_TOKEN = "w3hub-behind-the-curtain";

export function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;

  // Toggle the preview cookie, then bounce to the homepage. Works regardless
  // of stealth state so the link never 404s.
  if (pathname === "/hidden") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    const res = NextResponse.redirect(url);
    if (searchParams.has("off")) {
      res.cookies.delete(PREVIEW_COOKIE);
    } else {
      res.cookies.set(PREVIEW_COOKIE, PREVIEW_TOKEN, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }
    return res;
  }

  const flag = process.env.STEALTH_MODE;
  const now = Date.now();
  const active =
    flag === "on" ||
    (flag !== "off" && now >= ACTIVATION_MS && now < DEACTIVATION_MS);
  if (!active) return NextResponse.next();

  // Holders of the preview cookie see the real site as usual.
  if (req.cookies.get(PREVIEW_COOKIE)?.value === PREVIEW_TOKEN) {
    return NextResponse.next();
  }

  // Everyone else: everything routes to the stealth screen except the stealth
  // pages themselves (/stealth and /stealth/imprint — the latter keeps the
  // legally required imprint reachable while in stealth).
  if (!pathname.startsWith("/stealth")) {
    const url = req.nextUrl.clone();
    url.pathname = "/stealth";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  // Rewrite page requests only; skip _next internals and any file with an
  // extension (static assets, robots.txt, sitemap.xml, images, etc.).
  matcher: ["/", "/((?!_next/|.*\\.).*)"],
};
