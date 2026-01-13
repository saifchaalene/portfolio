import React from 'react'
import { motion } from 'framer-motion'
import resume from '../data/resume'
import { useTranslation } from 'react-i18next'

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5 }
  }
}

export default function Timeline() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          💼 {t('timeline.title', 'Experience & Education')}
        </motion.h2>

        <div className="mt-12 space-y-8">
          <div>
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="text-cyan-500 dark:text-cyan-400">🚀</span>
              <span className="text-slate-800 dark:text-slate-200">
                {t('timeline.work', 'Work Experience')}
              </span>
            </motion.h3>
            
            <div className="space-y-6">
              {resume.experience.map((item, index) => {
                const title = t(`experience.items.${item.id}.title`, item.title)
                const role = t(`experience.items.${item.id}.role`, item.role)
                const period = t(`experience.items.${item.id}.period`, item.period)
                const details = t(`experience.items.${item.id}.details`, {
                  returnObjects: true,
                  defaultValue: item.details,
                }) as string[]

                return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 dark:from-slate-800 dark:to-slate-900 border border-cyan-200/50 dark:border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{role}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-500 font-medium whitespace-nowrap">
                        📅 {period}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-slate-700 dark:text-slate-300">
                      {details.map((detail, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-cyan-600 dark:text-cyan-400 mt-1">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )})}
            </div>
          </div>

          <div className="mt-16">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <span className="text-cyan-500 dark:text-cyan-400">🎓</span>
              <span className="text-slate-800 dark:text-slate-200">
                {t('timeline.education', 'Education')}
              </span>
            </motion.h3>
            
            <div className="grid gap-6 md:grid-cols-2">
              {resume.education.map((edu, index) => {
                const title = t(`education.items.${edu.id}.title`, edu.title)
                const org = t(`education.items.${edu.id}.org`, edu.org)
                const period = t(`education.items.${edu.id}.period`, edu.period)
                const details = t(`education.items.${edu.id}.details`, {
                  returnObjects: true,
                  defaultValue: edu.details,
                }) as string[]

                return (
                <motion.div
                  key={edu.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-violet-200/50 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg text-slate-800 dark:text-slate-100">{title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{org}</p>
                    </div>
                  </div>
                  <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">📅 {period}</p>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {details.map((detail, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-cyan-600 dark:text-cyan-400">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
