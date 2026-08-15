import { useState } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import Button from '../shared/Button'

type OnboardingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline'
  children: ReactNode
}

/**
 * Adds the spring press to the shared Button. `primary` is the shared Button
 * itself; `outline` is the one variant that doesn't exist there, since the rest
 * of the app never puts a button on a dark surface.
 */
export default function OnboardingButton({
  variant = 'outline',
  children,
  className = '',
  onClick,
  ...props
}: OnboardingButtonProps) {
  const [pressing, setPressing] = useState(false)

  const spring = {
    onAnimationEnd: () => setPressing(false),
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
      setPressing(true)
      onClick?.(event)
    },
  }

  if (variant === 'primary') {
    return (
      <Button
        variant="primary"
        size="lg"
        className={`${pressing ? 'animate-press' : ''} ${className}`}
        {...spring}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return (
    <button
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-tile border border-white/25 px-5 text-[0.9375rem] text-white transition-colors duration-150 ease-quiet hover:border-white/50 hover:bg-white/10 ${
        pressing ? 'animate-press' : ''
      } ${className}`}
      {...spring}
      {...props}
    >
      {children}
    </button>
  )
}
