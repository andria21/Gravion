/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

// export default withPWA({
//   dest: "public",
//   cacheOnFrontEndNav: true,
//   reloadOnOnline: true,
//   disable: false,
// })

module.exports = withPWA ({
  dest: "public",
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: false,
})(nextConfig);
