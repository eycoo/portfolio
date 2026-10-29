import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/ui/SectionHeader'
import { awards } from '../data/awards'

export default function Awards() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language as 'en' | 'id'
  const [lightbox, setLightbox] = useState<{ image: string; event: string } | null>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const certificateTrigger = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const trigger = certificateTrigger.current
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setLightbox(null)
      }
      if (event.key === 'Tab') {
        event.preventDefault()
        closeButton.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
      trigger?.focus()
    }
  }, [lightbox])

  return (
    <section id="awards" className="section">
      <div className="shell">
        <SectionHeader
          eyebrow={t('awards.eyebrow')}
          tag={t('awards.tag')}
        />

        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="min-w-0 lg:col-span-6">
              <h2 className="t-h1 text-ink">
                {t('awards.heading')}
                <span className="t-label ml-4 align-super text-ink-3">
                  ({String(awards.length).padStart(2, '0')})
                </span>
              </h2>
          </div>

          <div className="min-w-0 lg:col-span-6">
              <p className="t-lead max-w-[470px] text-ink-2">{t('awards.body')}</p>
          </div>
        </div>

        <ul className="border-b border-line">
          {awards.map((award, i) => (
            <li key={`${award.event}-${award.year}`} className="hair row">
                <div className="grid grid-cols-1 gap-3 py-7 lg:grid-cols-12 lg:items-baseline lg:gap-6 lg:py-9">
                  <div className="lg:col-span-1">
                    <span className="t-label text-ink-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="min-w-0 lg:col-span-4">
                    <h3 className="t-h3 row__title break-words text-ink">{award.title[lang]}</h3>
                  </div>

                  <div className="min-w-0 lg:col-span-5">
                    <p className="t-sm break-words text-ink-2">{award.event}</p>
                    {award.image && (
                      <button
                        type="button"
                        onClick={(event) => {
                          if (!award.image) return
                          certificateTrigger.current = event.currentTarget
                          setLightbox({ image: award.image, event: award.event })
                        }}
                        aria-haspopup="dialog"
                        className="t-label mt-3 min-h-11 cursor-pointer text-ink-3 transition-colors duration-500 hover:text-ink"
                      >
                        {t('awards.view_cert')}
                      </button>
                    )}
                  </div>

                  <div className="lg:col-span-2 lg:text-right">
                    <span className="t-label text-ink-3">{award.year}</span>
                  </div>
                </div>
            </li>
          ))}
        </ul>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="award-certificate-title"
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-base/95 p-6 pt-24"
          onClick={(event) => {
            if (event.target === event.currentTarget) setLightbox(null)
          }}
        >
          <h3 id="award-certificate-title" className="sr-only">
            {t('awards.cert_alt')}: {lightbox.event}
          </h3>
          <img
            src={lightbox.image}
            alt={`${t('awards.cert_alt')}: ${lightbox.event}`}
            className="max-h-[75dvh] max-w-full rounded-brand object-contain"
          />
          <button
            ref={closeButton}
            type="button"
            onClick={() => setLightbox(null)}
            className="t-label absolute top-6 right-6 min-h-11 cursor-pointer rounded-brand border border-line-2 bg-base px-4 text-ink"
          >
            {t('awards.close')}
          </button>
        </div>
      )}
    </section>
  )
}
