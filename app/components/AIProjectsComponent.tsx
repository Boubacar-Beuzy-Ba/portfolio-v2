'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Sparkles, ExternalLink, Copy, Check } from 'lucide-react'
import { GitHubIcon } from './icons/SocialIcons'
import Image from 'next/image'

interface AIProject {
  title: string
  description: string
  category: 'prompt-engineering' | 'ai-integration' | 'automation' | 'chatbot'
  coverImage: string
  demoUrl?: string
  githubUrl?: string
  prompts?: Array<{
    title: string
    prompt: string
    result: string
  }>
  technologies: string[]
  aiModels: string[]
}

interface AIProjectsProps {
  projects: AIProject[]
}

const categoryLabels = {
  'prompt-engineering': 'Prompt Engineering',
  'ai-integration': 'AI Integration',
  automation: 'Automation',
  chatbot: 'Chatbot/Assistant',
}

const categoryColors = {
  'prompt-engineering': 'from-purple-500 to-purple-600',
  'ai-integration': 'from-blue-500 to-blue-600',
  automation: 'from-green-500 to-green-600',
  chatbot: 'from-pink-500 to-pink-600',
}

const PromptShowcase: React.FC<{ prompt: { title: string; prompt: string; result: string } }> = ({
  prompt,
}) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h5 className="font-semibold text-sm text-gray-900 dark:text-white">{prompt.title}</h5>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Prompt */}
      <div className="p-4 bg-gray-900 dark:bg-gray-950">
        <pre className="text-xs text-green-400 font-mono whitespace-pre-wrap overflow-x-auto">
          {prompt.prompt}
        </pre>
      </div>

      {/* Result */}
      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Result:
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">{prompt.result}</p>
      </div>
    </div>
  )
}

const AIProjectCard: React.FC<{ project: AIProject; index: number }> = ({ project, index }) => {
  const [showPrompts, setShowPrompts] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
    >
      {/* Header Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-500">
        <div className="absolute inset-0 bg-black/20" />
        <Image src={project.coverImage} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover mix-blend-overlay" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${
              categoryColors[project.category]
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            {categoryLabels[project.category]}
          </span>
        </div>

        {/* AI Models */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.aiModels.slice(0, 3).map((model) => (
            <span
              key={model}
              className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-md border border-white/30"
            >
              {model}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Prompts Preview */}
        {project.prompts && project.prompts.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setShowPrompts(!showPrompts)}
              className="flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              {showPrompts ? 'Hide' : 'View'} Prompts ({project.prompts.length})
            </button>

            {showPrompts && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 space-y-3"
              >
                {project.prompts.map((prompt, idx) => (
                  <PromptShowcase key={idx} prompt={prompt} />
                ))}
              </motion.div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export const AIProjectsComponent: React.FC<AIProjectsProps> = ({ projects }) => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full mb-4">
            <Brain className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">
              AI-Powered
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            AI & Prompt Engineering
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring the frontier of AI with innovative projects, prompt engineering, and intelligent
            automation
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AIProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              AI projects coming soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm currently exploring cutting-edge AI technologies
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default AIProjectsComponent
