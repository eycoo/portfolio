import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { awards } from '../data/awards'

const medalConfig = {
  gold:    { emoji: '🥇', color: '#0A0A0A', border: '#E5E5E5' },
  silver:  { emoji: '🥈', color: '#525252', border: '#E5E5E5' },
  bronze:  { emoji: '🥉', color: '#737373', border: '#E5E5E5' },
  special: { emoji: '⭐', color: '#262626', border: '#E5E5E5' },
}

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [lightbox, setLightbox] = useState<string | null>(null)

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
                  className="rounded-2xl bg-white overflow-hidden"
                  style={{ border: `1px solid ${cfg.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  {/* Certificate image */}
                  {award.image && (
                    <button
                      className="w-full overflow-hidden cursor-zoom-in block"
                      style={{ height: '160px' }}
                      onClick={() => setLightbox(award.image!)}
                    >
                      <img
                        src={award.image}
                        alt={award.event}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </button>
                  )}

                  <div className="p-5 flex items-start gap-4">
                    <div className="text-3xl shrink-0 select-none">{cfg.emoji}</div>
                    <div>
                      <p className="font-heading font-bold text-lg" style={{ color: cfg.color }}>
                        {award.title[lang]}
                      </p>
                      <p className="font-medium mt-0.5 text-sm" style={{ color: '#525252' }}>{award.event}</p>
                      <p className="text-xs font-mono mt-1" style={{ color: '#A3A3A3' }}>{award.year}</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 cursor-zoom-out"
            style={{ background: 'rgba(0,0,0,0.85)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={lightbox}
              alt="Certificate"
              className="max-w-full max-h-full rounded-xl object-contain"
              style={{ maxWidth: '90vw', maxHeight: '90vh' }}
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 rounded-full cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF' }}
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
