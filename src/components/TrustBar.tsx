import { Award, Clock, DollarSign, MapPin, ShieldCheck } from 'lucide-react'
import { TRUST_ITEMS } from '../data/site'

const icons = [ShieldCheck, Award, DollarSign, Clock, MapPin]

export function TrustBar() {
  return (
    <section className="border-b border-gray-200 bg-white py-8 sm:py-10" aria-label="Trust indicators">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = icons[i]
            return (
              <li
                key={item.label}
                className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50/80 p-4 transition hover:border-steel/30 hover:shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-charcoal text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{item.label}</p>
                  <p className="mt-0.5 text-sm text-gray-600">{item.sub}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
