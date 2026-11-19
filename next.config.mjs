/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000 },
  // 301 solo para URLs de administración del antiguo WordPress (las páginas públicas mantienen su URL)
  async redirects() {
    return [
      { source: "/wp-admin/:path*", destination: "/", statusCode: 301 },
      { source: "/wp-login.php", destination: "/", statusCode: 301 },
    ];
  },
};
export default nextConfig;
