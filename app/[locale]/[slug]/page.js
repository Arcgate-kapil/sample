'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function MyComponent() {
  const t = useTranslations();
   const pathname = usePathname();
  const router = useRouter();

   const changeLocale = (locale) => {
    let newPathname = locale == 'hindi' ? locale + pathname.replace('/hindi', '/') : pathname.replace('/hindi', '');
    router.push(newPathname);
  };

  return( 
    <>
    <div>
      <button onClick={() => changeLocale('en')}>English</button>
      <button onClick={() => changeLocale('hindi')}>Hindi</button>
    </div>
  <h1>{t('home.title')}</h1>
  </>
)}
