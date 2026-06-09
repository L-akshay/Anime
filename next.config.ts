import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats automatically — smaller payloads on supported browsers
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
};

export default nextConfig;
