'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation';

export default function Navbar() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchTo = locale === 'en' ? 'ar' : 'en'

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
        <div className='m-5'>
      <button onClick={() => router.replace(pathname, {locale : switchTo})} className='bg-white pr-2 pl-2 pt-1 pb-1 border rounded-xl hover:brightness-75'>
        {locale === 'en' ? 'AR' :'EN'}
      </button>
      </div>
    </nav>
  );
}
