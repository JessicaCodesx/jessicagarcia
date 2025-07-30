import { ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image */}
<div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl bg-gray-900">
  <picture>
    <source 
      srcSet="./photo.webp" 
      type="image/webp"
    />
    <img 
      src="./photo.webp" 
      alt="Jessica Garcia" 
      className="w-full h-full object-cover object-center"
      style={{ 
        imageRendering: 'high-quality',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)',
        filter: 'contrast(1.02)'
      }}
      width="256"
      height="256"
      draggable="false"
      loading="eager"
      decoding="sync"
    />
  </picture>
</div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-yellow-400">Jessica Garcia</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Software Engineer crafting digital experiences
        </h2>
        
        {/* Bio */}
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build robust, scalable applications with modern technologies. 
          Passionate about clean code, user experience, and solving complex problems 
          through elegant solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link 
            to="/academics" 
            className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors inline-block text-center"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-block text-center"
          >
            Get In Touch
          </Link>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-500 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero