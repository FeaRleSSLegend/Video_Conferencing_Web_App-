export type DemoState = 'alone' | 'active' | 'admitting'

type DevStateSwitcherProps = {
  state: DemoState
  onChange: (state: DemoState) => void
}

const options: { value: DemoState; label: string }[] = [
  { value: 'alone', label: 'Host alone' },
  { value: 'active', label: 'In call' },
  { value: 'admitting', label: 'Waiting room' },
]

/**
 * DEV ONLY — delete this file and its two lines in MeetingPage once the real
 * call state is wired up. Styled to look nothing like the product UI.
 */
export default function DevStateSwitcher({ state, onChange }: DevStateSwitcherProps) {
  return (
    <div className="fixed bottom-3 left-3 z-50 flex items-center gap-1 rounded-md border border-dashed border-yellow-400/60 bg-black/80 p-1 font-mono text-[0.625rem] backdrop-blur-sm">
      <span className="px-1.5 text-yellow-400/80">DEV</span>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          className={`rounded px-2 py-1 transition-colors ${
            state === option.value
              ? 'bg-yellow-400/20 text-yellow-200'
              : 'text-white/50 hover:text-white'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
