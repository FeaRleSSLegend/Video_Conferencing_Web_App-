import { initialsFor } from './mockData'

type Size = 'sm' | 'md' | 'lg' | 'xl'

const sizes: Record<Size, string> = {
  sm: 'h-7 w-7 text-[0.5625rem]',
  md: 'h-9 w-9 text-[0.6875rem]',
  lg: 'h-11 w-11 text-sm',
  xl: 'h-24 w-24 text-3xl',
}

/**
 * One neutral treatment for every person, everywhere on this page. The dark
 * surfaces here don't take the pastel tints the shared light Avatar uses.
 */
export default function InitialsAvatar({
  name,
  size = 'md',
  className = '',
}: {
  name: string
  size?: Size
  className?: string
}) {
  return (
    <span
      title={name}
      className={`flex shrink-0 items-center justify-center rounded-full bg-white/10 font-semibold text-stage-txt ${sizes[size]} ${className}`}
    >
      <span aria-hidden="true">{initialsFor(name)}</span>
      <span className="sr-only">{name}</span>
    </span>
  )
}
