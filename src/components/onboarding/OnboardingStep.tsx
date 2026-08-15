import type { Slide } from './slides'

type OnboardingStepProps = {
  slide: Slide
  /** Animation class driving the directional enter/exit. */
  motion: string
}

/** One idea per slide: a headline, a line under it, nothing else. */
export default function OnboardingStep({ slide, motion }: OnboardingStepProps) {
  return (
    <div className={motion}>
      <h1 className="max-w-[15ch] font-display text-[clamp(2.5rem,7vw,5.25rem)] font-semibold leading-[0.98] text-white">
        {slide.headline}
      </h1>

      <p
        className={`mt-7 max-w-[46ch] leading-relaxed ${
          slide.emphasis ? 'text-base text-white sm:text-lg' : 'text-base text-white/60'
        }`}
      >
        {slide.body}
      </p>
    </div>
  )
}
