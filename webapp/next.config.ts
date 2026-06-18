import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/akmas",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
