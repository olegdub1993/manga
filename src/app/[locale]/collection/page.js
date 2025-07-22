'use client';
import Image from 'next/image';
import { useState } from 'react';

const imageNames = Array.from({ length: 30 }, (_, i) => `IMG_${i + 1}.JPEG`);

import {useTranslations} from 'next-intl';
import Tabs from '@/components/Tabs';
export default function Collection () {
  const t = useTranslations('HomePage');

  const [currentIndex, setCurrentIndex] = useState(null);

  const closeModal = () => setCurrentIndex(null);
  const showPrev = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : imageNames.length - 1));
    }
  };
  const showNext = () => {
    if (currentIndex !== null) {
      setCurrentIndex((prev) => (prev < imageNames.length - 1 ? prev + 1 : 0));
    }
  };

  return (
     <div className="max-w-4xl mx-auto  px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
              <h1 className="text-6xl font-extrabold   text-center  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
              <Tabs/>
 <div className='sm:px-8 md:px-12'>
      <div className='mb-4 text-2xl uppercase font-bold'>{t('gallery')}/<span className='lowercase'>{t('colection_name')}</span></div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8 '>
        {imageNames.map((name, index) => (
          <div key={name}  onClick={() => setCurrentIndex(index)} className='relative w-full h-32 sm:h-42  cursor-pointer'>
            <Image src={`/collection/${name}`} alt="picture" fill  />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 cursor-pointer right-4  rounded-full bg-black text-white p-3 hover:scale-110 transition"
            onClick={closeModal}
          >
            <Image src="/close.svg" alt="Close" width={20} height={20} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4  rounded-full bg-black text-white cursor-pointer p-2 hover:scale-110 transition"
          >
            <Image src="/left-arrow.svg" alt="Previous" width={24} height={24} />
          </button>

          <Image
            src={`/collection/${imageNames[currentIndex]}`}
            width={1200}
            height={800}
            alt={`Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />

          {/* Next button */}
          <button
            onClick={showNext}
            className="absolute right-4 rounded-full bg-black text-white cursor-pointer p-2 hover:scale-110 transition"
          >
           <Image src="/right-arrow.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      )}
    </div>
</div>
  );
}
