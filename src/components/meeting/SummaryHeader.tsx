import { formatMeetingDate, summary } from './mockData'

export default function SummaryHeader() {
  return (
    <header>
      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent">
        Meeting ended
      </p>

      <h1 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-[2rem]">
        {summary.title}
      </h1>
      <p className="mt-1.5 text-sm text-muted">{formatMeetingDate()}</p>
    </header>
  )
}
