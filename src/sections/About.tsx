import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/ui/SectionHeader'
import BracketButton from '../components/ui/BracketButton'
import Reveal from '../components/ui/Reveal'

export default function About() {
  const { t } = useTranslation()

  const details = [
    { label: t('about.education_label'), value: t('about.education') },
    { label: t('about.degree_label'), value: t('about.degree') },
    { label: t('about.period_label'), value: t('about.period') },
    { label: t('about.location_label'), value: t('about.location') },
    { label: t('about.email_label'), value: 'ahmadnaufalfarras@gmail.com' },
    { label: t('about.phone_label'), value: '+62 813-3138-3599' },
  ]

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('about.eyebrow')}
          code="(ANF® — 05)"
          tag={t('about.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="grain relative overflow-hidden rounded-brand">
                <img
                  src="/portfolio/images/profile/farras.jpg"
                  alt="Ahmad Naufal Farras"
                  loading="lazy"
                  className="filmic aspect-[4/5] w-full max-w-[470px] object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.08}>
              <p className="t-h3 max-w-[870px] text-ink">{t('about.body')}</p>

              <dl className="mt-12 border-b border-line">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="hair grid grid-cols-1 gap-1 py-4 md:grid-cols-12 md:gap-6"
                  >
                    <dt className="t-label text-ink-3 md:col-span-4">{detail.label}</dt>
                    <dd className="t-sm m-0 text-ink-2 md:col-span-8">{detail.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <BracketButton
                  label={t('about.cta_works')}
                  onClick={() => goTo('projects')}
                />
                <BracketButton
                  label={t('hero.cta_cv')}
                  variant="ghost"
                  href="/portfolio/cv/CV_Ahmad_Naufal_Farras_5054241038-2.pdf"
                  target="_blank"
                  rel="noreferrer"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
