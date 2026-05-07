import { useTranslation } from 'react-i18next'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

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
      className="fixed top-0 inset-x-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: scrolled ? 'rgba(255,255,255,0.90)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: '1px solid #E5E5E5',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-bold text-xl cursor-pointer tracking-tight"
          style={{ color: '#0A0A0A' }}
        >
          Ahmad Naufal <span style={{ color: '#737373' }}>Farras</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => { scrollTo(l); setActiveLink(l) }}
                onMouseEnter={() => setActiveLink(l)}
                onMouseLeave={() => setActiveLink(null)}
                className="relative text-sm font-medium px-3.5 py-2 rounded-lg transition-all cursor-pointer"
                style={{
                  color: activeLink === l ? '#0A0A0A' : '#737373',
                  background: activeLink === l ? '#F5F5F5' : 'transparent',
                }}
              >
                {t(`nav.${l}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-mono font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer"
            style={{ border: '1px solid #D4D4D8', color: '#525252', background: '#FAFAFA' }}
          >
            {i18n.language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
          </button>
          <button
            className="md:hidden p-1.5 rounded-lg cursor-pointer"
            style={{ color: '#525252' }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: '#FFFFFF', borderTop: '1px solid #E5E5E5' }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-4 text-sm font-medium cursor-pointer"
                style={{ color: '#525252', borderBottom: '1px solid #F5F5F5' }}
              >
                {t(`nav.${l}`)}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
