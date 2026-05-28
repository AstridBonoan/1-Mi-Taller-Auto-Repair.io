import { GALLERY_IMAGES } from '../data/site'
import { useInView } from '../hooks/useInView'

export function Gallery() {
  const { ref, visible } = useInView()

  return (
    <section id="gallery" className="py-16 sm:py-20" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm font-semibold uppercase tracking-wider text-steel">Our Shop</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-charcoal sm:text-4xl">
            Real Work, Real Mechanics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Everyday vehicles, engine bays, tires, and the shop floor — the work we do for
            our Queens neighbors every day.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <li
              key={img.src}
              className={`overflow-hidden rounded-xl transition-all duration-500 ${
                i === 0 ? 'col-span-2 row-span-2 lg:col-span-1 lg:row-span-1' : ''
              } ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover transition duration-300 hover:scale-105 ${
                  i === 0 ? 'aspect-[16/10] lg:aspect-[4/3]' : 'aspect-[4/3]'
                }`}
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
