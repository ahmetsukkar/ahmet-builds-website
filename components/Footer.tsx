'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://instagram.com/ahmet.builds' },
  { name: 'TikTok', href: 'https://tiktok.com/@ahmet.builds' },
  { name: 'YouTube', href: 'https://youtube.com/@ahmetbuilds' },
  { name: 'Facebook', href: 'https://facebook.com/ahmet.builds' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/ahmet-builds' },
];

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo icon */}
          <Image
            src="/images/logo-icon.png"
            alt="Ahmet Builds"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />

          {/* Tagline */}
          <p className="text-teal text-sm font-medium tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>
            {t('tagline')}
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/30 hover:text-teal text-xs font-medium transition-colors duration-200"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/8" />

          {/* Copyright */}
          <p className="text-sand/30 text-xs">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
