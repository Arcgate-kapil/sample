import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {},
  matcher: [
    '/', 
    '/((?!api|_next|.*\\..*).*)' // This matches all except api, _next, and files with extensions
  ],
};

export default withNextIntl(nextConfig);
