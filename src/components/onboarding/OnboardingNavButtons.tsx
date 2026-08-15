import { ArrowLeft, ArrowRight } from 'lucide-react'
import OnboardingButton from './OnboardingButton'

type OnboardingNavButtonsProps = {
  step: number
  total: number
  onBack: () => void
  onNext: () => void
  onFinish: () => void
}

const ico = { strokeWidth: 1.8, className: 'h-4 w-4' } as const

/**
 * Same dot language as the auth slideshow — active dot stretches into a pill —
 * driven by these buttons rather than a timer.
 */
export default function OnboardingNavButtons({
  step,
  total,
  onBack,
  onNext,
  onFinish,
}: OnboardingNavButtonsProps) {
  const isLast = step === total - 1

  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-2" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ease-quiet ${
              i === step ? 'w-6 bg-accent' : 'w-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center gap-3">
        {step > 0 && (
          <OnboardingButton onClick={onBack}>
            <ArrowLeft {...ico} />
            Back
          </OnboardingButton>
        )}

        <OnboardingButton variant="primary" onClick={isLast ? onFinish : onNext}>
          {isLast ? 'Get started' : 'Next'}
          <ArrowRight {...ico} />
        </OnboardingButton>
      </div>
    </div>
  )
}
