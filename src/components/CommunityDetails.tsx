import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// Only 2 photos (your real ones)
const galleryImages = [
  `${import.meta.env.BASE_URL}assets/images/chess/chess-1.jpg`,
  `${import.meta.env.BASE_URL}assets/images/chess/chess-2.jpg`,
]

// CV-aligned: one activity (President)
const activities = [
  {
    id: 1,
    role: 'President',
    organization: 'ChessSpirit Club (ESPRIT)',
    year: 'ESPRIT',
    description:
      'Organized chess tournaments and training sessions to improve members’ competitive level and engagement.',
    responsibilities: [
      'Planned and ran tournaments (format, pairings, rounds, results)',
      'Managed registrations and match scheduling',
      'Facilitated training sessions (tactics, openings, endgames)',
      'Mentored beginners and supported intermediate players',
      'Coordinated with club members to ensure smooth event execution',
    ],
    icon: '♟️',
    color: 'from-emerald-500/10 to-cyan-500/10',
  },
]

// Simple, CV-friendly highlights (no fake big numbers)
const highlights = [
  {
    title: 'Tournaments Organization',
    description:
      'Prepared tournaments from start to finish: registrations, pairings, scheduling, and results.',
    icon: '🏆',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Training Sessions',
    description:
      'Led structured sessions around tactics, opening principles, and endgame fundamentals.',
    icon: '📚',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Team & Club Engagement',
    description:
      'Encouraged participation and a positive learning environment for different skill levels.',
    icon: '🤝',
    color: 'from-emerald-400 to-teal-500',
  },
]

export default function CommunityDetails() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-emerald-50 via-cyan-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container max-w-6xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">{t('communityDetails.backToHome', 'Back to Home')}</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            ♟️ {t('communityDetails.title', 'Activities')}
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            {t(
              'communityDetails.subtitle',
              'President at ChessSpirit Club (ESPRIT). I organized tournaments and training sessions to help members improve their skills and stay engaged through consistent practice and competition.'
            )}
          </p>
        </motion.div>

        {/* Featured Section (uses your first photo) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

            <div className="relative glass-card border-2 border-emerald-500/30 dark:border-emerald-500/20 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden rounded-xl">
                  <img
                    src={galleryImages[0]}
                    alt={t('communityDetails.featuredImageAlt', 'ChessSpirit Club activity')}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-4xl shadow-lg">
                      ♟️
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                        {t('communityDetails.featuredTitle', 'President — ChessSpirit Club')}
                      </h2>
                      <p className="text-xl text-cyan-700 dark:text-cyan-400 font-semibold">
                        {t('communityDetails.featuredOrg', 'ESPRIT')}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {t(
                      'communityDetails.featuredDescription',
                      'Organized chess tournaments and structured training sessions. Focused on improving performance, building consistency, and keeping a friendly competitive spirit inside the club.'
                    )}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-slate-700/60">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('communityDetails.featuredCard1Title', 'Tournaments')}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('communityDetails.featuredCard1Body', 'Pairings, schedules, rounds, results')}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200/60 dark:border-slate-700/60">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {t('communityDetails.featuredCard2Title', 'Training')}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {t('communityDetails.featuredCard2Body', 'Tactics, openings, endgames')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            ✨ {t('communityDetails.highlightsTitle', 'Highlights')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((h, index) => {
              const title = t(`communityDetails.highlights.${index + 1}.title`, h.title)
              const description = t(
                `communityDetails.highlights.${index + 1}.description`,
                h.description
              )
              return (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                    {h.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Role Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            📋 {t('communityDetails.roleDetailsTitle', 'Role Details')}
          </h2>

          <div className="space-y-6">
            {activities.map((role, index) => {
              const title = t(`communityDetails.activities.items.${role.id}.role`, role.role)
              const organization = t(`communityDetails.activities.items.${role.id}.organization`, role.organization)
              const year = t(`communityDetails.activities.items.${role.id}.year`, role.year)
              const description = t(
                `communityDetails.activities.items.${role.id}.description`,
                role.description
              )
              const responsibilities = t(
                `communityDetails.activities.items.${role.id}.responsibilities`,
                { returnObjects: true, defaultValue: role.responsibilities }
              ) as string[]

              return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.45 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative glass-card">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 dark:from-emerald-500/20 dark:to-cyan-500/20 flex items-center justify-center text-4xl border border-emerald-500/40 dark:border-emerald-500/25 flex-shrink-0">
                        {role.icon}
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 text-sm font-medium whitespace-nowrap">
                        🏫 {year}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                        {title}
                      </h3>
                      <p className="text-cyan-700 dark:text-cyan-400 font-medium mb-4">{organization}</p>

                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        {description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          {t('communityDetails.responsibilitiesTitle', 'Key Responsibilities')}
                        </h4>
                        <ul className="space-y-2">
                          {responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-cyan-600 dark:text-cyan-400 mt-1 flex-shrink-0">•</span>
                              <span className="text-slate-600 dark:text-slate-400 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>
        </motion.div>

        {/* Photo Gallery (ONLY your 2 images) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="glass-card"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            📷 {t('communityDetails.photosTitle', 'Photos')}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={t('communityDetails.photoAlt', {
                    index: index + 1,
                    defaultValue: `ChessSpirit photo ${index + 1}`,
                  })}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  {t('communityDetails.photoCta', 'Click to view')}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors text-4xl font-light"
                  aria-label={t('communityDetails.lightboxClose', 'Close')}
                >
                  ×
                </button>

                <img
                  src={selectedImage}
                  alt={t('communityDetails.galleryPreviewAlt', 'Gallery preview')}
                  className="w-full h-full object-contain rounded-xl"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.indexOf(selectedImage)
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
                      setSelectedImage(galleryImages[prevIndex])
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {t('communityDetails.lightboxPrevious', '← Previous')}
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.indexOf(selectedImage)
                      const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
                      setSelectedImage(galleryImages[nextIndex])
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {t('communityDetails.lightboxNext', 'Next →')}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
