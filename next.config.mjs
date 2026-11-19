/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: { formats: ["image/avif", "image/webp"], minimumCacheTTL: 31536000 },
  // 301 desde las URLs del antiguo WordPress
  async redirects() {
    return [
      { source: "/about", destination: "/#quien-es-beatriz", statusCode: 301 },
      { source: "/about/", destination: "/#quien-es-beatriz", statusCode: 301 },
      { source: "/contact", destination: "/#contacto", statusCode: 301 },
      { source: "/contact/", destination: "/#contacto", statusCode: 301 },
      { source: "/books", destination: "/#servicios", statusCode: 301 },
      { source: "/books/", destination: "/#servicios", statusCode: 301 },
      { source: "/one-on-one-counseling", destination: "/#servicios", statusCode: 301 },
      { source: "/one-on-one-counseling/", destination: "/#servicios", statusCode: 301 },
      { source: "/stage-shows", destination: "/#servicios", statusCode: 301 },
      { source: "/stage-shows/", destination: "/#servicios", statusCode: 301 },
      { source: "/wp-admin/:path*", destination: "/", statusCode: 301 },
      { source: "/wp-login.php", destination: "/", statusCode: 301 },
    ];
  },
};
export default nextConfig;
