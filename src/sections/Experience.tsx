import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { experiences } from '../data/experience'

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [expanded, setExpanded] = useState<string | null>(experiences[0].id)

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t('experience.title')} />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-rose via-blue to-green md:left-6" />

          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const isOpen = expanded === exp.id
              return (
                <Reveal key={exp.id} delay={i * 0.06}>
                  <div className="relative pl-12 md:pl-16">
                    {/* Dot */}
                    <div
                      className={`absolute left-2 md:left-4 top-5 w-5 h-5 rounded-full border-2 border-white transition-all duration-300 ${isOpen ? 'scale-125' : 'scale-100'}`}
                      style={{ background: ['#FF6B6B','#4D96FF','#6BCB77','#FFD93D','#C77DFF','#FF6B6B','#4D96FF'][i] }}
                    />

                    <button
                      className="w-full text-left"
                      onClick={() => setExpanded(isOpen ? null : exp.id)}
                    >
                      <div className={`rounded-2xl border transition-all duration-300 ${isOpen ? 'border-blue/30 shadow-md shadow-blue/5' : 'border-ink/8 hover:border-ink/20'} bg-white p-5`}>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-heading font-bold text-ink">{exp.company}</h3>
                              {exp.current && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-green/15 text-green font-mono">
                                  {t('experience.current')}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-blue font-medium mt-0.5">{exp.role[lang]}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-ink-muted flex-wrap">
                              <span className="flex items-center gap-1">
                                <Calendar size={12} />
                                {exp.period}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin size={12} />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`text-ink-muted shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <ul className="mt-4 space-y-2 border-t border-ink/5 pt-4">
                                {exp.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2 text-sm text-ink/75 leading-relaxed">
                                    <span className="text-blue mt-1 shrink-0">•</span>
                                    {b[lang]}
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
