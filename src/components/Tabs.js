'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations('HomePage');

  // Get current path without the locale prefix
  const segments = pathname.split('/');
  const locale = segments[1]; // e.g. "en"
  const currentPath = '/' + segments.slice(2).join('/'); // removes locale
  const normalizedPath = currentPath === '/' ? '/' : currentPath.replace(/\/$/, '');

  const links = [
    { href: '/', label: t('manga') },
    { href: '/gallery', subpath:'/collection', label: t('gallery') },
    { href: '/about', label: t('about') },
  ];

  return (
    <nav className="flex justify-center uppercase text-sm sm:text-xl  md:text-2xl font-extrabold gap-2 sm:gap-4 md:gap-12 mb-8 ">
      {links.map((link) => {
        const isActive = normalizedPath === link.href || normalizedPath === link.subpath;
        return (
          <Link
            key={link.href}
            href={`/${locale}${link.href}`}
            className={isActive ? 'px-2 md:px-4 border-b-5  border-[#BEC0BF]' : 'px-2 md:px-4 '}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
