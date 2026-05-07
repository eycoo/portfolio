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
        background: scrolled ? 'rgba(248,250,252,0.85)' : '#F8FAFC',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(99,102,241,0.12)'
          : '1px solid rgba(99,102,241,0.08)',
        boxShadow: scrolled ? '0 4px 24px rgba(99,102,241,0.06)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-heading font-bold text-xl cursor-pointer"
          style={{ color: '#0F172A' }}
        >
          Ahmad Naufal <span style={{ color: '#6366F1' }}>Farras</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => { scrollTo(l); setActiveLink(l) }}
                onMouseEnter={() => setActiveLink(l)}
                onMouseLeave={() => setActiveLink(null)}
                className="relative text-sm font-medium px-3.5 py-2 rounded-lg transition-all cursor-pointer"
                style={{
                  color: activeLink === l ? '#6366F1' : '#64748B',
                  background: activeLink === l ? 'rgba(99,102,241,0.08)' : 'transparent',
                }}
              >
                {t(`nav.${l}`)}
                {activeLink === l && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(99,102,241,0.08)', zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            className="text-sm font-mono font-medium px-3 py-1.5 rounded-full transition-all cursor-pointer"
            style={{
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#6366F1',
              background: 'rgba(99,102,241,0.06)',
            }}
          >
            {i18n.language === 'en' ? '🇮🇩 ID' : '🇬🇧 EN'}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-1.5 rounded-lg cursor-pointer"
            style={{ color: '#64748B' }}
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: '#F8FAFC', borderTop: '1px solid rgba(99,102,241,0.1)' }}
          >
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="block w-full text-left px-6 py-4 text-sm font-medium transition-colors cursor-pointer"
                style={{ color: '#475569', borderBottom: '1px solid rgba(15,23,42,0.05)' }}
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
