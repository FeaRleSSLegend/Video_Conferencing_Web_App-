import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../shared/Button'
import { LinkIcon, PlusIcon, ScheduleIcon, VideoIcon } from './icons'
import { newMeetingCode } from './mockData'

export default function CreateMeetingButton({ fullWidth = false }: { fullWidth?: boolean }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyLink = async () => {
    const code = newMeetingCode()
    setCopiedCode(code)
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/meeting/${code}`)
    } catch {
      /* Clipboard is blocked in some browsers — the code stays visible to copy by hand. */
    }
  }

  const items = [
    {
      label: 'Start an instant meeting',
      icon: <VideoIcon />,
      onClick: () => navigate(`/meeting/${newMeetingCode()}`),
    },
    { label: 'Create a link to share later', icon: <LinkIcon />, onClick: copyLink },
    { label: 'Schedule for later', icon: <ScheduleIcon />, onClick: () => setOpen(false) },
  ]

  return (
    <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
      <Button
        variant="primary"
        size="lg"
        fullWidth={fullWidth}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        icon={<PlusIcon />}
      >
        New meeting
      </Button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <div
            role="menu"
            className="absolute right-0 top-full z-20 mt-2 w-72 rounded-card border border-line bg-card p-1.5 shadow-card"
          >
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                role="menuitem"
                onClick={item.onClick}
                className="flex w-full items-center gap-3 rounded-tile px-3 py-2.5 text-left text-sm text-ink transition-colors duration-150 ease-quiet hover:bg-sand [&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem] [&>svg]:text-faint"
              >
                {item.icon}
                {item.label}
              </button>
            ))}

            {copiedCode && (
              <p className="mt-1 border-t border-line px-3 pb-1 pt-2.5 text-xs text-muted">
                Link copied · <span className="font-mono text-ink">{copiedCode}</span>
              </p>
            )}
          </div>
        </>
      )}
    </div>
  )
}
