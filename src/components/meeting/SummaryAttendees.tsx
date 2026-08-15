import Avatar from '../shared/Avatar'
import { summary } from './mockData'

/**
 * Same card + `divide-y` row pattern as the dashboard's ContactList, and the
 * same shared Avatar — ContactCard itself is built around presence and a call
 * action, neither of which exists once the meeting is over.
 */
export default function SummaryAttendees() {
  return (
    <section
      aria-labelledby="attendees-heading"
      className="rounded-card border border-line bg-card shadow-card"
    >
      <h2
        id="attendees-heading"
        className="border-b border-line px-5 py-4 text-sm font-semibold text-ink"
      >
        Who was there
      </h2>

      <ul className="divide-y divide-line">
        {summary.attendees.map((attendee) => (
          <li
            key={attendee.id}
            className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3"
          >
            <Avatar name={attendee.name} size="md" />

            <div className="min-w-0 flex-1">
              <p className="flex items-center gap-2 truncate text-sm text-ink">
                {attendee.name}
                {attendee.isHost && (
                  <span className="shrink-0 rounded-full bg-sand px-2 py-0.5 text-[0.625rem] text-muted">
                    Host
                  </span>
                )}
              </p>
              <p className="truncate text-xs text-muted">{attendee.role}</p>
            </div>

            <p className="shrink-0 text-xs text-muted">
              {attendee.leftAt === null ? (
                'Stayed for the full meeting'
              ) : (
                <span className="font-mono">
                  {attendee.joinedAt} — {attendee.leftAt}
                </span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}
