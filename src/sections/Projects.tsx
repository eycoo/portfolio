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

function PlaceholderImage({ title, index }: { title: string; index: number }) {
  const shades = ['#0A0A0A','#262626','#404040','#525252','#737373','#A3A3A3','#D4D4D8']
  const bg = shades[index % shades.length]
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('')
  return (
    <div className="w-full h-full flex items-center justify-center select-none" style={{ background: bg }}>
      <div className="text-center">
        <div className="text-4xl font-heading font-bold text-white opacity-40">{initials}</div>
        <div className="text-xs font-mono mt-1 px-3 text-center text-white opacity-25">{title}</div>
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
    <section id="projects" className="py-28 px-6" style={{ background: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('projects.title')} />

        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveTag(ALL_TAG)}
              className="px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer"
              style={activeTag === ALL_TAG
                ? { background: '#0A0A0A', color: '#FFFFFF' }
                : { background: '#FFFFFF', border: '1px solid #E5E5E5', color: '#737373' }}
            >
              {t('projects.filter_all')}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className="px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer"
                style={activeTag === tag
                  ? { background: '#0A0A0A', color: '#FFFFFF' }
                  : { background: '#FFFFFF', border: '1px solid #E5E5E5', color: '#737373' }}
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
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <TiltCard className="h-full">
                    <div
                      className="rounded-2xl bg-white overflow-hidden h-full flex flex-col"
                      style={{ border: '1px solid #E5E5E5' }}
                    >
                      <div className="h-44 overflow-hidden relative">
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
                              style={{ background: 'rgba(255,255,255,0.92)', color: '#0A0A0A', border: '1px solid #E5E5E5' }}>
                              {proj.award}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-heading font-bold text-base leading-snug" style={{ color: '#0A0A0A' }}>{proj.title}</h3>
                        <p className="text-xs font-mono mt-1" style={{ color: '#A3A3A3' }}>{proj.year}</p>

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {proj.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-md font-mono"
                              style={{ background: '#F5F5F5', color: '#737373', border: '1px solid #E5E5E5' }}>
                              {tag}
                            </span>
                          ))}
                          {proj.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-md font-mono"
                              style={{ background: '#F5F5F5', color: '#A3A3A3' }}>
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
                                <li key={bi} className="text-xs leading-relaxed flex items-start gap-2"
                                  style={{ color: '#737373' }}>
                                  <span className="shrink-0 w-1 h-1 rounded-full mt-1.5" style={{ background: '#A3A3A3', marginTop: '6px', flexShrink: 0 }} />
                                  {b[lang]}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>

                        <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: isOpen ? '1px solid #F5F5F5' : 'none', paddingTop: isOpen ? '16px' : '0', marginTop: isOpen ? '12px' : 'auto' }}>
                          <button
                            onClick={() => setExpanded(isOpen ? null : proj.id)}
                            className="flex items-center gap-1 text-xs font-semibold hover:underline cursor-pointer"
                            style={{ color: '#525252' }}
                          >
                            {isOpen ? t('experience.show_less') : t('experience.show_more')}
                            <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          <div className="flex items-center gap-2">
                            {proj.links.github && (
                              <a href={proj.links.github} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#D4D4D8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#D4D4D8')}>
                                <FaGithub size={16} />
                              </a>
                            )}
                            {proj.links.demo && (
                              <a href={proj.links.demo} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#D4D4D8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#D4D4D8')}>
                                <ExternalLink size={16} />
                              </a>
                            )}
                            {proj.links.paper && (
                              <a href={proj.links.paper} target="_blank" rel="noreferrer"
                                className="transition-colors" style={{ color: '#D4D4D8' }}
                                onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
                                onMouseLeave={e => (e.currentTarget.style.color = '#D4D4D8')}>
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
