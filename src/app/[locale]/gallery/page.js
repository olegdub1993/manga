'use client';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import Tabs from '@/components/Tabs';
export default function Gallery() {
  const t = useTranslations('HomePage');
  return (
     <div className="max-w-4xl mx-auto  px-2 md:px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
              <h1 className="text-6xl   text-center font-extrabold  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
              <Tabs/>
    <div>
      <div className=' text-2xl font-semibold !text-[#090909]  px-4 py-8'>{t('project')}</div>
      <Link href="/collection" className='flex gap-2  md:gap-4'>
       <div className='text-xl md:text-2xl md:min-w-[220px] font-bold sm:pl-2 md:pl-6 pt-8 sm:pt-12 md:pt-16'>
        <div>{t('colection_name')}</div>
        <div>2025</div>
        <div>{t('pictures')}</div>
       </div>
       <div className='flex relative w-full h-[180px] sm:h-[300px] md:h-[400px]'>
        <Image src="/collection/IMG_1.JPEG" alt="Collection Logo" fill/>
      </div>
      </Link>
    </div>
      </div>
  );
}