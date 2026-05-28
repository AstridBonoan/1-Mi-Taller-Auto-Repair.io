import { ArrowRight } from 'lucide-react'
import { SERVICES } from '../data/site'
import { useInView } from '../hooks/useInView'
import { ServiceIcon } from './ServiceIcon'

export function Services() {
  const { ref, visible } = useInView()

  return (
    <section id="services" className="bg-gray-50 py-16 sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-deep-red">Our Services</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Complete Auto Care Under One Roof
          </h2>
          <p className="mt-4 text-gray-600">
            From engine work and timing belts to tires, towing, and everyday maintenance —
            personalized attention for every make and model.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <li
              key={service.title}
              className={`group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-steel/40 hover:shadow-md ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visible ? `${index * 60}ms` : '0ms' }}
            >
              <ServiceIcon name={service.icon} />
              <h3 className="mt-4 font-display text-lg font-bold text-charcoal">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
              <a
                href="#contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-steel transition group-hover:text-steel-light"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
