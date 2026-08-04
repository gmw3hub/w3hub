import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Stealth mode auto-activates on 1 Aug 2026, 00:01 Berlin time (CEST, UTC+2),
// i.e. 31 Jul 2026 22:01 UTC. Override with the STEALTH_MODE env var:
//   "on"  -> force stealth now (for preview)
//   "off" -> force the normal site even after the activation time (kill switch)
const ACTIVATION_MS = Date.UTC(2026, 6, 31, 22, 1, 0);

export function middleware(req: NextRequest) {
  const flag = process.env.STEALTH_MODE;
  const active = flag === "on" || (flag !== "off" && Date.now() >= ACTIVATION_MS);

  // Everything routes to the stealth screen except the stealth pages
  // themselves (/stealth and /stealth/imprint — the latter keeps the legally
  // required imprint reachable while in stealth).
  if (active && !req.nextUrl.pathname.startsWith("/stealth")) {
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
