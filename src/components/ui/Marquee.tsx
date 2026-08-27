interface MarqueeProps {
  items: string[]
  /** Full loop duration in seconds. */
  duration?: number
  className?: string
}

export default function Marquee({ items, duration = 46, className = '' }: MarqueeProps) {
  const track = (
    <div
      className="marquee__track"
      style={{ ['--marquee-dur' as string]: `${duration}s` }}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="t-label flex items-center shrink-0">
          <span className="text-ink-2">{item}</span>
          <span className="mx-6 text-ink-3 md:mx-10">/</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className={`marquee ${className}`.trim()} role="presentation">
      {track}
      {track}
    </div>
  )
}
