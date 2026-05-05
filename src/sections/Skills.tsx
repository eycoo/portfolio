import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'

  return (
    <section id="skills" className="py-28 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('skills.title')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.name.en} delay={ci * 0.08}>
              <div className="rounded-2xl bg-white border border-ink/5 p-6 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
                  <h3 className="font-heading font-semibold text-sm text-ink-muted uppercase tracking-wide">
                    {cat.name[lang]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.05 + si * 0.03, ease: 'backOut' }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg border"
                      style={{
                        borderColor: cat.color + '40',
                        background: cat.color + '10',
                        color: cat.color,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
