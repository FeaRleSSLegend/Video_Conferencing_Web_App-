import { useState } from 'react'
import { defaultPermissions } from './mockData'

/**
 * What people are allowed to do, not who is in the room. Plain list of toggle
 * rows with a line of explanation under each — no settings grid.
 */
export default function HostControlsPanel() {
  const [permissions, setPermissions] = useState(defaultPermissions)

  const toggle = (id: string) =>
    setPermissions((list) =>
      list.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)),
    )

  return (
    <div className="min-h-0 flex-1 overflow-y-auto p-4">
      <p className="text-sm leading-relaxed text-stage-muted">
        Only the host can change these. They apply to everyone else in the call.
      </p>

      <h3 className="mt-5 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-stage-muted">
        Let participants
      </h3>

      <ul className="mt-2 divide-y divide-stage-line">
        {permissions.map((permission) => (
          <li key={permission.id} className="flex items-start gap-3 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm text-stage-txt">{permission.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-stage-muted">
                {permission.description}
              </p>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={permission.enabled}
              aria-label={permission.label}
              onClick={() => toggle(permission.id)}
              className={`mt-0.5 flex h-6 w-11 shrink-0 items-center rounded-full p-0.5 transition-colors duration-150 ease-quiet ${
                permission.enabled ? 'bg-accent' : 'bg-stage-line'
              }`}
            >
              <span
                className={`h-5 w-5 rounded-full bg-white transition-transform duration-150 ease-quiet ${
                  permission.enabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
