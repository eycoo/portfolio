import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/ui/SectionHeader'
import Reveal from '../components/ui/Reveal'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const traits = t('skills.traits', { returnObjects: true }) as string[]

  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('skills.eyebrow')}
          code="(ANF® — 04)"
          tag={t('skills.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="t-h1 text-ink">
                {t('skills.heading')}
                <span className="t-label ml-4 align-super text-ink-3">
                  ({String(skillCategories.length).padStart(2, '0')})
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.08}>
              <ul className="flex flex-wrap gap-x-8 gap-y-2">
                {traits.map((trait) => (
                  <li key={trait} className="t-label text-ink-3">
                    {trait}
                  </li>
                ))}
              </ul>
              <p className="t-lead mt-6 max-w-[470px] text-ink-2">{t('skills.body')}</p>
            </Reveal>
          </div>
        </div>

        <ul className="border-b border-line">
          {skillCategories.map((category, i) => (
            <li key={category.name.en} className="hair row">
              <Reveal delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-4 py-7 lg:grid-cols-12 lg:gap-6 lg:py-9">
                  <div className="lg:col-span-1">
                    <span className="t-label text-ink-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="t-h3 row__title text-ink">{category.name[lang]}</h3>
                  </div>

                  <div className="lg:col-span-7">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2">
                      {category.skills.map((skill) => (
                        <li key={skill} className="t-sm text-ink-2">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
