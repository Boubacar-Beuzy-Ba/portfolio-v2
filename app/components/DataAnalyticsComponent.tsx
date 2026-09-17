'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Database, FileSpreadsheet, Eye, Lightbulb } from 'lucide-react'
import Image from 'next/image'

interface DataProject {
  title: string
  description: string
  category: 'sql' | 'excel' | 'looker' | 'python' | 'automation'
  coverImage: string
  dashboardUrl?: string
  embedCode?: string
  insights: string[]
  tools: string[]
  datasets?: string
}

interface DataAnalyticsProps {
  projects: DataProject[]
}

const categoryIcons = {
  sql: Database,
  excel: FileSpreadsheet,
  looker: BarChart3,
  python: BarChart3,
  automation: BarChart3,
}

const categoryLabels = {
  sql: 'SQL Analysis',
  excel: 'Excel/VBA',
  looker: 'Looker Studio',
  python: 'Python/Pandas',
  automation: 'Automation',
}

const categoryColors = {
  sql: 'from-blue-500 to-blue-600',
  excel: 'from-green-500 to-green-600',
  looker: 'from-purple-500 to-purple-600',
  python: 'from-yellow-500 to-yellow-600',
  automation: 'from-pink-500 to-pink-600',
}

const DataProjectCard: React.FC<{ project: DataProject; index: number }> = ({
  project,
  index,
}) => {
  const Icon = categoryIcons[project.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700"
    >
      {/* Preview Image/Dashboard */}
      <div className="relative h-64 bg-gray-100 dark:bg-gray-700">
        {project.embedCode ? (
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: project.embedCode }}
          />
        ) : (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${
              categoryColors[project.category]
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            {categoryLabels[project.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        {/* Datasets Info */}
        {project.datasets && (
          <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
            <div className="flex items-start gap-2">
              <Database className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Data Sources
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {project.datasets}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Key Insights */}
        {project.insights && project.insights.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="w-4 h-4 text-yellow-500" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Key Insights
              </h4>
            </div>
            <ul className="space-y-1.5">
              {project.insights.slice(0, 3).map((insight, idx) => (
                <li
                  key={idx}
                  className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2"
                >
                  <span className="text-primary-500">•</span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools */}
        <div className="mb-4">
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Tools Used
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* View Dashboard Button */}
        {project.dashboardUrl && (
          <motion.a
            href={project.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-shadow w-full justify-center"
          >
            <Eye className="w-4 h-4" />
            View Dashboard
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}

export const DataAnalyticsComponent: React.FC<DataAnalyticsProps> = ({ projects }) => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Data Analytics Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dashboards, analyses, and insights from SQL, Excel VBA, Looker Studio, and Python
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <DataProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Data projects coming soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm currently working on exciting data analysis projects
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DataAnalyticsComponent
