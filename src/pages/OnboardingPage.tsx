import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Logo from '../components/shared/Logo'
import OnboardingNavButtons from '../components/onboarding/OnboardingNavButtons'
import OnboardingStep from '../components/onboarding/OnboardingStep'
import ParallaxGlow from '../components/onboarding/ParallaxGlow'
import { slides } from '../components/onboarding/slides'

const EXIT_MS = 190

type Motion = { direction: 1 | -1; phase: 'in' | 'out' }

export default function OnboardingPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [motion, setMotion] = useState<Motion>({ direction: 1, phase: 'in' })
  const busy = useRef(false)

  /** Run the outgoing slide off in the travel direction, swap, bring the next in. */
  const go = (direction: 1 | -1) => {
    if (busy.current) return
    busy.current = true
    setMotion({ direction, phase: 'out' })

    window.setTimeout(() => {
      setStep((current) => current + direction)
      setMotion({ direction, phase: 'in' })
      busy.current = false
    }, EXIT_MS)
  }

  const motionClass =
    motion.phase === 'out'
      ? motion.direction === 1
        ? 'slide-out-forward'
        : 'slide-out-back'
      : motion.direction === 1
        ? 'slide-in-forward'
        : 'slide-in-back'

  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-shell">
      <ParallaxGlow />

      <div className="relative z-10 flex min-h-[100dvh] flex-col px-5 py-6 sm:px-10 sm:py-8">
        <header className="flex items-center justify-between gap-4">
          <Logo tone="light" />
          <p className="text-sm text-white/50">
            <span className="hidden sm:inline">Already have an account? </span>
            <Link
              to="/login"
              className="font-medium text-white transition-colors duration-150 ease-quiet hover:text-accent"
            >
              Log in
            </Link>
          </p>
        </header>

        <main className="flex flex-1 items-center py-16 sm:py-24">
          <OnboardingStep slide={slides[step]} motion={motionClass} />
        </main>

        <OnboardingNavButtons
          step={step}
          total={slides.length}
          onBack={() => go(-1)}
          onNext={() => go(1)}
          onFinish={() => navigate('/login')}
        />
      </div>
    </div>
  )
}
