'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Filter, Users, Zap, TrendingUp, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { GitHubIcon } from './icons/SocialIcons'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  category: 'web' | 'data' | 'ai' | 'saas'
  tags: string[]
  coverImage: string
  demoUrl?: string
  sourceCodeUrl?: string
  featured: boolean
  metrics?: {
    users?: string
    performance?: string
    impact?: string
  }
  technologies: string[]
}

interface ProjectsV2Props {
  projects: Project[]
}

const categoryLabels = {
  all: 'All Projects',
  web: 'Web Apps',
  data: 'Data Analysis',
  ai: 'AI Projects',
  saas: 'SAAS Products',
}

const PROJECTS_PER_PAGE = 6

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-secondary-200 dark:border-secondary-700 flex flex-col"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 text-xs font-semibold bg-primary-500 text-white rounded-full shadow-lg">
            Featured
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-secondary-200 dark:bg-secondary-700 shrink-0">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 rounded-full">
            {categoryLabels[project.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 line-clamp-1">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-4 mb-4 text-xs">
            {project.metrics.users && (
              <div className="flex items-center gap-1 text-secondary-600 dark:text-secondary-400">
                <Users className="w-3.5 h-3.5" />
                <span>{project.metrics.users}</span>
              </div>
            )}
            {project.metrics.performance && (
              <div className="flex items-center gap-1 text-secondary-600 dark:text-secondary-400">
                <Zap className="w-3.5 h-3.5" />
                <span>{project.metrics.performance}</span>
              </div>
            )}
            {project.metrics.impact && (
              <div className="flex items-center gap-1 text-secondary-600 dark:text-secondary-400">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>{project.metrics.impact}</span>
              </div>
            )}
          </div>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-gray-500 dark:text-secondary-400 rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {project.slug?.current && (
            <Link
              href={`/projects/${project.slug.current}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              Details
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
          {project.sourceCodeUrl && (
            <a
              href={project.sourceCodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-lg hover:bg-secondary-200 dark:hover:bg-secondary-600 transition-colors"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export const ProjectsV2Component: React.FC<ProjectsV2Props> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'data' | 'ai' | 'saas'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch =
      searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Reset to page 1 when filter/search changes
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategory, searchQuery])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  // Count projects by category
  const categoryCounts = {
    all: projects.length,
    web: projects.filter((p) => p.category === 'web').length,
    data: projects.filter((p) => p.category === 'data').length,
    ai: projects.filter((p) => p.category === 'ai').length,
    saas: projects.filter((p) => p.category === 'saas').length,
  }

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            Explore my work across web development, data analysis, AI, and SAAS products
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md mx-auto block px-4 py-3 bg-secondary-100 dark:bg-secondary-800 border border-gray-300 dark:border-secondary-700 rounded-xl text-secondary-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                {categoryLabels[category]}
                <span className="ml-2 text-xs opacity-75">({categoryCounts[category]})</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div key={currentPage} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-secondary-600 dark:text-secondary-400">
              Try adjusting your filters or search query
            </p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-secondary-200 dark:border-secondary-700 text-secondary-600 dark:text-secondary-400 hover:border-primary-500 hover:text-primary-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                  currentPage === page
                    ? 'bg-primary-500 text-white'
                    : 'border border-secondary-200 dark:border-secondary-700 text-secondary-600 dark:text-secondary-400 hover:border-primary-500 hover:text-primary-500'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-secondary-200 dark:border-secondary-700 text-secondary-600 dark:text-secondary-400 hover:border-primary-500 hover:text-primary-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Page indicator */}
        {totalPages > 1 && (
          <p className="text-center text-sm text-gray-500 dark:text-secondary-400 mt-4">
            Page {currentPage} of {totalPages} — {filteredProjects.length} projects
          </p>
        )}
      </div>
    </section>
  )
}

export default ProjectsV2Component
