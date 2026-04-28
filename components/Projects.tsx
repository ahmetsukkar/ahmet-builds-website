'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const PROJECTS = [
  {
    key: 'voxai',
    url: 'https://voxaistudio.com',
    tech: ['Next.js', 'AI APIs', 'SaaS', 'TypeScript'],
    gradientFrom: '#1A2F6F',
    gradientTo: '#0EA5A4',
  },
  {
    key: 'booking',
    url: null,
    tech: ['Node.js', 'WhatsApp Business API', 'LLM Tool Use', 'React'],
    gradientFrom: '#0EA5A4',
    gradientTo: '#1A2F6F',
  },
];

export default function Projects() {
  const t = useTranslations('projects');

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white/[0.02]">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.key}
              initial={{ opacity: 0, x: i === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="glass rounded-2xl overflow-hidden group"
            >
              {/* Gradient header */}
              <div
                className="h-48 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})` }}
              >
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 start-4 w-32 h-32 border border-white/30 rounded-full" />
                  <div className="absolute bottom-4 end-4 w-24 h-24 border border-white/20 rounded-full" />
                  <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full" />
                </div>
                <div className="absolute bottom-4 start-6 end-6">
                  <span className="text-white/80 text-xs font-mono tracking-widest uppercase">
                    {project.url ?? 'Private Project'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {t(`${project.key}.name`)}
                </h3>
                <p className="text-sand/60 text-sm leading-relaxed mb-5">
                  {t(`${project.key}.description`)}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((badge) => (
                    <span
                      key={badge}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal border border-teal/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-white transition-colors duration-200 group/link"
                  >
                    {t('liveLink')}
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
