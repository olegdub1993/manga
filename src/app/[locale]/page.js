'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Tabs from '@/components/Tabs';
export default function HomePage() {
    const pathname = usePathname();
    const segments = pathname.split('/');
    const locale = segments[1]
    const t = useTranslations('HomePage');
  return (
     <div className="max-w-4xl mx-auto  px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
              <h1 className="text-6xl   text-center font-extrabold  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
              <Tabs/>
    <div className='px-16 flex justify-center md:block'>
      <Link href="/manga/chapter-1">
        <Image src={`/cover/${locale}.png`} alt="Manga" width={200} height={400} />
      </Link>
    </div> 
    </div>
  );
}