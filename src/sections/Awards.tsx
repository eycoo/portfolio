import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { awards } from '../data/awards'

const medalConfig = {
  gold:    { emoji: '🥇', color: '#0A0A0A', bg: '#FAFAFA', border: '#E5E5E5' },
  silver:  { emoji: '🥈', color: '#525252', bg: '#FAFAFA', border: '#E5E5E5' },
  bronze:  { emoji: '🥉', color: '#737373', bg: '#FAFAFA', border: '#E5E5E5' },
  special: { emoji: '⭐', color: '#262626', bg: '#FAFAFA', border: '#E5E5E5' },
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
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-2xl bg-white p-6 flex items-start gap-5"
                  style={{ border: `1px solid ${cfg.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <div className="text-4xl shrink-0 select-none">{cfg.emoji}</div>
                  <div>
                    <p className="font-heading font-bold text-xl" style={{ color: cfg.color }}>
                      {award.title[lang]}
                    </p>
                    <p className="font-medium mt-1" style={{ color: '#525252' }}>{award.event}</p>
                    <p className="text-sm font-mono mt-1" style={{ color: '#A3A3A3' }}>{award.year}</p>
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
