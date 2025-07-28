import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Image Placeholder - We'll add your photo later */}
        <div className="w-48 h-48 mx-auto mb-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-yellow-400">
          <span className="text-gray-400 text-sm">Your Photo</span>
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
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors">
            View My Work
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
            Get In Touch
          </button>
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