import Reveal from './Reveal'

interface SectionTitleProps {
  title: string
  accent?: string
}

export default function SectionTitle({ title, accent }: SectionTitleProps) {
  return (
    <Reveal>
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-ink">
          {title}
          {accent && <span className="gradient-text"> {accent}</span>}
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-linear-to-r from-rose via-yellow to-blue" />
      </div>
    </Reveal>
  )
}
