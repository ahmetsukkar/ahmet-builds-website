'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter, usePathname } from '@/i18n/navigation';
import { AnimatePresence, motion } from 'framer-motion';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'tr', label: 'TR' },
];

const NAV_LINKS = [
  { key: 'services', href: '/#services' },
  { key: 'projects', href: '/#projects' },
  { key: 'whyMe', href: '/#why-me' },
  { key: 'contact', href: '/#contact' },
] as const;

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const switchLocale = (code: string) => {
    router.replace(pathname, { locale: code });
    setLangOpen(false);
  };

  const currentLocale = LOCALES.find((l) => l.code === locale);
  const otherLocales = LOCALES.filter((l) => l.code !== locale);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-full.png"
            alt="Ahmet Builds"
            width={160}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <li key={key}>
              <Link
                href={href}
                className="text-sand/70 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: lang switcher + mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm font-medium text-sand/70 hover:text-white transition-colors duration-200 px-2 py-1 rounded-md border border-white/10 hover:border-white/30"
              aria-label="Switch language"
            >
              {currentLocale?.label}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 end-0 glass rounded-lg overflow-hidden min-w-[72px] py-1"
                >
                  {otherLocales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className="w-full text-center px-4 py-2 text-sm text-sand/70 hover:text-white hover:bg-white/10 transition-colors duration-150"
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-sand/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-ink/95 backdrop-blur-md border-t border-white/10"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sand/80 hover:text-white text-base font-medium transition-colors border-b border-white/5 last:border-0"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
