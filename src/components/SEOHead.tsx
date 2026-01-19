import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
}

const SEOHead = ({ title, description, keywords, image }: SEOHeadProps) => {
  const location = useLocation()
  const baseUrl = 'https://jessicacodesx.github.io/jessicagarcia'
  const fullUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    // Update document title
    if (title) {
      document.title = `${title} | Jessica Garcia`
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      let element = document.querySelector(selector) as HTMLMetaElement
      
      if (!element) {
        element = document.createElement('meta')
        if (isProperty) {
          element.setAttribute('property', name)
        } else {
          element.setAttribute('name', name)
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    // Update description
    if (description) {
      updateMetaTag('description', description)
      updateMetaTag('og:description', description, true)
      updateMetaTag('twitter:description', description, true)
    }

    // Update title
    if (title) {
      updateMetaTag('og:title', title, true)
      updateMetaTag('twitter:title', title, true)
    }

    // Update URL
    updateMetaTag('og:url', fullUrl, true)
    updateMetaTag('twitter:url', fullUrl, true)

    // Update image
    if (image) {
      updateMetaTag('og:image', image, true)
      updateMetaTag('twitter:image', image, true)
    }

    // Update keywords
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }
  }, [title, description, keywords, image, fullUrl])

  return null
}

export default SEOHead
