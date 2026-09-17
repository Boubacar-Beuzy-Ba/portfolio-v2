'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Users, DollarSign, TrendingUp, CheckCircle2, Star } from 'lucide-react'
import Image from 'next/image'

interface SAASProduct {
  name: string
  tagline: string
  description: string
  logo: string
  screenshots: Array<{
    image: string
    caption?: string
  }>
  features: Array<{
    title: string
    description: string
    icon?: string
  }>
  metrics?: {
    users?: string
    revenue?: string
    growth?: string
  }
  websiteUrl: string
  status: 'active' | 'development' | 'archived'
  technologies: string[]
  testimonials?: Array<{
    author: string
    role: string
    content: string
    avatar?: string
  }>
}

interface SAASShowcaseProps {
  products: SAASProduct[]
}

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const styles = {
    active: 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400',
    development: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
    archived: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
  }

  return (
    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[status as keyof typeof styles]}`}>
      {status === 'active' && '🟢 Live'}
      {status === 'development' && '🟡 In Development'}
      {status === 'archived' && '⚫ Archived'}
    </span>
  )
}

const ProductCard: React.FC<{ product: SAASProduct; index: number }> = ({ product, index }) => {
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700"
    >
      {/* Header */}
      <div className="p-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-primary-500 p-0.5">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{product.tagline}</p>
            </div>
          </div>

          <StatusBadge status={product.status} />
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

        {/* Metrics */}
        {product.metrics && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            {product.metrics.users && (
              <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                <Users className="w-5 h-5 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {product.metrics.users}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Users</div>
              </div>
            )}
            {product.metrics.revenue && (
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <DollarSign className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {product.metrics.revenue}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Revenue</div>
              </div>
            )}
            {product.metrics.growth && (
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <TrendingUp className="w-5 h-5 text-primary-500 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {product.metrics.growth}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Growth</div>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <motion.a
          href={product.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl shadow-lg transition-colors"
        >
          Visit Website
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>

      {/* Screenshots */}
      {product.screenshots && product.screenshots.length > 0 && (
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Screenshots
          </h4>
          <div className="space-y-4">
            {/* Main Screenshot */}
            <div className="relative h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
              <Image
                src={product.screenshots[activeScreenshot].image}
                alt={product.screenshots[activeScreenshot].caption || `Screenshot ${activeScreenshot + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Thumbnail Navigation */}
            {product.screenshots.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.screenshots.map((screenshot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshot(idx)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      activeScreenshot === idx
                        ? 'border-primary-500 scale-105'
                        : 'border-gray-300 dark:border-gray-600 hover:border-primary-400'
                    }`}
                  >
                    <Image
                      src={screenshot.image}
                      alt={screenshot.caption || `Thumbnail ${idx + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Features */}
      {product.features && product.features.length > 0 && (
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Testimonials */}
      {product.testimonials && product.testimonials.length > 0 && (
        <div className="p-8 border-b border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            What Users Say
          </h4>
          <div className="space-y-4">
            {product.testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary-400 text-primary-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-2">
                  {testimonial.avatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technologies */}
      <div className="p-8">
        <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
          Built With
        </h4>
        <div className="flex flex-wrap gap-2">
          {product.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export const SAASShowcaseComponent: React.FC<SAASShowcaseProps> = ({ products }) => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-secondary-900">
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
            SAAS Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Software-as-a-Service products I've built and launched
          </p>
        </motion.div>

        {/* Products */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              SAAS products coming soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm currently building exciting new products. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default SAASShowcaseComponent
