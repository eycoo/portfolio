import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import SplitText from '../components/ui/SplitText'
import Reveal from '../components/ui/Reveal'
import { awards } from '../data/awards'

const RANK: Record<string, string> = {
  gold: 'Gold',
  silver: 'Silver',
  bronze: 'Bronze',
  special: 'Special',
}

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <section id="awards" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('awards.eyebrow')}
          code="(ANF® — 07)"
          tag={t('awards.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="t-h1 text-ink">
                {t('awards.heading')}
                <span className="t-label ml-4 align-super text-ink-3">
                  ({String(awards.length).padStart(2, '0')})
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <p className="t-lead max-w-[470px] text-ink-2">{t('awards.body')}</p>
            </Reveal>
          </div>
        </div>

        <ul className="border-b border-line">
          {awards.map((award, i) => (
            <li key={`${award.event}-${award.year}`} className="hair row">
              <Reveal delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-3 py-7 lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:py-9">
                  <div className="lg:col-span-1">
                    <span className="t-label text-ink-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="t-h3 row__title text-ink">{award.title[lang]}</h3>
                    <p className="t-label mt-2 text-ink-3">{RANK[award.medal]}</p>
                  </div>

                  <div className="lg:col-span-5">
                    <p className="t-sm text-ink-2">{award.event}</p>
                    {award.image && (
                      <button
                        type="button"
                        onClick={() => setLightbox(award.image ?? null)}
                        className="split-trigger t-label mt-3 cursor-pointer text-ink-3 transition-colors duration-500 hover:text-ink"
                      >
                        <SplitText text={'[' + t('awards.view_cert') + ']'} />
                      </button>
                    )}
                  </div>

                  <div className="lg:col-span-2 lg:text-right">
                    <span className="t-label text-ink-3">{award.year}</span>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-base/95 p-6 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox}
              alt={t('awards.cert_alt')}
              className="max-h-[90vh] max-w-[90vw] rounded-brand object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="t-label absolute top-6 right-6 cursor-pointer text-ink"
            >
              [{t('awards.close')}]
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
