import { useTranslation } from 'react-i18next'
import { MapPin, GraduationCap, Calendar } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('about.title')} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-ink/80 text-lg leading-relaxed">
              {t('about.body')}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['AI Research', 'Computer Vision', 'NLP', 'RAG', 'PyTorch'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-mono rounded-full bg-base-100 border border-ink/10 text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="gradient-border rounded-2xl p-px">
              <div className="rounded-2xl bg-white p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-blue mt-0.5 shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-ink-muted font-mono uppercase tracking-wide mb-1">
                      {t('about.education_label')}
                    </p>
                    <p className="font-heading font-semibold text-ink">{t('about.education')}</p>
                    <p className="text-sm text-ink-muted mt-0.5">{t('about.degree')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <Calendar size={16} className="text-yellow shrink-0" />
                  {t('about.period')}
                </div>

                <div className="flex items-center gap-3 text-sm text-ink-muted">
                  <MapPin size={16} className="text-rose shrink-0" />
                  {t('about.location')}
                </div>

                <div className="pt-2 border-t border-ink/5">
                  <p className="text-sm text-ink-muted font-mono">📞 +62 813-3138-3599</p>
                  <p className="text-sm text-ink-muted font-mono">✉️ ahmadnaufalfarras@gmail.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
