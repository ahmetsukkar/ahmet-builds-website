import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Space_Grotesk, Inter, Noto_Sans_Arabic } from 'next/font/google';
import { routing } from '@/i18n/routing';
import '@/app/globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-noto-arabic',
  display: 'swap',
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://ahmetbuilds.com'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://ahmetbuilds.com',
      siteName: 'Ahmet Builds',
      images: [{ url: '/images/logo-full.png', width: 1200, height: 630, alt: 'Ahmet Builds' }],
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    icons: {
      icon: '/images/logo-icon.png',
      shortcut: '/images/logo-icon.png',
    },
    alternates: {
      canonical: '/',
      languages: { en: '/en', ar: '/ar', tr: '/tr' },
    },
    other: {
      'facebook-domain-verification': '950kzuo0e2d2brmsawzsr9v8r1bdgw',
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === 'ar';
  const fontVars = `${spaceGrotesk.variable} ${inter.variable} ${notoSansArabic.variable}`;

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={fontVars}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
