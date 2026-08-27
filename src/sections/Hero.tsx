import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion } from 'framer-motion'
import Marquee from '../components/ui/Marquee'
import SectionHeader from '../components/ui/SectionHeader'
import BracketButton from '../components/ui/BracketButton'

export default function Hero() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()

  const lines = t('hero.lines', { returnObjects: true }) as string[]
  const marquee = t('hero.marquee', { returnObjects: true }) as string[]
  const roles = t('hero.roles', { returnObjects: true }) as string[]

  function goTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="pt-16">
      <div className="shell">
        <div className="hair-b flex flex-col gap-1 py-4 md:flex-row md:items-center md:justify-between">
          <p className="t-label text-ink-2">{t('meta.based')}</p>
          <p className="t-label text-ink-3">{t('meta.role')}</p>
        </div>
      </div>

      <div className="hair-b py-4">
        <Marquee items={marquee} duration={42} />
      </div>

      <div className="shell">
        <h1 className="t-display pt-[clamp(40px,6vw,90px)] text-ink">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: '0.22em' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.08 + i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="t-h1 mt-6 mb-[clamp(48px,7vw,110px)] text-right text-ink"
        >
          Farras<span className="text-ink-3">™</span>
        </motion.p>

        <SectionHeader
          eyebrow={t('hero.eyebrow')}
          code="(ANF® — 02)"
          tag={t('hero.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <ul className="lg:col-span-4">
            {roles.map((role) => (
              <li key={role} className="t-body py-1 text-ink-2">
                {role}
              </li>
            ))}
          </ul>

          <div className="lg:col-span-8">
            <p className="t-lead max-w-[470px] text-ink">{t('hero.subtitle')}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <BracketButton
                label={t('hero.cta_contact')}
                onClick={() => goTo('contact')}
              />
              <BracketButton
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
