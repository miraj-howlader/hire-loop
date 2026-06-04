/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
serverComponentsExternalPackages: ['@better-auth/kysely-adapter'],
},
};

export default nextConfig;
