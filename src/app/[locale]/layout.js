import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './../globals.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Tabs from '@/components/Tabs';

export const metadata = {
  title: 'Taisia Kamski – Manga Artist & Illustrator',
  description: 'Explore the stunning manga, illustrations, and art of Taisia Kamski. Beautiful, emotional storytelling through pictures.',
  keywords: ['Taisia Kamski', 'manga artist', 'manga pictures', 'illustrations', 'digital art', 'manga chapters'],
  authors: [{ name: 'Taisia Kamski' }],
  creator: 'Taisia Kamski',
  openGraph: {
    title: 'Taisia Kamski – Manga Artist & Illustrator',
    description: 'Discover manga chapters and art by Taisia Kamski.',
    url: 'https://your-domain.com',
    siteName: 'Taisia Kamski Art',
    type: 'website',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taisia Kamski Manga Artwork'
      }
    ]
  }
};
export default async function LocaleLayout({
  children,
  params
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} =  await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body className="bg-white text-black ">
        <NextIntlClientProvider> 
          <Header/>
        
          {children}
     
          <Footer/>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}