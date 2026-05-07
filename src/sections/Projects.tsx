import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FileText, ChevronDown } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
import SectionTitle from '../components/ui/SectionTitle'
import { projects } from '../data/projects'

const ALL_TAG = '__all__'

const PLACEHOLDER_COLORS = ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#F59E0B', '#10B981', '#6366F1']

function PlaceholderImage({ title, index }: { title: string; index: number }) {
  const color = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('')
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: color + '12' }}>
      <div className="text-center select-none">
        <div className="text-4xl font-heading font-bold" style={{ color }}>{initials}</div>
        <div className="text-xs font-mono mt-1 px-3 text-center" style={{ color: color + 'AA' }}>{title}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [activeTag, setActiveTag] = useState(ALL_TAG)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [imgErr, setImgErr] = useState<Record<string, boolean>>({})

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))
  const filtered = activeTag === ALL_TAG ? projects : projects.filter(p => p.tags.includes(activeTag))

  return (
    <section id="projects" className="py-28 px-6" style={{ background: '#EEF2FF' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('projects.title')} />

        {/* Filter pills */}
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveTag(ALL_TAG)}
              className="px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer"
              style={activeTag === ALL_TAG
                ? { background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', color: '#fff' }
                : { background: '#fff', border: '1px solid rgba(99,102,241,0.2)', color: '#6366F1' }}
            >
              {t('projects.filter_all')}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer"
                style={activeTag === tag
                  ? { background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', color: '#fff' }
                  : { background: '#fff', border: '1px solid rgba(99,102,241,0.2)', color: '#6366F1' }}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => {
              const isOpen = expanded === proj.id
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <TiltCard className="h-full">
                    <div
                      className="rounded-2xl bg-white overflow-hidden h-full flex flex-col"
                      style={{ border: '1px solid rgba(15,23,42,0.07)', boxShadow: '0 1px 3px rgba(15,23,42,0.05)' }}
                    >
                      {/* Image / placeholder */}
                      <div className="h-44 overflow-hidden relative bg-slate-50">
                        {!imgErr[proj.id] ? (
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                            onError={() => setImgErr(p => ({ ...p, [proj.id]: true }))}
                          />
                        ) : (
                          <PlaceholderImage title={proj.title} index={i} />
                        )}
                        {proj.award && (
                          <div className="absolute top-3 left-3">
                            <span className="text-xs font-mono font-semibold px-2 py-1 rounded-full"
                              style={{ background: 'rgba(245,158,11,0.15)', color: '#D97706', border: '1px solid rgba(245,158,11,0.3)' }}>
                              {proj.award}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-heading font-bold text-ink text-base leading-snug">{proj.title}</h3>
                        <p className="text-xs font-mono mt-1" style={{ color: '#94A3B8' }}>{proj.year}</p>

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {proj.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-md font-mono"
                              style={{ background: '#EEF2FF', color: '#6366F1', border: '1px solid rgba(99,102,241,0.15)' }}>
                              {tag}
                            </span>
                          ))}
                          {proj.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-md font-mono"
                              style={{ background: '#EEF2FF', color: '#94A3B8' }}>
                              +{proj.tags.length - 3}
                            </span>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.35 }}
                              className="overflow-hidden mt-3 space-y-2"
                            >
                              {proj.bullets.map((b, bi) => (
                                <li key={bi} className="text-xs leading-relaxed flex items-start gap-1.5"
                                  style={{ color: 'rgba(15,23,42,0.7)' }}>
                                  <span className="shrink-0 mt-0.5" style={{ color: '#6366F1' }}>•</span>
                                  {b[lang]}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>

                        <div className="mt-auto pt-4 flex items-center justify-between"
                          style={{ borderTop: isOpen ? '1px solid rgba(15,23,42,0.06)' : 'none', marginTop: isOpen ? '12px' : 'auto' }}>
                          <button
                            onClick={() => setExpanded(isOpen ? null : proj.id)}
                            className="flex items-center gap-1 text-xs font-semibold hover:underline cursor-pointer"
                            style={{ color: '#6366F1' }}
                          >
                            {isOpen ? t('experience.show_less') : t('experience.show_more')}
                            <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <div className="flex items-center gap-2">
                            {proj.links.github && (
                              <a href={proj.links.github} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#94A3B8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                                <FaGithub size={16} />
                              </a>
                            )}
                            {proj.links.demo && (
                              <a href={proj.links.demo} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#94A3B8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#6366F1')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                                <ExternalLink size={16} />
                              </a>
                            )}
                            {proj.links.paper && (
                              <a href={proj.links.paper} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#94A3B8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#8B5CF6')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>
                                <FileText size={16} />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
