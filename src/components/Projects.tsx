import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

type ProjectFilter = 'all' | 'professional' | 'academic'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Projects() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'academic') return project.type === 'Academic'
        return !project.type || project.type !== 'Academic'
      })

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          🚀 {t('projects.title', 'Featured Projects')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
        >
          {t(
            'projects.subtitle',
            'Here are some of my recent projects showcasing my skills in full-stack development and modern web technologies.'
          )}
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { id: 'all', label: t('projects.filters.all', 'All Projects'), icon: '📂' },
            { id: 'professional', label: t('projects.filters.professional', 'Professional'), icon: '💼' },
            { id: 'academic', label: t('projects.filters.academic', 'Academic'), icon: '🎓' }
          ].map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as ProjectFilter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-violet-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-violet-300 dark:border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="projects"
        >
          {filteredProjects.map((project, index) => {
            const title = t(`projects.items.${project.id}.title`, project.title)
            const description = t(
              `projects.items.${project.id}.description`,
              project.description
            )
            const typeLabel = project.type
              ? t(`projects.types.${project.type.toLowerCase()}`, project.type)
              : null

            return (
            <motion.article
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="project-card group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-video bg-slate-200 dark:bg-slate-700">
                <img
                  src={project.image} 
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                {project.type && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                    {typeLabel} • {project.year}
                  </div>
                )}
                {project.duration && (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-xs font-semibold backdrop-blur-sm">
                    ⏱️ {project.duration}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 line-clamp-2">
                {description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    className="flex-1 text-center px-4 py-2 rounded-lg bg-violet-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-violet-200 dark:hover:bg-slate-600 transition-colors text-sm font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.buttons.github', 'GitHub →')}
                  </a>
                )}
                <Link 
                  to={`/project/${project.id}`}
                  className={`${project.github ? 'flex-1' : 'w-full'} text-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all text-sm font-medium`}
                >
                  {t('projects.buttons.viewDetails', 'View Details →')}
                </Link>
              </div>
            </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
