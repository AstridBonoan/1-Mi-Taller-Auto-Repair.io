import { Tag } from 'lucide-react'
import { SITE, SPECIAL_OFFERS } from '../data/site'
import { useInView } from '../hooks/useInView'

export function SpecialOffers() {
  const { ref, visible } = useInView()

  return (
    <section id="specials" className="bg-charcoal py-14 sm:py-16" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-orange">
            Current Offers
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
            Save When You Visit 1 Mi Taller
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Call {SITE.phone} and ask about military discounts, towing savings, and first-time
            customer specials.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-3">
          {SPECIAL_OFFERS.map((offer, index) => (
            <li
              key={offer.title}
              className={`rounded-xl border border-white/10 bg-matte p-6 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: visible ? `${index * 80}ms` : '0ms' }}
            >
              <Tag className="h-6 w-6 text-deep-red" aria-hidden />
              <h3 className="mt-3 font-display text-lg font-bold text-white">{offer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{offer.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
