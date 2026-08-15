import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'quiet'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  fullWidth?: boolean
}

/* Flat fills only — no gradients, no shadows on any variant. */
const variants: Record<Variant, string> = {
  primary: 'bg-accent text-white font-semibold hover:bg-accent-deep active:scale-[0.99]',
  secondary:
    'bg-card text-ink border border-line hover:bg-sand active:scale-[0.99]',
  quiet: 'text-muted hover:bg-sand hover:text-ink',
}

const sizes: Record<Size, string> = {
  sm: 'h-8 gap-1.5 px-3 text-[0.8125rem] rounded-tile',
  md: 'h-10 gap-2 px-4 text-sm rounded-tile',
  lg: 'h-11 gap-2 px-5 text-[0.9375rem] rounded-tile',
}

export default function Button({
  variant = 'secondary',
  size = 'md',
  icon,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap transition-colors duration-150 ease-quiet disabled:pointer-events-none disabled:opacity-40 ${
        variants[variant]
      } ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0 [&>svg]:h-[1.15em] [&>svg]:w-[1.15em]">{icon}</span>}
      {children}
    </button>
  )
}
