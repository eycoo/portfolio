import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Calendar } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { experiences } from '../data/experience'

const DOT_COLORS = ['#6366F1','#8B5CF6','#EC4899','#06B6D4','#F59E0B','#10B981','#6366F1','#8B5CF6']

export default function Experience() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [expanded, setExpanded] = useState<string | null>(experiences[0].id)

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t('experience.title')} />

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 md:left-6"
            style={{ background: 'linear-gradient(to bottom, #6366F1, #8B5CF6, #EC4899)' }} />

          <div className="space-y-4">
            {experiences.map((exp, i) => {
              const isOpen = expanded === exp.id
              const dotColor = DOT_COLORS[i % DOT_COLORS.length]
              return (
                <Reveal key={exp.id} delay={i * 0.06}>
                  <div className="relative pl-12 md:pl-16">
                    <div
                      className={`absolute left-2 md:left-4 top-5 w-5 h-5 rounded-full border-2 border-white transition-all duration-300 ${isOpen ? 'scale-125' : 'scale-100'}`}
                      style={{ background: dotColor, boxShadow: isOpen ? `0 0 12px ${dotColor}60` : 'none' }}
                    />

                    <button className="w-full text-left" onClick={() => setExpanded(isOpen ? null : exp.id)}>
                      <div
                        className="rounded-2xl border bg-white p-5 transition-all duration-300"
                        style={isOpen
                          ? { borderColor: 'rgba(99,102,241,0.3)', boxShadow: '0 4px 24px rgba(99,102,241,0.10)' }
                          : { borderColor: 'rgba(15,23,42,0.08)' }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="font-heading font-bold text-ink">{exp.company}</h3>
                              {exp.current && (
                                <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                                  style={{ background: 'rgba(99,102,241,0.1)', color: '#6366F1', border: '1px solid rgba(99,102,241,0.2)' }}>
                                  {t('experience.current')}
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-semibold mt-0.5" style={{ color: '#6366F1' }}>{exp.role[lang]}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs flex-wrap" style={{ color: '#64748B' }}>
                              <span className="flex items-center gap-1"><Calendar size={12} />{exp.period}</span>
                              <span className="flex items-center gap-1"><MapPin size={12} />{exp.location}</span>
                            </div>
                          </div>
                          <ChevronDown
                            size={18}
                            className={`shrink-0 transition-transform duration-300 mt-1 ${isOpen ? 'rotate-180' : ''}`}
                            style={{ color: '#94A3B8' }}
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
                              <ul className="mt-4 space-y-2 pt-4" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
                                {exp.bullets.map((b, bi) => (
                                  <li key={bi} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'rgba(15,23,42,0.75)' }}>
                                    <span className="mt-1 shrink-0" style={{ color: '#6366F1' }}>•</span>
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
