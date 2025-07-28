import { ExternalLink, Github, Clock, CheckCircle, Users, Code, Database, Smartphone } from 'lucide-react'

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Study Sidekick",
      category: "Web Application",
      status: "completed",
      deployedUrl: "https://jessicacodesx.github.io/study-sidekick/",
      githubUrl: "https://github.com/JessicaCodesx/study-sidekick",
      description: "A comprehensive, offline-first study assistant designed to help students manage their courses, due dates, notes, flashcards, grades, and study schedules in one beautifully organized platform.",
      problem: "Students struggle to keep track of multiple courses, assignments, and study materials across different platforms and tools.",
      solution: "An all-in-one study management system that works offline and keeps everything organized in one place.",
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        state: ["Context API", "useReducer"],
        database: ["IndexedDB", "idb library"],
        tools: ["Vite", "React Router"],
        features: ["PWA", "Offline-first", "Responsive Design"]
      },
      keyFeatures: [
        "Course management with custom color themes",
        "Unit-based notes system with rich text editor",
        "Flashcard system with spaced repetition",
        "Calendar & task management",
        "GPA tracking and academic records",
        "Study streak visualization",
        "Data export/import functionality",
        "Dark/light mode support"
      ],
      challenges: "Implementing offline-first architecture with IndexedDB, creating a complex state management system, and building an intuitive UX for multiple interconnected features.",
      learned: "Advanced React patterns, client-side database design, performance optimization for large datasets, and creating accessible, responsive interfaces."
    },
    {
      id: 2,
      title: "Kitty Blackjack",
      category: "Game Development",
      status: "completed",
      deployedUrl: "https://ojessicagarcia.itch.io/kitty-blackjack",
      githubUrl: "https://github.com/JessicaCodesx/KittyBlackjack",
      description: "An engaging, animated Blackjack game built with Godot Engine featuring a charming cat dealer, strategic gameplay, and competitive leaderboards.",
      problem: "Wanted to explore game development while creating an entertaining, polished gaming experience.",
      solution: "A fully-featured Blackjack game with character animations, cloud leaderboards, and professional game assets.",
      techStack: {
        engine: ["Godot Engine 4.x"],
        language: ["GDScript"],
        backend: ["Firebase"],
        assets: ["Custom sprites", "Professional card assets"],
        deployment: ["Itch.io", "Web export"]
      },
      keyFeatures: [
        "Complete Blackjack mechanics (hit, stand, double down)",
        "Animated cat dealer with emotional states",
        "Firebase-powered leaderboard system",
        "Betting system with persistent balance",
        "Dynamic card animations and positioning",
        "Automatic win/loss calculations",
        "Game over handling and deck reshuffling"
      ],
      challenges: "Learning Godot Engine from scratch, implementing game logic and state management, integrating Firebase for leaderboards, and creating smooth animations.",
      learned: "Game development principles, GDScript programming, Firebase integration, sprite animation, and game deployment workflows."
    },
    {
      id: 3,
      title: "Reminder App",
      category: "Web Application",
      status: "completed",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/reminder-app-site",
      description: "A clean, user-friendly reminder application that helps users organize and track their tasks and important dates with an intuitive interface.",
      problem: "People need a simple, reliable way to set and manage reminders without the complexity of full project management tools.",
      solution: "A streamlined reminder app focused on ease of use, quick task entry, and reliable notifications.",
      techStack: {
        frontend: ["HTML5", "CSS3", "JavaScript"],
        styling: ["Modern CSS", "Responsive Design"],
        storage: ["Local Storage"],
        deployment: ["GitHub Pages"]
      },
      keyFeatures: [
        "Add and manage reminders easily",
        "Clean, intuitive user interface",
        "Responsive design for all devices",
        "Local storage for data persistence",
        "Date and time management",
        "Task organization and filtering",
        "Lightweight and fast performance"
      ],
      challenges: "Creating an intuitive UX for reminder management, implementing reliable local storage, and ensuring cross-browser compatibility.",
      learned: "Vanilla JavaScript DOM manipulation, local storage best practices, responsive design principles, and user experience design."
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "Web Development",
      status: "completed",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/personalwebsite",
      description: "This very website! A professional portfolio showcasing my projects, experience, and skills with a focus on clean design and user experience.",
      problem: "Needed a professional online presence to showcase my work and attract potential employers.",
      solution: "A multi-page portfolio with detailed project showcases, comprehensive about sections, and easy contact methods.",
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS"],
        routing: ["React Router"],
        animations: ["Framer Motion", "Lucide React"],
        build: ["Vite"],
        deployment: ["GitHub Pages"]
      },
      keyFeatures: [
        "Responsive design across all devices",
        "Multiple detailed pages with smooth navigation",
        "Professional color scheme and typography",
        "Interactive contact methods",
        "Project showcases with technical details",
        "Optimized performance and SEO"
      ],
      challenges: "Balancing professional presentation with personality, organizing complex information clearly, and ensuring mobile responsiveness.",
      learned: "Portfolio design principles, advanced Tailwind CSS techniques, React Router implementation, and professional web development practices."
    },
    {
      id: 5,
      title: "Movie Review App",
      category: "Web Application", 
      status: "in-progress",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/moviereview",
      description: "A comprehensive movie review application where users can discover movies, read reviews, and share their own ratings and opinions about films.",
      problem: "Movie enthusiasts need a dedicated platform to discover new films, read trusted reviews, and share their own movie experiences.",
      solution: "A user-friendly movie review platform with movie discovery, rating systems, and community-driven reviews.",
      techStack: {
        frontend: ["React", "TypeScript", "Tailwind CSS"],
        api: ["Movie Database API", "RESTful APIs"],
        state: ["React Hooks", "Context API"],
        tools: ["Vite", "React Router"],
        features: ["Responsive Design", "Search Functionality"]
      },
      keyFeatures: [
        "Movie search and discovery",
        "User rating and review system",
        "Movie details and information display",
        "Responsive design for all devices",
        "Popular and trending movie lists",
        "User authentication (planned)",
        "Favorite movies management",
        "Review filtering and sorting"
      ],
      challenges: "Integrating with movie APIs, designing an intuitive review interface, managing complex movie data, and creating an engaging user experience.",
      learned: "API integration techniques, data fetching and caching strategies, TypeScript with React, and building interactive user interfaces."
    },
    {
      id: 6,
      title: "Event Management System",
      category: "Full-Stack Application",
      status: "completed",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/COSC3506_EventManagementSystem",
      description: "A comprehensive full-stack web application for creating, managing, and tracking events. Built as a term project for Software Engineering (COSC3506), featuring role-based authentication, event management, and invoice processing.",
      problem: "Event organizers need a centralized system to manage events, coordinate with vendors and staff, handle invoicing, and track all aspects of event planning.",
      solution: "A complete event management platform with role-based access, featuring admin controls, client event creation, vendor coordination, and staff task management.",
      techStack: {
        frontend: ["React 18", "TypeScript", "Vite", "React Router", "Context API"],
        backend: ["Spring Boot", "Java 17", "Spring Security", "Spring Data JPA"],
        database: ["MySQL"],
        auth: ["JWT Authentication", "Role-based Access Control"],
        tools: ["Maven", "Font Awesome", "CSS Animations"],
        deployment: ["Local Development Setup"]
      },
      keyFeatures: [
        "Role-based authentication (Admin, Client, Vendor, Staff)",
        "Complete event lifecycle management",
        "Multi-user dashboard with role-specific views",
        "Invoice generation and payment processing simulation",
        "Vendor and staff assignment to events",
        "Task management and scheduling system",
        "Admin reporting and user management",
        "Secure JWT-based authentication",
        "Professional UI with animations and transitions"
      ],
      challenges: "Implementing complex role-based access control, designing a scalable database schema, integrating frontend and backend authentication, and creating intuitive interfaces for different user types.",
      learned: "Enterprise Java development with Spring Boot, advanced React patterns with TypeScript, database design and JPA relationships, JWT authentication implementation, and full-stack project architecture."
    },
    {
      id: 7,
      title: "Online Bookstore",
      category: "Full-Stack Application",
      status: "completed",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/OnlineBookstore",
      description: "A comprehensive e-commerce bookstore application featuring user authentication, shopping cart functionality, admin dashboard, and complete inventory management system.",
      problem: "Book retailers need a digital platform to showcase inventory, manage sales, and provide customers with an intuitive shopping experience.",
      solution: "A full-featured online bookstore with customer-facing shopping features and administrative tools for inventory management.",
      techStack: {
        frontend: ["React", "JavaScript", "CSS"],
        backend: ["Node.js", "Express.js"],
        database: ["MySQL"],
        auth: ["User Authentication", "Session Management"],
        tools: ["npm", "MySQL Workbench"],
        features: ["Shopping Cart", "CRUD Operations", "Admin Dashboard"]
      },
      keyFeatures: [
        "User registration and authentication system",
        "Browse and search book inventory",
        "Shopping cart with add/remove functionality",
        "Simulated checkout with order processing",
        "Admin dashboard with full CRUD operations",
        "Book inventory management (Create, Read, Update, Delete)",
        "User session management and logout",
        "Order number generation after purchase",
        "Responsive design for optimal user experience"
      ],
      challenges: "Implementing secure user authentication, designing a flexible database schema for books and users, creating an intuitive shopping cart experience, and building separate user and admin interfaces.",
      learned: "E-commerce application architecture, MySQL database design and queries, Node.js backend development, user session management, and creating role-based user interfaces."
    },
    {
      id: 8,
      title: "Dress-Up Game",
      category: "Interactive Game",
      status: "completed",
      deployedUrl: "https://jessicacodesx.github.io/DressUpGame/",
      githubUrl: "https://github.com/JessicaCodesx/DressUpGame",
      description: "A fun, interactive dress-up game featuring hand-drawn assets and smooth animations. Players can select characters and customize outfits with various clothing items, accessories, and pets - all brought to life with personal artistic touches.",
      problem: "Wanted to combine frontend development practice with creative expression while creating an engaging, interactive gaming experience.",
      solution: "A fully-featured dress-up game with custom artwork, character customization, animations, and sound effects - showcasing both technical and artistic skills.",
      techStack: {
        frontend: ["React", "JavaScript", "CSS3", "HTML5"],
        routing: ["React Router"],
        assets: ["Hand-drawn illustrations", "Custom artwork"],
        features: ["CSS Animations", "Sound Effects", "Background Music"],
        tools: ["Digital art tools", "Audio integration"]
      },
      keyFeatures: [
        "Character selection screen with multiple options",
        "Complete outfit customization (shirts, pants, shoes, accessories)",
        "Interactive pet selection and placement",
        "Smooth CSS animations and visual effects",
        "Background music and sound effects integration",
        "Photo frame mode to showcase final outfits",
        "Responsive design for different screen sizes",
        "All assets are original hand-drawn artwork"
      ],
      challenges: "Creating cohesive hand-drawn assets, implementing smooth drag-and-drop interactions, managing complex state for multiple customization options, and integrating audio seamlessly.",
      learned: "Digital art creation and asset optimization, advanced CSS animations, React state management for complex interactions, audio integration in web applications, and combining artistic creativity with technical development."
    },
    {
      id: 9,
      title: "Can Weather Watch",
      category: "Mobile Web Application",
      status: "in-progress",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/can-weather-watch",
      description: "A mobile-friendly web application providing real-time weather alerts and traffic camera monitoring across Canada. Integrates with Environment Canada APIs to deliver critical weather warnings and traffic information to users.",
      problem: "Canadians need quick access to real-time weather alerts and traffic conditions, especially during severe weather events, but existing solutions are often clunky or not mobile-optimized.",
      solution: "A streamlined, mobile-first application that combines weather alerts with traffic camera feeds in an intuitive interface designed specifically for Canadian conditions.",
      techStack: {
        frontend: ["React", "JavaScript", "Mobile-responsive CSS"],
        backend: ["Python", "FastAPI", "uvicorn"],
        apis: ["Environment Canada API", "Traffic Camera APIs"],
        infrastructure: ["Docker", "Docker Compose"],
        features: ["Interactive Maps", "Real-time Data", "Location Services"],
        tools: ["Node.js", "Python Virtual Environment"]
      },
      keyFeatures: [
        "Interactive map of Canada with real-time weather alerts",
        "Environment Canada weather warnings integration",
        "Traffic camera monitoring and feeds",
        "Location search and favorite locations",
        "Mobile-optimized responsive interface",
        "Real-time data updates and notifications",
        "Docker containerization for easy deployment",
        "Cross-platform compatibility"
      ],
      challenges: "Integrating multiple government APIs, handling real-time data streams, optimizing for mobile performance, and creating an intuitive interface for complex geographic data.",
      learned: "Python backend development with FastAPI, government API integration, Docker containerization, real-time data handling, mobile-first responsive design, and geographic data visualization."
    },
    {
      id: 10,
      title: "Bike Store Management System",
      category: "Enterprise Application",
      status: "completed",
      deployedUrl: null,
      githubUrl: "https://github.com/JessicaCodesx/bike-store",
      description: "A comprehensive three-tier enterprise web application for managing a bike shop business. Features complete business operations including sales, inventory management, customer relations, returns processing, and repair tracking with role-based authentication.",
      problem: "Bike shop businesses need integrated systems to manage inventory, sales, customers, repairs, and reporting across different employee roles and responsibilities.",
      solution: "A complete three-tier enterprise application with role-based access control, supporting all aspects of bike shop operations from sales to repairs to management reporting.",
      techStack: {
        frontend: ["HTML5", "CSS3", "JSP (JavaServer Pages)"],
        middleware: ["Java Servlets", "Jakarta EE"],
        backend: ["MySQL", "Microsoft SQL Server"],
        server: ["Apache Tomcat"],
        build: ["Maven"],
        features: ["Role-based Authentication", "Multi-database Support", "Enterprise Architecture"]
      },
      keyFeatures: [
        "Three-tier enterprise architecture (Frontend/Middleware/Backend)",
        "Role-based authentication (Admin, Owner, Clerk)",
        "Complete inventory and product management",
        "Sales processing and transaction handling",
        "Customer management and relationship tracking",
        "Returns processing and refund management",
        "Repair tracking and service management",
        "Supplier management and procurement",
        "Comprehensive reporting and analytics",
        "Multi-database support (MySQL/SQL Server)"
      ],
      challenges: "Implementing three-tier architecture, designing complex role-based permissions, managing intricate business logic across multiple domains, and ensuring data consistency across different database systems.",
      learned: "Enterprise Java development with Jakarta EE, three-tier application architecture, JSP and servlet programming, multi-database integration, role-based security implementation, and complex business logic design."
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'in-progress':
        return <Clock className="w-5 h-5 text-yellow-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string, deployedUrl: string | null) => {
    switch (status) {
      case 'completed':
        return deployedUrl ? 'Completed & Deployed' : 'Completed'
      case 'in-progress':
        return 'In Development'
      default:
        return 'Planning'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web Application':
        return <Code className="w-6 h-6" />
      case 'Game Development':
        return <Smartphone className="w-6 h-6" />
      case 'Interactive Game':
        return <Smartphone className="w-6 h-6" />
      case 'Full-Stack Application':
        return <Database className="w-6 h-6" />
      case 'Enterprise Application':
        return <Database className="w-6 h-6" />
      case 'Mobile Web Application':
        return <Smartphone className="w-6 h-6" />
      case 'Web Development':
        return <Code className="w-6 h-6" />
      default:
        return <Code className="w-6 h-6" />
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-yellow-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From web applications to game development - explore the 10 projects that showcase 
            my technical skills, problem-solving abilities, and passion for creating meaningful software.
          </p>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">8</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">2</h3>
              <p className="text-gray-600">In Development</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">25+</h3>
              <p className="text-gray-600">Technologies Used</p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className={`${index % 2 === 1 ? 'bg-gray-50' : ''} rounded-2xl p-8`}>
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-black p-2 rounded-lg mr-4">
                        <div className="text-yellow-400">
                          {getCategoryIcon(project.category)}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-black">{project.title}</h2>
                        <p className="text-gray-600">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {getStatusIcon(project.status)}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {getStatusText(project.status, project.deployedUrl)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.deployedUrl && (
                      <a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors flex items-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.status === 'in-progress' && (
                      <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>In Development</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Description & Problem/Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">About</h3>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Problem & Solution</h3>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-400 pl-4">
                          <h4 className="font-medium text-black mb-1">Problem</h4>
                          <p className="text-gray-700 text-sm">{project.problem}</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-4">
                          <h4 className="font-medium text-black mb-1">Solution</h4>
                          <p className="text-gray-700 text-sm">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Learning */}
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-3">Tech Stack</h3>
                      <div className="space-y-4">
                        {Object.entries(project.techStack).map(([category, technologies]) => (
                          <div key={category}>
                            <h4 className="font-medium text-gray-800 mb-2 capitalize">
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Learning */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">Challenges</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.challenges}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black mb-2">What I Learned</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.learned}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-black py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and exploring different technologies. 
            Check out my GitHub for the latest updates and contributions!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/JessicaCodesx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-yellow-300 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View All Repositories</span>
            </a>
            <a
              href="/contact"
              className="border border-gray-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Let's Collaborate
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage