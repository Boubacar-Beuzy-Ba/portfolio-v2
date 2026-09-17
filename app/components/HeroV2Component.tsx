'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'

interface HeroV2Props {
  name?: string
  roles?: (string | number)[]
  bio?: string
  profileImage?: string
  githubUrl?: string
  linkedinUrl?: string
  email?: string
  resumeUrl?: string
}

const HeroV2Component: React.FC<HeroV2Props> = ({
  name = 'Boubacar Ba',
  roles = [
    'Web Developer',
    2000,
    'Data Analyst',
    2000,
    'AI Engineer',
    2000,
    'SAAS Builder',
    2000,
  ],
  bio = 'Experienced Web Developer skilled in React with a background in Customer Success Management, IT Customer Support, and Head of Ops Excellence in Logistics E-commerce.',
  profileImage = '/profile.jpg',
  githubUrl = 'https://github.com/Boubacar-Beuzy-Ba',
  linkedinUrl = 'https://www.linkedin.com/in/boubacar-ba-491246145/',
  email = 'bouba0178@gmail.com',
  resumeUrl = '/Boubacar Resume CSM & Web.pdf',
}) => {
  // Skills badges
  const skills = ['React', 'Next.js', 'TypeScript', 'SQL', 'Python', 'AI/ML', 'Looker Studio', 'Excel VBA']

  return (
    <section id="home" className="min-h-screen flex items-center bg-white dark:bg-secondary-900 pt-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary-200 bg-primary-50 dark:bg-primary-900/20 dark:border-primary-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-xs font-medium text-primary-600 dark:text-primary-400 tracking-wide uppercase">
                Available for opportunities
              </span>
            </div>

            {/* Mobile : nom + petite photo côte à côte */}
            <div className="flex items-center gap-4 mb-4 lg:hidden">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                <Image
                  src={profileImage}
                  alt={name}
                  width={64}
                  height={64}
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
              <h1 className="text-3xl font-bold text-secondary-900 dark:text-white leading-tight">
                {name}
              </h1>
            </div>

            {/* Desktop : nom seul */}
            <h1 className="hidden lg:block text-5xl xl:text-6xl font-bold text-secondary-900 dark:text-white mb-4 leading-tight">
              {name}
            </h1>

            {/* Role typing */}
            <div className="mb-6 h-10">
              <TypeAnimation
                sequence={roles}
                wrapper="p"
                speed={50}
                className="text-xl font-medium text-primary-500"
                repeat={Infinity}
              />
            </div>

            {/* Bio */}
            <p className="text-base text-secondary-500 dark:text-secondary-400 mb-8 leading-relaxed max-w-lg">
              {bio}
            </p>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { value: '5+', label: 'Years of experience' },
                { value: '14+', label: 'Projects shipped' },
                { value: '3', label: 'Industries covered' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-secondary-900 dark:text-white">{value}</p>
                  <p className="text-xs text-secondary-400">{label}</p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded transition-colors"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-secondary-300 dark:border-secondary-600 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded hover:border-primary-500 hover:text-primary-500 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {githubUrl && (
                <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 text-secondary-500 hover:text-primary-500 transition-colors">
                  <GitHubIcon className="w-5 h-5" />
                </a>
              )}
              {linkedinUrl && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"
                  className="p-2 text-secondary-500 hover:text-primary-500 transition-colors">
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`}
                  className="p-2 text-secondary-500 hover:text-primary-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right — Grande photo (desktop uniquement) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              {/* Orange offset block behind the image */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-primary-500 -z-10" />

              {/* Photo */}
              <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={profileImage}
                  alt={name}
                  fill
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default HeroV2Component
