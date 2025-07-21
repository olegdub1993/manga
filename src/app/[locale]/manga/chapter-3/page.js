'use client';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import Link from 'next/link';


const chapter = 'chapter3'; // Example chapter, adjust as needed
export default function Manga() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLang = params.locale;
  const t = useTranslations('HomePage');
  let length = currentLang === 'en' ? 21 : 27;
  const imageNames = Array.from({ length: length}, (_, i) => `img${i + 1}.jpg`);

  return (
    <div className='pb-[100px] pt-[100px]'>
    {imageNames.map((name, index) => (
             <div key={name}  onClick={() => setCurrentIndex(index)} className="mx-auto max-w-[1100px] w-full ">  
               <Image src={`/manga/${currentLang}/${chapter}/${name}`} alt="picture"  width={1100} // sets the aspect ratio base
        height={700} // you can set a general default, real height will adjust
        layout="responsive"
        objectFit="contain"  />
      </div>
           ))}
      <div className='flex justify-center mt-8 w-full capitalize'>
              <Link href="/manga/chapter-2" className='bg-black w-[240px] text-white p-2 px-4 gap-2  flex justify-center text-2xl font-bold mt-8'>
              {t(('previous'))}
                 </Link>
      </div>           
    </div> 
  );
}