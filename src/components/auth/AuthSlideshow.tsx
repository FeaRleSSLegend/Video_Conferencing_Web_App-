import { useEffect, useState } from 'react'

const SLIDE_DURATION = 5000

const slides = [
  {
    headline: 'Schedule once, everyone shows up.',
    body: 'Send a link and the room is already waiting. No dial-in numbers, no downloads.',
  },
  {
    headline: 'Stay in step with your team.',
    body: 'See who is free, who is mid-call, and who just stepped away — before you interrupt.',
  },
  {
    headline: 'Join from wherever you are.',
    body: 'The same room opens on a laptop, a phone, or a browser you borrowed for the afternoon.',
  },
]

/** Auto-advancing copy for the dark panel. Timer resets when a dot is clicked. */
export default function AuthSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(
      () => setIndex((current) => (current + 1) % slides.length),
      SLIDE_DURATION,
    )
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className="relative z-10">
      <div className="relative min-h-[10.5rem]">
        {slides.map((slide, i) => (
          <div
            key={slide.headline}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-all duration-500 ease-quiet motion-reduce:transition-none ${
              i === index
                ? 'translate-y-0 opacity-100'
                : 'pointer-events-none translate-y-2 opacity-0'
            }`}
          >
            <p className="font-display text-[1.75rem] font-semibold leading-[1.15] text-white">
              {slide.headline}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">{slide.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ease-quiet ${
              i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
