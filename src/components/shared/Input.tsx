import type { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  /** Sits inside the field, left of the caret. */
  icon?: ReactNode
  /** Use the mono face — for meeting codes, not prose. */
  mono?: boolean
  /** Inline validation message. Presence of a value puts the field in its error state. */
  error?: string
  /** Rendered opposite the label — e.g. a "Forgot password" link. */
  labelAction?: ReactNode
  /** Interactive control inside the field's right edge — e.g. a password toggle. */
  trailing?: ReactNode
}

export default function Input({
  label,
  icon,
  mono = false,
  error,
  labelAction,
  trailing,
  className = '',
  id,
  ...props
}: InputProps) {
  const fieldId = id ?? props.name
  const errorId = error && fieldId ? `${fieldId}-error` : undefined

  return (
    <div className="w-full">
      {(label || labelAction) && (
        <div className="mb-1.5 flex items-baseline justify-between gap-3">
          {label && (
            <label htmlFor={fieldId} className="block text-sm text-muted">
              {label}
            </label>
          )}
          {labelAction}
        </div>
      )}

      <div
        className={`group relative flex items-center rounded-tile border bg-card transition-colors duration-150 ease-quiet ${
          error
            ? 'border-danger'
            : 'border-line hover:border-faint/60 focus-within:border-accent'
        }`}
      >
        {icon && (
          <span className="pointer-events-none absolute left-3.5 text-faint transition-colors duration-150 ease-quiet group-focus-within:text-accent [&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem]">
            {icon}
          </span>
        )}
        <input
          id={fieldId}
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          className={`h-11 w-full bg-transparent py-2 text-sm text-ink outline-none placeholder:text-faint ${
            icon ? 'pl-10' : 'pl-3.5'
          } ${trailing ? 'pr-11' : 'pr-3.5'} ${mono ? 'font-mono' : ''} ${className}`}
          {...props}
        />
        {trailing && <span className="absolute right-1.5 flex items-center">{trailing}</span>}
      </div>

      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
