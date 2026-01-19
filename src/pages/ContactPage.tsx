import { Mail, Github, Linkedin, MapPin, Calendar, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ContactPage = () => {
  const heroRef = useRef(null)
  const contactRef = useRef(null)
  const faqRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Let's <motion.span 
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
              Connect
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Available for immediate hire! I'm actively seeking software engineering opportunities 
            and excited to bring my technical skills, collaborative mindset, and passion for building 
            great products to your team. Let's discuss how I can contribute to your success.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20" ref={contactRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Get in <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-slate-600">
              Ready to connect? Here are the best ways to reach me:
            </p>
          </motion.div>
          
          {/* Contact Methods */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            {[
              { icon: Mail, title: "Email", desc: "jessica.garcia5714@gmail.com", href: "mailto:jessica.garcia5714@gmail.com" },
              { icon: Github, title: "GitHub", desc: "@JessicaCodesx", href: "https://github.com/JessicaCodesx", external: true },
              { icon: Linkedin, title: "LinkedIn", desc: "Networking", href: "https://www.linkedin.com/in/jessicagarcia5714/", external: true }
            ].map((contact, index) => (
              <motion.a 
                key={index}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="flex items-center p-6 bg-white rounded-lg hover:bg-purple-50 hover:border-purple-300 border border-purple-100 transition-colors group text-center flex-col shadow-md hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-lg mb-4 group-hover:from-purple-400 group-hover:to-pink-400 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-semibold text-slate-900 mb-2">{contact.title}</h3>
                <p className="text-slate-600 text-sm">{contact.desc}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Current Status - Centered */}
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div 
              className="bg-gradient-to-br from-purple-600 via-violet-600 to-pink-600 p-8 rounded-2xl text-white text-center shadow-2xl shadow-purple-500/30 overflow-hidden group relative"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Current Status</h3>
              <motion.div 
                className="grid md:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
              >
                {[
                  { icon: MapPin, text: "London, Ontario, Canada" },
                  { icon: Calendar, text: "Actively seeking opportunities" },
                  { icon: MessageCircle, text: "Open to all role types" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <item.icon className="w-8 h-8 text-white mb-2" />
                    </motion.div>
                    <span className="text-sm text-white/90">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-white via-purple-50/20 to-white py-20" ref={faqRef}>
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-slate-900 mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={faqInView ? "visible" : "hidden"}
          >
            {[
              { 
                q: "Are you available for work?", 
                a: "Yes! I'm actively seeking software engineering opportunities and available to start immediately. Open to full-time positions, contract work, and remote opportunities. Ready to contribute from day one." 
              },
              { 
                q: "What kind of roles are you looking for?", 
                a: "I'm seeking software engineering positions where I can leverage my full-stack development skills. Particularly interested in React/TypeScript roles, frontend development, and opportunities to work on user-facing products that make a real impact." 
              },
              { 
                q: "Can you work remotely?", 
                a: "Absolutely! I'm experienced with remote collaboration and have the discipline and communication skills needed for distributed teams." 
              },
              { 
                q: "What's your response time?", 
                a: "I aim to respond to all messages within 24-48 hours. For urgent matters, LinkedIn or email are the best ways to reach me quickly." 
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg border border-purple-100 transition-all"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-700">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20 relative overflow-hidden" ref={ctaRef}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something <span className="text-white">Great Together</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm ready to hit the ground running and make an immediate impact on your team. 
            With proven experience building production applications and a passion for continuous learning, 
            I bring both technical expertise and a collaborative spirit to every project.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:jessicamhaugen14@gmail.com"
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg min-h-[44px] w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm sm:text-base">Send Email</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jessicagarcia5714/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center space-x-2 backdrop-blur-sm min-h-[44px] w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm sm:text-base">Connect on LinkedIn</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage