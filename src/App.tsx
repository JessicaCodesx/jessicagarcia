import './index.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

const AnimatedRoutes = () => {
  const location = useLocation()

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App