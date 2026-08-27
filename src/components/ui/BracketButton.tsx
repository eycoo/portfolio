import SplitText from './SplitText'

interface BracketButtonProps {
  label: string
  href?: string
  onClick?: (e: React.MouseEvent) => void
  variant?: 'solid' | 'ghost'
  target?: string
  rel?: string
  className?: string
}

/** `[Label]` button with the letter-split hover from the reference. */
export default function BracketButton({
  label,
  href,
  onClick,
  variant = 'solid',
  target,
  rel,
  className = '',
}: BracketButtonProps) {
  const cls = `btn btn--${variant} split-trigger ${className}`.trim()

  const inner = (
    <>
      <span className="btn__bracket" aria-hidden="true">
        [
      </span>
      <SplitText text={label} />
      <span className="btn__bracket" aria-hidden="true">
        ]
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={cls}>
        {inner}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  )
}
