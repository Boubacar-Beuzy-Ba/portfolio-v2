import { Mail, ArrowUp } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'

const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const FooterComponent = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-400 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg mb-2">
              BB<span className="text-primary-500">.</span>
            </p>
            <p className="text-xs leading-relaxed text-secondary-500 max-w-48">
              Business Systems Specialist building full-stack solutions from Dakar.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-500 mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-secondary-400 hover:text-primary-500 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary-500 mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/Boubacar-Beuzy-Ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary-400 hover:text-primary-500 transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/boubacar-ba-491246145/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-secondary-400 hover:text-primary-500 transition-colors"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:bouba0178@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-secondary-400 hover:text-primary-500 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  bouba0178@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-secondary-600">
            © {new Date().getFullYear()} Boubacar Ba — Built with Next.js & Sanity
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-secondary-500 hover:text-primary-500 transition-colors"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  )
}
