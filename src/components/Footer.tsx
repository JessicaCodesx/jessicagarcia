import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-white via-purple-50/30 to-white py-12 relative overflow-hidden border-t border-purple-100">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left - Name & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Jessica Garcia</h3>
            <p className="text-sm sm:text-base text-slate-600">Software Engineer crafting digital experiences</p>
          </motion.div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/JessicaCodesx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-100 p-3 rounded-lg hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all shadow-lg text-purple-600"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/jessicagarcia5714/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-100 p-3 rounded-lg hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all shadow-lg text-purple-600"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          
          </div>

          {/* Right - Copyright */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-600 text-sm">
              © {currentYear} Jessica Garcia. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-purple-100 mt-8 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <p className="text-xs sm:text-sm text-slate-600 px-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">Actively Seeking Opportunities</span> • Cloud Development & Operations Student
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer