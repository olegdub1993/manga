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
    const t = useTranslations('MangaPage');
  return (
     <div className="max-w-4xl mx-auto  px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
              <h1 className="text-6xl   text-center font-extrabold  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
              <Tabs/>
    <div className='md:px-16 '>
      <div className=' grid grid-cols-6 gap-2 justify-center'>
      <div className='col-span-2  md:col-span-3 '>
      <Link href="/manga/chapter-1">
        <Image src={`/cover/${locale}.png`} alt="Manga" width={200} height={400} />
      </Link>
        <div className='text-sm md:text-xl font-extrabold uppercase mt-2 md:mt-4'>{t('theme')}</div>
        <div className='mt-0.5 md:mt-2 pl-2 text-gray-500 font-semibold'>{t('psychological')}</div>
        <div className='text-sm md:text-xl font-extrabold uppercase mt-2 md:mt-4'>{t('audience')}</div>
        <div className='mt-0.5 md:mt-2 pl-2 text-gray-500 font-semibold'>{t('teenagers')}</div>
      </div>
     <div className='col-span-4  md:col-span-3 '>
        <div className='text-lg md:text-2xl font-extrabold uppercase'>{t('description_word')}</div>
        <div className='text-xs md:text-base mt-2 md:mt-4 pl-2 md:pl-4 font-semibold'>{t('description')}</div>
      </div>
    </div> 
    <div className='text-sm md:text-xl font-extrabold uppercase mt-2 md:mt-4'>{t('art_style')}</div>
    <div className='mt-0.5 md:mt-2 pl-2 text-gray-500 font-semibold'>{t('manga')}</div>
    <div className='text-sm md:text-xl font-extrabold uppercase mt-2 md:mt-4'>{t('warning')}</div>
    <div className='mt-0.5 md:mt-2 pl-2 text-gray-500 font-semibold'>{t('nudity')}</div>
    <div className='text-sm md:text-xl font-extrabold uppercase mt-2 md:mt-4'>{t('tags')}</div>
    <div className='mt-0.5 md:mt-2 pl-2 flex text-gray-500 text-sm md:text-base font-semibold'>
      <div className='mr-4'>{t('autobiography')}</div>
      <div className=''>{t('despair')}</div>
    </div>
    <div className='mt-1 md:mt-2 pl-2 flex text-gray-500 text-sm md:text-base  font-semibold'>
      <div className=' mr-4'>{t('existentialism')}</div>
      <div className=''>{t('experimental_manga')}</div>
    </div>
    <div className='mt-1 md:mt-2 pl-2 flex text-gray-500 text-sm md:text-base font-semibold'>
      <div className=' mr-4'>{t('inner_struggle')}</div>
      <div className=' mr-4'>{t('loneliness')}</div>
      <div className=''>{t('reflection')}</div>
    </div>
    <div className='mt-1 md:mt-2 pl-2 flex text-gray-500 text-sm md:text-base font-semibold'>
      <div className=' mr-4'>{t('search_for_identity')}</div>
      <div className=''>{t('self_discovery')}</div>
    </div>
    </div>
    </div>
  );
}