import React, { useState } from 'react'
import { motion } from 'framer-motion'
import resume from '../data/resume'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem('from_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('reply_to') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        // PHP not configured - use mailto fallback
        const subject = t('contact.mailSubject', {
          name: formData.name,
          defaultValue: `Contact from portfolio: ${formData.name}`,
        })
        const body = t('contact.mailBody', {
          message: formData.message,
          name: formData.name,
          email: formData.email,
          defaultValue: `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`,
        })
        const mailto = `mailto:${resume.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.location.href = mailto
        setStatus('success')
        setMessage(t('contact.status.openingEmail', 'Opening your email client...'))
        form.reset()
        return
      }

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus('success')
        setMessage(data.message || t('contact.status.success', 'Message sent successfully!'))
        form.reset()
      } else {
        setStatus('error')
        setMessage(data.message || t('contact.status.error', 'Failed to send message. Please try again.'))
      }
    } catch (error) {
      // Fallback to mailto if fetch fails
      const subject = t('contact.mailSubject', {
        name: formData.name,
        defaultValue: `Contact from portfolio: ${formData.name}`,
      })
      const body = t('contact.mailBody', {
        message: formData.message,
        name: formData.name,
        email: formData.email,
        defaultValue: `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`,
      })
      const mailto = `mailto:${resume.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
      setStatus('success')
      setMessage(t('contact.status.openingEmail', 'Opening your email client...'))
      form.reset()
      console.error('Error sending message:', error)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          📬 {t('contact.title', 'Get In Touch')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
        >
          {t(
            'contact.subtitle',
            'Have a question or want to work together? Feel free to reach out!'
          )}
        </motion.p>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                {t('contact.infoTitle', 'Contact Information')}
              </h3>
              
              <div className="space-y-4">
                <motion.a
                  href={`mailto:${resume.contact.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {t('contact.labels.email', 'Email')}
                    </div>
                    <div className="font-medium">{resume.contact.email}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={`tel:${resume.contact.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {t('contact.labels.phone', 'Phone')}
                    </div>
                    <div className="font-medium">{resume.contact.phone}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={resume.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {t('contact.labels.linkedin', 'LinkedIn')}
                    </div>
                    <div className="font-medium">{t('contact.actions.connect', 'Connect with me')}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={resume.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 rounded-lg bg-cyan-500/20 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {t('contact.labels.github', 'GitHub')}
                    </div>
                    <div className="font-medium">{t('contact.actions.checkCode', 'Check my code')}</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={onSubmit} className="glass-card">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6">
                {t('contact.form.title', 'Send a Message')}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.labels.name', 'Name')}
                  </label>
                  <input
                    name="from_name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-slate-700/50 border border-cyan-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder={t('contact.form.placeholders.name', 'John Doe')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.labels.email', 'Email')}
                  </label>
                  <input
                    name="reply_to"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-slate-700/50 border border-cyan-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder={t('contact.form.placeholders.email', 'john@example.com')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {t('contact.form.labels.message', 'Message')}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-blue-50 dark:bg-slate-700/50 border border-cyan-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder={t('contact.form.placeholders.message', 'Your message...')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className={`w-full btn btn-primary ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading'
                    ? t('contact.form.sending', 'Sending...')
                    : `${t('contact.form.submit', 'Send Message')} 🚀`}
                </motion.button>

                {message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm p-3 rounded-lg ${
                      status === 'success' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' 
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}
                  >
                    {message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
