import { Check } from 'lucide-react'
import { SITE, WHY_US } from '../data/site'
import { useInView } from '../hooks/useInView'

export function WhyChooseUs() {
  const { ref, visible } = useInView()

  return (
    <section id="why-us" className="py-16 sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-orange">Why Choose Us</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
              Personalized Auto Care You Can Trust
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              At {SITE.name}, we know your car&apos;s needs go beyond the make and model.
              That&apos;s why we give your vehicle individualized attention during every visit —
              the specialized care it deserves from a full-service neighborhood mechanic.
            </p>
            <ul className="mt-8 space-y-4">
              {WHY_US.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-deep-red/10 text-deep-red">
                    <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                  </span>
                  <span className="text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`relative transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
          >
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=900&q=80"
                alt="Technicians providing personalized auto repair service"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-charcoal px-5 py-4 text-white shadow-lg sm:-bottom-6 sm:-left-6">
              <p className="text-3xl font-bold text-deep-red">{SITE.yearsExperience}</p>
              <p className="text-sm text-gray-300">
                Years of exceptional auto repair · Est. {SITE.established}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
