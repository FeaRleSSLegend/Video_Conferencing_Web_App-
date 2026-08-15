import VideoTile from './VideoTile'
import WaitingForOthers from './WaitingForOthers'
import type { Participant } from './mockData'

type VideoGridProps = {
  main: Participant
  others: Participant[]
  roomCode: string
}

/**
 * One spotlight tile with the rest wrapping underneath. There is no alternate
 * side-strip layout — a second arrangement was more code than it was worth.
 */
export default function VideoGrid({ main, others, roomCode }: VideoGridProps) {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <VideoTile participant={main} variant="main" className="min-h-0 flex-1" />

      {others.length > 0 ? (
        <div className="flex shrink-0 flex-wrap justify-center gap-3">
          {others.map((participant) => (
            <VideoTile
              key={participant.id}
              participant={participant}
              className="aspect-video w-[8.5rem] sm:w-40"
            />
          ))}
        </div>
      ) : (
        <WaitingForOthers roomCode={roomCode} />
      )}
    </div>
  )
}
