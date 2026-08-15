import { useParams } from 'react-router'
import SummaryActions from '../components/meeting/SummaryActions'
import SummaryAttendees from '../components/meeting/SummaryAttendees'
import SummaryHeader from '../components/meeting/SummaryHeader'
import SummaryStats from '../components/meeting/SummaryStats'

export default function AfterMeetingPage() {
  const { id } = useParams()

  return (
    <div className="min-h-[100dvh] bg-canvas">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <SummaryHeader />

        <div className="mt-8 space-y-6 sm:mt-10">
          <SummaryStats />
          <SummaryAttendees />
          <SummaryActions meetingId={id ?? 'dvn-qkra-8f2'} />
        </div>
      </div>
    </div>
  )
}
