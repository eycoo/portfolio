import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Mail } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'

const contactLinks = [
  {
    key: 'email',
    icon: <Mail size={20} />,
    href: 'mailto:ahmadnaufalfarras@gmail.com',
    label: 'email_btn',
    value: 'ahmadnaufalfarras@gmail.com',
    color: '#0A0A0A',
  },
  {
    key: 'linkedin',
    icon: <FaLinkedin size={20} />,
    href: 'https://www.linkedin.com/in/ahmad-naufal-farras-182327340/',
    label: 'linkedin_btn',
    value: 'ahmad-naufal-farras',
    color: '#262626',
  },
  {
    key: 'github',
    icon: <FaGithub size={20} />,
    href: 'https://github.com/eycoo',
    label: 'github_btn',
    value: 'github.com/eycoo',
    color: '#525252',
  },
  {
    key: 'wa',
    icon: <FaWhatsapp size={20} />,
    href: 'https://wa.me/6281331383599',
    label: 'wa_btn',
    value: '+62 813-3138-3599',
    color: '#737373',
  },
]

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 px-6" style={{ background: '#F5F5F5' }}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle title={t('contact.title')} />

        <Reveal delay={0.1}>
          <p className="text-lg mb-12" style={{ color: '#737373' }}>{t('contact.subtitle')}</p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => (
            <Reveal key={link.key} delay={i * 0.08}>
              <motion.a
                href={link.href}
                target={link.key !== 'email' ? '_blank' : undefined}
                rel="noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 text-left group"
                style={{ border: '1px solid #E5E5E5', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'; (e.currentTarget as HTMLElement).style.borderColor = '#0A0A0A' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)'; (e.currentTarget as HTMLElement).style.borderColor = '#E5E5E5' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: link.color, color: '#FFFFFF' }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm" style={{ color: '#0A0A0A' }}>{t(`contact.${link.label}`)}</p>
                  <p className="text-xs font-mono mt-0.5" style={{ color: '#A3A3A3' }}>{link.value}</p>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
