import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { projects, type Project } from '../data/projects'
import { motion } from 'framer-motion'

export default function ProjectDetails() {
  const { projectId } = useParams<{ projectId: string }>()
  const navigate = useNavigate()
  
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container max-w-5xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mb-8"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100">
              {project.title}
            </h1>
            {project.type && (
              <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 font-semibold text-sm">
                {project.type} • {project.year}
              </span>
            )}
            {project.duration && (
              <span className="px-4 py-1.5 rounded-full bg-violet-500/20 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border border-violet-500/30 dark:border-violet-500/20 font-semibold text-sm">
                ⏱️ {project.duration}
              </span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
            {project.description}
          </p>

          {project.detailedDescription && (
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 border border-cyan-200 dark:border-slate-700">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6 p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-violet-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                📊 Key Metrics & Impact
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.metrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-900/30"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xl mt-0.5">✓</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wide">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a 
                href={project.github}
                className="px-6 py-3 rounded-lg bg-violet-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-violet-200 dark:hover:bg-slate-600 transition-colors font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo →
              </a>
            )}
          </div>
        </motion.div>

        {/* Project Images/Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
        >
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            📸 Project Overview
          </h2>
          
          {/* Main Project Image */}
          <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-slate-200 dark:bg-slate-700">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                ✨ Key Features
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-cyan-200 dark:border-slate-700 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                  >
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold text-lg mt-0.5 flex-shrink-0">•</span>
                    <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Placeholder */}
          {(!project.keyFeatures || project.keyFeatures.length === 0) && (
            <>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-blue-50 dark:bg-slate-800 border-2 border-dashed border-cyan-300 dark:border-cyan-700">
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    📷 Additional screenshots will be added here
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50 dark:bg-slate-800 border-2 border-dashed border-cyan-300 dark:border-cyan-700">
                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    🎥 Demo videos or more images will be added here
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-violet-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-violet-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3">
                  📝 Project Details
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Detailed project information, features, and technical implementation details will be added here.
                </p>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
