import { Phone, Share2 } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-matte text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt={SITE.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-deep-red/30"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Family-owned and operated auto repair serving Queens since {SITE.established}.
              Engine, transmission, suspension, tires, and full-service care.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="#"
                className="rounded-lg border border-white/10 p-2.5 transition hover:bg-white/5"
                aria-label="Facebook (placeholder)"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-lg border border-white/10 p-2.5 transition hover:bg-white/5"
                aria-label="Instagram (placeholder)"
              >
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.days}>
                  <span className="text-gray-500">{h.days}: </span>
                  {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contact</h3>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>{SITE.fullAddress}</p>
              <a href={SITE.phoneTel} className="inline-flex items-center gap-2 font-semibold text-white hover:text-steel-light">
                <Phone className="h-4 w-4" aria-hidden />
                {SITE.phone}
              </a>
              <p className="text-gray-500">Fax: {SITE.fax}</p>
              <p className="text-gray-500">{SITE.contactName}</p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-gray-500 sm:flex-row sm:text-left">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Serving {SITE.serviceAreas.join(' · ')}</p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-6 sm:flex-row sm:gap-3">
          <img
            src={`${import.meta.env.BASE_URL}bonoan-labs-watermark.png`}
            alt="Bonoan Labs"
            className="h-6 w-auto opacity-70"
            draggable={false}
          />
          <p className="text-[11px] text-gray-600">
            Website design &amp; development by{' '}
            <span className="font-medium text-gray-400">Bonoan Labs</span>. Unauthorized
            copying prohibited.
          </p>
        </div>
      </div>
    </footer>
  )
}
