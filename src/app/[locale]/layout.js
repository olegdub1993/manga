import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './../globals.css';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Tabs from '@/components/Tabs';
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