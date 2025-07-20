'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const languages = {
  uk: 'Укр',
  ja: '日本語',
  en: 'En',
};

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.locale; // 'en', 'uk', 'ja'

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;

    const segments = pathname.split('/');
    segments[1] = selectedLang;
    const newPath = segments.join('/');
    router.replace(newPath);
  };

  const t = useTranslations('HomePage');

  return (
    <header className="flex fixed top-0 w-full justify-end items-center p-4 px-10 font-extrabold uppercase text-lg">
      <div className="flex items-center gap-1">
        {Object.entries(languages).map(([code, label]) => (
          <div
            key={code}
            onClick={() => handleLanguageChange({ target: { value: code } })}
            className={`cursor-pointer flex items-center gap-2 px-2 ${
              currentLang === code ? 'border-b-3 border-black' : ''
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </header>
  );
}
