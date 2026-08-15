import { MicOff, VideoOff } from 'lucide-react'
import InitialsAvatar from './InitialsAvatar'
import type { Participant } from './mockData'

type VideoTileProps = {
  participant: Participant
  /** `main` is the spotlight tile; `thumb` is everyone else. */
  variant?: 'main' | 'thumb'
  className?: string
}

/**
 * No camera feed and no photography: every tile is the same flat surface with
 * the person's initials, their name, and the mic/camera indicators.
 */
export default function VideoTile({
  participant,
  variant = 'thumb',
  className = '',
}: VideoTileProps) {
  const isMain = variant === 'main'

  return (
    <div
      className={`relative overflow-hidden rounded-card bg-tile ${
        participant.speaking ? 'ring-2 ring-accent' : 'ring-1 ring-stage-line'
      } ${className}`}
    >
      <div className="flex h-full w-full items-center justify-center">
        <InitialsAvatar name={participant.name} size={isMain ? 'xl' : 'lg'} />
      </div>

      <div className="absolute inset-x-3 bottom-2.5 flex items-center gap-1.5">
        <span
          className={`truncate text-stage-txt ${isMain ? 'text-sm' : 'text-[0.6875rem]'}`}
        >
          {participant.isSelf ? 'You' : participant.name}
        </span>

        {!participant.micOn && (
          <MicOff
            strokeWidth={1.6}
            className="h-3.5 w-3.5 shrink-0 text-stage-muted"
            aria-label="Muted"
          />
        )}
        {!participant.cameraOn && (
          <VideoOff
            strokeWidth={1.6}
            className="h-3.5 w-3.5 shrink-0 text-stage-muted"
            aria-label="Camera off"
          />
        )}
      </div>
    </div>
  )
}
