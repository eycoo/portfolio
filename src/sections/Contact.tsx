import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

const contactLinks = [
  {
    key: 'email',
    icon: <Mail size={22} />,
    href: 'mailto:ahmadnaufalfarras@gmail.com',
    label: 'email_btn',
    value: 'ahmadnaufalfarras@gmail.com',
    color: '#FF6B6B',
  },
  {
    key: 'linkedin',
    icon: <FaLinkedin size={22} />,
    href: 'https://www.linkedin.com/in/ahmad-naufal-farras-182327340/',
    label: 'linkedin_btn',
    value: 'ahmad-naufal-farras',
    color: '#4D96FF',
  },
  {
    key: 'github',
    icon: <FaGithub size={22} />,
    href: 'https://github.com/eycoo',
    label: 'github_btn',
    value: 'github.com/eycoo',
    color: '#1A1A1A',
  },
  {
    key: 'wa',
    icon: <FaWhatsapp size={22} />,
    href: 'https://wa.me/6281331383599',
    label: 'wa_btn',
    value: '+62 813-3138-3599',
    color: '#6BCB77',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-6 bg-base-100">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle title={t('contact.title')} />

        <Reveal delay={0.1}>
          <p className="text-ink-muted text-lg mb-12">{t('contact.subtitle')}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <Reveal key={link.key} delay={i * 0.08}>
              <motion.a
                href={link.href}
                target={link.key !== 'email' ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.04, y: -4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4 bg-white rounded-2xl border border-ink/8 p-5 text-left hover:shadow-lg transition-shadow group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: link.color + '18', color: link.color }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="font-heading font-semibold text-ink text-sm">{t(`contact.${link.label}`)}</p>
                  <p className="text-xs text-ink-muted font-mono mt-0.5">{link.value}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
