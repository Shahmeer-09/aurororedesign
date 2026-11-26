import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return [
      { source: "/contact-aurora", destination: "/contact", permanent: true },
      { source: "/mediakit", destination: "/media", permanent: true },
      {
        source: "/welcomestarseeds",
        destination: "/starseeds",
        permanent: true,
      },
    ];
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
