
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="fixed w-full bottom-0 flex justify-center bg-white  gap-2 items-center py-6">
      <Link href="https://www.instagram.com/kamskiiiiiiiiii" target="_blank" rel="noopener noreferrer">
        <Image src="/social/instagram.svg" alt="Instagram Logo" width={32} height={32} />  
      </Link>
       <Link href="https://www.tiktok.com/@morfinnnnnnnnnnnnnnn" target="_blank" rel="noopener noreferrer">
        <Image src="/social/tiktok.svg" alt="Tiktok Logo" width={32} height={32} />    
      </Link>
        <Link href="https://x.com/kamskiiiiiiiiii" target="_blank" rel="noopener noreferrer">
        <Image src="/social/twitter.svg" alt="Twitter Logo" width={32} height={32} />  
      </Link>
        <Link href="https://t.me/kamskiiiiiiiiiiiiiii" target="_blank" rel="noopener noreferrer">
        <Image src="/social/telegram.svg" alt="Telegram Logo" width={32} height={32} />  
      </Link>
        <Link href="https://www.pinterest.com/Taisia_Kamski/" target="_blank" rel="noopener noreferrer">
        <Image src="/social/pinterest.svg" alt="Pinterest Logo" width={32} height={32} />   
      </Link>
    </footer>
  );
}
