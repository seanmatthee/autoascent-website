import type { NextConfig } from "next";
import path from "path";

const CSP = [
  "default-src 'self'",
  // Next.js requires unsafe-inline for its bootstrap scripts; unsafe-eval for dynamic imports in dev
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  // next/font self-hosts fonts at build time — no external font origin needed
  "font-src 'self'",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "media-src 'none'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options",           value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy",   value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
