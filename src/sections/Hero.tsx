import { useTranslation } from 'react-i18next'
import ActionLink from '../components/ui/ActionLink'

export default function Hero() {
  const { t } = useTranslation()
  const roles = t('hero.roles', { returnObjects: true }) as string[]

  return (
    <section id="top" className="hero pt-16">
      <div className="shell">
        <div className="hair-b flex flex-col gap-1 py-4 md:flex-row md:items-center md:justify-between">
          <p className="t-label text-ink-2">{t('meta.based')}</p>
          <p className="t-label text-ink-3">{t('meta.role')}</p>
        </div>
      </div>

      <div className="shell">
        <h1 className="t-display hero__name">
          <span className="block">Ahmad Naufal</span>
          <span className="block text-accent">Farras.</span>
        </h1>

        <div className="hero__intro grid grid-cols-1 gap-8 py-10 md:grid-cols-2 md:gap-12 lg:py-14">
          <ul className="text-ink-2">
            {roles.map((role) => (
              <li key={role} className="t-body py-1 text-ink-2">
                {role}
              </li>
            ))}
          </ul>

          <div>
            <p className="t-lead max-w-[470px] text-ink">{t('hero.subtitle')}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink
                label={t('hero.cta_contact')}
                href="#contact"
              />
              <ActionLink
                label={t('hero.cta_cv')}
                variant="ghost"
                href="/portfolio/cv/CV_Ahmad_Naufal_Farras_5054241038-2.pdf"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
