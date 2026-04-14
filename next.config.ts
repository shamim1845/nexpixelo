import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin Turbopack root when multiple lockfiles exist (e.g. parent folder).
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
