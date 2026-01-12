import React from 'react'
import { motion } from 'framer-motion'
import resume from '../data/resume'

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image - First on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
              <img
                src={`${import.meta.env.BASE_URL}assets/images/me.jpg`}
                alt={resume.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-cyan-200/50 dark:border-slate-700/50 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-last lg:order-first"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 border border-cyan-500/20 dark:border-cyan-500/20"
            >
              <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                {resume.name.split(' ')[0]}
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-200">{resume.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{resume.role}</span>
              <br />
              {resume.profile}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}assets/cv/Saif_Chaalane_CV.pdf`}
                  download="Saif_Chaalane_CV.pdf"
                  className="btn btn-primary"
                >
                  📥 Download CV
                </a>

                <a
                  href={`${import.meta.env.BASE_URL}assets/cv/Saif_Chaalane_CV.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  👀 View CV
                </a>
              </div>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
