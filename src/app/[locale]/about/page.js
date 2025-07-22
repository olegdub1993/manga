import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Tabs from '@/components/Tabs';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
     <div className="max-w-4xl mx-auto  px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
              <h1 className="text-6xl  text-center font-extrabold  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
              <Tabs/>
    <div className='max-w-2xl text-center text-xl mx-auto px-4 py-8'>
     <Image src="/about.png" alt="About" width={300} height={300} className="mx-auto mb-8" />
      <p>{t('about1')}</p> 
      <p>{t('about2')}</p>
      <p>{t('about3')}</p>
      <p>{t('about4')}</p>
      <p>{t('about5')}</p>
    </div>
    </div>
  );
}