import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts.json'
import SEOHead from '../components/SEOHead'

const BlogPage = () => {
  const heroRef = useRef(null)
  const postsRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true, margin: "-100px" })
  const postsInView = useInView(postsRef, { once: true, margin: "-100px" })

  const publishedPosts = blogPosts.filter(post => post.published)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      <SEOHead
        title="Software Engineering Blog"
        description="Technical blog posts on computer science fundamentals, programming concepts, algorithms, and software engineering. Learn about finite automata, recursion, Big O notation, React, APIs, and more."
        keywords="software engineering blog, programming blog, computer science blog, algorithms, data structures, finite automata, recursion, Big O notation, React tutorials, API design, database normalization, software engineer blog, coding tutorials, programming concepts"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 py-20 relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6 px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            Thoughts &{' '}
            <motion.span 
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent inline-block relative"
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
              Insights
            </motion.span>
          </motion.h1>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Sharing technical insights, career reflections, and lessons learned from building software 
            and pursuing cloud development.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20" ref={postsRef}>
        <div className="max-w-4xl mx-auto px-6">
          {publishedPosts.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={postsInView ? { opacity: 1 } : { opacity: 0 }}
            >
              <p className="text-slate-600 text-lg">Coming soon! Check back for new posts.</p>
            </motion.div>
          ) : (
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={postsInView ? "visible" : "hidden"}
            >
              {publishedPosts.map((post) => (
                <motion.article
                  key={post.id}
                  className="bg-white border border-purple-100 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:border-purple-200 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  <Link to={`/blog/${post.id}`} className="block">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors break-words">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-700 leading-relaxed mb-6 text-base sm:text-lg break-words">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium border border-purple-200"
                      >
                        <Tag className="w-3 h-3 inline mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default BlogPage
