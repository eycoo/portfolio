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

function PlaceholderImage({ title }: { title: string }) {
  const colors = ['#FF6B6B', '#4D96FF', '#6BCB77', '#FFD93D', '#C77DFF']
  const color = colors[title.length % colors.length]
  const initials = title.split(' ').slice(0, 2).map(w => w[0]).join('')
  return (
    <div className="w-full h-full flex items-center justify-center" style={{ background: color + '18' }}>
      <div className="text-center">
        <div className="text-4xl font-heading font-bold" style={{ color }}>{initials}</div>
        <div className="text-xs text-ink-muted mt-1 font-mono px-2 text-center">{title}</div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [activeTag, setActiveTag] = useState(ALL_TAG)
  const [expanded, setExpanded] = useState<string | null>(null)

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)))
  const filtered = activeTag === ALL_TAG ? projects : projects.filter(p => p.tags.includes(activeTag))

  return (
    <section id="projects" className="py-28 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('projects.title')} />

        {/* Filter pills */}
        <Reveal>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              onClick={() => setActiveTag(ALL_TAG)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer ${activeTag === ALL_TAG ? 'bg-ink text-white' : 'bg-white border border-ink/15 text-ink-muted hover:border-ink/40'}`}
            >
              {t('projects.filter_all')}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all cursor-pointer ${activeTag === tag ? 'bg-ink text-white' : 'bg-white border border-ink/15 text-ink-muted hover:border-ink/40'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => {
              const isOpen = expanded === proj.id
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <TiltCard className="h-full">
                    <div className="rounded-2xl bg-white border border-ink/8 overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                            e.currentTarget.nextElementSibling?.classList.remove('hidden')
                          }}
                        />
                        <div className="hidden absolute inset-0">
                          <PlaceholderImage title={proj.title} />
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        {proj.award && (
                          <p className="text-xs font-mono text-yellow mb-2">{proj.award}</p>
                        )}
                        <h3 className="font-heading font-bold text-ink text-lg leading-tight">{proj.title}</h3>
                        <p className="text-xs text-ink-muted font-mono mt-1">{proj.year}</p>

                        <div className="flex flex-wrap gap-1 mt-3">
                          {proj.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-base-100 text-ink-muted font-mono border border-ink/8">
                              {tag}
                            </span>
                          ))}
                          {proj.tags.length > 3 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-base-100 text-ink-muted font-mono border border-ink/8">
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
                              className="overflow-hidden mt-3 space-y-1.5"
                            >
                              {proj.bullets.map((b, bi) => (
                                <li key={bi} className="text-xs text-ink/70 leading-relaxed flex items-start gap-1.5">
                                  <span className="text-blue shrink-0 mt-0.5">•</span>
                                  {b[lang]}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>

                        <div className="mt-auto pt-4 flex items-center justify-between">
                          <button
                            onClick={() => setExpanded(isOpen ? null : proj.id)}
                            className="flex items-center gap-1 text-xs text-blue font-medium hover:underline cursor-pointer"
                          >
                            {isOpen ? t('experience.show_less') : t('experience.show_more')}
                            <ChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>

                          <div className="flex items-center gap-2">
                            {proj.links.github && (
                              <a href={proj.links.github} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
                                <FaGithub size={16} />
                              </a>
                            )}
                            {proj.links.demo && (
                              <a href={proj.links.demo} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
                                <ExternalLink size={16} />
                              </a>
                            )}
                            {proj.links.paper && (
                              <a href={proj.links.paper} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
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
