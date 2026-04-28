'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animate-gradient" />

      {/* Mesh overlay */}
      <div className="absolute inset-0 bg-ink/40" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 end-1/4 w-80 h-80 bg-navy/40 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '3s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/30 rounded-full bg-teal/5">
            ahmetbuilds.com
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('headline')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="text-lg sm:text-xl text-sand/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('subheading')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white text-sm sm:text-base transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-teal/25"
            style={{
              background: 'linear-gradient(135deg, #1A2F6F, #0EA5A4)',
            }}
          >
            {t('cta1')}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white text-sm sm:text-base border border-white/20 hover:border-teal/50 hover:bg-white/5 transition-all duration-200"
          >
            {t('cta2')}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-1 text-sand/30">
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <svg className="w-4 h-4 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
