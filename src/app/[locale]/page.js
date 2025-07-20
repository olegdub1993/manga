'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function HomePage() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const locale = segments[1]
    const t = useTranslations('HomePage');
  return (
    <div className='px-16'>
      <Link href="/manga">
        <Image src={`/cover/${locale}.png`} alt="Manga" width={200} height={400} />
      </Link>
    </div> 
  );
}