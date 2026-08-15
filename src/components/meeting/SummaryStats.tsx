import { formatDuration } from '../dashboard/mockData'
import { summary } from './mockData'

/** Three plain numbers. No charts — nobody needs a graph of one meeting. */
export default function SummaryStats() {
  const stats = [
    { label: 'Duration', value: formatDuration(summary.durationMinutes) },
    { label: 'Attendees', value: `${summary.attendees.length}` },
    { label: 'Start — end', value: `${summary.startedAt} — ${summary.endedAt}` },
  ]

  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line shadow-card sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-card px-5 py-4">
          <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-faint">
            {stat.label}
          </dt>
          <dd className="mt-1.5 font-mono text-lg text-ink">{stat.value}</dd>
        </div>
      ))}
    </dl>
  )
}
