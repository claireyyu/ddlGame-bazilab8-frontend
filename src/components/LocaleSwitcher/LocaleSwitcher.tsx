'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition, useState } from 'react';
import { Locale, usePathname, routing, useRouter } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import { Globe } from 'react-feather';
// import { useRouter } from 'next/navigation';

export function LocaleSwitcher() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const params = useParams();

  const t = useTranslations('LocaleSwitcher');

  // Function to toggle dropdown visibility
  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  function onLocaleChange(locale: string) {
    // Navigate to the new locale-specific route
    router.replace('/', { locale });
  }

  return (
    <div className="hidden xl:block">
      {/* Button to toggle dropdown */}
      <button
        className="cursor-pointer items-center text-foreground border-none focus:bg-transparent"
        onClick={onToggle}
      >
        <Globe className="m-1" />
      </button>

      {/* Dropdown for selecting locales */}
      {isOpen && (
        <ul className="absolute bg-foreground text-background border rounded mt-2 shadow-lg">
          {routing.locales.slice(0, 2).map((locale: string) => (
            <li
              key={locale}
              onClick={() => onLocaleChange(locale)}
              className="cursor-pointer p-2 text-center text-base hover:opacity-50"
            >
              {t('locale', { locale })}
            </li>))}
        </ul>)}
    </div>
  );
}

export function LocaleSwitcherMobile() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations('LocaleSwitcher');

  // Function to toggle dropdown visibility
  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  function onLocaleChange(locale: string) {
    router.replace(
      { pathname, query: params },
      { locale }
    );
    setIsOpen(false); // Close the dropdown after selection
  }

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className="cursor-pointer items-center text-foreground border-none focus:bg-transparent"
        onClick={onToggle}
      >
        <Globe className="m-1" />
      </button>

      {/* Dropdown for selecting locales */}
      {isOpen && (
        <ul className="absolute bg-foreground text-background border rounded mt-2 shadow-lg">
          {routing.locales.slice(0, 2).map((locale: string) => (
            <li
              key={locale}
              onClick={() => onLocaleChange(locale)}
              className="cursor-pointer p-2 text-center hover:opacity-50"
            >
              {t('locale', { locale })}
            </li>))}
        </ul>)}
    </div>
  );
}