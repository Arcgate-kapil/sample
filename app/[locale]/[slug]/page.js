'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { routing } from '@/i18n/routing';

function buildLocalizedPath(pathname, targetLocale) {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && routing.locales.includes(segments[0])) {
    segments.shift();
  }

  if (targetLocale !== routing.defaultLocale) {
    segments.unshift(targetLocale);
  }

  return segments.length > 0 ? `/${segments.join('/')}` : '/';
}

export default function MyComponent() {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (locale) => {
    const newPathname = buildLocalizedPath(pathname, locale);
    router.push(newPathname);
  };

  return (
    <>
      <div>
        <button onClick={() => changeLocale('en')}>English</button>
        <button onClick={() => changeLocale('hindi')}>Hindi</button>
      </div>
      <h1>{t('home.title')}</h1>
    </>
  );
}
