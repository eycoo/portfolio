interface StackWordProps {
  word: string
  className?: string
}

/** One letter per line, as in the reference's `Practice.` column. */
export default function StackWord({ word, className = '' }: StackWordProps) {
  return (
    <div className={`stackword ${className}`.trim()} aria-hidden="true">
      {Array.from(word).map((ch, i) => (
        <span key={`${ch}-${i}`}>{ch}</span>
      ))}
    </div>
  )
}
