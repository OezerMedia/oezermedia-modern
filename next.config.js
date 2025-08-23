/**
 * @type {import('next').NextConfig}
 *
 * This configuration disables Next.js' default image optimisation. Since the site
 * relies on locally hosted assets and does not fetch remote images, disabling
 * optimisation keeps the build lightweight and avoids additional processing.
 */
const nextConfig = {
  images: {
    // Unoptimised images prevent Next.js from trying to compress and resize
    // assets that are already exported at appropriate resolutions.
    unoptimized: true,
  },
};

module.exports = nextConfig;