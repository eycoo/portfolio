import { useTranslation } from 'react-i18next'
import { MapPin, GraduationCap, Calendar } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-28 px-6" style={{ background: '#EEF2FF' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('about.title')} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(15,23,42,0.78)' }}>
              {t('about.body')}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {['AI Research', 'Computer Vision', 'NLP', 'RAG', 'SNN', 'PyTorch'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-mono rounded-full"
                  style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', color: '#6366F1' }}
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
                  <GraduationCap size={20} className="mt-0.5 shrink-0" style={{ color: '#6366F1' }} />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide mb-1" style={{ color: '#64748B' }}>
                      {t('about.education_label')}
                    </p>
                    <p className="font-heading font-semibold text-ink">{t('about.education')}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>{t('about.degree')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm" style={{ color: '#64748B' }}>
                  <Calendar size={16} className="shrink-0" style={{ color: '#F59E0B' }} />
                  {t('about.period')}
                </div>

                <div className="flex items-center gap-3 text-sm" style={{ color: '#64748B' }}>
                  <MapPin size={16} className="shrink-0" style={{ color: '#EC4899' }} />
                  {t('about.location')}
                </div>

                <div className="pt-3" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
                  <p className="text-sm font-mono" style={{ color: '#64748B' }}>📞 +62 813-3138-3599</p>
                  <p className="text-sm font-mono" style={{ color: '#64748B' }}>✉️ ahmadnaufalfarras@gmail.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
