import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The knowledge base index is the Knowledge section's landing page.
    return [{ source: "/kb", destination: "/knowledge", permanent: true }];
  },
};

export default nextConfig;
