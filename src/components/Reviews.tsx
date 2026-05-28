import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useRef } from 'react'
import { REVIEWS, SITE } from '../data/site'
import { useInView } from '../hooks/useInView'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-muted-orange text-muted-orange" aria-hidden />
      ))}
    </div>
  )
}

export function Reviews() {
  const { ref, visible } = useInView()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.85
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="bg-charcoal py-16 text-white sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-steel-light">Customer Reviews</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Trusted by Queens Drivers
            </h2>
            <p className="mt-2 text-gray-400">
              {SITE.rating} rating · Honesty, fairness, and professional work — every time.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="rounded-lg border border-white/20 p-2.5 transition hover:bg-white/10"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="rounded-lg border border-white/20 p-2.5 transition hover:bg-white/10"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`review-scroll mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="min-w-[min(100%,320px)] flex-shrink-0 snap-start rounded-xl border border-white/10 bg-matte p-6 sm:min-w-[340px]"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-gray-300">&ldquo;{review.text}&rdquo;</p>
              <footer className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </footer>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">
          Reviews reflect common themes from verified local customers.
        </p>
      </div>
    </section>
  )
}
