import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { awards } from '../data/awards'

const medalConfig = {
  gold:    { emoji: '🥇', color: '#D97706', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
  silver:  { emoji: '🥈', color: '#64748B', bg: 'rgba(100,116,139,0.08)', border: 'rgba(100,116,139,0.2)' },
  bronze:  { emoji: '🥉', color: '#92400E', bg: 'rgba(146,64,14,0.08)', border: 'rgba(146,64,14,0.2)' },
  special: { emoji: '⭐', color: '#6366F1', bg: 'rgba(99,102,241,0.08)', border: 'rgba(99,102,241,0.2)' },
}

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'

  return (
    <section id="awards" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t('awards.title')} />

        <div className="grid sm:grid-cols-2 gap-5">
          {awards.map((award, i) => {
            const cfg = medalConfig[award.medal]
            return (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-2xl bg-white p-6 flex items-start gap-5"
                  style={{ border: `1px solid ${cfg.border}`, background: cfg.bg, boxShadow: '0 1px 3px rgba(15,23,42,0.05)' }}
                >
                  <div className="text-4xl shrink-0 select-none">{cfg.emoji}</div>
                  <div>
                    <p className="font-heading font-bold text-xl" style={{ color: cfg.color }}>
                      {award.title[lang]}
                    </p>
                    <p className="font-medium mt-1 text-ink">{award.event}</p>
                    <p className="text-sm font-mono mt-1" style={{ color: '#94A3B8' }}>{award.year}</p>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
