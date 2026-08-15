import { useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router'
import {
  Hand,
  MessageSquare,
  Mic,
  MicOff,
  MoreHorizontal,
  PhoneOff,
  ScreenShare,
  Settings,
  ShieldCheck,
  Users,
  Video,
  VideoOff,
} from 'lucide-react'
import ReactionsMenu from './ReactionsMenu'
import type { PanelTab } from './MeetingSidePanel'

type MeetingControlsProps = {
  micOn: boolean
  cameraOn: boolean
  sharing: boolean
  handRaised: boolean
  activePanel: PanelTab | null
  waitingCount: number
  onToggleMic: () => void
  onToggleCamera: () => void
  onToggleSharing: () => void
  onToggleHand: () => void
  onTogglePanel: (tab: PanelTab) => void
  meetingId: string
}

const round =
  'flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-150 ease-quiet'
const on = 'bg-accent/20 text-accent hover:bg-accent/30'
const off = 'bg-stage-raised text-stage-txt hover:bg-stage-line'

/** One size and stroke for every icon on this page. */
const ico = { strokeWidth: 1.6, className: 'h-5 w-5' } as const

export default function MeetingControls({
  micOn,
  cameraOn,
  sharing,
  handRaised,
  activePanel,
  waitingCount,
  onToggleMic,
  onToggleCamera,
  onToggleSharing,
  onToggleHand,
  onTogglePanel,
  meetingId,
}: MeetingControlsProps) {
  const navigate = useNavigate()
  const [moreOpen, setMoreOpen] = useState(false)

  const panels: { tab: PanelTab; label: string; icon: ReactNode }[] = [
    { tab: 'people', label: 'People', icon: <Users {...ico} /> },
    { tab: 'chat', label: 'Chat', icon: <MessageSquare {...ico} /> },
    { tab: 'host', label: 'Host controls', icon: <ShieldCheck {...ico} /> },
  ]

  return (
    <div className="relative flex shrink-0 items-center justify-center px-3 py-3">
      <div className="flex items-center gap-2 rounded-full border border-stage-line bg-stage-panel/80 p-2 backdrop-blur-md">
        <button
          type="button"
          onClick={onToggleMic}
          aria-pressed={micOn}
          aria-label={micOn ? 'Mute microphone' : 'Unmute microphone'}
          className={`${round} ${micOn ? on : off}`}
        >
          {micOn ? <Mic {...ico} /> : <MicOff {...ico} />}
        </button>

        <button
          type="button"
          onClick={onToggleCamera}
          aria-pressed={cameraOn}
          aria-label={cameraOn ? 'Turn camera off' : 'Turn camera on'}
          className={`${round} ${cameraOn ? on : off}`}
        >
          {cameraOn ? <Video {...ico} /> : <VideoOff {...ico} />}
        </button>

        <button
          type="button"
          onClick={onToggleSharing}
          aria-pressed={sharing}
          aria-label={sharing ? 'Stop sharing your screen' : 'Share your screen'}
          className={`${round} ${sharing ? on : off}`}
        >
          <ScreenShare {...ico} />
        </button>

        <ReactionsMenu className={`${round} ${off}`} />

        <button
          type="button"
          onClick={onToggleHand}
          aria-pressed={handRaised}
          aria-label={handRaised ? 'Lower your hand' : 'Raise your hand'}
          className={`${round} ${handRaised ? on : off}`}
        >
          <Hand {...ico} />
        </button>

        <div className="relative">
          {moreOpen && (
            <>
              <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-10 cursor-default"
                onClick={() => setMoreOpen(false)}
              />
              <div
                role="menu"
                className="absolute bottom-full right-0 z-20 mb-3 w-52 rounded-card border border-stage-line bg-stage-panel p-1.5"
              >
                {panels.map((panel) => (
                  <button
                    key={panel.tab}
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      onTogglePanel(panel.tab)
                      setMoreOpen(false)
                    }}
                    className="flex w-full items-center gap-3 rounded-tile px-3 py-2.5 text-left text-sm text-stage-txt transition-colors duration-150 ease-quiet hover:bg-stage-raised md:hidden [&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem] [&>svg]:text-stage-muted"
                  >
                    {panel.icon}
                    {panel.label}
                  </button>
                ))}
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setMoreOpen(false)}
                  className="flex w-full items-center gap-3 rounded-tile px-3 py-2.5 text-left text-sm text-stage-txt transition-colors duration-150 ease-quiet hover:bg-stage-raised [&>svg]:text-stage-muted"
                >
                  <Settings {...ico} />
                  Settings
                </button>
              </div>
            </>
          )}

          <button
            type="button"
            onClick={() => setMoreOpen((v) => !v)}
            aria-expanded={moreOpen}
            aria-label="More options"
            className={`${round} ${off}`}
          >
            <MoreHorizontal {...ico} />
          </button>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/meeting/${meetingId}/end`)}
          className="ml-1 flex h-11 items-center gap-2 rounded-full bg-leave px-5 text-sm font-semibold text-white transition-colors duration-150 ease-quiet hover:brightness-110 active:scale-[0.99]"
        >
          <PhoneOff strokeWidth={1.8} className="h-[1.125rem] w-[1.125rem]" />
          Leave
        </button>
      </div>

      {/* Panel destinations. Folded into the More menu below md. */}
      <div className="absolute right-3 hidden items-center gap-1 md:flex">
        {panels.map((panel) => (
          <button
            key={panel.tab}
            type="button"
            onClick={() => onTogglePanel(panel.tab)}
            aria-pressed={activePanel === panel.tab}
            aria-label={panel.label}
            className={`relative ${round} ${
              activePanel === panel.tab
                ? 'bg-stage-raised text-stage-txt'
                : 'text-stage-muted hover:bg-stage-raised hover:text-stage-txt'
            }`}
          >
            {panel.icon}
            {panel.tab === 'people' && waitingCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 font-mono text-[0.5625rem] font-semibold text-white">
                {waitingCount}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
