import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Gallery images - add your images here
const galleryImages = [
  '/assets/images/jci/Doy2023.jpg',
  '/assets/images/jci/j.jpg',
  '/assets/images/jci/468080528_18261108409266419_7301944291890466077_n.jpg',
  '/assets/images/jci/469648565_18262937944266419_5288595672487493976_n.jpg',
  '/assets/images/jci/476170544_926416526314431_2445834394031787880_n.jpg',
  '/assets/images/jci/476641696_928687449420672_4019034250124654824_n.jpg',
  '/assets/images/jci/476797618_928014676154616_782837945780905089_n.jpg',
  '/assets/images/jci/480241645_931894129100004_2118538239959650182_n.jpg',
  '/assets/images/jci/480438655_931890485767035_668964902035606404_n.jpg',
  '/assets/images/jci/480690380_936767845279299_1408619189749607039_n.jpg',
  '/assets/images/jci/480749185_936168852005865_7153465358163228923_n.jpg',
  '/assets/images/jci/481158368_936767675279316_3083795647794463856_n.jpg',
  '/assets/images/jci/481270175_936767521945998_2619385358769738593_n.jpg',
  '/assets/images/jci/481796530_942672844688799_6155871587134073981_n.jpg',
]

const volunteerRoles = [
  {
    id: 1,
    role: 'Vice-president',
    organization: 'El Alia Junior Chamber International',
    year: '2025',
    description: 'Leading strategic initiatives and community development projects, fostering collaboration among members, and driving organizational growth.',
    responsibilities: [
      'Strategic planning and organizational development',
      'Coordinating between different committees and departments',
      'Mentoring and supporting team members',
      'Overseeing project implementation and delivery',
      'Building partnerships with local organizations'
    ],
    icon: '👔',
    color: 'from-purple-500/10 to-blue-500/10'
  },
  {
    id: 2,
    role: '100% Efficiency Advisor',
    organization: 'El Alia Junior Chamber International',
    year: '2024',
    description: 'Optimized operational processes and workflows, providing strategic guidance to improve organizational efficiency and project outcomes.',
    responsibilities: [
      'Analyzing and optimizing organizational workflows',
      'Implementing efficiency improvement strategies',
      'Providing consultation on project management',
      'Conducting performance evaluations',
      'Training members on best practices'
    ],
    icon: '📊',
    color: 'from-cyan-500/10 to-teal-500/10'
  },
  {
    id: 3,
    role: 'Media Advisor',
    organization: 'El Alia Junior Chamber International',
    year: '2023',
    description: 'Managed digital presence and communication strategies, created engaging content, and enhanced community outreach through various media channels.',
    responsibilities: [
      'Managing social media platforms and digital content',
      'Creating visual and written content for campaigns',
      'Developing communication strategies',
      'Coordinating media coverage for events',
      'Building the organization\'s online presence'
    ],
    icon: '📱',
    color: 'from-pink-500/10 to-orange-500/10'
  }
]

const achievements = [
  {
    title: 'Director of the Year 2023',
    description: 'Recognized for outstanding leadership, exceptional contributions to organizational growth, and significant community impact through innovative projects and strategic initiatives.',
    icon: '🏆',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Community Impact',
    description: 'Led multiple community service projects benefiting over 500 individuals, including educational programs, environmental initiatives, and social welfare activities.',
    icon: '🌟',
    color: 'from-green-400 to-teal-500'
  },
  {
    title: 'Team Development',
    description: 'Mentored and trained 30+ young professionals, helping them develop leadership skills and achieve their personal and professional goals.',
    icon: '👥',
    color: 'from-blue-400 to-purple-500'
  }
]

export default function CommunityDetails() {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container max-w-6xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
        >
          <span className="text-xl">←</span>
          <span className="font-medium">Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            🤝 Community Involvement
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Beyond coding, I'm passionate about giving back to my community through leadership and volunteer work. 
            Active JCI member since 2019, dedicated to making a positive impact.
          </p>
        </motion.div>

        {/* Director of the Year Award - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            <div className="relative glass-card border-2 border-yellow-500/50 dark:border-yellow-500/30 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="relative h-80 md:h-96 overflow-hidden rounded-xl">
                  <img 
                    src="/assets/images/jci/Doy2023.jpg" 
                    alt="Director of the Year 2023"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl shadow-lg">
                      🏆
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
                        Director of the Year
                      </h2>
                      <p className="text-xl text-orange-600 dark:text-orange-400 font-semibold">2023</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Recognized for outstanding leadership, exceptional contributions to organizational growth, 
                    and significant community impact through innovative projects and strategic initiatives.
                  </p>
                  
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <span>🌟</span>
                    <span className="font-medium">El Alia Junior Chamber International</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            ✨ Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Roles Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            📋 Leadership Journey
          </h2>
          <div className="space-y-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${role.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative glass-card">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon and Year */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/30 to-blue-500/30 dark:from-cyan-500/20 dark:to-blue-500/20 flex items-center justify-center text-4xl border border-cyan-500/50 dark:border-cyan-500/30 flex-shrink-0">
                        {role.icon}
                      </div>
                      <div className="px-4 py-1.5 rounded-full bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30 dark:border-cyan-500/20 text-sm font-medium whitespace-nowrap">
                        📅 {role.year}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                        {role.role}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-4">{role.organization}</p>
                      
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                        {role.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {role.responsibilities.map((resp, idx) => (
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
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass-card"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            📊 Impact by Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-cyan-200 dark:border-slate-700">
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                6+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Years of Service</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-800 border border-purple-200 dark:border-slate-700">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                3
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Leadership Roles</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-slate-800 dark:to-slate-800 border border-green-200 dark:border-slate-700">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">People Impacted</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-slate-800 dark:to-slate-800 border border-orange-200 dark:border-slate-700">
              <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                30+
              </div>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Professionals Mentored</p>
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="glass-card"
        >
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 text-center">
            📷 Photo Gallery
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`JCI Community ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.placeholder')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'placeholder w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center';
                      placeholder.innerHTML = '<span class="text-slate-400 dark:text-slate-500 text-4xl">📷</span>';
                      parent.appendChild(placeholder);
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  Click to view
                </div>
              </motion.div>
            ))}
          </div>

          {galleryImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-600 dark:text-slate-400">
                Photo gallery will be displayed here. Add images to public/assets/images/jci/ folder.
              </p>
            </div>
          )}
        </motion.div>

        {/* Lightbox Modal */}
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
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors text-4xl font-light"
                  aria-label="Close"
                >
                  ×
                </button>
                
                <img
                  src={selectedImage}
                  alt="Gallery preview"
                  className="w-full h-full object-contain rounded-xl"
                />

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.indexOf(selectedImage);
                      const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
                      setSelectedImage(galleryImages[prevIndex]);
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => {
                      const currentIndex = galleryImages.indexOf(selectedImage);
                      const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
                      setSelectedImage(galleryImages[nextIndex]);
                    }}
                    className="px-4 py-2 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Next →
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
