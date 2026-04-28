'use client';

import { motion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

const WHY_ITEMS = [
  { key: 'depth', emoji: '🧠' },
  { key: 'ship', emoji: '🚀' },
  { key: 'multilingual', emoji: '🌍' },
  { key: 'iterative', emoji: '🔄' },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function WhyMe() {
  const t = useTranslations('whyMe');

  return (
    <section id="why-me" className="py-24 lg:py-32">
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
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {WHY_ITEMS.map(({ key, emoji }) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="glass rounded-2xl p-8 flex gap-5 group hover:border-teal/30 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-teal/10 flex items-center justify-center text-2xl group-hover:bg-teal/20 transition-colors duration-300">
                {emoji}
              </div>
              <div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t(`${key}.title`)}
                </h3>
                <p className="text-sand/60 text-sm leading-relaxed">{t(`${key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
