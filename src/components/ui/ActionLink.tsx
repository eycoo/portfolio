interface ActionLinkProps {
  label: string
  href: string
  variant?: 'solid' | 'ghost'
  target?: string
  rel?: string
  className?: string
}

export default function ActionLink({
  label,
  href,
  variant = 'solid',
  target,
  rel,
  className = '',
}: ActionLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`btn btn--${variant} ${className}`.trim()}
    >
      {label}
    </a>
  )
}
