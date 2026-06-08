import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (≈30% smaller than WebP), fall back to WebP.
    formats: ["image/avif", "image/webp"],
    // Cache optimized variants for 30 days instead of the 60s default.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
