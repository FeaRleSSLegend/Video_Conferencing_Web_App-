import { useState } from 'react'
import { useNavigate } from 'react-router'
import { CalendarPlus, Check, LayoutDashboard, Link2, PlayCircle } from 'lucide-react'
import Button from '../shared/Button'

type SummaryActionsProps = {
  meetingId: string
}

const ico = { strokeWidth: 1.6 } as const

export default function SummaryActions({ meetingId }: SummaryActionsProps) {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const copySummary = async () => {
    setCopied(true)
    try {
      await navigator.clipboard.writeText(
        `${window.location.origin}/meeting/${meetingId}/end`,
      )
    } catch {
      /* Clipboard is blocked in some browsers — nothing to fall back to here. */
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          variant="primary"
          size="lg"
          icon={<LayoutDashboard {...ico} />}
          onClick={() => navigate('/dashboard')}
        >
          Back to dashboard
        </Button>

        <Button size="lg" icon={<CalendarPlus {...ico} />}>
          Schedule a follow-up
        </Button>

        <Button
          size="lg"
          icon={copied ? <Check {...ico} /> : <Link2 {...ico} />}
          onClick={copySummary}
        >
          {copied ? 'Link copied' : 'Copy summary link'}
        </Button>
      </div>

      <div>
        <Button size="lg" icon={<PlayCircle {...ico} />} disabled>
          View recording
        </Button>
        <p className="mt-1.5 text-xs text-muted">
          This meeting was not recorded, so there is nothing to play back.
        </p>
      </div>
    </div>
  )
}
