import { useState } from 'react'
import { useParams } from 'react-router'
import DevStateSwitcher, { type DemoState } from '../components/meeting/DevStateSwitcher'
import MeetingControls from '../components/meeting/MeetingControls'
import MeetingHeader from '../components/meeting/MeetingHeader'
import MeetingSidePanel, { type PanelTab } from '../components/meeting/MeetingSidePanel'
import VideoGrid from '../components/meeting/VideoGrid'
import { participants, pendingGuests, self } from '../components/meeting/mockData'

export default function MeetingPage() {
  const { id } = useParams()
  const roomCode = id ?? 'dvn-qkra-8f2'

  // DEV ONLY — remove with DevStateSwitcher once real call state exists.
  const [demoState, setDemoState] = useState<DemoState>('active')

  const [micOn, setMicOn] = useState(true)
  const [cameraOn, setCameraOn] = useState(true)
  const [sharing, setSharing] = useState(false)
  const [handRaised, setHandRaised] = useState(false)
  const [panel, setPanel] = useState<PanelTab | null>(null)
  const [guests, setGuests] = useState(pendingGuests)

  const me = { ...self, micOn, cameraOn }
  const inCall = demoState !== 'alone'

  // The active speaker takes the spotlight; everyone else, you included,
  // falls into the row underneath.
  const speaker = participants.find((person) => person.speaking) ?? participants[0]
  const main = inCall ? speaker : me
  const others = inCall ? [me, ...participants.filter((p) => p.id !== speaker.id)] : []
  const people = inCall ? [me, ...participants] : [me]
  const waiting = demoState === 'admitting' ? guests : []

  const switchState = (next: DemoState) => {
    setDemoState(next)
    setGuests(pendingGuests)
    // State 3 is defined by the waiting room being surfaced, so open People.
    setPanel(next === 'admitting' ? 'people' : null)
  }

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-stage text-stage-txt">
      <MeetingHeader roomCode={roomCode} people={people} />

      <div className="flex min-h-0 flex-1 gap-3 px-3 sm:px-4 lg:gap-4">
        <div className="flex min-w-0 flex-1 flex-col">
          <VideoGrid main={main} others={others} roomCode={roomCode} />
        </div>

        {panel && (
          <MeetingSidePanel
            tab={panel}
            onClose={() => setPanel(null)}
            people={people}
            guests={waiting}
            onAdmit={(guestId) => setGuests((list) => list.filter((g) => g.id !== guestId))}
            onDeny={(guestId) => setGuests((list) => list.filter((g) => g.id !== guestId))}
            onAdmitAll={() => setGuests([])}
          />
        )}
      </div>

      <MeetingControls
        micOn={micOn}
        cameraOn={cameraOn}
        sharing={sharing}
        handRaised={handRaised}
        activePanel={panel}
        waitingCount={waiting.length}
        onToggleMic={() => setMicOn((v) => !v)}
        onToggleCamera={() => setCameraOn((v) => !v)}
        onToggleSharing={() => setSharing((v) => !v)}
        onToggleHand={() => setHandRaised((v) => !v)}
        onTogglePanel={(tab) => setPanel((current) => (current === tab ? null : tab))}
        meetingId={roomCode}
      />

      {/* DEV ONLY — remove this line with the component. */}
      <DevStateSwitcher state={demoState} onChange={switchState} />
    </div>
  )
}
