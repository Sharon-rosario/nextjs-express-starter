import webpack from "webpack";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false, // Add fallback for 'fs' to prevent build errors
    };
    return config;
  },
};

export default nextConfig;
