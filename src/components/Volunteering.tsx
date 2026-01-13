import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const activities = [
  {
    id: 1,
    role: 'President',
    organization: 'ChessSpirit Club (ESPRIT)',
    year: 'ESPRIT',
    description:
      'Organized internal and inter-school chess tournaments, managed event logistics including registrations, match schedules, and coordination with participants. Led regular training sessions focused on tactical skills, opening strategies, and competitive play. Mentored club members, supported beginner and intermediate players, and promoted strategic thinking, discipline, and teamwork.',
    icon: '♟️',
    color: 'from-emerald-500/10 to-cyan-500/10'
  }
]

export default function Volunteering() {
  const { t } = useTranslation()

  return (
    <section id="volunteering" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          🎯 {t('volunteering.title', 'Activities')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
          {t(
            'volunteering.subtitle',
            'Leadership and organizational experience through student club activities, focused on coordination, mentoring, and community engagement.'
          )}
        </motion.p>

        <div className="max-w-4xl mx-auto space-y-6">
          {activities.map((item, index) => {
            const role = t(`volunteering.items.${item.id}.role`, item.role)
            const organization = t(`volunteering.items.${item.id}.organization`, item.organization)
            const year = t(`volunteering.items.${item.id}.year`, item.year)
            const description = t(`volunteering.items.${item.id}.description`, item.description)

            return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-cyan-100 dark:from-slate-800 dark:to-slate-900 border border-emerald-200/50 dark:border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 dark:from-emerald-500/20 dark:to-cyan-500/20 flex items-center justify-center text-4xl border border-emerald-500/50 dark:border-emerald-500/30">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {role}
                        </h3>
                        <p className="text-cyan-700 dark:text-cyan-400 font-medium mt-1">
                          {organization}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 text-sm font-medium">
                        <span>🏫</span>
                        {year}
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>

        {/* Impact (real, meaningful) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              {t('volunteering.metrics.tournaments', 'Tournaments Organized')}
            </p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              {t('volunteering.metrics.trainingSessions', 'Training Sessions Led')}
            </p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              30+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
              {t('volunteering.metrics.members', 'Active Club Members')}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/community-involvement"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-600 text-white hover:from-emerald-400 hover:to-cyan-500 transition-all text-lg font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105 duration-300"
          >
            <span>{t('volunteering.cta', 'View Activity Details')}</span>
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
