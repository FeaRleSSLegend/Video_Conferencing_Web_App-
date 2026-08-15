import { useState } from 'react'
import { CheckIcon, CopyIcon } from '../shared/icons'

type WaitingForOthersProps = {
  roomCode: string
}

/** State 1's only added chrome: say why the room is empty, hand over the code. */
export default function WaitingForOthers({ roomCode }: WaitingForOthersProps) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    setCopied(true)
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/meeting/${roomCode}`)
    } catch {
      /* Clipboard is blocked in some browsers — the code stays visible to copy by hand. */
    }
  }

  return (
    <div className="flex shrink-0 flex-col items-center gap-3 pb-1 sm:flex-row sm:justify-center">
      <p className="text-sm text-stage-muted">
        Waiting for others to join — share
        <span className="mx-2 font-mono text-stage-txt">{roomCode}</span>
      </p>
      <button
        type="button"
        onClick={copy}
        className="inline-flex h-9 items-center gap-2 rounded-full bg-accent px-4 text-sm font-semibold text-white transition-colors duration-150 ease-quiet hover:bg-accent-deep active:scale-[0.99]"
      >
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        {copied ? 'Link copied' : 'Copy invite link'}
      </button>
    </div>
  )
}
