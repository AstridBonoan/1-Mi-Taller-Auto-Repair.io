import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { SITE } from '../data/site'
import { useInView } from '../hooks/useInView'

const SERVICE_OPTIONS = [
  'Engine Repair',
  'Diagnostics',
  'Brake Service',
  'Oil Change',
  'Tires',
  'Suspension',
  'Transmission',
  'Towing',
  'General Repair',
  'Other',
]

export function Contact() {
  const { ref, visible } = useInView()
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-16 sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`text-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-deep-red">Get In Touch</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Book Your Service Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Call us directly for the fastest response, or send a request below. Military
            discounts available — ask when you call.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div
            className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            {submitted ? (
              <div className="py-12 text-center">
                <p className="text-xl font-semibold text-charcoal">Thank you!</p>
                <p className="mt-2 text-gray-600">
                  We received your request. For immediate help, call{' '}
                  <a href={SITE.phoneTel} className="font-semibold text-deep-red">
                    {SITE.phone}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="vehicle" className="block text-sm font-medium text-charcoal">
                    Vehicle Make / Model
                  </label>
                  <input
                    id="vehicle"
                    name="vehicle"
                    type="text"
                    placeholder="e.g. 2018 Honda Civic"
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-charcoal">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-1.5 w-full rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your issue or preferred appointment time..."
                    className="mt-1.5 w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-base outline-none transition focus:border-steel focus:ring-2 focus:ring-steel/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full min-h-[52px] rounded-lg bg-deep-red px-6 py-3.5 text-base font-semibold text-white transition hover:bg-deep-red-dark"
                >
                  Book Your Service Today
                </button>
                <p className="text-center text-sm text-gray-500">
                  Prefer to talk?{' '}
                  <a href={SITE.phoneTel} className="font-semibold text-deep-red">
                    Call {SITE.phone}
                  </a>
                </p>
              </form>
            )}
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="rounded-2xl bg-charcoal p-6 text-white sm:p-8">
              <h3 className="font-display text-xl font-bold">Visit Our Shop</h3>
              <ul className="mt-6 space-y-5">
                <li className="flex gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-steel-light" aria-hidden />
                  <div>
                    <p className="font-medium">{SITE.address}</p>
                    <p className="text-gray-400">{SITE.city}</p>
                    <a
                      href={SITE.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-semibold text-steel-light hover:underline"
                    >
                      Get Directions →
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-steel-light" aria-hidden />
                  <div>
                    <a href={SITE.phoneTel} className="font-medium hover:text-steel-light">
                      {SITE.phone}
                    </a>
                    <p className="text-sm text-gray-400">Alt: {SITE.altPhone}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-steel-light" aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="hover:text-steel-light">
                    {SITE.email}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-steel-light" aria-hidden />
                  <ul className="space-y-1 text-sm">
                    {SITE.hours.map((h) => (
                      <li key={h.days} className="flex justify-between gap-8">
                        <span className="text-gray-400">{h.days}</span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <iframe
                title="1 Mi Taller Auto Repair location map"
                src="https://maps.google.com/maps?q=51-06+70th+St,+Woodside,+NY+11377&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
