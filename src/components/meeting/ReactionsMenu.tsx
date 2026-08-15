import { useState } from 'react'
import { SmileIcon } from '../shared/icons'
import { reactions } from './mockData'

type ReactionsMenuProps = {
  className: string
}

/** Picker only — reactions are not sent anywhere yet. */
export default function ReactionsMenu({ className }: ReactionsMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      {open && (
        <>
          <button
            type="button"
            aria-label="Close reactions"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div
            role="menu"
            className="absolute bottom-full left-1/2 z-20 mb-3 flex -translate-x-1/2 gap-1 rounded-full border border-stage-line bg-stage-panel p-1.5"
          >
            {reactions.map((emoji) => (
              <button
                key={emoji}
                type="button"
                role="menuitem"
                onClick={() => setOpen(false)}
                aria-label={`Send ${emoji} reaction`}
                className="flex h-9 w-9 items-center justify-center rounded-full text-lg transition-colors duration-150 ease-quiet hover:bg-white/10"
              >
                {emoji}
              </button>
            ))}
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label="Send a reaction"
        className={className}
      >
        <SmileIcon />
      </button>
    </div>
  )
}
