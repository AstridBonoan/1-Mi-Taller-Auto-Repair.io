const WATERMARK_SRC = `${import.meta.env.BASE_URL}bonoan-labs-watermark.png`

/**
 * Site-wide Bonoan Labs branding overlay — visible in screenshots/prints,
 * does not block clicks or scrolling (pointer-events: none).
 */
export function SiteWatermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Repeating diagonal pattern */}
      <div
        className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 -rotate-[22deg] opacity-[0.055] sm:opacity-[0.065]"
        style={{
          backgroundImage: `url(${WATERMARK_SRC})`,
          backgroundRepeat: 'repeat',
          backgroundSize: 'min(280px, 42vw) auto',
          backgroundPosition: 'center',
        }}
      />

      {/* Corner mark — clearer for ownership */}
      <img
        src={WATERMARK_SRC}
        alt=""
        className="absolute bottom-20 right-3 w-28 opacity-[0.2] sm:bottom-6 sm:right-6 sm:w-36 sm:opacity-[0.22]"
        draggable={false}
      />
    </div>
  )
}
