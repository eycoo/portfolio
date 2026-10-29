import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'framer-motion'

const LINKS = ['projects', 'skills', 'about', 'experience', 'awards', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])
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

  function toggleLang() {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#main-content" className="skip-link">
        {i18n.language === 'id' ? 'Lewati ke konten' : 'Skip to content'}
      </a>
      <nav className="hair-b bg-base">
        <div className="shell flex h-16 items-center justify-between gap-6">
          <a
            href="#top"
            className="split-trigger t-micro cursor-pointer text-ink"
          >
            Farras
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  className={`split-trigger t-label cursor-pointer transition-colors duration-500 ${
                    active === id ? 'text-ink' : 'text-ink-3 hover:text-ink'
                  }`}
                >
                  {t(`nav.${id}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={toggleLang}
              aria-label={i18n.language === 'id' ? 'Switch to English' : 'Ganti ke bahasa Indonesia'}
              className="t-label min-w-12 cursor-pointer text-ink-2 transition-colors hover:text-ink"
            >
              {i18n.language === 'en' ? 'ID' : 'EN'}
            </button>

            <button
              type="button"
              ref={menuButton}
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hair-b overflow-hidden bg-base lg:hidden"
          >
            <ul className="shell max-h-[calc(100dvh-4rem)] overflow-y-auto py-2">
              {LINKS.map((id, i) => (
                <li key={id} className={i === 0 ? '' : 'hair'}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex w-full cursor-pointer items-baseline justify-between py-4 text-left"
                  >
                    <span className="t-h3 text-ink">{t(`nav.${id}`)}</span>
                    <span className="t-label text-ink-3">
                      ({String(i + 1).padStart(2, '0')})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
