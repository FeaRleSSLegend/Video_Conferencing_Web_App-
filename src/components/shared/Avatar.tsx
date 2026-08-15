export type Presence = 'free' | 'inCall' | 'away' | 'offline'

type Size = 'xs' | 'sm' | 'md' | 'lg'

type AvatarProps = {
  name: string
  src?: string
  size?: Size
  /** Omit to render a plain avatar with no status dot. */
  presence?: Presence
  className?: string
}

const sizes: Record<Size, string> = {
  xs: 'h-6 w-6 text-[0.5625rem]',
  sm: 'h-8 w-8 text-[0.6875rem]',
  md: 'h-10 w-10 text-xs',
  lg: 'h-14 w-14 text-base',
}

const dotSizes: Record<Size, string> = {
  xs: 'h-2 w-2',
  sm: 'h-2.5 w-2.5',
  md: 'h-2.5 w-2.5',
  lg: 'h-3.5 w-3.5',
}

const presenceDot: Record<Presence, { fill: string; label: string }> = {
  free: { fill: 'bg-sky', label: 'Available' },
  inCall: { fill: 'bg-accent', label: 'In a meeting' },
  away: { fill: 'bg-faint', label: 'Away' },
  offline: { fill: 'bg-line', label: 'Offline' },
}

/**
 * Muted pastel tints only — four washed-out pairs, never saturated rings.
 * Status is a single small dot, the calmest signal that still reads at 24px.
 */
const tints = [
  'bg-[#fdece1] text-[#a24a18]',
  'bg-[#e7f4fb] text-[#24759c]',
  'bg-[#edf3ec] text-[#346538]',
  'bg-[#fbf3db] text-[#8a5b00]',
]

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}

function tintFor(name: string) {
  let sum = 0
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i)
  return tints[sum % tints.length]
}

export default function Avatar({
  name,
  src,
  size = 'md',
  presence,
  className = '',
}: AvatarProps) {
  return (
    <span className={`relative inline-flex shrink-0 ${sizes[size]} ${className}`}>
      {src ? (
        <img src={src} alt={name} className="h-full w-full rounded-full object-cover" />
      ) : (
        <span
          aria-hidden="true"
          className={`flex h-full w-full items-center justify-center rounded-full font-semibold ${tintFor(name)}`}
        >
          {initials(name)}
        </span>
      )}

      {presence && (
        <>
          <span
            aria-hidden="true"
            className={`absolute -bottom-px -right-px rounded-full ring-2 ring-card ${dotSizes[size]} ${presenceDot[presence].fill}`}
          />
          <span className="sr-only">{presenceDot[presence].label}</span>
        </>
      )}
      {!src && <span className="sr-only">{name}</span>}
    </span>
  )
}
