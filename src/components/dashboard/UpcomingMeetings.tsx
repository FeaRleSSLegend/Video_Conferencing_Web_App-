import Avatar from '../shared/Avatar'
import EmptyState from './EmptyState'
import { formatDuration, formatStartsAt, upcomingMeetings } from './mockData'

export default function UpcomingMeetings() {
  return (
    <section
      aria-labelledby="upcoming-heading"
      className="rounded-card border border-line bg-card shadow-card"
    >
      <h2
        id="upcoming-heading"
        className="border-b border-line px-5 py-4 text-sm font-semibold text-ink"
      >
        Upcoming
      </h2>

      {upcomingMeetings.length > 0 ? (
        <ul className="divide-y divide-line">
          {upcomingMeetings.map((meeting) => (
            <li key={meeting.id} className="px-5 py-4">
              <p className="text-sm text-ink">{meeting.title}</p>
              <p className="mt-1 font-mono text-xs text-muted">
                {formatStartsAt(meeting.startsInMinutes)} · in{' '}
                {formatDuration(meeting.startsInMinutes)}
              </p>
              <div className="mt-3 flex items-center -space-x-1.5">
                {meeting.attendees.map((name) => (
                  <Avatar key={name} name={name} size="xs" className="ring-2 ring-card" />
                ))}
                {meeting.extraAttendees && (
                  <span className="flex h-6 items-center rounded-full bg-sand px-2 font-mono text-[0.625rem] text-muted ring-2 ring-card">
                    +{meeting.extraAttendees}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          title="No upcoming meetings"
          hint="Anything you schedule will appear here."
        />
      )}
    </section>
  )
}
