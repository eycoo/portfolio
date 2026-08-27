interface SectionHeaderProps {
  /** e.g. `© Featured Projects プロジェクト` */
  eyebrow: string
  /** e.g. `(ANF® — 03)` */
  code: string
  /** e.g. `Applied Research` */
  tag: string
}

/** The three-part meta row that opens every section in the reference. */
export default function SectionHeader({ eyebrow, code, tag }: SectionHeaderProps) {
  return (
    <div className="hair grid grid-cols-1 gap-2 py-5 md:grid-cols-3 md:items-center md:gap-6">
      <p className="t-label text-ink">{eyebrow}</p>
      <p className="t-label text-ink-3 md:text-center">{code}</p>
      <p className="t-label text-ink-2 md:text-right">{tag}</p>
    </div>
  )
}
