import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-matte/95 shadow-lg backdrop-blur-md' : 'bg-matte/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt={SITE.name}
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-deep-red/40 sm:h-12 sm:w-12"
          />
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-bold tracking-tight text-white sm:text-base">
              {SITE.shortName}
            </span>
            <span className="hidden text-xs text-silver sm:block">Auto Repair · Queens, NY</span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-200 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneTel}
            className="hidden items-center gap-2 rounded-lg bg-deep-red px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-deep-red-dark sm:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call Now
          </a>
          <button
            type="button"
            className="inline-flex rounded-lg p-2.5 text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-matte lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3.5 text-base font-medium text-gray-100 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={SITE.phoneTel}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-deep-red px-4 py-3.5 text-base font-semibold text-white"
            >
              <Phone className="h-5 w-5" aria-hidden />
              {SITE.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg border border-steel/50 px-4 py-3.5 text-center text-base font-semibold text-steel-light"
            >
              Schedule Service
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
