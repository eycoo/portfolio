import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/ui/SectionHeader'

const CHANNELS = [
  {
    key: 'email',
    href: 'mailto:ahmadnaufalfarras@gmail.com',
    value: 'ahmadnaufalfarras@gmail.com',
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/in/ahmad-naufal-farras-182327340/',
    value: 'ahmad-naufal-farras',
  },
  {
    key: 'github',
    href: 'https://github.com/eycoo',
    value: 'github.com/eycoo',
  },
  {
    key: 'wa',
    href: 'https://wa.me/6281331383599',
    value: '+62 813-3138-3599',
  },
] as const

export default function Contact() {
  const { t } = useTranslation()
  const lines = t('contact.lines', { returnObjects: true }) as string[]

  return (
    <section id="contact" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('contact.eyebrow')}
          tag={t('contact.tag')}
        />

        <h2 className="t-h1 max-w-[16ch] pt-10 text-ink lg:pt-16">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

          <p className="t-lead mt-8 max-w-[470px] text-ink-2">{t('contact.subtitle')}</p>

        <ul className="mt-14 border-b border-line lg:mt-20">
          {CHANNELS.map((channel, i) => (
            <li key={channel.key} className="hair row">
              <a
                href={channel.href}
                target={channel.key === 'email' ? undefined : '_blank'}
                rel="noreferrer"
                className="grid grid-cols-1 items-baseline gap-2 py-7 lg:grid-cols-12 lg:gap-6 lg:py-9"
              >
                <div className="lg:col-span-1">
                  <span className="t-label text-ink-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="min-w-0 lg:col-span-5">
                  <h3 className="t-h3 row__title break-words text-ink-2">
                    {t('contact.' + channel.key + '_btn')}
                  </h3>
                </div>

                <div className="min-w-0 lg:col-span-6 lg:text-right">
                  <span className="t-sm break-words text-ink-3">{channel.value}</span>
                  {channel.href.startsWith('https://') && (
                    <span aria-hidden="true" className="t-sm ml-4 text-ink-3">&#8599;</span>
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
