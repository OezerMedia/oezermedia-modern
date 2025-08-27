// next.config.js
/** @type {import('next').NextConfig} */
const isExport = process.env.EXPORT === 'true';

const nextConfig = {
  ...(isExport ? { output: 'export' } : {}),
  images: isExport ? { unoptimized: true } : {},
  trailingSlash: isExport ? true : undefined, // 👈 sicher für Shared-Hosting
};

module.exports = nextConfig;
