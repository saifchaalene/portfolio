import React from 'react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'EN', nameKey: 'languageSwitcher.english', fallback: 'English' },
  { code: 'fr', label: 'FR', nameKey: 'languageSwitcher.french', fallback: 'French' },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const currentLanguage = (i18n.language || 'en').split('-')[0]

  return (
    <div className="flex items-center gap-2">
      <span className="sr-only">{t('languageSwitcher.label', 'Language')}</span>
      <div className="flex items-center rounded-lg border border-cyan-400/20 bg-white/70 dark:bg-slate-800/70 p-1">
        {languages.map((lang) => {
          const isActive = currentLanguage === lang.code
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => i18n.changeLanguage(lang.code)}
              aria-pressed={isActive}
              aria-label={t('languageSwitcher.switchTo', {
                language: t(lang.nameKey, lang.fallback),
                defaultValue: `Switch language to ${lang.fallback}`,
              })}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                isActive
                  ? 'bg-cyan-500 text-white'
                  : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              {lang.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
