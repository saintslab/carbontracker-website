/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/carbontracker-website',
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
