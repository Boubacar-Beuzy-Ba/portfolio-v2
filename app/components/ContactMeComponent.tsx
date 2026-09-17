'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons'

type Status = 'idle' | 'loading' | 'success' | 'error'

export const ContactMeConponent = () => {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return

    setStatus('loading')

    emailjs
      .sendForm('service_1whz25g', 'contact_form', form.current, {
        publicKey: 'yjJnnntJShudW7SLX',
      })
      .then(
        () => {
          setStatus('success')
          form.current?.reset()
        },
        () => setStatus('error')
      )
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-secondary-900">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            Let's work together
          </h2>
          <p className="text-secondary-500 dark:text-secondary-400 max-w-md text-sm leading-relaxed">
            Open to freelance projects, consulting engagements, and full-time opportunities. Send me a message and I'll get back to you within 24h.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">

          {/* Left — Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-secondary-400 uppercase tracking-wide mb-0.5">Email</p>
                  <a
                    href="mailto:bouba0178@gmail.com"
                    className="text-sm text-secondary-800 dark:text-white hover:text-primary-500 transition-colors"
                  >
                    bouba0178@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-secondary-400 uppercase tracking-wide mb-0.5">Phone</p>
                  <p className="text-sm text-secondary-800 dark:text-white">+221 77 422 35 21</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-secondary-400 uppercase tracking-wide mb-0.5">Location</p>
                  <p className="text-sm text-secondary-800 dark:text-white">Dakar, Sénégal</p>
                </div>
              </div>
            </div>

            <div className="w-8 h-px bg-secondary-200 dark:bg-secondary-700" />

            <div className="flex gap-4">
              <a
                href="https://github.com/Boubacar-Beuzy-Ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-secondary-500 hover:text-primary-500 transition-colors"
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/boubacar-ba-491246145/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-secondary-500 hover:text-primary-500 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-3">

            {/* Success state */}
            {status === 'success' ? (
              <div className="flex flex-col items-start gap-4 py-10">
                <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-1">
                    Message sent!
                  </h3>
                  <p className="text-sm text-secondary-500 dark:text-secondary-400">
                    Thanks for reaching out. I'll get back to you within 24h.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-primary-500 hover:text-primary-600 font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-5">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Moussa Diallo"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 text-sm border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-1.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="your@email.com"
                      disabled={status === 'loading'}
                      className="w-full px-4 py-3 text-sm border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-1.5">
                    Topic
                  </label>
                  <select
                    name="topic"
                    disabled={status === 'loading'}
                    className="w-full px-4 py-3 text-sm border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition appearance-none disabled:opacity-60"
                  >
                    <option value="">Select a topic</option>
                    <option value="hire">Hire me</option>
                    <option value="web-app">Web Application</option>
                    <option value="consultant">Consulting</option>
                    <option value="saas">SAAS / Product</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-secondary-500 dark:text-secondary-400 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'loading'}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 text-sm border border-secondary-200 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white placeholder-secondary-300 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition resize-none disabled:opacity-60"
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
