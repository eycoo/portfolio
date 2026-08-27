/** Non-breaking space, so a split space keeps its width inside its own box. */
const NBSP = String.fromCharCode(0xa0)

interface SplitTextProps {
  text: string
  className?: string
  /** Seconds of delay added per character. */
  stagger?: number
}

/**
 * Palmer's signature link treatment: each glyph sits in its own overflow-hidden
 * box above a duplicate of itself. On hover the stack slides up one glyph
 * height, staggered left to right. Pair with a `.split-trigger` ancestor.
 *
 * The animated glyphs are hidden from assistive tech; a visually hidden copy
 * of the text carries the accessible name.
 */
export default function SplitText({ text, className = '', stagger = 0.022 }: SplitTextProps) {
  const chars = Array.from(text)

  return (
    <span className={`split ${className}`.trim()}>
      <span className="visually-hidden">{text}</span>
      {chars.map((ch, i) => {
        const glyph = ch === ' ' ? NBSP : ch
        return (
          <span key={`${ch}-${i}`} className="split__char" aria-hidden="true">
            <span className="split__stack" style={{ transitionDelay: `${i * stagger}s` }}>
              <span>{glyph}</span>
              <span>{glyph}</span>
            </span>
          </span>
        )
      })}
    </span>
  )
}
