import { useNavigate } from 'react-router'
import Avatar from '../shared/Avatar'
import Button from '../shared/Button'
import { RecordingIcon } from '../shared/icons'
import { formatDuration, formatStartedAt, type Meeting } from './mockData'

type MeetingCardProps = {
  meeting: Meeting
}

/** A row, not a boxed card — the list itself is the container. */
export default function MeetingCard({ meeting }: MeetingCardProps) {
  const navigate = useNavigate()
  const isLive = meeting.status === 'live'

  return (
    <li className="flex flex-wrap items-center gap-x-4 gap-y-3 px-5 py-4 transition-colors duration-150 ease-quiet hover:bg-sand/60">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-[0.9375rem] text-ink">{meeting.title}</h3>
          {isLive && (
            <span className="shrink-0 rounded-full bg-accent-wash px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.05em] text-[#a24a18]">
              Live
            </span>
          )}
          {meeting.recorded && (
            <RecordingIcon className="h-3.5 w-3.5 shrink-0 text-faint" aria-label="Recorded" />
          )}
        </div>

        <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted">
          <span>{meeting.host}</span>
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          <span className="font-mono">{formatStartedAt(meeting.startedMinutesAgo)}</span>
          <span aria-hidden="true" className="text-line">
            ·
          </span>
          <span className="font-mono">
            {isLive
              ? `${formatDuration(meeting.durationMinutes)} in`
              : formatDuration(meeting.durationMinutes)}
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center -space-x-1.5">
          {meeting.participants.map((name) => (
            <Avatar key={name} name={name} size="sm" className="ring-2 ring-card" />
          ))}
          {meeting.extraParticipants && (
            <span className="flex h-8 items-center rounded-full bg-sand px-2 font-mono text-[0.6875rem] text-muted ring-2 ring-card">
              +{meeting.extraParticipants}
            </span>
          )}
        </div>

        <Button
          size="sm"
          variant={isLive ? 'primary' : 'secondary'}
          onClick={() => navigate(`/meeting/${meeting.id}`)}
        >
          {isLive ? 'Join' : 'Details'}
        </Button>
      </div>
    </li>
  )
}
