'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { routing } from '@/i18n/routing';
import { decrement, increment, reset } from '@/lib/features/counterSlice';

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
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

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
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  );
}
