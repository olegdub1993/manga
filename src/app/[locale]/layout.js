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
          <div className="max-w-4xl mx-auto  px-4 py-8 border-l-2  pb-20 border-r-2 border-gray-200">
          <h1 className="text-6xl font-extrabold  mt-20 mb-12 flex justify-center uppercase">Taisia Kamski</h1>
          <Tabs/>
          {children}
          </div>
          <Footer/>
          </NextIntlClientProvider>
      </body>
    </html>
  );
}