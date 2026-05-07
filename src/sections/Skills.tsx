import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('skills.title')} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.name.en} delay={ci * 0.08}>
              <div
                className="rounded-2xl bg-white border p-6 h-full"
                style={{ borderColor: 'rgba(15,23,42,0.07)', boxShadow: '0 1px 3px rgba(15,23,42,0.04)' }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-widest" style={{ color: '#94A3B8' }}>
                    {cat.name[lang]}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.04 + si * 0.025, ease: 'backOut' }}
                      whileHover={{ scale: 1.07, y: -2 }}
                      className="px-3 py-1.5 text-sm font-mono rounded-lg"
                      style={{
                        borderColor: cat.color + '35',
                        border: `1px solid ${cat.color}35`,
                        background: cat.color + '0D',
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
