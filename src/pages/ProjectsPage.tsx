import { ExternalLink, Github, Clock, CheckCircle, Users, Code, Database, Smartphone, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  const heroRef = useRef(null)
  const overviewRef = useRef(null)
  const projectsRef = useRef(null)
  const ctaRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" })
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
  const projects = [
    {
      id: 11,
      title: "homebase",
      category: "Mobile Application",
      status: "in-progress",
      deployedUrl: null,
      githubUrl: null,
      description: "A free, local-first family management mobile application built with React Native and Expo. Currently in TestFlight beta testing as a solo developer project. All data is stored locally on your device using SQLite - no cloud services, subscriptions, or backend infrastructure required. Privacy-focused and completely offline-first.",
      problem: "Families need a comprehensive tool to manage household activities, schedules, meals, tasks, and health information, but existing solutions often require subscriptions, compromise privacy with cloud storage, or lack offline functionality.",
      solution: "A completely free, local-first mobile application that stores all data on-device using SQLite. No backend infrastructure, no subscriptions, and complete privacy - all while providing comprehensive family management features that work entirely offline.",
      techStack: {
        frontend: ["React Native", "Expo SDK 54", "TypeScript", "Expo Router"],
        state: ["Zustand", "AsyncStorage"],
        database: ["SQLite (expo-sqlite)", "WAL mode"],
        notifications: ["Expo Notifications"],
        architecture: ["Local-first", "Offline-first", "File-based routing"],
        features: ["Native mobile app", "Local push notifications", "Theme system"]
      },
      keyFeatures: [
        "Family calendar with month/week/day views and recurring events",
        "Task management with assignment, priorities, and due dates",
        "Meal planning with weekly schedules and recipe integration",
        "Grocery lists and custom list management with categories",
        "Contact management with birthday tracking and calendar sync",
        "Health tracking for family members with medication logs",
        "Baby tracking for feeding, sleep, and milestone recording",
        "Period tracking with cycle prediction and fertility awareness",
        "Household member management (adults, children, babies, pets)",
        "Completely offline functionality with local SQLite storage",
        "Privacy-focused - all data stays on device",
        "Theme customization and notification preferences"
      ],
      challenges: "Building a comprehensive family management app as a solo developer, implementing complex local-first architecture with SQLite, managing state across multiple interconnected features, designing intuitive mobile UX for diverse family needs, and ensuring smooth performance with large datasets stored locally.",
      learned: "React Native and Expo development, mobile app architecture, SQLite database design and optimization, local-first application patterns, Zustand state management, Expo Router file-based navigation, mobile UX/UI design, local push notifications, and solo development project management."
    },
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
        return <Clock className="w-5 h-5 text-purple-500" />
      default:
        return <Clock className="w-5 h-5 text-slate-400" />
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
      case 'Mobile Application':
        return <Home className="w-6 h-6" />
      case 'Web Development':
        return <Code className="w-6 h-6" />
      default:
        return <Code className="w-6 h-6" />
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-20 relative overflow-hidden" ref={heroRef}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 px-2"
            style={{ lineHeight: '1.15', paddingBottom: '0.1em' }}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            My <motion.span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block relative"
              style={{ lineHeight: '1.15', paddingBottom: '0.1em' }}
              animate={heroInView ? {
                filter: [
                  "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                  "drop-shadow(0 0 12px rgba(168, 85, 247, 0.6))",
                  "drop-shadow(0 0 8px rgba(168, 85, 247, 0.4))",
                ],
              } : {}}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Projects
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From web applications to mobile apps - explore the 11 projects that showcase 
            my technical skills, problem-solving abilities, and passion for creating meaningful software.
          </motion.p>
        </div>
      </section>

      {/* Projects Overview */}
      <section className="py-20" ref={overviewRef}>
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={overviewInView ? "visible" : "hidden"}
          >
            {[
              { icon: CheckCircle, number: "8", label: "Completed Projects" },
              { icon: Clock, number: "3", label: "In Development" },
              { icon: Code, number: "30+", label: "Technologies Used" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{stat.number}</h3>
                <p className="text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Jump Navigation */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-lg p-4 sm:p-6 border border-purple-100 shadow-md">
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-4">Quick Jump to Projects</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {projects.map((project) => (
                  <motion.button
                    key={project.id}
                    onClick={() => {
                      const element = document.getElementById(`project-${project.id}`)
                      if (element) {
                        const headerOffset = 80
                        const elementPosition = element.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth'
                        })
                      }
                    }}
                    className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-slate-700 rounded-lg text-xs sm:text-sm font-medium border border-purple-200 hover:border-purple-400 hover:bg-purple-100 transition-all cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            className="space-y-16"
            ref={projectsRef}
            variants={containerVariants}
            initial="hidden"
            animate={projectsInView ? "visible" : "hidden"}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                id={`project-${project.id}`}
                className={`${index % 2 === 1 ? 'bg-purple-50/30' : 'bg-white'} rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-100 hover:border-purple-300 transition-colors shadow-lg hover:shadow-xl scroll-mt-24`}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg mr-4">
                        <div className="text-white">
                          {getCategoryIcon(project.category)}
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 break-words">{project.title}</h2>
                        <p className="text-xs sm:text-sm text-slate-600">{project.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center mb-4">
                      {getStatusIcon(project.status)}
                      <span className="ml-2 text-xs sm:text-sm font-medium text-slate-700">
                        {getStatusText(project.status, project.deployedUrl)}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 sm:space-x-4">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-slate-800 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center space-x-2 min-h-[44px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Code</span>
                      </motion.a>
                    )}
                    {project.deployedUrl && (
                      <motion.a
                        href={project.deployedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-purple-400 hover:to-pink-400 transition-colors flex items-center space-x-2 shadow-lg min-h-[44px]"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm sm:text-base">Live Demo</span>
                      </motion.a>
                    )}
                    {project.status === 'in-progress' && (
                      <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>In Development</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Description & Problem/Solution */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">About</h3>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{project.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Problem & Solution</h3>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-400 pl-3 sm:pl-4">
                          <h4 className="font-medium text-slate-900 mb-1 text-sm sm:text-base">Problem</h4>
                          <p className="text-slate-700 text-xs sm:text-sm">{project.problem}</p>
                        </div>
                        <div className="border-l-4 border-green-400 pl-3 sm:pl-4">
                          <h4 className="font-medium text-slate-900 mb-1 text-sm sm:text-base">Solution</h4>
                          <p className="text-slate-700 text-xs sm:text-sm">{project.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 gap-2">
                        {project.keyFeatures.map((feature, featureIndex) => (
                          <motion.li 
                            key={featureIndex} 
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={projectsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.3 + featureIndex * 0.05 }}
                          >
                            <motion.span 
                              className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                            ></motion.span>
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Stack & Learning */}
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">Tech Stack</h3>
                      <div className="space-y-4">
                        {Object.entries(project.techStack).map(([category, technologies]) => (
                          <div key={category}>
                            <h4 className="font-medium text-slate-800 mb-2 capitalize text-sm sm:text-base">
                              {category.replace(/([A-Z])/g, ' $1').trim()}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {technologies.map((tech, techIndex) => (
                                <motion.span
                                  key={techIndex}
                                  className="bg-purple-50 text-slate-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-purple-200 hover:border-purple-400 hover:bg-purple-100 transition-colors"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={projectsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                  transition={{ delay: 0.4 + techIndex * 0.05 }}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenges & Learning */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Challenges</h3>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{project.challenges}</p>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">What I Learned</h3>
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">{project.learned}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-purple-600 to-pink-600 py-20 relative overflow-hidden" ref={ctaRef}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Want to See More?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm always working on new projects and exploring different technologies. 
            Check out my GitHub for the latest updates and contributions!
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/JessicaCodesx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-purple-600 px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg min-h-[44px] w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm sm:text-base">View All Repositories</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm min-h-[44px] w-full sm:w-auto text-sm sm:text-base inline-block text-center"
              >
                Let's Collaborate
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage