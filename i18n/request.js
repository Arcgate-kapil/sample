import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
    // or call notFound() if you want 404 for unsupported locale
  }

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default,
  };
});
