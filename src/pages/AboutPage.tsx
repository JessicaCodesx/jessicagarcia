import { Gamepad2, Palette, BookOpen, Trophy, Heart, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const heroRef = useRef(null)
  const journeyRef = useRef(null)
  const interestsRef = useRef(null)
  const leadershipRef = useRef(null)
  const philosophyRef = useRef(null)
  const noteRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const journeyInView = useInView(journeyRef, { once: true, margin: "-100px" })
  const interestsInView = useInView(interestsRef, { once: true, margin: "-100px" })
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" })
  const philosophyInView = useInView(philosophyRef, { once: true, margin: "-100px" })
  const noteInView = useInView(noteRef, { once: true, margin: "-100px" })

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
            Beyond the{' '}
            <motion.span 
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
              Code
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From competitive gaming to academic excellence, from artistic expression to 
            entrepreneurial leadership - discover the diverse experiences that shape 
            my approach to software engineering.
          </motion.p>
        </div>
      </section>

      {/* My Journey */}
      <section className="py-20" ref={journeyRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.div 
            className="space-y-8 text-lg text-slate-700 leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            animate={journeyInView ? "visible" : "hidden"}
          >
            {[
              "My path to software engineering isn't traditional, but it's uniquely mine. As a stay-at-home mom who decided to pursue her passion for technology, I've learned that determination and strategic thinking can overcome any obstacle.",
              "The journey began when I realized I wanted to build things that matter. While balancing family responsibilities, I threw myself into computer programming at Algonquin College, graduating with honours and a 3.9 GPA. But that was just the beginning.",
              "Now, as I complete my Honours Bachelor of Computer Science while maintaining a 3.53 GPA, I'm preparing for the next chapter: a Master's program at the University of Texas at Austin. Every late night study session, every complex algorithm mastered, every project deployed - it's all been leading to this moment.",
              "What drives me isn't just the technical challenge (though I love that too), it's the opportunity to create solutions that make a real difference in people's lives. Whether it's building a study assistant to help students succeed or crafting engaging gaming experiences, I believe technology should serve humanity."
            ].map((text, index) => (
              <motion.p key={index} variants={itemVariants}>
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interests Grid */}
      <section className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20" ref={interestsRef}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={interestsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            What Makes Me <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Tick</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={interestsInView ? "visible" : "hidden"}
          >
            {/* Gaming & Esports */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow"
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
                  <Gamepad2 className="w-8 h-8 text-purple-500 mr-3" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Gaming & Esports</h3>
              </motion.div>
              <p className="text-slate-700 mb-4">
                From 2014-2020, I competed in top Call of Duty tournaments, eventually founding 
                and personally funding my own esports organization. This experience taught me 
                team leadership, strategic thinking, and how to perform under intense pressure.
              </p>
              <p className="text-slate-700 mb-4 text-sm italic">
                Currently enjoying League of Legends in my free time.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">6+ years competitive COD player (2014-2020)</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Esports organization founder & leader</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Current League of Legends enthusiast</span>
                </div>
              </div>
            </motion.div>

            {/* Art & Creativity */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow"
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
                  <Palette className="w-8 h-8 text-purple-500 mr-3" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Art & Expression</h3>
              </motion.div>
              <p className="text-slate-700 mb-4">
                My artistic side keeps me balanced and creative. From painting to exploring tattoo artistry, 
                I believe creativity and technical skills go hand in hand.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Painting & visual arts</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Tattoo artistry exploration</span>
                </div>
                <div className="flex items-center">
                  <Palette className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Creative problem-solving</span>
                </div>
              </div>
            </motion.div>

            {/* Learning & Growth */}
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow"
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
                  <BookOpen className="w-8 h-8 text-purple-500 mr-3" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Continuous Learning</h3>
              </motion.div>
              <p className="text-slate-700 mb-4">
                Whether it's diving into a new programming language, exploring game development with Godot, 
                or reading about emerging technologies, I'm always growing.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Technology exploration</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Avid reader</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                  <span className="text-sm text-slate-600">Self-directed learning</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Experience */}
      <section className="py-20" ref={leadershipRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Leadership <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </motion.h2>
          
          <motion.div 
            className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-8 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={leadershipInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Competitive Gaming & Leadership
                </h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Competing in top Call of Duty tournaments from 2014-2020 and eventually 
                  founding my own personally-funded esports organization taught me invaluable 
                  lessons about leadership, team coordination, and performance optimization. 
                  From recruiting talented players to developing training strategies, I learned 
                  how to build and maintain high-performing teams.
                </p>
                <p className="text-white/90 leading-relaxed">
                  These skills translate directly to software development: coordinating with 
                  team members, managing project timelines, maintaining high performance 
                  standards, and thinking strategically about problem-solving approaches.
                </p>
              </div>
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={leadershipInView ? "visible" : "hidden"}
              >
                {[
                  { title: "Team Leadership", desc: "Recruited, trained, and managed competitive gaming teams" },
                  { title: "Strategic Planning", desc: "Developed tournament strategies and team preparation protocols" },
                  { title: "Performance Analytics", desc: "Analyzed gameplay data to improve team performance" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/20 backdrop-blur-sm p-4 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-sm text-white/90">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20" ref={philosophyRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-4xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Philosophy</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={philosophyInView ? "visible" : "hidden"}
          >
            <div className="space-y-6">
              {[
                { icon: Heart, title: "Purpose-Driven Development", text: "Every line of code should serve a purpose. Whether it's helping students study more effectively or creating engaging entertainment, I believe technology should improve lives." },
                { icon: Zap, title: "Efficient Excellence", text: "Balancing family, academics, and coding has taught me the importance of working smart, not just hard. Clean, maintainable code isn't just good practice - it's essential." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                { icon: Trophy, title: "Competitive Spirit", text: "My gaming background instilled a drive for continuous improvement and the ability to perform under pressure - qualities that serve me well in fast-paced development environments." },
                { icon: BookOpen, title: "Lifelong Learning", text: "From academic achievements to exploring new technologies like game development, I'm constantly expanding my skillset and pushing my boundaries." }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <item.icon className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-700">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Note */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20 relative overflow-hidden" ref={noteRef}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={noteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Why I Do <span className="text-white">What I Do</span>
          </motion.h2>
          <motion.div 
            className="text-xl text-white/90 leading-relaxed space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={noteInView ? "visible" : "hidden"}
          >
            {[
              "Every challenge I've faced - from managing a family while pursuing education to leading competitive teams to mastering complex algorithms - has shaped me into a more resilient, creative, and strategic thinker.",
              "I bring to software engineering not just technical skills, but a unique perspective informed by diverse experiences. I understand the importance of user experience because I've been the user. I appreciate good team dynamics because I've built and led teams. I value efficient solutions because I've learned to maximize every moment."
            ].map((text, index) => (
              <motion.p key={index} variants={itemVariants}>
                {text}
              </motion.p>
            ))}
            <motion.p 
              className="text-white font-medium"
              variants={itemVariants}
              animate={noteInView ? {
                filter: [
                  "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
                  "drop-shadow(0 0 12px rgba(255, 255, 255, 0.6))",
                  "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))",
                ],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              I'm not just building software - I'm crafting solutions that matter, 
              one thoughtful line of code at a time.
            </motion.p>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div 
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={noteInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/projects" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 inline-block shadow-lg"
              >
                View My Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-block backdrop-blur-sm"
              >
                Let's Connect
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage