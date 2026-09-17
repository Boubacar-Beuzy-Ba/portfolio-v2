'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Brain, Rocket, Wrench } from 'lucide-react'

interface Skill {
  name: string
  level: number
  category: 'web' | 'data' | 'ai' | 'saas' | 'tools'
}

const categoryIcons = {
  web: Code,
  data: Database,
  ai: Brain,
  saas: Rocket,
  tools: Wrench,
}

const categoryTitles = {
  web: 'Web Development',
  data: 'Data Analysis',
  ai: 'AI & Automation',
  saas: 'SAAS & Product',
  tools: 'Tools & Others',
}

interface SkillsMatrixProps {
  skills: Skill[]
}

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = categoryIcons[skill.category]

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon className="w-3.5 h-3.5 text-primary-500" />
          <span className="text-sm font-medium text-secondary-700 dark:text-secondary-200">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-semibold text-primary-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary-100 dark:bg-secondary-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          className="h-full rounded-full bg-primary-500"
        />
      </div>
    </div>
  )
}

const SkillCategory: React.FC<{
  category: 'web' | 'data' | 'ai' | 'saas' | 'tools'
  skills: Skill[]
  index: number
}> = ({ category, skills, index }) => {
  const Icon = categoryIcons[category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-xl bg-primary-50 dark:bg-primary-900/20">
          <Icon className="w-5 h-5 text-primary-500" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-secondary-800 dark:text-white">
            {categoryTitles[category]}
          </h3>
          <p className="text-xs text-secondary-400">
            {skills.length} skill{skills.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  )
}

export const SkillsMatrixComponent: React.FC<SkillsMatrixProps> = ({ skills }) => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = []
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  Object.keys(skillsByCategory).forEach((cat) => {
    skillsByCategory[cat].sort((a, b) => b.level - a.level)
  })

  const categories = ['web', 'data', 'ai', 'saas', 'tools'] as const

  return (
    <section id="skills" className="py-20 px-4 bg-secondary-50 dark:bg-secondary-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Skills & Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((category, index) => {
            const categorySkills = skillsByCategory[category] || []
            if (categorySkills.length === 0) return null
            return (
              <SkillCategory
                key={category}
                category={category}
                skills={categorySkills}
                index={index}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsMatrixComponent
