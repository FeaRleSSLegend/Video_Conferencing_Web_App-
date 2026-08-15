import ChatPanel from './ChatPanel'
import HostControlsPanel from './HostControlsPanel'
import { X } from 'lucide-react'
import ParticipantsPanel from './ParticipantsPanel'
import type { Participant, PendingGuest } from './mockData'

export type PanelTab = 'people' | 'chat' | 'host'

type MeetingSidePanelProps = {
  tab: PanelTab
  onClose: () => void
  people: Participant[]
  guests: PendingGuest[]
  onAdmit: (id: string) => void
  onDeny: (id: string) => void
  onAdmitAll: () => void
}

const titles: Record<PanelTab, string> = {
  people: 'People',
  chat: 'Chat',
  host: 'Host controls',
}

/**
 * One panel at a time — you switch destinations from the bottom bar rather
 * than stacking them, so there are no tabs in here.
 */
export default function MeetingSidePanel({
  tab,
  onClose,
  people,
  guests,
  onAdmit,
  onDeny,
  onAdmitAll,
}: MeetingSidePanelProps) {
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-20 bg-black/50 lg:hidden"
        aria-hidden="true"
      />

      <aside className="fixed inset-y-0 right-0 z-30 flex w-80 max-w-[85vw] flex-col border-l border-stage-line bg-stage-panel lg:static lg:z-auto lg:max-w-none lg:shrink-0 lg:rounded-card lg:border">
        <div className="flex shrink-0 items-center justify-between gap-2 px-4 py-3.5">
          <h2 className="font-display text-base font-semibold text-stage-txt">
            {titles[tab]}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close panel"
            className="-mr-1.5 flex h-8 w-8 items-center justify-center rounded-tile text-stage-muted transition-colors duration-150 ease-quiet hover:bg-stage-raised hover:text-stage-txt"
          >
            <X strokeWidth={1.6} className="h-[1.125rem] w-[1.125rem]" />
          </button>
        </div>

        {tab === 'people' && (
          <ParticipantsPanel
            people={people}
            guests={guests}
            onAdmit={onAdmit}
            onDeny={onDeny}
            onAdmitAll={onAdmitAll}
          />
        )}
        {tab === 'chat' && <ChatPanel />}
        {tab === 'host' && <HostControlsPanel />}
      </aside>
    </>
  )
}
