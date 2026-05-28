import { MapPin, Phone, Star } from 'lucide-react'
import { SITE } from '../data/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden bg-matte pt-20"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(26,27,30,0.88) 0%, rgba(26,27,30,0.75) 45%, rgba(26,27,30,0.95) 100%), url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80')`,
        }}
        role="img"
        aria-label="Mechanic working on a vehicle in the repair shop"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-4 pb-16 pt-10 sm:px-6 sm:pt-16 lg:pb-24">
        <div className="fade-in mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-sm">
            <Star className="h-4 w-4 fill-muted-orange text-muted-orange" aria-hidden />
            <span className="font-semibold">{SITE.rating}</span>
            <span className="text-gray-300">· Auto Repair · Queens, NY</span>
          </span>
          <span className="rounded-full bg-deep-red/20 px-3 py-1 text-sm font-medium text-red-200">
            Open — Call for Same-Day Service
          </span>
        </div>

        <h1 className="fade-in-up max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Reliable Auto Repair in Queens
        </h1>

        <p
          className="fade-in-up mt-5 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
          style={{ animationDelay: '0.1s' }}
        >
          Trusted local mechanics providing honest service, engine repairs, tires,
          diagnostics, and complete vehicle care — serving Woodside, Jackson Heights, and
          all of Queens.
        </p>

        <div
          className="fade-in-up mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="#contact"
            className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-deep-red px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-deep-red/25 transition hover:bg-deep-red-dark"
          >
            Schedule Service
          </a>
          <a
            href={SITE.phoneTel}
            className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/50 hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden />
            Call Now — {SITE.phone}
          </a>
        </div>

        <div
          className="fade-in-up mt-10 flex flex-col gap-2 text-sm text-gray-400 sm:flex-row sm:gap-6"
          style={{ animationDelay: '0.3s' }}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-steel-light" aria-hidden />
            {SITE.fullAddress}
          </span>
          <span>Est. {SITE.established} · Family-owned · Military discounts available</span>
        </div>
      </div>
    </section>
  )
}
