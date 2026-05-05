import { useTranslation } from 'react-i18next'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-ink/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
        <p>© 2025 Ahmad Naufal Farras · {t('footer.built')}</p>
        <a
          href="https://github.com/eycoo/portfolio"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 hover:text-ink transition-colors"
        >
          <FaGithub size={16} />
          {t('footer.source')}
        </a>
      </div>
    </footer>
  )
}
