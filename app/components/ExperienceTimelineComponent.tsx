'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Calendar, CheckCircle2 } from 'lucide-react'

interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  current: boolean
  description: string
  achievements: string[]
  skills: string[]
}

interface ExperienceTimelineProps {
  experiences: Experience[]
}

function formatYear(dateStr: string) {
  return new Date(dateStr).getFullYear()
}

function formatMonthYear(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const TimelineNode: React.FC<{ experience: Experience; index: number }> = ({ experience, index }) => {
  const startYear = formatYear(experience.startDate)
  const endYear = experience.current ? 'Now' : experience.endDate ? formatYear(experience.endDate) : ''

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
      className="relative z-10 flex flex-col items-center"
    >
      <div className="relative flex flex-col items-center justify-center w-20 h-20 rounded-full bg-primary-500 shadow-lg text-white text-center px-1">
        <span className="text-xs font-bold leading-tight">{startYear}</span>
        <span className="text-[10px] opacity-80">—</span>
        <span className="text-xs font-bold leading-tight">{endYear}</span>
        {experience.current && (
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-primary-400/30 blur-md -z-10"
          />
        )}
      </div>
    </motion.div>
  )
}

const TimelineItem: React.FC<{ experience: Experience; index: number; isLast: boolean }> = ({
  experience,
  index,
  isLast,
}) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Desktop: 3-column grid — left | center | right */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_80px_1fr] lg:gap-6 items-center">
        {/* Left slot */}
        <div className="flex justify-end">
          {isEven && <TimelineContent experience={experience} />}
        </div>

        {/* Center: node + vertical line */}
        <div className="flex flex-col items-center relative">
          {!isLast && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+6rem)] bg-primary-200 dark:bg-primary-800" />
          )}
          <TimelineNode experience={experience} index={index} />
        </div>

        {/* Right slot */}
        <div className="flex justify-start">
          {!isEven && <TimelineContent experience={experience} />}
        </div>
      </div>

      {/* Mobile: left line + dot + card */}
      <div className="lg:hidden flex gap-4 items-start">
        {/* Left: line + dot */}
        <div className="flex flex-col items-center shrink-0 pt-1">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative w-4 h-4 rounded-full bg-primary-500 shadow-md shrink-0"
          >
            {experience.current && (
              <span className="absolute inset-0 rounded-full bg-primary-400/40 animate-ping" />
            )}
          </motion.div>
          {!isLast && (
            <div className="w-0.5 flex-1 mt-1 min-h-12 bg-primary-200 dark:bg-primary-800" />
          )}
        </div>

        {/* Card */}
        <div className="flex-1 pb-8">
          <TimelineContent experience={experience} />
        </div>
      </div>
    </motion.div>
  )
}

const TimelineContent: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-white dark:bg-secondary-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-secondary-200 dark:border-secondary-700`}
    >
      {/* Header */}
      <div className="mb-4">
        {experience.current && (
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Current Position
          </span>
        )}
        <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">
          {experience.title}
        </h3>
        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
          {experience.company}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-4 mb-4 text-sm text-secondary-600 dark:text-secondary-400">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>
            {formatMonthYear(experience.startDate)} – {experience.current ? 'Present' : experience.endDate ? formatMonthYear(experience.endDate) : ''}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-secondary-700 dark:text-secondary-300 mb-4">{experience.description}</p>

      {/* Achievements */}
      {experience.achievements && experience.achievements.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
            Key Achievements:
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-secondary-700 dark:text-secondary-300">
                <CheckCircle2 className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Skills */}
      {experience.skills && experience.skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export const ExperienceTimelineComponent: React.FC<ExperienceTimelineProps> = ({
  experiences,
}) => {
  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-secondary-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto">
            My journey through various roles and industries
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-24">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimelineComponent
