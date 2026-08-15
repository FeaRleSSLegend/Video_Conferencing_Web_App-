import { useNavigate } from 'react-router'
import { KeyboardIcon, ScheduleIcon, VideoIcon } from '../shared/icons'
import { newMeetingCode } from './mockData'

/**
 * Three flat tiles, Zoom-style. Each square uses a pale wash rather than a
 * saturated fill so the orange CTA in the top bar stays the loudest thing.
 */
export default function QuickActions() {
  const navigate = useNavigate()

  const actions = [
    {
      label: 'Host',
      icon: <VideoIcon />,
      tile: 'bg-accent-wash text-accent',
      onClick: () => navigate(`/meeting/${newMeetingCode()}`),
    },
    {
      label: 'Join',
      icon: <KeyboardIcon />,
      tile: 'bg-sky-wash text-sky-deep',
      // The join field lives in the top bar on desktop and in the page on
      // mobile — focus whichever one is currently rendered.
      onClick: () => {
        const fields = document.querySelectorAll<HTMLInputElement>(
          'input[name^="meeting-code"]',
        )
        Array.from(fields)
          .find((field) => field.offsetParent !== null)
          ?.focus()
      },
    },
    {
      label: 'Schedule',
      icon: <ScheduleIcon />,
      tile: 'bg-sand text-muted',
      onClick: () => {},
    },
  ]

  return (
    <section
      aria-label="Quick actions"
      className="rounded-card border border-line bg-card p-5 shadow-card"
    >
      <div className="grid grid-cols-3 gap-2">
        {actions.map((action) => (
          <button
            key={action.label}
            type="button"
            onClick={action.onClick}
            className="group flex flex-col items-center gap-2 rounded-tile px-2 py-3 transition-colors duration-150 ease-quiet hover:bg-sand"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-tile ${action.tile}`}
            >
              {action.icon}
            </span>
            <span className="text-xs text-muted group-hover:text-ink">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
