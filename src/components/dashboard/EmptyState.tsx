type EmptyStateProps = {
  title: string
  hint: string
  className?: string
}

/**
 * Calm empty state: a single continuous-line sketch with one offset pastel
 * shape behind it. Understated on purpose — an empty day is not an error.
 */
export default function EmptyState({ title, hint, className = '' }: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center px-4 py-10 text-center ${className}`}>
      <svg
        viewBox="0 0 96 72"
        aria-hidden="true"
        className="mb-4 h-16 w-auto"
        fill="none"
      >
        <circle cx="63" cy="24" r="15" className="fill-accent-wash" />
        <rect
          x="12.5"
          y="16.5"
          width="52"
          height="42"
          rx="6"
          className="stroke-faint"
          strokeWidth="1.6"
        />
        <path
          d="M12.5 28h52M27 12v9M50 12v9"
          className="stroke-faint"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M25 40h12M25 48h22"
          className="stroke-line"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>

      <p className="font-display text-base font-semibold text-ink">{title}</p>
      <p className="mt-1 max-w-[24rem] text-sm text-muted">{hint}</p>
    </div>
  )
}
