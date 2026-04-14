import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root when multiple lockfiles exist (e.g. parent folder).
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
