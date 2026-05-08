import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    // Force Vercel to include Outstatic markdown files in the Serverless Function bundle
    "/*": ["./outstatic/content/**/*"],
    "/templates": ["./outstatic/content/**/*"],
    "/templates/[slug]": ["./outstatic/content/**/*"],
    "/categories/[slug]": ["./outstatic/content/**/*"],
  },
};

export default nextConfig;
