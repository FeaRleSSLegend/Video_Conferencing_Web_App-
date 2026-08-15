import { useState } from 'react'
import { useNavigate } from 'react-router'
import { ArrowLeft, Check } from 'lucide-react'
import InitialsAvatar from './InitialsAvatar'
import { meeting, type Participant } from './mockData'

type MeetingHeaderProps = {
  roomCode: string
  people: Participant[]
}

export default function MeetingHeader({ roomCode, people }: MeetingHeaderProps) {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    setCopied(true)
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/meeting/${roomCode}`)
    } catch {
      /* Clipboard is blocked in some browsers — the code stays visible to copy by hand. */
    }
  }

  const shown = people.slice(0, 4)
  const overflow = people.length - shown.length

  return (
    <header className="flex shrink-0 items-center gap-3 px-3 py-3 sm:px-4">
      <button
        type="button"
        onClick={() => navigate('/dashboard')}
        aria-label="Back to dashboard"
        className="-ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-stage-muted transition-colors duration-150 ease-quiet hover:bg-stage-raised hover:text-stage-txt"
      >
        <ArrowLeft strokeWidth={1.6} className="h-[1.125rem] w-[1.125rem]" />
      </button>

      <div className="flex min-w-0 flex-1 items-baseline gap-2.5">
        <h1 className="truncate text-sm font-medium text-stage-txt sm:text-base">
          {meeting.title}
        </h1>
        <button
          type="button"
          onClick={copy}
          title="Copy invite link"
          className="hidden shrink-0 items-center gap-1.5 font-mono text-xs text-stage-muted transition-colors duration-150 ease-quiet hover:text-stage-txt sm:flex"
        >
          {copied && <Check strokeWidth={2} className="h-3.5 w-3.5 text-accent" />}
          {roomCode}
        </button>
      </div>

      <div className="flex items-center -space-x-2">
        {shown.map((person) => (
          <InitialsAvatar key={person.id} name={person.name} className="ring-2 ring-stage" />
        ))}
        {overflow > 0 && (
          <span className="flex h-9 items-center rounded-full bg-stage-raised px-2.5 font-mono text-[0.6875rem] text-stage-muted ring-2 ring-stage">
            +{overflow}
          </span>
        )}
      </div>
    </header>
  )
}
