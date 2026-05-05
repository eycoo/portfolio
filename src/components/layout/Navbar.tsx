import { useTranslation } from 'react-i18next'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 40))

  const links = ['about', 'skills', 'experience', 'projects', 'awards', 'contact'] as const

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  function toggleLang() {
    i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en')
  }

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-bold text-xl text-ink cursor-pointer"
        >
          <span className="gradient-text">ANF</span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer"
              >
                {t(`nav.${l}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-mono font-medium px-3 py-1 rounded-full border border-ink/20 hover:border-blue hover:text-blue transition-all cursor-pointer"
          >
            {i18n.language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
          </button>
          <button
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 backdrop-blur border-t border-ink/10 px-6 py-4"
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-sm font-medium text-ink border-b border-ink/5 last:border-0 cursor-pointer"
            >
              {t(`nav.${l}`)}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
