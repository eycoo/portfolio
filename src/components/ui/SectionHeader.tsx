interface SectionHeaderProps {
  eyebrow: string
  tag: string
}

export default function SectionHeader({ eyebrow, tag }: SectionHeaderProps) {
  return (
    <div className="hair flex flex-wrap items-baseline justify-between gap-3 py-5">
      <p className="t-label text-ink">{eyebrow}</p>
      <p className="t-label text-ink-2">{tag}</p>
    </div>
  )
}
