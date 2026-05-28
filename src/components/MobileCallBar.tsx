import { Calendar, Phone } from 'lucide-react'
import { SITE } from '../data/site'

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gray-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
      <a
        href={SITE.phoneTel}
        className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-lg bg-deep-red text-sm font-semibold text-white"
      >
        <Phone className="h-5 w-5" aria-hidden />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex flex-1 min-h-[48px] items-center justify-center gap-2 rounded-lg bg-charcoal text-sm font-semibold text-white"
      >
        <Calendar className="h-5 w-5" aria-hidden />
        Schedule
      </a>
    </div>
  )
}
