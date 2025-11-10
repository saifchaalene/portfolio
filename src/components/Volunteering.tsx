import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import resume from '../data/resume'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const volunteerRoles = [
  {
    id: 1,
    role: 'Vice-president',
    organization: 'El Alia Junior Chamber International',
    year: '2025',
    description: 'Leading strategic initiatives and community development projects, fostering collaboration among members, and driving organizational growth.',
    icon: '👔',
    color: 'from-purple-500/10 to-blue-500/10'
  },
  {
    id: 2,
    role: '100% Efficiency Advisor',
    organization: 'El Alia Junior Chamber International',
    year: '2024',
    description: 'Optimized operational processes and workflows, providing strategic guidance to improve organizational efficiency and project outcomes.',
    icon: '📊',
    color: 'from-cyan-500/10 to-teal-500/10'
  },
  {
    id: 3,
    role: 'Media Advisor',
    organization: 'El Alia Junior Chamber International',
    year: '2023',
    description: 'Managed digital presence and communication strategies, created engaging content, and enhanced community outreach through various media channels.',
    icon: '📱',
    color: 'from-pink-500/10 to-orange-500/10'
  }
]

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          🤝 Community Involvement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
        >
          Beyond coding, I'm passionate about giving back to my community through leadership and volunteer work. Active JCI member since 2019.
        </motion.p>

        {/* Director of the Year Award */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 border-2 border-yellow-500/50 dark:border-yellow-500/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-5xl shadow-lg">
                    🏆
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                    Director of the Year 2023
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Recognized for outstanding leadership and exceptional contributions to the organization's growth and community impact.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-orange-600 dark:text-orange-400 font-semibold">
                    <span>🌟</span>
                    <span>El Alia Junior Chamber International</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {volunteerRoles.map((role, index) => (
            <motion.div
              key={role.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 border border-violet-200/50 dark:border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center text-4xl border border-cyan-500/50 dark:border-cyan-500/30">
                      {role.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {role.role}
                        </h3>
                        <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">{role.organization}</p>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 text-sm font-medium">
                        <span>📅</span>
                        {role.year}
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {role.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              6+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Years of Service</p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              3
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Leadership Roles</p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
              100+
            </div>
            <p className="text-slate-600 dark:text-slate-400 font-medium">Community Members</p>
          </div>
        </motion.div>

        {/* View Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/community-involvement"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-all text-lg font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 duration-300"
          >
            <span>Learn More About My Community Work</span>
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
