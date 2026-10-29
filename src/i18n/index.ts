import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import id from './id.json'

i18n
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, id: { translation: id } },
    lng: 'id',
    fallbackLng: 'id',
    interpolation: { escapeValue: false },
  })
  .then(() => {
    document.documentElement.lang = i18n.resolvedLanguage ?? 'id'
  })

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language
})

export default i18n
