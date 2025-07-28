import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Name & Tagline */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Jessica Garcia</h3>
            <p className="text-gray-400">Software Engineer crafting digital experiences</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/JessicaCodesx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jessicagarcia5714/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © {currentYear} Jessica Garcia. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Currently preparing to pursue Master's at UT Austin • Open for Work
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer