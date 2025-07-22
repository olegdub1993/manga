'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';
const chapter = 'chapter1'; // Example chapter, adjust as needed
export default function Manga() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.locale;
  const t = useTranslations('HomePage');
  
  let length = currentLang === 'ja' ? 56 : 57;
  const imageNames = Array.from({ length: length}, (_, i) => `img${i + 1}.jpg`);
  return (
    <div className='pb-[80px] pt-[80px]'>
    {imageNames.map((name, index) => (
             <div key={name}  onClick={() => setCurrentIndex(index)} className="mx-auto max-w-[1100px] w-full ">  
           <Image
            
            src={`/manga/${currentLang}/${chapter}/${name}`}
            alt="picture"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
          />
      </div>
           ))}
            <div className='flex justify-center mt-8 w-full capitalize'>
              <Link href="/manga/chapter-2" className='bg-black w-[240px] text-white p-2 px-4 gap-2  flex justify-center text-2xl font-bold '>
              {t(('next'))}
                 </Link>
                 </div>
    </div> 
  );
}