import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { projects } from '../data/projects'

const ALL = '__all__'

export default function Projects() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [activeTag, setActiveTag] = useState(ALL)
  const [open, setOpen] = useState<string | null>(null)

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))
  const filtered =
    activeTag === ALL ? projects : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('projects.eyebrow')}
          tag={t('projects.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
              <h2 className="t-h1 text-ink">
                {t('projects.heading')}
                <span className="t-label ml-4 align-super text-ink-3">
                  ({String(projects.length).padStart(2, '0')})
                </span>
              </h2>
          </div>

          <div className="min-w-0 lg:col-span-6">
              <p className="t-lead max-w-[470px] text-ink-2">{t('projects.body')}</p>
          </div>
        </div>

          <div className="flex flex-wrap gap-2 pb-10">
            {[ALL, ...allTags].map((tag) => {
              const isActive = activeTag === tag
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  aria-pressed={isActive}
                  className={
                    't-label min-h-11 cursor-pointer rounded-brand border px-3.5 py-2 transition-colors duration-500 ' +
                    (isActive
                      ? 'border-ink bg-ink text-base'
                      : 'border-line-2 text-ink-3 hover:border-ink hover:text-ink')
                  }
                >
                  {tag === ALL ? t('projects.filter_all') : tag}
                </button>
              )
            })}
          </div>

        <ul className="border-b border-line">
            {filtered.map((project, i) => {
              const isOpen = open === project.id
              return (
                <li key={project.id} className="hair row">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`project-${project.id}`}
                    className="grid w-full cursor-pointer grid-cols-1 items-baseline gap-3 py-7 text-left lg:grid-cols-12 lg:gap-6 lg:py-9"
                  >
                    <div className="min-w-0 lg:col-span-9">
                      <p className="t-label mb-3 text-ink-3">
                        {project.year}
                        <span className="mx-2 opacity-40">/</span>
                        {project.tags[0]}
                        {project.award && (
                          <>
                            <span className="mx-2 opacity-40">/</span>
                            <span className="text-ink-2">{project.award}</span>
                          </>
                        )}
                      </p>
                      <h3 className="t-h2 row__title break-words text-ink-2">{project.title}</h3>
                    </div>

                    <div className="flex items-baseline justify-between gap-6 lg:col-span-3 lg:justify-end">
                      <span className="t-label text-ink-3">
                        {isOpen ? t('projects.close') : t('projects.detail')}
                      </span>
                      <span className="t-label text-ink-3">
                        ({String(i + 1).padStart(2, '0')})
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`project-${project.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-12 lg:gap-6">
                          <div className="min-w-0 lg:col-span-9">
                            <ul className="max-w-[870px] space-y-4">
                              {project.bullets.map((bullet, bi) => (
                                <li key={bi} className="flex gap-4">
                                  <span className="t-label shrink-0 pt-1.5 text-ink-3">
                                    {String(bi + 1).padStart(2, '0')}
                                  </span>
                                  <p className="t-sm min-w-0 break-words text-ink-2">{bullet[lang]}</p>
                                </li>
                              ))}
                            </ul>

                            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                              {project.tags.map((tag) => (
                                <li key={tag} className="t-label text-ink-3">
                                  {tag}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="min-w-0 lg:col-span-3">
                            {project.links.github || project.links.demo || project.links.paper ? (
                              <ul className="space-y-3 lg:text-right">
                                {project.links.github && (
                                  <li>
                                    <a
                                      href={project.links.github}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="t-sm inline-flex min-h-11 items-center text-ink-2 transition-colors duration-500 hover:text-ink"
                                    >
                                      {t('projects.view_github')}
                                    </a>
                                  </li>
                                )}
                                {project.links.demo && (
                                  <li>
                                    <a
                                      href={project.links.demo}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="t-sm inline-flex min-h-11 items-center text-ink-2 transition-colors duration-500 hover:text-ink"
                                    >
                                      {t('projects.view_demo')}
                                    </a>
                                  </li>
                                )}
                                {project.links.paper && (
                                  <li>
                                    <a
                                      href={project.links.paper}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="t-sm inline-flex min-h-11 items-center text-ink-2 transition-colors duration-500 hover:text-ink"
                                    >
                                      {t('projects.view_paper')}
                                    </a>
                                  </li>
                                )}
                              </ul>
                            ) : (
                              <p className="t-label text-ink-3 lg:text-right">
                                {t('projects.no_link')}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}
