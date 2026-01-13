import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import fr from './locales/fr/translation.json'

const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('lang') : null
const initialLanguage = savedLanguage || 'en'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: initialLanguage,
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  interpolation: { escapeValue: false },
  returnNull: false,
  react: { useSuspense: false },
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = initialLanguage
}

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lng)
  }
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng
  }
})

export default i18n
