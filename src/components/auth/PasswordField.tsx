import { useState } from 'react'
import type { ChangeEvent } from 'react'
import Input from '../shared/Input'
import { EyeIcon, EyeOffIcon } from '../shared/icons'

type PasswordFieldProps = {
  label: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  error?: string
  autoComplete: 'current-password' | 'new-password'
}

/** Shared by both forms so the show/hide toggle behaves identically. */
export default function PasswordField({
  label,
  name,
  value,
  onChange,
  error,
  autoComplete,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false)

  return (
    <Input
      name={name}
      type={visible ? 'text' : 'password'}
      label={label}
      placeholder="••••••••"
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
      error={error}
      trailing={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
          className="rounded-tile p-2 text-faint transition-colors duration-150 ease-quiet hover:text-ink"
        >
          {visible ? (
            <EyeOffIcon className="h-[1.125rem] w-[1.125rem]" />
          ) : (
            <EyeIcon className="h-[1.125rem] w-[1.125rem]" />
          )}
        </button>
      }
    />
  )
}
