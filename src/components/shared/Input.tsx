import type { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  /** Sits inside the field, left of the caret. */
  icon?: ReactNode
  /** Use the mono face — for meeting codes, not prose. */
  mono?: boolean
}

export default function Input({
  label,
  icon,
  mono = false,
  className = '',
  id,
  ...props
}: InputProps) {
  const fieldId = id ?? props.name

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={fieldId} className="mb-1.5 block text-sm text-muted">
          {label}
        </label>
      )}

      <div className="group relative flex items-center rounded-tile border border-line bg-card transition-colors duration-150 ease-quiet focus-within:border-accent hover:border-faint/60">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 text-faint transition-colors duration-150 ease-quiet group-focus-within:text-accent [&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem]">
            {icon}
          </span>
        )}
        <input
          id={fieldId}
          className={`h-11 w-full bg-transparent py-2 pr-3.5 text-sm text-ink outline-none placeholder:text-faint ${
            icon ? 'pl-10' : 'pl-3.5'
          } ${mono ? 'font-mono' : ''} ${className}`}
          {...props}
        />
      </div>
    </div>
  )
}
