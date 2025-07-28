import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image Placeholder - We'll add your photo later */}
        <div className="w-48 h-48 mx-auto mb-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-500 text-sm">Your Photo</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-blue-600">Your Name</span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
          Software Engineer crafting digital experiences
        </h2>
        
        {/* Bio */}
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          I build robust, scalable applications with modern technologies. 
          Passionate about clean code, user experience, and solving complex problems 
          through elegant solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            View My Work
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Get In Touch
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero