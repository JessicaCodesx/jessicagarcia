import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50/20 to-teal-50/20 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Modern Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e112_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e112_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl shadow-indigo-500/20 bg-white relative group"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-teal-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <picture>
            <source 
              srcSet="./profile.jpg" 
              type="image/webp"
            />
            <img 
              src="./photo.webp" 
              alt="Jessica Garcia" 
              className="w-full h-full object-cover object-center relative z-10"
              style={{ 
                imageRendering: 'auto',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden',
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
              width="512"
              height="512"
              draggable="false"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-ping opacity-20 pointer-events-none" />
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight px-2 tracking-tight"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <motion.span 
            className="bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent inline-block relative"
            animate={{
              filter: [
                "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                "drop-shadow(0 0 12px rgba(168, 85, 247, 0.6))",
                "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Jessica Garcia
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.h2 
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 mb-8 font-light px-2"
          variants={itemVariants}
        >
          Cloud-Focused Software Engineer &{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent font-medium">Full-Stack Developer</span>
        </motion.h2>
        
        {/* Bio */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          I build scalable, production-ready applications that deliver real business value. 
          Specializing in React, TypeScript, and modern web technologies, I combine technical 
          excellence with user-centered design to create solutions that users love.
        </motion.p>
        
        {/* Availability Badge */}
        <motion.div 
          className="mb-6"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-semibold text-sm sm:text-base text-slate-600">Available for Hire • Open to Opportunities</span>
          </motion.div>
        </motion.div>
        
        {/* Currently */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          Cloud-focused software engineer with <span className="text-indigo-600 font-medium">Honours Bachelor of Computer Science</span>. 
          Currently pursuing a <span className="text-indigo-600 font-medium">Graduate Certificate in Cloud Development & Operations</span> while building production applications. 
          Ready to contribute to your team immediately.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-indigo-600 via-teal-500 to-cyan-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:from-indigo-500 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 inline-block text-center w-full sm:w-auto shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/50 relative overflow-hidden group min-h-[44px] flex items-center justify-center"
            >
              <span className="relative z-10">Explore My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="border-2 border-indigo-200 text-slate-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:via-teal-50 hover:to-cyan-50 transition-all duration-300 inline-block text-center w-full sm:w-auto backdrop-blur-sm relative overflow-hidden group min-h-[44px] flex items-center justify-center shadow-md hover:shadow-lg"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-teal-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="w-6 h-6 text-indigo-500 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero