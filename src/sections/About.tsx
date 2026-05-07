import { useTranslation } from 'react-i18next'
import { MapPin, GraduationCap, Calendar } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-28 px-6" style={{ background: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t('about.title')} />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — photo + bio */}
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row md:flex-col gap-6 items-start">
              {/* Profile photo */}
              <div className="shrink-0">
                <img
                  src="/portfolio/images/profile/farras.jpg"
                  alt="Ahmad Naufal Farras"
                  className="w-28 h-28 rounded-2xl object-cover"
                  style={{ border: '1px solid #E5E5E5' }}
                />
              </div>

              <div>
                <p className="text-lg leading-relaxed" style={{ color: '#525252' }}>
                  {t('about.body')}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['AI Research', 'Computer Vision', 'NLP', 'RAG', 'SNN', 'PyTorch'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-mono rounded-full"
                      style={{ background: '#FFFFFF', border: '1px solid #E5E5E5', color: '#525252' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — education card */}
          <Reveal delay={0.2}>
            <div className="gradient-border rounded-2xl p-px">
              <div className="rounded-2xl bg-white p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <GraduationCap size={20} className="mt-0.5 shrink-0" style={{ color: '#0A0A0A' }} />
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest mb-1" style={{ color: '#A3A3A3' }}>
                      {t('about.education_label')}
                    </p>
                    <p className="font-heading font-semibold" style={{ color: '#0A0A0A' }}>{t('about.education')}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#737373' }}>{t('about.degree')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm" style={{ color: '#737373' }}>
                  <Calendar size={16} className="shrink-0" style={{ color: '#525252' }} />
                  {t('about.period')}
                </div>

                <div className="flex items-center gap-3 text-sm" style={{ color: '#737373' }}>
                  <MapPin size={16} className="shrink-0" style={{ color: '#525252' }} />
                  {t('about.location')}
                </div>

                <div className="pt-3" style={{ borderTop: '1px solid #F5F5F5' }}>
                  <p className="text-sm font-mono" style={{ color: '#A3A3A3' }}>📞 +62 813-3138-3599</p>
                  <p className="text-sm font-mono" style={{ color: '#A3A3A3' }}>✉️ ahmadnaufalfarras@gmail.com</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
