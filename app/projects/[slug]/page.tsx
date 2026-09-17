import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Users, Zap, TrendingUp, Calendar } from 'lucide-react'
import { GitHubIcon } from '../../components/icons/SocialIcons'
import type { Metadata } from 'next'
import { getProjectBySlug, getAllProjects } from '../../lib/sanityQueries'
import { NavbarComponent } from '../../components/NavbarComponent'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) return { title: 'Project not found' }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: project.coverImage ? [{ url: project.coverImage, width: 1200, height: 630, alt: project.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : [],
    },
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects
    .filter((p) => p.slug?.current)
    .map((p) => ({ slug: p.slug.current }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) notFound()

  const gallery: string[] = Array.isArray(project.gallery) ? (project.gallery as string[]) : []
  const technologies: string[] = Array.isArray(project.technologies) ? (project.technologies as string[]) : []
  const tags: string[] = Array.isArray(project.tags) ? (project.tags as string[]) : []
  const hasMetrics = project.metrics && Object.values(project.metrics).some(Boolean)

  return (
    <main className="min-h-screen bg-white dark:bg-secondary-900 pt-16">
      <NavbarComponent />

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-secondary-400 hover:text-primary-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10 lg:gap-16">

          {/* Main column */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-xs font-semibold bg-primary-500 text-white rounded-full uppercase tracking-wide">
                  {project.category}
                </span>
                {project.featured && (
                  <span className="px-2.5 py-0.5 text-xs font-medium border border-secondary-200 dark:border-secondary-700 text-secondary-500 dark:text-secondary-400 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4 leading-tight">
                {project.title}
              </h1>

              <p className="text-secondary-500 dark:text-secondary-400 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Cover image */}
            {project.coverImage && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-secondary-100 dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-800 mb-10">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Metrics */}
            {hasMetrics && (
              <div className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400 mb-4">
                  Key Metrics
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.metrics?.users && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-secondary-100 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-800/50">
                      <Users className="w-4 h-4 text-primary-500 shrink-0" />
                      <span className="text-sm text-secondary-700 dark:text-secondary-300">{project.metrics.users}</span>
                    </div>
                  )}
                  {project.metrics?.performance && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-secondary-100 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-800/50">
                      <Zap className="w-4 h-4 text-primary-500 shrink-0" />
                      <span className="text-sm text-secondary-700 dark:text-secondary-300">{project.metrics.performance}</span>
                    </div>
                  )}
                  {project.metrics?.impact && (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-secondary-100 dark:border-secondary-800 bg-secondary-50 dark:bg-secondary-800/50">
                      <TrendingUp className="w-4 h-4 text-primary-500 shrink-0" />
                      <span className="text-sm text-secondary-700 dark:text-secondary-300">{project.metrics.impact}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Gallery */}
            {gallery.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400 mb-4">
                  Screenshots
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {gallery.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-xl overflow-hidden bg-secondary-100 dark:bg-secondary-800 border border-secondary-100 dark:border-secondary-800"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">

            {/* CTA card */}
            <div className="rounded-2xl border border-secondary-100 dark:border-secondary-800 p-5 space-y-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.sourceCodeUrl && (
                <a
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  Source Code
                </a>
              )}

              {/* Published date */}
              {project.publishedAt && (
                <div className="flex items-center gap-2 pt-2 border-t border-secondary-100 dark:border-secondary-800 text-xs text-secondary-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(project.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                </div>
              )}
            </div>

            {/* Tech stack */}
            {technologies.length > 0 && (
              <div className="rounded-2xl border border-secondary-100 dark:border-secondary-800 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 rounded-lg border border-secondary-100 dark:border-secondary-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {tags.length > 0 && (
              <div className="rounded-2xl border border-secondary-100 dark:border-secondary-800 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary-400 mb-3">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs text-secondary-400 dark:text-secondary-500 border border-secondary-200 dark:border-secondary-700 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </aside>
        </div>
      </div>
    </main>
  )
}
