import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import AcademicsPage from './pages/AcademicsPage'
import ContactPage from './pages/ContactPage'

// Placeholder component for now - we'll build this next
const ProjectsPage = () => <div className="pt-16 min-h-screen bg-white p-8"><h1 className="text-4xl">Projects Page Coming Soon!</h1></div>

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App