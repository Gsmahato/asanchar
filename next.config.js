/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  images: {
    domains: ["prajjwalacharya.pythonanywhere.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
