import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function SpotlightCursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 80, damping: 18 })
  const springY = useSpring(y, { stiffness: 80, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
      aria-hidden
    >
      <div className="w-full h-full rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)' }} />
    </motion.div>
  )
}
