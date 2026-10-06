import type { NextConfig } from "next";
import { locales } from "./src/i18n/config";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/en", permanent: true },
      ...locales.map((locale) => ({
        source: `/${locale}/engineering-work`,
        destination: `/${locale}/experience`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
