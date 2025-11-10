import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiAngular, SiVuedotjs, SiDjango, SiSpringboot, SiDotnet,
  SiTypescript, SiJavascript, SiPython, SiPhp, SiCsharp,
  SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit, SiGithub,
  SiTailwindcss, SiBootstrap, SiHtml5, SiCss3, SiNodedotjs, SiGitlab
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { VscGithubAction } from 'react-icons/vsc'

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'languages'

interface Skill {
  name: string
  icon: React.ReactNode
  category: SkillCategory[]
  color: string
}

const skills: Skill[] = [
  { name: 'React', icon: <SiReact />, category: ['frontend'], color: '#61DAFB' },
  { name: 'Angular', icon: <SiAngular />, category: ['frontend'], color: '#DD0031' },
  { name: 'Vue.js', icon: <SiVuedotjs />, category: ['frontend'], color: '#4FC08D' },
  { name: 'TypeScript', icon: <SiTypescript />, category: ['frontend', 'backend', 'languages'], color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, category: ['frontend', 'backend', 'languages'], color: '#F7DF1E' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: ['frontend'], color: '#06B6D4' },
  { name: 'Bootstrap', icon: <SiBootstrap />, category: ['frontend'], color: '#7952B3' },
  { name: 'HTML5', icon: <SiHtml5 />, category: ['frontend'], color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, category: ['frontend'], color: '#1572B6' },
  
  { name: 'Django', icon: <SiDjango />, category: ['backend'], color: '#092E20' },
  { name: 'Spring Boot', icon: <SiSpringboot />, category: ['backend'], color: '#6DB33F' },
  { name: '.NET', icon: <SiDotnet />, category: ['backend'], color: '#512BD4' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: ['backend'], color: '#339933' },
  { name: 'Python', icon: <SiPython />, category: ['backend', 'languages'], color: '#3776AB' },
  { name: 'PHP', icon: <SiPhp />, category: ['backend', 'languages'], color: '#777BB4' },
  { name: 'Java', icon: <FaJava />, category: ['backend', 'languages'], color: '#007396' },
  { name: 'C#', icon: <SiCsharp />, category: ['backend', 'languages'], color: '#239120' },
  
  { name: 'MySQL', icon: <SiMysql />, category: ['database'], color: '#4479A1' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: ['database'], color: '#4169E1' },
  { name: 'MongoDB', icon: <SiMongodb />, category: ['database'], color: '#47A248' },
  
  { name: 'Docker', icon: <SiDocker />, category: ['devops'], color: '#2496ED' },
  { name: 'Git', icon: <SiGit />, category: ['devops'], color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, category: ['devops'], color: '#181717' },
  { name: 'GitLab', icon: <SiGitlab />, category: ['devops'], color: '#FC6D26' },
  { name: 'CI/CD', icon: <VscGithubAction />, category: ['devops'], color: '#2088FF' },
]

const categories = [
  { id: 'all', label: 'All Skills', icon: '🎯' },
  { id: 'frontend', label: 'Frontend', icon: '🎨' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'database', label: 'Database', icon: '🗄️' },
  { id: 'devops', label: 'DevOps', icon: '🚀' },
  { id: 'languages', label: 'Languages', icon: '💻' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  }
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all')

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category.includes(activeCategory))

  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          🛠️ Technical Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
          A comprehensive overview of the technologies and tools I work with to build modern web applications.
        </motion.p>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-violet-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-violet-300 dark:border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group relative"
            >
              <div className="glass-card p-6 text-center h-full flex flex-col items-center justify-center gap-3 hover:border-cyan-500/50 transition-all duration-300">
                <div 
                  className="text-5xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </div>
              </div>
              
              {/* Glow effect on hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                style={{ backgroundColor: skill.color + '20' }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass-card text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Always Learning</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Continuously exploring new technologies and best practices
            </p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl mb-3">🏆</div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Best Practices</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Following industry standards and clean code principles
            </p>
          </div>

          <div className="glass-card text-center">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-2">Team Player</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Experienced in Agile/Scrum methodologies and collaboration
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
