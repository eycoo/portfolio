import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import StackWord from '../components/ui/StackWord'
import Reveal from '../components/ui/Reveal'
import { experiences } from '../data/experience'

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [open, setOpen] = useState<string | null>(experiences[0].id)

  return (
    <section id="experience" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('experience.eyebrow')}
          code="(ANF® — 06)"
          tag={t('experience.tag')}
        />

        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-16">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <StackWord
                word={t('experience.word')}
                className="t-h1 hidden text-ink lg:flex"
              />
              <h2 className="t-h1 text-ink lg:hidden">{t('experience.word')}</h2>
              <p className="t-label mt-8 text-ink-3">
                {t('experience.count', { n: experiences.length })}
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <ul className="border-b border-line">
              {experiences.map((exp) => {
                const isOpen = open === exp.id
                return (
                  <li key={exp.id} className="hair row">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : exp.id)}
                      aria-expanded={isOpen}
                      className="grid w-full cursor-pointer grid-cols-1 items-baseline gap-2 py-6 text-left lg:grid-cols-12 lg:gap-5 lg:py-7"
                    >
                      <div className="lg:col-span-5">
                        <h3 className="t-h3 row__title text-ink">{exp.company}</h3>
                      </div>

                      <div className="lg:col-span-3">
                        <p className="t-sm text-ink-2">{exp.role[lang]}</p>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="t-label text-ink-3">{exp.period}</p>
                      </div>

                      <div className="flex items-baseline justify-between gap-4 lg:col-span-2 lg:justify-end">
                        <p className="t-label text-ink-3">{exp.location}</p>
                        {exp.current && (
                          <span className="t-label rounded-brand border border-line-2 px-2 py-1 text-ink">
                            {t('experience.current')}
                          </span>
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <ul className="max-w-[870px] space-y-4 pb-8">
                            {exp.bullets.map((bullet, bi) => (
                              <li key={bi} className="flex gap-4">
                                <span className="t-label shrink-0 pt-1.5 text-ink-3">
                                  {String(bi + 1).padStart(2, '0')}
                                </span>
                                <p className="t-sm text-ink-2">{bullet[lang]}</p>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              })}
            </ul>

            <Reveal>
              <p className="t-label pt-6 text-ink-3">{t('experience.hint')}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
