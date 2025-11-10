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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e9d5ff12_1px,transparent_1px),linear-gradient(to_bottom,#e9d5ff12_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <motion.div 
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/30 bg-white relative group"
          variants={imageVariants}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-ping opacity-20 pointer-events-none" />
        </motion.div>
        
        {/* Main Heading */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight px-2"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <motion.span 
            className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block relative"
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
          Software Engineer &{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">Creative Problem Solver</span>
        </motion.h2>
        
        {/* Bio */}
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          variants={itemVariants}
        >
          I create thoughtful, user-centered applications that solve real-world challenges. 
          With a passion for clean code and continuous learning, I bring a unique perspective 
          to building scalable solutions that make a meaningful impact.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              to="/projects" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 inline-block text-center w-full sm:w-auto shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 relative overflow-hidden group min-h-[44px] flex items-center justify-center"
            >
              <span className="relative z-10">Explore My Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link 
              to="/contact" 
              className="border-2 border-purple-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 inline-block text-center w-full sm:w-auto backdrop-blur-sm relative overflow-hidden group min-h-[44px] flex items-center justify-center"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="absolute inset-0 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <ArrowDown className="w-6 h-6 text-purple-500 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero