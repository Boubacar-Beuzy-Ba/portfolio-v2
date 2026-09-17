'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  const isHomepage = pathname === '/'

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHomepage) return
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [isHomepage])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.slice(1)

    if (isHomepage) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomepage
          ? 'bg-white/95 dark:bg-secondary-900/95 backdrop-blur-sm shadow-sm border-b border-secondary-100 dark:border-secondary-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
          className="text-lg font-bold text-secondary-900 dark:text-white hover:text-primary-500 transition-colors"
        >
          BB<span className="text-primary-500">.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = isHomepage && activeSection === id
            return (
              <a
                key={href}
                href={isHomepage ? href : `/${href}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary-500'
                    : 'text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                }`}
              >
                {label}
                {isActive && (
                  <span className="block h-0.5 bg-primary-500 rounded-full mt-0.5" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Dark mode toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-secondary-500 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* CTA */}
          <a
            href={isHomepage ? '#contact' : '/#contact'}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="hidden md:inline-flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Hire me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden p-2 text-secondary-700 dark:text-secondary-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-secondary-900 border-t border-secondary-100 dark:border-secondary-800 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const isActive = isHomepage && activeSection === id
            return (
              <a
                key={href}
                href={isHomepage ? href : `/${href}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a
            href={isHomepage ? '#contact' : '/#contact'}
            onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
            className="mt-2 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold rounded-lg text-center transition-colors"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
