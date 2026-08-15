import { useState } from 'react'
import { useNavigate } from 'react-router'
import ContactCard from './ContactCard'
import EmptyState from './EmptyState'
import { SearchIcon } from './icons'
import { contacts, type Contact } from './mockData'

/** Reachable people float to the top — the list is for starting calls, not browsing. */
const order: Record<Contact['presence'], number> = {
  free: 0,
  inCall: 1,
  away: 2,
  offline: 3,
}

export default function ContactList() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const visible = contacts
    .filter((contact) =>
      `${contact.name} ${contact.role}`.toLowerCase().includes(query.trim().toLowerCase()),
    )
    .sort((a, b) => order[a.presence] - order[b.presence])

  const availableCount = contacts.filter((c) => c.presence === 'free').length

  return (
    <section
      aria-labelledby="contacts-heading"
      className="rounded-card border border-line bg-card shadow-card"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <h2 id="contacts-heading" className="text-sm font-semibold text-ink">
          Contacts
          <span className="ml-2 font-normal text-muted">{availableCount} available</span>
        </h2>

        <label className="relative">
          <span className="sr-only">Find someone</span>
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find someone"
            className="h-9 w-44 rounded-tile border border-line bg-card pl-9 pr-3 text-sm text-ink outline-none transition-colors duration-150 ease-quiet placeholder:text-faint hover:border-faint/60 focus:border-accent"
          />
        </label>
      </div>

      {visible.length > 0 ? (
        <ul className="max-h-[24rem] divide-y divide-line overflow-y-auto">
          {visible.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onCall={(c) => navigate(`/meeting/${c.id}-direct`)}
            />
          ))}
        </ul>
      ) : (
        <EmptyState
          title="No one by that name"
          hint={`Nobody in your contacts matches “${query}”.`}
        />
      )}
    </section>
  )
}
