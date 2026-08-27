import { useTranslation } from 'react-i18next'
import SectionHeader from '../ui/SectionHeader'
import SplitText from '../ui/SplitText'
import BracketButton from '../ui/BracketButton'
import Reveal from '../ui/Reveal'

const QUICK = ['projects', 'skills', 'about', 'experience', 'awards', 'contact'] as const

const NETWORKS = [
  { label: 'GitHub', href: 'https://github.com/eycoo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmad-naufal-farras-182327340/' },
  { label: 'WhatsApp', href: 'https://wa.me/6281331383599' },
  { label: 'Email', href: 'mailto:ahmadnaufalfarras@gmail.com' },
]

export default function Footer() {
  const { t } = useTranslation()
  const traits = t('footer.traits', { returnObjects: true }) as string[]

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="pb-10">
      <div className="shell">
        <SectionHeader
          eyebrow={t('footer.eyebrow')}
          code="(ANF® — 09)"
          tag={t('footer.tag')}
        />

        <div className="grid grid-cols-1 gap-12 pt-10 pb-16 lg:grid-cols-12 lg:gap-10 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                {traits.map((trait) => (
                  <li key={trait} className="t-label text-ink-3">
                    {trait}
                  </li>
                ))}
              </ul>

              <p className="t-h3 mt-8 max-w-[34ch] text-ink-2 lg:max-w-[26ch]">
                {t('footer.statement')}
              </p>

              <div className="mt-10">
                <BracketButton
                  label={t('footer.top')}
                  variant="ghost"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <p className="t-label mb-6 text-ink-3">{t('nav.quick')}</p>
              <ul className="space-y-3">
                {QUICK.map((id) => (
                  <li key={id}>
                    <button
                      type="button"
                      onClick={() => goTo(id)}
                      className="split-trigger t-sm cursor-pointer text-ink-2 transition-colors duration-500 hover:text-ink"
                    >
                      <SplitText text={t(`nav.${id}`)} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="t-label mb-6 text-ink-3">{t('nav.networks')}</p>
              <ul className="space-y-3">
                {NETWORKS.map((n) => (
                  <li key={n.label}>
                    <a
                      href={n.href}
                      target={n.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="split-trigger t-sm inline-block text-ink-2 transition-colors duration-500 hover:text-ink"
                    >
                      <SplitText text={n.label} />
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
