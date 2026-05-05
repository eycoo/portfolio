import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { awards } from '../data/awards'

const medalConfig = {
  gold: { emoji: '🥇', color: '#FFD93D', bg: '#FFD93D15' },
  silver: { emoji: '🥈', color: '#B0B0B0', bg: '#B0B0B015' },
  bronze: { emoji: '🥉', color: '#CD7F32', bg: '#CD7F3215' },
  special: { emoji: '⭐', color: '#4D96FF', bg: '#4D96FF15' },
}

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'

  return (
    <section id="awards" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title={t('awards.title')} />

        <div className="grid sm:grid-cols-2 gap-6">
          {awards.map((award, i) => {
            const cfg = medalConfig[award.medal]
            return (
              <Reveal key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="rounded-2xl border border-ink/8 bg-white p-6 flex items-start gap-5"
                >
                  <div className="text-4xl shrink-0">{cfg.emoji}</div>
                  <div>
                    <p
                      className="font-heading font-bold text-xl"
                      style={{ color: cfg.color }}
                    >
                      {award.title[lang]}
                    </p>
                    <p className="text-ink font-medium mt-1">{award.event}</p>
                    <p className="text-sm text-ink-muted font-mono mt-1">{award.year}</p>
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
