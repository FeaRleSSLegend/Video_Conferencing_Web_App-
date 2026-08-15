type LogoProps = {
  /** Hide the wordmark and render the mark alone (mobile bar). */
  markOnly?: boolean
  /** `light` inverts the wordmark and tile for use on the dark panel. */
  tone?: 'default' | 'light'
  className?: string
}

/** Flat mark: an open aperture. No gradient, no glow — one accent stroke. */
export default function Logo({
  markOnly = false,
  tone = 'default',
  className = '',
}: LogoProps) {
  const isLight = tone === 'light'

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0" fill="none">
        <rect
          x="0"
          y="0"
          width="32"
          height="32"
          rx="9"
          className={isLight ? 'fill-white/10' : 'fill-accent-wash'}
        />
        <circle
          cx="16"
          cy="16"
          r="7.5"
          className="stroke-accent"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="14 5.6"
        />
        <circle cx="16" cy="16" r="2.75" className="fill-accent" />
      </svg>

      {!markOnly && (
        <span
          className={`font-display text-[1.0625rem] font-semibold ${
            isLight ? 'text-white' : 'text-ink'
          }`}
        >
          Aperture
        </span>
      )}
    </span>
  )
}
