import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react'
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

function GoogleMark() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/10 px-2 py-1 text-xs font-medium text-gray-300">
      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Google
    </span>
  )
}

export function Reviews() {
  const { ref, visible } = useInView()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-review-card]')
    const gap = 16
    const amount = card ? card.offsetWidth + gap : 300
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <section id="reviews" className="bg-charcoal py-16 text-white sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-steel-light">
              Google Reviews
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Trusted by Queens Drivers
            </h2>
            <p className="mt-2 text-gray-400">
              {SITE.rating} on Google · {SITE.reviewCount} reviews · Honest, professional service
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:items-end">
            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read all on Google
              <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
            <div className="flex gap-2">
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
        </div>

        <div
          ref={scrollRef}
          className={`review-scroll -mx-4 mt-10 flex flex-nowrap gap-4 overflow-x-auto snap-x snap-mandatory scroll-pl-4 px-4 pb-4 sm:-mx-6 sm:scroll-pl-6 sm:px-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          {REVIEWS.map((review) => (
            <article
              key={review.id}
              data-review-card
              className="flex w-[280px] max-w-[calc(100vw-3rem)] shrink-0 snap-center flex-col rounded-xl border border-white/10 bg-matte p-5 sm:w-[300px] sm:max-w-[300px] sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <Stars count={review.rating} />
                <GoogleMark />
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-300 [overflow-wrap:anywhere]">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold">
                  {review.author ?? 'Google reviewer'}
                </p>
                <p className="text-sm text-gray-500">Posted {review.date} on Google</p>
              </footer>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Reviews quoted verbatim from Google.{' '}
          <a
            href={SITE.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-steel-light underline-offset-2 hover:underline"
          >
            View all reviews on Google Maps
          </a>
        </p>
      </div>
    </section>
  )
}
