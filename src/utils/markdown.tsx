import React from 'react'

// Simple markdown-like renderer for blog posts
export const renderMarkdown = (content: string) => {
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let currentCodeBlock: string[] = []
  let inCodeBlock = false
  let codeLanguage = ''

  lines.forEach((line, index) => {
    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        elements.push(
          <pre key={`code-${index}`} className="bg-slate-900 text-slate-100 p-3 sm:p-4 rounded-lg overflow-x-auto my-4 text-xs sm:text-sm">
            <code className={`language-${codeLanguage}`}>{currentCodeBlock.join('\n')}</code>
          </pre>
        )
        currentCodeBlock = []
        inCodeBlock = false
        codeLanguage = ''
      } else {
        // Start code block
        codeLanguage = line.slice(3).trim() || 'javascript'
        inCodeBlock = true
      }
      return
    }

    if (inCodeBlock) {
      currentCodeBlock.push(line)
      return
    }

    // Handle headers
    if (line.startsWith('# ')) {
      elements.push(<h1 key={index} className="text-3xl sm:text-4xl font-bold text-slate-900 mt-8 mb-4">{line.slice(2)}</h1>)
      return
    }
    if (line.startsWith('## ')) {
      elements.push(<h2 key={index} className="text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">{line.slice(3)}</h2>)
      return
    }
    if (line.startsWith('### ')) {
      elements.push(<h3 key={index} className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">{line.slice(4)}</h3>)
      return
    }
    if (line.startsWith('#### ')) {
      elements.push(<h4 key={index} className="text-lg sm:text-xl font-semibold text-slate-900 mt-4 mb-2">{line.slice(5)}</h4>)
      return
    }

    // Handle lists (simplified - render as paragraphs with bullets for now)
    if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const listItem = line.trim().slice(2)
      elements.push(
        <p key={index} className="text-slate-700 leading-relaxed mb-2 ml-4 text-sm sm:text-base break-words">
          <span className="text-purple-600 mr-2">•</span>
          {processText(listItem)}
        </p>
      )
      return
    }

    // Handle empty lines
    if (line.trim() === '') {
      elements.push(<br key={index} />)
      return
    }

    // Handle inline formatting
    let processedLine = line
    const parts: React.ReactNode[] = []
    let lastIndex = 0

    // Process inline code
    const codeRegex = /`([^`]+)`/g
    let match
    while ((match = codeRegex.exec(processedLine)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...processText(processedLine.slice(lastIndex, match.index)))
      }
      parts.push(
        <code key={`code-${match.index}`} className="bg-purple-50 text-purple-600 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono break-all">
          {match[1]}
        </code>
      )
      lastIndex = match.index + match[0].length
    }
    if (lastIndex < processedLine.length) {
      parts.push(...processText(processedLine.slice(lastIndex)))
    }

    if (parts.length > 0) {
      elements.push(<p key={index} className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base break-words">{parts}</p>)
    } else {
      elements.push(<p key={index} className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base break-words">{...processText(processedLine)}</p>)
    }
  })

  return elements
}

const processText = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = []
  let lastIndex = 0

  // Bold text
  const boldRegex = /\*\*([^*]+)\*\*/g
  let match
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(<strong key={`bold-${match.index}`} className="font-semibold text-slate-900">{match[1]}</strong>)
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : [text]
}
