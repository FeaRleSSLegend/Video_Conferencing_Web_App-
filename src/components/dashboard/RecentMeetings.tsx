import { useState } from 'react'
import EmptyState from './EmptyState'
import MeetingCard from './MeetingCard'
import { recentMeetings } from './mockData'

const filters = ['All', 'Live', 'Recorded'] as const
type Filter = (typeof filters)[number]

export default function RecentMeetings() {
  const [filter, setFilter] = useState<Filter>('All')

  const meetings = recentMeetings.filter((meeting) => {
    if (filter === 'Live') return meeting.status === 'live'
    if (filter === 'Recorded') return meeting.recorded
    return true
  })

  return (
    <section
      aria-labelledby="recent-meetings-heading"
      className="rounded-card border border-line bg-card shadow-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h2 id="recent-meetings-heading" className="text-sm font-semibold text-ink">
          Recent meetings
        </h2>

        <div role="tablist" aria-label="Filter meetings" className="flex items-center gap-1">
          {filters.map((option) => (
            <button
              key={option}
              role="tab"
              aria-selected={filter === option}
              onClick={() => setFilter(option)}
              className={`rounded-full px-2.5 py-1 text-xs transition-colors duration-150 ease-quiet ${
                filter === option
                  ? 'bg-sand font-medium text-ink'
                  : 'text-muted hover:text-ink'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {meetings.length > 0 ? (
        <ul className="divide-y divide-line">
          {meetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </ul>
      ) : (
        <EmptyState
          title="Nothing here yet"
          hint={`No ${filter.toLowerCase()} meetings to show. Start one and it will appear in this list.`}
        />
      )}
    </section>
  )
}
