import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Download, ArrowDown } from 'lucide-react'
import MagneticButton from '../components/ui/MagneticButton'

function NeuralNet() {
  const nodes = [
    { cx: 80, cy: 120 }, { cx: 80, cy: 200 }, { cx: 80, cy: 280 },
    { cx: 200, cy: 80 }, { cx: 200, cy: 160 }, { cx: 200, cy: 240 }, { cx: 200, cy: 320 },
    { cx: 320, cy: 120 }, { cx: 320, cy: 200 }, { cx: 320, cy: 280 },
    { cx: 440, cy: 160 }, { cx: 440, cy: 240 },
    { cx: 540, cy: 200 },
  ]
  const edges = [
    [0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],
    [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,8],[6,9],
    [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
    [10,12],[11,12],
  ]

  return (
    <svg viewBox="0 0 620 400" className="w-full h-full opacity-30" aria-hidden>
      <defs>
        <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#4D96FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6BCB77" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].cx} y1={nodes[a].cy}
          x2={nodes[b].cx} y2={nodes[b].cy}
          stroke="url(#edge-grad)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: i * 0.04, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r="6"
          fill={['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'][i % 5]}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: 'backOut' }}
        />
      ))}
    </svg>
  )
}

function TypewriterWords({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <span className="inline-block relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[idx]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="gradient-text font-bold"
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { t } = useTranslation()
  const words: string[] = t('hero.typewords', { returnObjects: true }) as string[]

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-60 hidden lg:block">
        <NeuralNet />
      </div>
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-rose/10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-blue/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ink-muted font-medium mb-3"
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-ink mb-2"
          >
            Ahmad Naufal
            <br />
            <span className="gradient-text">Farras</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-heading text-ink/70 mb-2"
          >
            <TypewriterWords words={words} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-ink-muted text-lg mt-4 max-w-md leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm text-ink-muted mt-2 font-mono"
          >
            🎓 {t('hero.study')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <MagneticButton
              href="#projects"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-white font-medium text-sm hover:bg-ink/90 transition-colors"
            >
              {t('hero.cta_projects')}
              <ArrowDown size={16} />
            </MagneticButton>

            <MagneticButton
              href="/portfolio/cv/Ahmad_Naufal_Farras_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-ink/20 text-ink font-medium text-sm hover:border-blue hover:text-blue transition-all"
            >
              <Download size={16} />
              {t('hero.cta_cv')}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-6"
          >
            <a href="https://github.com/eycoo" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink transition-colors">
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-naufal-farras-182327340/" target="_blank" rel="noreferrer" className="text-ink-muted hover:text-blue transition-colors">
              <FaLinkedin size={22} />
            </a>
            <span className="text-ink-muted text-sm font-mono">ahmadnaufalfarras@gmail.com</span>
          </motion.div>
        </div>

        {/* Mobile neural net */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:hidden h-48"
        >
          <NeuralNet />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted"
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
