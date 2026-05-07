import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion'
import { useEffect, useRef, useState, useCallback } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Download, ArrowDown } from 'lucide-react'
import MagneticButton from '../components/ui/MagneticButton'

// ─── Interactive Neural Net ────────────────────────────────────────────────
const BASE_NODES = [
  { cx: 80,  cy: 120 }, { cx: 80,  cy: 200 }, { cx: 80,  cy: 280 },
  { cx: 200, cy: 80  }, { cx: 200, cy: 160 }, { cx: 200, cy: 240 }, { cx: 200, cy: 320 },
  { cx: 320, cy: 120 }, { cx: 320, cy: 200 }, { cx: 320, cy: 280 },
  { cx: 440, cy: 160 }, { cx: 440, cy: 240 },
  { cx: 540, cy: 200 },
]

const EDGES = [
  [0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[1,6],[2,4],[2,5],[2,6],
  [3,7],[3,8],[4,7],[4,8],[4,9],[5,8],[5,9],[6,8],[6,9],
  [7,10],[7,11],[8,10],[8,11],[9,10],[9,11],
  [10,12],[11,12],
]

const NODE_COLORS = ['#0A0A0A','#262626','#525252','#737373','#A3A3A3']
const REPEL_RADIUS = 100
const REPEL_STRENGTH = 60
const RETURN_SPEED = 0.08

function InteractiveNeuralNet() {
  const svgRef = useRef<SVGSVGElement>(null)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  const posRef = useRef(BASE_NODES.map(n => ({ x: n.cx, y: n.cy })))
  const [positions, setPositions] = useState(BASE_NODES.map(n => ({ x: n.cx, y: n.cy })))
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  const toSVGCoords = useCallback((clientX: number, clientY: number) => {
    const svg = svgRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    const vb = svg.viewBox.baseVal
    return {
      x: ((clientX - rect.left) / rect.width) * vb.width,
      y: ((clientY - rect.top) / rect.height) * vb.height,
    }
  }, [])

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = toSVGCoords(e.clientX, e.clientY)
    }
    const onLeave = () => { mouseRef.current = null }
    const svg = svgRef.current
    svg?.addEventListener('mousemove', onMove)
    svg?.addEventListener('mouseleave', onLeave)
    return () => {
      svg?.removeEventListener('mousemove', onMove)
      svg?.removeEventListener('mouseleave', onLeave)
    }
  }, [toSVGCoords])

  // Touch support
  useEffect(() => {
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0]
      mouseRef.current = toSVGCoords(t.clientX, t.clientY)
    }
    const svg = svgRef.current
    svg?.addEventListener('touchmove', onTouch, { passive: true })
    svg?.addEventListener('touchend', () => { mouseRef.current = null })
    return () => {
      svg?.removeEventListener('touchmove', onTouch)
    }
  }, [toSVGCoords])

  useAnimationFrame(() => {
    const mouse = mouseRef.current
    let changed = false
    const next = posRef.current.map((pos, i) => {
      const base = BASE_NODES[i]
      let tx = pos.x, ty = pos.y

      if (mouse) {
        const dx = pos.x - mouse.x
        const dy = pos.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH
          tx = pos.x + (dx / dist) * force
          ty = pos.y + (dy / dist) * force
        }
      }

      // Spring return to base
      const nx = pos.x + (tx - pos.x) * (mouse ? 1 : RETURN_SPEED) + (base.cx - pos.x) * RETURN_SPEED
      const ny = pos.y + (ty - pos.y) * (mouse ? 1 : RETURN_SPEED) + (base.cy - pos.y) * RETURN_SPEED

      if (Math.abs(nx - pos.x) > 0.05 || Math.abs(ny - pos.y) > 0.05) changed = true
      return { x: nx, y: ny }
    })

    posRef.current = next
    if (changed) setPositions([...next])
  })

  const getEdgeOpacity = (a: number, b: number) => {
    if (hoveredNode === null) return 0.55
    return a === hoveredNode || b === hoveredNode ? 1 : 0.15
  }

  const getEdgeWidth = (a: number, b: number) => {
    return (a === hoveredNode || b === hoveredNode) ? 2.5 : 1.5
  }

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 620 400"
      className="w-full h-full cursor-crosshair"
      style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.8s' }}
    >
      <defs>
        <linearGradient id="edge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#0A0A0A" stopOpacity="0.5" />
          <stop offset="50%"  stopColor="#525252" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#A3A3A3" stopOpacity="0.4" />
        </linearGradient>
        {BASE_NODES.map((_, i) => (
          <radialGradient key={i} id={`glow-${i}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor={NODE_COLORS[i % NODE_COLORS.length]} stopOpacity="0.6" />
            <stop offset="100%" stopColor={NODE_COLORS[i % NODE_COLORS.length]} stopOpacity="0"   />
          </radialGradient>
        ))}
      </defs>

      {/* Edges */}
      {EDGES.map(([a, b], i) => (
        <line
          key={i}
          x1={positions[a].x} y1={positions[a].y}
          x2={positions[b].x} y2={positions[b].y}
          stroke="url(#edge-grad)"
          strokeWidth={getEdgeWidth(a, b)}
          opacity={getEdgeOpacity(a, b)}
          style={{ transition: 'opacity 0.2s, stroke-width 0.2s' }}
        />
      ))}

      {/* Nodes */}
      {positions.map((pos, i) => {
        const color = NODE_COLORS[i % NODE_COLORS.length]
        const isHovered = hoveredNode === i
        return (
          <g key={i}>
            {/* Glow ring */}
            <circle
              cx={pos.x} cy={pos.y}
              r={isHovered ? 22 : 14}
              fill={`url(#glow-${i})`}
              style={{ transition: 'r 0.25s' }}
              pointerEvents="none"
            />
            {/* Node body */}
            <circle
              cx={pos.x} cy={pos.y}
              r={isHovered ? 9 : 6}
              fill={color}
              stroke="#fff"
              strokeWidth={isHovered ? 2.5 : 1.5}
              style={{
                transition: 'r 0.2s, filter 0.2s',
                filter: isHovered ? `drop-shadow(0 0 8px ${color})` : 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredNode(i)}
              onMouseLeave={() => setHoveredNode(null)}
            />
          </g>
        )
      })}
    </svg>
  )
}

// ─── Typewriter ────────────────────────────────────────────────────────────
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

// ─── Hero ──────────────────────────────────────────────────────────────────
export default function Hero() {
  const { t } = useTranslation()
  const words: string[] = t('hero.typewords', { returnObjects: true }) as string[]

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-24">
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Background blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.04)' }} />
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.03)' }} />
      <div className="absolute bottom-10 left-1/3 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(0,0,0,0.02)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left — text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-ink mb-2 leading-tight"
          >
            {t('hero.greeting')}{' '}
            <span className="gradient-text">Ahmad Naufal Farras</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-2xl md:text-3xl font-heading mt-3 mb-2"
            style={{ color: '#737373' }}
          >
            <TypewriterWords words={words} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-ink-muted text-lg mt-4 max-w-md leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <MagneticButton
              href="#projects"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{ background: '#0A0A0A', color: '#FFFFFF', boxShadow: '0 4px 20px rgba(0,0,0,0.18)' }}
            >
              {t('hero.cta_projects')}
              <ArrowDown size={16} />
            </MagneticButton>

            <MagneticButton
              href="/portfolio/cv/CV_Ahmad_Naufal_Farras_5054241038.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-all"
              style={{ borderColor: '#D4D4D8', color: '#525252', background: '#FAFAFA' }}
            >
              <Download size={16} />
              {t('hero.cta_cv')}
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-4 mt-7"
          >
            <a href="https://github.com/eycoo" target="_blank" rel="noreferrer"
              className="transition-colors" style={{ color: '#A3A3A3' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#A3A3A3')}>
              <FaGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-naufal-farras-182327340/" target="_blank" rel="noreferrer"
              className="transition-colors" style={{ color: '#A3A3A3' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0A0A0A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#A3A3A3')}>
              <FaLinkedin size={22} />
            </a>
            <span className="text-sm font-mono" style={{ color: '#A3A3A3' }}>ahmadnaufalfarras@gmail.com</span>
          </motion.div>
        </div>

        {/* Right — Interactive neural net */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-72 lg:h-full min-h-[380px]"
        >
          <InteractiveNeuralNet />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#94A3B8' }}
      >
        <span className="text-xs font-mono">scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.4 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
