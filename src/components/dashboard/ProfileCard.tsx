import { useState } from 'react'
import Avatar, { type Presence } from '../shared/Avatar'
import { ChevronRightIcon } from './icons'
import { currentUser } from './mockData'

const options: { value: Presence; label: string; dot: string }[] = [
  { value: 'free', label: 'Available', dot: 'bg-sky' },
  { value: 'inCall', label: 'In a meeting', dot: 'bg-accent' },
  { value: 'away', label: 'Away', dot: 'bg-faint' },
  { value: 'offline', label: 'Appear offline', dot: 'bg-line' },
]

/** Identity and status, parked in the nav footer where the account lives. */
export default function ProfileCard() {
  const [presence, setPresence] = useState<Presence>(currentUser.presence)
  const [open, setOpen] = useState(false)
  const active = options.find((o) => o.value === presence)!

  return (
    <div className="relative">
      {open && (
        <>
          <button
            type="button"
            aria-label="Close status menu"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div
            role="menu"
            className="absolute bottom-full left-0 z-20 mb-2 w-full min-w-52 rounded-card border border-line bg-card p-1.5 shadow-card"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={option.value === presence}
                onClick={() => {
                  setPresence(option.value)
                  setOpen(false)
                }}
                className={`flex w-full items-center gap-2.5 rounded-tile px-2.5 py-2 text-sm transition-colors duration-150 ease-quiet hover:bg-sand ${
                  option.value === presence ? 'text-ink' : 'text-muted'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${option.dot}`} />
                {option.label}
              </button>
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 rounded-tile px-2 py-2 text-left transition-colors duration-150 ease-quiet hover:bg-sand"
      >
        <Avatar name={currentUser.name} presence={presence} size="md" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-ink">
            {currentUser.name}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-muted">
            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${active.dot}`} />
            {active.label}
          </span>
        </span>
        <ChevronRightIcon className="h-4 w-4 shrink-0 -rotate-90 text-faint" />
      </button>
    </div>
  )
}
