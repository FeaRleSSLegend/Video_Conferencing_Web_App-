import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router'
import Button from '../shared/Button'
import Input from '../shared/Input'
import { KeyboardIcon } from '../shared/icons'

type JoinMeetingFormProps = {
  /** `bar` is the compact top-bar form; `card` is the stacked mobile version. */
  layout?: 'bar' | 'card'
}

/** Accepts a bare code or a pasted meeting link; both end at the same route. */
function extractCode(value: string) {
  const trimmed = value.trim()
  const fromLink = trimmed.match(/\/meeting\/([^/?#\s]+)/)
  return (fromLink ? fromLink[1] : trimmed).replace(/\s+/g, '')
}

export default function JoinMeetingForm({ layout = 'bar' }: JoinMeetingFormProps) {
  const navigate = useNavigate()
  const [value, setValue] = useState('')
  const code = extractCode(value)

  const join = (event: FormEvent) => {
    event.preventDefault()
    if (code) navigate(`/meeting/${code}`)
  }

  return (
    <form
      onSubmit={join}
      className={layout === 'bar' ? 'flex items-center gap-2' : 'space-y-3'}
    >
      <div className={layout === 'bar' ? 'w-56 lg:w-72' : ''}>
        <Input
          name={`meeting-code-${layout}`}
          label={layout === 'card' ? 'Join with a code or link' : undefined}
          aria-label={layout === 'bar' ? 'Enter a code or link' : undefined}
          mono
          icon={<KeyboardIcon />}
          placeholder="Enter a code or link"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={!code}
        fullWidth={layout === 'card'}
        className={layout === 'bar' ? 'shrink-0' : undefined}
      >
        Join
      </Button>
    </form>
  )
}
