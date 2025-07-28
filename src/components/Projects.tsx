import { ExternalLink, Github, Gamepad2, BookOpen } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Study Sidekick",
      description: "A comprehensive, offline-first study assistant that helps students manage courses, notes, flashcards, and academic progress in one beautifully organized platform.",
      features: [
        "Course management with custom themes",
        "Rich text notes organized by units",
        "Spaced repetition flashcard system", 
        "Calendar & task management",
        "GPA tracking & academic records",
        "Study streak visualization",
        "Dark/light mode & responsive design"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "IndexedDB", "Vite"],
      liveUrl: "https://jessicacodesx.github.io/study-sidekick/",
      githubUrl: "https://github.com/JessicaCodesx/study-sidekick",
      type: "Web Application",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      title: "Kitty Blackjack",
      description: "An engaging, animated Blackjack game built with Godot Engine featuring a charming cat dealer, strategic gameplay, and competitive leaderboards.",
      features: [
        "Full Blackjack mechanics & betting system",
        "Animated cat dealer with emotional states",
        "Firebase-powered leaderboard system",
        "Dynamic card animations & positioning",
        "Persistent player balance tracking",
        "Professional game asset integration"
      ],
      techStack: ["Godot Engine", "GDScript", "Firebase", "Game Design"],
      liveUrl: "https://ojessicagarcia.itch.io/kitty-blackjack",
      githubUrl: "https://github.com/JessicaCodesx/KittyBlackjack", 
      type: "Game Development",
      icon: <Gamepad2 className="w-6 h-6" />
    }
  ]

  return (
    <section className="min-h-screen bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From full-stack web applications to game development - showcasing my passion 
            for creating engaging, user-focused digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Project Header */}
              <div className="bg-gray-50 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 p-2 rounded-lg text-black">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black">{project.title}</h3>
                      <p className="text-sm text-gray-600 font-medium">{project.type}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl}
                      className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.liveUrl}
                      className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>

              {/* Project Body */}
              <div className="p-6">
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-black mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-yellow-400 rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold text-black mb-4">Want to see more?</h3>
            <p className="text-black mb-6">
              I'm always working on new projects and exploring different technologies.
            </p>
            <a 
              href="https://github.com/JessicaCodesx"
              className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects