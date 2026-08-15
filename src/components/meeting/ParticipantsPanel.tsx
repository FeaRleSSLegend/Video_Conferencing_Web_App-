import InitialsAvatar from './InitialsAvatar'
import { MicIcon, MicOffIcon, UserPlusIcon, VideoOffIcon } from '../shared/icons'
import type { Participant, PendingGuest } from './mockData'

type ParticipantsPanelProps = {
  people: Participant[]
  guests: PendingGuest[]
  onAdmit: (id: string) => void
  onDeny: (id: string) => void
  onAdmitAll: () => void
}

/**
 * People and the waiting room live together — admitting someone is a decision
 * about this list, not a separate destination. Permissions are elsewhere.
 */
export default function ParticipantsPanel({
  people,
  guests,
  onAdmit,
  onDeny,
  onAdmitAll,
}: ParticipantsPanelProps) {
  return (
    <div className="min-h-0 flex-1 overflow-y-auto">
      <div className="p-3">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-tile bg-accent/15 py-2.5 text-sm font-medium text-accent transition-colors duration-150 ease-quiet hover:bg-accent/25"
        >
          <UserPlusIcon className="h-[1.125rem] w-[1.125rem]" />
          Add people
        </button>
      </div>

      {guests.length > 0 && (
        <section className="border-b border-stage-line px-3 pb-3">
          <div className="flex items-center justify-between gap-2 px-1 py-2">
            <h3 className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-stage-muted">
              Waiting to join
            </h3>
            {guests.length > 1 && (
              <button
                type="button"
                onClick={onAdmitAll}
                className="rounded-tile px-2 py-1 text-xs font-medium text-accent transition-colors duration-150 ease-quiet hover:bg-accent/15"
              >
                Admit all
              </button>
            )}
          </div>

          <ul className="space-y-1">
            {guests.map((guest) => (
              <li key={guest.id} className="flex items-center gap-2.5 rounded-tile px-1 py-1.5">
                <InitialsAvatar name={guest.name} />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm text-stage-txt">{guest.name}</span>
                  <span className="text-[0.6875rem] text-stage-muted">
                    Waiting {guest.waitingFor}
                  </span>
                </span>
                <button
                  type="button"
                  onClick={() => onDeny(guest.id)}
                  className="rounded-tile px-2.5 py-1.5 text-xs text-stage-muted transition-colors duration-150 ease-quiet hover:bg-stage-raised hover:text-stage-txt"
                >
                  Deny
                </button>
                <button
                  type="button"
                  onClick={() => onAdmit(guest.id)}
                  className="rounded-tile bg-accent px-3 py-1.5 text-xs font-semibold text-white transition-colors duration-150 ease-quiet hover:bg-accent-deep active:scale-[0.99]"
                >
                  Admit
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="px-3 pb-3">
        <h3 className="px-1 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-stage-muted">
          In the meeting
        </h3>

        <ul className="space-y-1">
          {people.map((person) => (
            <li
              key={person.id}
              className="flex items-center gap-3 rounded-tile px-1 py-2 transition-colors duration-150 ease-quiet hover:bg-stage-raised"
            >
              <InitialsAvatar name={person.name} />

              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm text-stage-txt">
                  {person.isSelf ? `${person.name} (You)` : person.name}
                </span>
                {person.isHost && (
                  <span className="text-[0.6875rem] text-stage-muted">Meeting host</span>
                )}
              </span>

              <span className="flex items-center gap-1.5 text-stage-muted">
                {!person.cameraOn && (
                  <VideoOffIcon className="h-4 w-4" aria-label="Camera off" />
                )}
                {person.micOn ? (
                  <MicIcon className="h-4 w-4" aria-label="Unmuted" />
                ) : (
                  <MicOffIcon className="h-4 w-4" aria-label="Muted" />
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
