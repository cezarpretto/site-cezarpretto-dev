const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Forçar inclusão do pacote `next` no output file tracing — sem isso o
  // server.js falha em runtime com `Cannot find module 'next'`.
  outputFileTracingIncludes: {
    '/': ['./node_modules/next/**'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);
