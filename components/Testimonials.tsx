'use client';

import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section className="py-24 lg:py-32 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #1A2F6F, #0EA5A4)' }} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="rounded-2xl p-7 border border-dashed border-white/15 flex flex-col gap-5"
            >
              {/* Avatar placeholder */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1A2F6F, #0EA5A4)' }}
                >
                  <svg className="w-6 h-6 text-white/50" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                </div>
                <div>
                  <div className="w-24 h-2.5 bg-white/10 rounded-full mb-1.5" />
                  <div className="w-16 h-2 bg-white/5 rounded-full" />
                </div>
              </div>

              {/* Quote placeholder */}
              <div className="space-y-2 flex-1">
                <div className="w-full h-2 bg-white/6 rounded-full" />
                <div className="w-5/6 h-2 bg-white/6 rounded-full" />
                <div className="w-4/6 h-2 bg-white/6 rounded-full" />
              </div>

              {/* Coming soon badge */}
              <div className="text-center">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium border border-teal/25 text-teal/70 bg-teal/5">
                  {t('comingSoon')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
