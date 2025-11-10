import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🎯 My Journey</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack software engineer currently pursuing my IT Engineering degree at SESAME University. 
                With a strong foundation in both frontend and backend technologies, I specialize in building scalable, 
                user-friendly web applications that solve real-world problems.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">💡 What I Do</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I transform ideas into elegant, performant solutions using modern frameworks like React, Angular, and Django. 
                My experience spans from CRM platforms to e-commerce solutions, with a focus on clean code, 
                containerized deployment, and agile methodologies.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🚀 My Approach</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I believe in continuous learning and best practices. Whether it's implementing CI/CD pipelines, 
                optimizing database queries, or crafting intuitive UIs, I approach every challenge with curiosity 
                and a commitment to excellence.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-bold text-cyan-600 dark:text-cyan-400 mb-4">🌍 Beyond Code</h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, I'm actively involved in community leadership as Vice-president of El Alia Junior Chamber International, 
                where I contribute to local development initiatives and mentor aspiring developers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
