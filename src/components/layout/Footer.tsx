import { useTranslation } from 'react-i18next'
import SectionHeader from '../ui/SectionHeader'
import ActionLink from '../ui/ActionLink'

const QUICK = ['projects', 'skills', 'about', 'experience', 'awards', 'contact'] as const

const NETWORKS = [
  { label: 'GitHub', href: 'https://github.com/eycoo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmad-naufal-farras-182327340/' },
  { label: 'WhatsApp', href: 'https://wa.me/6281331383599' },
  { label: 'Email', href: 'mailto:ahmadnaufalfarras@gmail.com' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="pb-10">
      <div className="shell">
        <SectionHeader
          eyebrow={t('footer.eyebrow')}
          tag={t('footer.tag')}
        />

        <div className="grid grid-cols-1 gap-12 pt-10 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
          <div className="min-w-0 lg:col-span-7">
              <p className="t-h3 max-w-[34ch] break-words text-ink-2 lg:max-w-[26ch]">
                {t('footer.statement')}
              </p>

              <div className="mt-10">
                <ActionLink
                  label={t('footer.top')}
                  variant="ghost"
                  href="#top"
                />
              </div>
          </div>

          <div className="grid min-w-0 grid-cols-2 gap-6 lg:col-span-5 lg:gap-8">
            <div className="min-w-0">
              <p className="t-label mb-6 text-ink-3">{t('nav.quick')}</p>
              <ul>
                {QUICK.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="t-sm inline-flex min-h-11 items-center cursor-pointer break-words text-left text-ink-2 transition-colors duration-500 hover:text-ink"
                    >
                      {t(`nav.${id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0">
              <p className="t-label mb-6 text-ink-3">{t('nav.networks')}</p>
              <ul>
                {NETWORKS.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      target={n.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="t-sm inline-flex min-h-11 items-center break-words text-ink-2 transition-colors duration-500 hover:text-ink"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hair flex flex-col gap-3 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="t-label text-ink-3">©2026 Ahmad Naufal Farras</p>
          <p className="t-label text-ink-3">{t('footer.built')}</p>
        </div>
      </div>
    </footer>
  )
}
