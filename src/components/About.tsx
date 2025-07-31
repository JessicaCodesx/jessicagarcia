const About = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About <span className="text-yellow-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-black mb-4">
              My Story
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software engineer who discovered the power of code 
              while balancing family life and education. My journey into tech began 
              when I decided to pursue my passion for problem-solving and creating 
              digital solutions that make a difference.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              As a stay-at-home mom pursuing my computer science education, I've learned 
              to be incredibly efficient with my time and resourceful in my learning. 
              I believe in writing clean, maintainable code and building technology 
              that solves real problems.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I'm finishing my bachelor's degree while building personal 
              projects and preparing for my Master's program at UT Austin. I'm excited 
              to bring my unique perspective and dedication to innovative development teams.
            </p>
          </div>

          {/* Right Column - Quick Facts */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-xl font-semibold text-black mb-3">Education</h4>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-black">Master of Science, Computer Science</p>
                  <p className="text-gray-600">University of Texas at Austin • Jan 2026</p>
                  <p className="text-sm text-yellow-600 font-medium">Accepted</p>
                </div>
                <div>
                  <p className="font-medium text-black">Honours Bachelor of Computer Science</p>
                  <p className="text-gray-600">Algoma University • Expected Dec 2025</p>
                  <p className="text-sm text-gray-500">GPA: 3.53</p>
                </div>
                <div>
                  <p className="font-medium text-black">Honours Diploma, Computer Programming</p>
                  <p className="text-gray-600">Algonquin College • 2024</p>
                  <p className="text-sm text-gray-500">GPA: 3.9 • Graduated with Honours</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="text-xl font-semibold text-black mb-3">Experience</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-black">Software Developer (Personal Projects)</p>
                  <p className="text-gray-600">Independent • 2022 - Present</p>
                  <p className="text-sm text-gray-500">Building and deploying full-stack applications to GitHub Pages</p>
                </div>
                <div>
                  <p className="font-medium text-black">Student & Parent</p>
                  <p className="text-gray-600">2020 - Present</p>
                  <p className="text-sm text-gray-500">Balancing family responsibilities while maintaining 3.7+ GPA</p>
                </div>
                <div>
                  <p className="font-medium text-black">Previous Professional Experience</p>
                  <p className="text-gray-600">Customer Service & Sales</p>
                  <p className="text-sm text-gray-500">Strong communication and problem-solving skills</p>
                </div>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-black p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-white mb-3">
                Beyond <span className="text-yellow-400">Code</span>
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>🎮 Former competitive Call of Duty player & esports org founder</li>
                <li>🎨 Artist - painting and tattoo enthusiast</li>
                <li>📚 Avid reader and lifelong learner</li>
                <li>👑 Balancing mom life with crushing academic goals</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values/Philosophy */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-black mb-8">
            What Drives Me
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-medium text-black mb-2">Innovation</h4>
              <p className="text-gray-600">
                Finding creative solutions to complex problems through elegant code.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-medium text-black mb-2">Leadership</h4>
              <p className="text-gray-600">
                From managing esports teams to balancing family and academics - leading by example.
              </p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-medium text-black mb-2">Growth</h4>
              <p className="text-gray-600">
                Continuously learning new technologies and improving my craft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About