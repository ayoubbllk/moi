/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — drop the `out/` folder on cPanel (or any static host).
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
