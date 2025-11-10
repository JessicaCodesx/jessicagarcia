import { ExternalLink, Github, BookOpen, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }
  const projects = [
    {
      title: "homebase",
      description: "A free, local-first family management mobile application built with React Native. Currently in TestFlight beta testing as a solo developer project. All data is stored locally on your device using SQLite - no cloud services, subscriptions, or backend infrastructure required.",
      features: [
        "Family calendar with recurring events & reminders",
        "Task management with assignment & priorities",
        "Meal planning & recipe collection",
        "Grocery lists & custom list management",
        "Contact management with birthday tracking",
        "Health, baby, & period tracking",
        "Completely offline & privacy-focused",
        "Local-first architecture with SQLite"
      ],
      techStack: ["React Native", "Expo SDK 54", "TypeScript", "SQLite", "Zustand", "Expo Router"],
      liveUrl: null,
      githubUrl: null,
      type: "Mobile Application (In Development)",
      icon: <Home className="w-6 h-6" />
    },
    {
      title: "Study Sidekick",
      description: "A comprehensive, offline-first study assistant application designed to help students efficiently manage courses, notes, flashcards, and academic progress. Built with modern web technologies and a focus on user experience and data persistence.",
      features: [
        "Course management with custom themes",
        "Rich text notes organized by units",
        "Spaced repetition flashcard system", 
        "Calendar & task management",
        "GPA tracking & academic records",
        "Study streak visualization",
        "Dark/light mode & responsive design"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "IndexedDB", "Vite"],
      liveUrl: "https://jessicacodesx.github.io/study-sidekick/",
      githubUrl: "https://github.com/JessicaCodesx/study-sidekick",
      type: "Web Application",
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white py-24 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            A collection of projects that demonstrate my ability to build thoughtful, 
            user-centered applications and explore creative solutions across different domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-xl group relative"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/0 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Project Header */}
              <div className="bg-gradient-to-r from-white to-purple-50/30 p-6 border-b border-purple-100 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg text-white shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 truncate">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium">{project.type}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2 flex-shrink-0">
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl}
                        className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a 
                        href={project.liveUrl}
                        className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <div className="px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-xs sm:text-sm font-medium">
                        In Development
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Body */}
              <div className="p-6 relative z-10">
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + featureIndex * 0.05 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span 
                        key={techIndex}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 text-slate-800 px-3 py-1 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-400 hover:bg-purple-100 transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.6 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 inline-block shadow-2xl shadow-purple-500/30 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Interested in seeing more?</h3>
              <p className="text-white/90 mb-6">
                I'm continuously building new projects and exploring emerging technologies. 
                Check out my GitHub to see the latest work.
              </p>
              <motion.a 
                href="https://github.com/JessicaCodesx"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors inline-flex items-center space-x-2 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View All Projects</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects