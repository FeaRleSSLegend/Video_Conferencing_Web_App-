import { useState } from 'react'
import InitialsAvatar from './InitialsAvatar'
import { SendIcon } from '../shared/icons'
import { chatMessages } from './mockData'

/** Message list and an input. Nothing else belongs in here. */
export default function ChatPanel() {
  const [draft, setDraft] = useState('')

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto p-4">
        {chatMessages.map((message) => (
          <div key={message.id} className="flex gap-2.5">
            <InitialsAvatar name={message.author} size="sm" className="mt-0.5" />
            <div className="min-w-0 flex-1">
              <p className="flex items-baseline gap-2 text-xs text-stage-muted">
                <span className="truncate">
                  {message.fromSelf ? 'You' : message.author}
                </span>
                <span className="shrink-0 font-mono text-[0.625rem]">{message.sentAt}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-stage-txt">{message.body}</p>
            </div>
          </div>
        ))}
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          setDraft('')
        }}
        className="flex shrink-0 items-center gap-2 border-t border-stage-line p-3"
      >
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Send a message"
          aria-label="Send a message"
          className="h-10 min-w-0 flex-1 rounded-tile border border-stage-line bg-stage px-3 text-sm text-stage-txt outline-none transition-colors duration-150 ease-quiet placeholder:text-stage-muted focus:border-accent"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          aria-label="Send"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-tile bg-accent text-white transition-colors duration-150 ease-quiet hover:bg-accent-deep disabled:pointer-events-none disabled:opacity-40"
        >
          <SendIcon className="h-[1.125rem] w-[1.125rem]" />
        </button>
      </form>
    </div>
  )
}
