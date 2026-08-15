import Avatar from '../shared/Avatar'
import { VideoIcon } from './icons'
import type { Contact } from './mockData'

type ContactCardProps = {
  contact: Contact
  onCall: (contact: Contact) => void
}

export default function ContactCard({ contact, onCall }: ContactCardProps) {
  const secondary =
    contact.presence === 'inCall' ? 'In a meeting' : contact.lastSeen ?? contact.role

  return (
    <li className="group flex items-center gap-3 px-5 py-3 transition-colors duration-150 ease-quiet hover:bg-sand/60">
      <Avatar
        name={contact.name}
        presence={contact.presence}
        size="md"
        className={contact.presence === 'offline' ? 'opacity-60' : undefined}
      />

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm text-ink">{contact.name}</p>
        <p className="truncate text-xs text-muted">{secondary}</p>
      </div>

      <button
        type="button"
        onClick={() => onCall(contact)}
        aria-label={`Start a meeting with ${contact.name}`}
        className="rounded-tile p-2 text-faint transition-colors duration-150 ease-quiet hover:bg-accent-wash hover:text-accent focus-visible:opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
      >
        <VideoIcon className="h-[1.125rem] w-[1.125rem]" />
      </button>
    </li>
  )
}
