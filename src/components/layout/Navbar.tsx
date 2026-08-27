import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import SplitText from '../ui/SplitText'

const LINKS = ['projects', 'skills', 'about', 'experience', 'awards', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const sections = LINKS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function goTo(id: string) {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function toggleLang() {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="hair-b bg-base/80 backdrop-blur-xl">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="split-trigger t-micro cursor-pointer text-ink"
          >
            <SplitText text="Farras®" />
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((id) => (
              <li key={id}>
                <button
                  type="button"
                  onClick={() => goTo(id)}
                  className={`split-trigger t-label cursor-pointer transition-colors duration-500 ${
                    active === id ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  <SplitText text={t(`nav.${id}`)} />
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleLang}
              aria-label="Toggle language"
              className="t-label cursor-pointer text-ink-3 transition-colors duration-500 hover:text-ink"
            >
              {i18n.language === 'en' ? 'EN / id' : 'en / ID'}
            </button>

            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="t-label cursor-pointer text-ink lg:hidden"
            >
              {open ? t('nav.close') : t('nav.menu')}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hair-b overflow-hidden bg-base lg:hidden"
          >
            <ul className="shell py-2">
              {LINKS.map((id, i) => (
                <li key={id} className={i === 0 ? '' : 'hair'}>
                  <button
                    type="button"
                    onClick={() => goTo(id)}
                    className="flex w-full cursor-pointer items-baseline justify-between py-4 text-left"
                  >
                    <span className="t-h3 text-ink">{t(`nav.${id}`)}</span>
                    <span className="t-label text-ink-3">
                      ({String(i + 1).padStart(2, '0')})
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
