import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Gamepad2, Palette, BookOpen, Award, Lightbulb, Users, Rocket } from 'lucide-react'

const About = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white py-24" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-start"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left Column - Main Story */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              My Story
            </h3>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              My journey into software engineering began with a curiosity about how technology 
              could solve everyday challenges. What started as a personal interest has evolved 
              into a dedicated pursuit of creating meaningful digital experiences that make 
              a positive difference.
            </p>
            
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Balancing family responsibilities with my education has taught me the value of 
              focused time management, adaptability, and resourceful problem-solving. These 
              skills translate directly into my approach to development—writing clean, 
              maintainable code and building solutions that are both elegant and practical.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Currently completing my bachelor's degree and preparing for graduate studies at 
              UT Austin, I'm actively building projects that showcase my technical skills and 
              creative problem-solving abilities. I'm excited about the opportunity to contribute 
              my unique perspective and collaborative spirit to forward-thinking development teams.
            </p>
          </motion.div>

          {/* Right Column - Quick Facts */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Education */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-slate-900">Master of Science, Computer Science</p>
                  <p className="text-slate-600">University of Texas at Austin • Jan 2026</p>
                  <p className="text-sm text-purple-600 font-medium">Accepted</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Honours Bachelor of Computer Science</p>
                  <p className="text-slate-600">Algoma University • Expected Dec 2025</p>
                  <p className="text-sm text-slate-500">GPA: 3.7</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Honours Diploma, Computer Programming</p>
                  <p className="text-slate-600">Algonquin College • 2024</p>
                  <p className="text-sm text-slate-500">GPA: 3.9 • Graduated with Honours</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white p-6 rounded-lg border-l-4 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Experience</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-slate-900">Independent Software Developer</p>
                  <p className="text-slate-600">2022 - Present</p>
                  <p className="text-sm text-slate-500">Designing and deploying full-stack applications with modern web technologies</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Full-Time Student</p>
                  <p className="text-slate-600">2022 - Present</p>
                  <p className="text-sm text-slate-500">Maintaining strong academic performance (3.7+ GPA) while managing multiple responsibilities</p>
                </div>
                <div>
                  <p className="font-medium text-slate-900">Admin Assistant</p>
                  <p className="text-slate-600">Citadel Mortgages • 2020 - 2024</p>
                  <p className="text-sm text-slate-500">Provided administrative support, managed documentation, and assisted with client communications in a fast-paced mortgage environment</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Beyond Code Section - Centered */}
        <motion.div 
          className="mt-24 mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 rounded-2xl shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center px-4">
                Beyond <span className="text-white">Code</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0 backdrop-blur-sm">
                      <Gamepad2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Competitive Gaming</h4>
                      <p className="text-white/90 text-sm">Former Call of Duty player & esports org founder</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0 backdrop-blur-sm">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Creative Expression</h4>
                      <p className="text-white/90 text-sm">Artist - painting and tattoo enthusiast</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0 backdrop-blur-sm">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Lifelong Learning</h4>
                      <p className="text-white/90 text-sm">Avid reader and continuous learner</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg flex-shrink-0 backdrop-blur-sm">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Balanced Excellence</h4>
                      <p className="text-white/90 text-sm">Successfully managing multiple priorities while maintaining high standards</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-white/90 italic">
                  These diverse experiences inform my approach to problem-solving and help me bring 
                  fresh perspectives to every project.
                </p>
              </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values/Philosophy */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-8">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Innovation", text: "Approaching challenges with creativity and finding elegant solutions through thoughtful code." },
              { icon: Users, title: "Collaboration", text: "Thriving in team environments and bringing diverse perspectives to collaborative projects." },
              { icon: Rocket, title: "Continuous Growth", text: "Committed to lifelong learning and staying current with evolving technologies." }
            ].map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div 
                  key={value.title}
                  className="p-6 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg sm:text-xl font-medium text-slate-900 mb-2">{value.title}</h4>
                  <p className="text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technical Skills Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
              A selection of technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                category: "Frontend Development", 
                skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
                color: "from-blue-400 to-blue-500"
              },
              { 
                category: "Backend & Tools", 
                skills: ["Node.js", "Firebase", "IndexedDB", "Git", "Vite", "REST APIs"],
                color: "from-green-400 to-green-500"
              },
              { 
                category: "Game Development", 
                skills: ["Godot Engine", "GDScript", "Game Design", "Asset Integration"],
                color: "from-purple-400 to-purple-500"
              }
            ].map((category, index) => (
              <motion.div
                key={category.category}
                className="bg-white rounded-lg p-6 shadow-lg border border-purple-100 hover:shadow-xl hover:border-purple-300 transition-all"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-semibold text-slate-900 mb-4">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="bg-gradient-to-r from-purple-50 to-pink-50 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium border border-purple-200 hover:border-purple-400 hover:bg-purple-100 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: 1 + index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About