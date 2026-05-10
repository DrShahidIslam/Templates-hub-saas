import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://buy.polar.sh; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://images.unsplash.com https://polar.sh https://www.gravatar.com; font-src 'self' data:; connect-src 'self' https://polar.sh https://api.polar.sh; frame-src 'self' https://buy.polar.sh;",
          },
        ],
      },
    ];
  },
  outputFileTracingIncludes: {
    // Force Vercel to include Outstatic markdown files in the Serverless Function bundle
    "/**": ["./outstatic/content/**/*"],
    "/**/sitemap.xml": ["./outstatic/content/**/*"],
    "/**/templates": ["./outstatic/content/**/*"],
    "/**/templates/[slug]": ["./outstatic/content/**/*"],
    "/**/categories/[slug]": ["./outstatic/content/**/*"],
  },
};

export default nextConfig;
