import { Award, Target, Star, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AcademicsPage = () => {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const achievementsRef = useRef(null)
  const visionRef = useRef(null)
  const certsRef = useRef(null)
  const philosophyRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const achievementsInView = useInView(achievementsRef, { once: true, margin: "-100px" })
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" })
  const certsInView = useInView(certsRef, { once: true, margin: "-100px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-20 relative overflow-hidden" ref={heroRef}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Academic <motion.span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block relative"
              animate={heroInView ? {
                filter: [
                  "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                  "drop-shadow(0 0 12px rgba(168, 85, 247, 0.6))",
                  "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                ],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Excellence
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From honours diplomas to prestigious graduate programs - a journey of 
            continuous learning, exceptional performance, and relentless pursuit of knowledge.
          </motion.p>
        </div>
      </section>

      {/* Academic Timeline */}
      <section className="py-20" ref={timelineRef}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Educational <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-pink-600 h-full hidden lg:block"
              initial={{ scaleY: 0 }}
              animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            ></motion.div>
            
            <motion.div 
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate={timelineInView ? "visible" : "hidden"}
            >
              {/* Cloud Development Certificate */}
              <motion.div 
                className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center"
                variants={itemVariants}
              >
                <div className="lg:text-right lg:pr-8">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 text-white p-6 sm:p-8 rounded-xl relative shadow-2xl shadow-purple-500/30 overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-400 hidden lg:block shadow-lg"></div>
                    <div className="flex items-center mb-4 lg:justify-end">
                      <Target className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-bold">IN PROGRESS</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 break-words">
                      Graduate Certificate, Cloud Development & Operations
                    </h3>
                    <p className="text-white font-medium mb-2 text-sm sm:text-base">Algonquin College</p>
                    <p className="text-white/90 text-xs sm:text-sm mb-4">Expected August 2026</p>
                    <div className="flex items-center lg:justify-end mb-4">
                      <Star className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-medium">Cloud-Focused Program</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Specialized program in cloud infrastructure, DevOps practices, containerization, 
                      and modern deployment strategies. Building expertise in AWS, Azure, and cloud-native architectures.
                    </p>
                  </motion.div>
                </div>
                <motion.div 
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 p-6 rounded-xl border border-purple-100 shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Cloud Focus Areas</h4>
                    <ul className="space-y-2.5 text-slate-700">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>Cloud infrastructure & architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>DevOps & CI/CD pipelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>Containerization & orchestration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>Cloud security & best practices</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2 mt-1">•</span>
                        <span>Serverless computing & microservices</span>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Bachelor's */}
              <motion.div 
                className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center"
                variants={itemVariants}
              >
                <motion.div 
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 text-white p-6 sm:p-8 rounded-xl relative shadow-2xl shadow-purple-500/30 overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-400 hidden lg:block shadow-lg"></div>
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-bold">COMPLETED</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Honours Bachelor of Computer Science
                    </h3>
                    <p className="text-white font-medium mb-2">Algoma University</p>
                    <p className="text-white/90 text-sm mb-4">Graduated 2025</p>
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-medium">GPA: 3.7 • Graduated with Honours</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Advanced coursework in algorithms, data structures, software engineering, 
                      and system design. Completed with excellent academic standing while balancing family responsibilities.
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="lg:pr-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg mb-4"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Courses</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Analysis of Algorithms</h5>
                        <p className="text-sm text-slate-600">Advanced algorithmic design and complexity analysis</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Computer Organization & Architecture</h5>
                        <p className="text-sm text-slate-600">Hardware-software interface and system architecture</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Computer Networks</h5>
                        <p className="text-sm text-slate-600">Network protocols, distributed systems communication</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Theory of Computing</h5>
                        <p className="text-sm text-slate-600">Formal languages, automata theory, and computational complexity</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200"
                    whileHover={{ scale: 1.02, borderColor: 'rgb(168, 85, 247)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      <Star className="w-5 h-5 text-purple-500 mr-2" />
                      Foundation Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { course: "Data Structures I & II", grades: "90%, 82%" },
                        { course: "Software Engineering", grades: "83%" },
                        { course: "Object Oriented Programming", grades: "90%" },
                        { course: "Programming Languages", grades: "80%" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white p-3 rounded-lg border-l-4 border-purple-500 shadow-sm hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, x: -20 }}
                          animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-900">{item.course}</span>
                            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                              {item.grades}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Algonquin Diploma */}
              <motion.div 
                className="grid lg:grid-cols-2 gap-8 items-center"
                variants={itemVariants}
              >
                <div className="lg:text-right lg:pr-8">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-lg relative"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-500 hidden lg:block"></div>
                    <div className="flex items-center mb-4 lg:justify-end">
                      <Award className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-bold">COMPLETED</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Honours Diploma, Computer Programming
                    </h3>
                    <p className="text-white font-medium mb-2">Algonquin College</p>
                    <p className="text-white/90 text-sm mb-4">Graduated 2024</p>
                    <div className="flex items-center lg:justify-end mb-4">
                      <Trophy className="w-5 h-5 text-white mr-2" />
                      <span className="text-white font-medium">GPA: 3.9 • Honours Graduate</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      Comprehensive foundation in programming fundamentals, software development 
                      lifecycle, and practical application development. Graduated with highest honours.
                    </p>
                  </motion.div>
                </div>
                <motion.div 
                  className="lg:pl-8"
                  initial={{ opacity: 0, x: -30 }}
                  animate={timelineInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.div 
                    className="bg-purple-50/50 p-6 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Standout Courses</h4>
                    <div className="space-y-3">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Advanced Database Topics (A)</h5>
                        <p className="text-sm text-slate-600">Complex database design and optimization</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Enterprise Application Programming (A-)</h5>
                        <p className="text-sm text-slate-600">Large-scale enterprise software development</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">Software Development Project (A)</h5>
                        <p className="text-sm text-slate-600">Full lifecycle software project implementation</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h5 className="font-medium text-slate-900">OOP with Design Patterns (A+)</h5>
                        <p className="text-sm text-slate-600">Advanced object-oriented programming principles</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20" ref={achievementsRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={achievementsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Notable <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Achievements</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={achievementsInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center mb-4">
                <Trophy className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-slate-900">Academic Excellence</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Graduated Honours from Algonquin College (3.9 GPA)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Completed Honours Bachelor's program with 3.7 GPA (December 2025)</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Dean's List recognition for academic performance</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="flex items-center mb-4"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-8 h-8 text-purple-500 mr-3" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900">Balance & Dedication</h3>
              </motion.div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Achieving academic excellence while being a dedicated parent</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Building and deploying personal projects alongside studies</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Mastering time management and efficient learning strategies</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Consistent academic performance across multiple programs</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20" ref={visionRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Academic <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Vision</span>
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visionInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Areas of Focus & Goals
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-white/50 pl-4">
                    <h4 className="font-semibold text-white">Cloud Infrastructure & DevOps</h4>
                    <p className="text-white/90 text-sm">Building expertise in cloud platforms, containerization, and CI/CD pipelines</p>
                  </div>
                  <div className="border-l-4 border-white/50 pl-4">
                    <h4 className="font-semibold text-white">Scalable System Architecture</h4>
                    <p className="text-white/90 text-sm">Designing cloud-native applications and distributed systems</p>
                  </div>
                  <div className="border-l-4 border-white/50 pl-4">
                    <h4 className="font-semibold text-white">Modern Deployment Strategies</h4>
                    <p className="text-white/90 text-sm">Serverless computing, microservices, and cloud security best practices</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                  Career Vision
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Through my graduate certificate program in Cloud Development & Operations, I'm building 
                  the skills needed to architect and deploy cloud-native systems that solve meaningful problems. 
                  This specialized training, combined with my full-stack development experience, positions me 
                  to contribute immediately to high-impact teams building scalable, modern applications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Certifications Section */}
      <section className="py-20" ref={certsRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={certsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Professional <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={certsInView ? "visible" : "hidden"}
          >
            {[
              { emoji: "🖥️", title: "System Admin", org: "Microsoft LinkedIn Learning", date: "October 2025" },
              { emoji: "🐍", title: "Python Intermediate", org: "SoloLearn", date: "June 2025" },
              { emoji: "☕", title: "Java Intermediate", org: "SoloLearn", date: "April 2024" },
              { emoji: "⚡", title: "Introduction to C++", org: "SoloLearn", date: "February 2025" },
              { emoji: "🌐", title: "Web Development", org: "SoloLearn", date: "July 2023" },
              { emoji: "🗄️", title: "SQL Intermediate", org: "SoloLearn", date: "July 2023" }
            ].map((cert, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-purple-100 hover:border-purple-300 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center">
                  <motion.div 
                    className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-2xl">{cert.emoji}</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{cert.title}</h3>
                  <p className="text-slate-600 text-sm mb-2">{cert.org}</p>
                  <p className="text-slate-500 text-xs">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">
              Continuously expanding technical knowledge through professional development and online learning platforms.
            </p>
            <p className="text-slate-700 font-medium">
              Currently pursuing a Graduate Certificate in Cloud Development & Operations, building expertise in cloud infrastructure, 
              DevOps practices, containerization, and modern deployment strategies to become a cloud-native engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20" ref={philosophyRef}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Learning <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Philosophy</span>
          </motion.h2>
          <motion.div 
            className="text-lg text-slate-700 leading-relaxed space-y-6 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            {[
              "Education, for me, is not just about acquiring knowledge; it's about developing the ability to think critically, solve complex problems, and adapt to an ever-changing technological landscape.",
              "Every course, every project, every challenge is an opportunity to push the boundaries of what I thought possible. Whether it's mastering a new algorithm or architecting a complex system, I approach learning with curiosity, persistence, and strategic thinking."
            ].map((text, index) => (
              <motion.p key={index} variants={itemVariants}>
                {text}
              </motion.p>
            ))}
            <motion.div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="font-medium text-xl">
                "The best way to predict the future is to invent it. The best way to 
                invent it is to deeply understand the fundamentals that make it possible."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AcademicsPage