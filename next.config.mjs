/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3300", // <- match your image port
        pathname: "/public/img/profile/**",
      },
    ],
  },
};

export default nextConfig;
