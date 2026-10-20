import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eksport statyczny do katalogu out/ — wymagany przez GitHub Pages (brak serwera Node).
  output: 'export',
  // Optymalizacja obrazów Next.js wymaga serwera, na Pages jest niedostępna.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
