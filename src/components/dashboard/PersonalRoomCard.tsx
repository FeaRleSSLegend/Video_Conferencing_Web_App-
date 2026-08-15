import { useState } from 'react'
import { useNavigate } from 'react-router'
import Button from '../shared/Button'
import { CheckIcon, CopyIcon } from './icons'
import { currentUser } from './mockData'

/** The room that is always yours — Zoom's Personal Meeting ID, adapted. */
export default function PersonalRoomCard() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    setCopied(true)
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/meeting/${currentUser.personalCode}`,
      )
    } catch {
      /* Clipboard is blocked in some browsers — the code stays visible to copy by hand. */
    }
  }

  return (
    <section
      aria-labelledby="personal-room-heading"
      className="rounded-card border border-line bg-card p-5 shadow-card"
    >
      <h2 id="personal-room-heading" className="text-sm font-semibold text-ink">
        Your personal room
      </h2>
      <p className="mt-2 font-mono text-sm text-muted">{currentUser.personalCode}</p>

      <div className="mt-4 flex items-center gap-2">
        <Button size="sm" onClick={() => navigate(`/meeting/${currentUser.personalCode}`)}>
          Start
        </Button>
        <Button
          size="sm"
          variant="quiet"
          onClick={copy}
          icon={copied ? <CheckIcon /> : <CopyIcon />}
        >
          {copied ? 'Copied' : 'Copy link'}
        </Button>
      </div>
    </section>
  )
}
