'use client';
import Image from 'next/image';
import { useState } from 'react';

const imageNames = Array.from({ length: 30 }, (_, i) => `IMG_${i + 1}.JPEG`);

import {useTranslations} from 'next-intl';

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
 <div className='px-12'>
      <div className='mb-4 text-2xl uppercase font-bold'>{t('gallery')}/<span className='lowercase'>{t('colection_name')}</span></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {imageNames.map((name, index) => (
          <div key={name}  onClick={() => setCurrentIndex(index)} className='relative w-full h-42  cursor-pointer'>
            <Image src={`/collection/${name}`} alt="picture" fill  />
          </div>
        ))}
      </div>
      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button 
            className="absolute top-4 cursor-pointer right-4 text-white p-2 hover:scale-110 transition"
            onClick={closeModal}
          >
            <Image src="/close.svg" alt="Close" width={24} height={24} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 cursor-pointer text-white p-2 hover:scale-110 transition"
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
            className="absolute right-4 text-white cursor-pointer p-2 hover:scale-110 transition"
          >
           <Image src="/right-arrow.svg" alt="Next" width={24} height={24} />
          </button>
        </div>
      )}
    </div>

  );
}
