import React from 'react'
import { motion } from 'framer-motion'

const hobbies = [
  {
    id: 1,
    name: 'Coding',
    icon: '💻',
    description: 'Building side projects and exploring new technologies',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 2,
    name: 'Reading',
    icon: '📚',
    description: 'Tech blogs, documentation, and software architecture books',
    color: 'from-purple-500/20 to-pink-500/20'
  },
  {
    id: 3,
    name: 'Gaming',
    icon: '🎮',
    description: 'Strategy games and problem-solving challenges',
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 4,
    name: 'Movies',
    icon: '🎬',
    description: 'Enjoying films and exploring different storytelling styles',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 5,
    name: 'Chess',
    icon: '♟️',
    description: 'Strategic thinking and competitive problem-solving',
    color: 'from-indigo-500/20 to-violet-500/20',
    link: 'https://www.chess.com/member/majidkouki'
  },
  {
    id: 6,
    name: 'Podcasts',
    icon: '🎧',
    description: 'Tech talks, business insights, and personal development',
    color: 'from-pink-500/20 to-rose-500/20'
  }
]

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20 bg-slate-900/30 dark:bg-slate-900/30">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          🎨 Hobbies & Interests
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
          When I'm not coding or leading community initiatives, here's what I enjoy doing.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {hobbies.map((hobby, index) => {
            const CardContent = (
              <>
                <div className={`absolute inset-0 bg-gradient-to-br ${hobby.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative glass-card text-center h-full flex flex-col items-center justify-center p-8 group-hover:border-cyan-500/50 transition-all duration-300">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {hobby.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {hobby.name}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {hobby.description}
                  </p>

                  {hobby.link && (
                    <div className="mt-4 text-xs text-cyan-600 dark:text-cyan-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Profile →
                    </div>
                  )}
                </div>
              </>
            )

            return (
              <motion.div
                key={hobby.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                {hobby.link ? (
                  <a
                    href={hobby.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
