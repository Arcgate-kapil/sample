import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'hindi'],    // Supported locales
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
});
