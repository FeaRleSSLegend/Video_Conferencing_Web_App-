import { useState } from 'react'
import type { ReactNode } from 'react'
import Logo from '../shared/Logo'
import ProfileCard from './ProfileCard'
import {
  CalendarIcon,
  CloseIcon,
  PhoneIcon,
  RecordingIcon,
  SettingsIcon,
  UsersIcon,
  VideoIcon,
} from '../shared/icons'

type SideBarProps = {
  /** Drawer state — only consulted below `lg`. */
  open: boolean
  onClose: () => void
}

type NavItem = { label: string; icon: ReactNode }

/** Two primary destinations, like Meet. Everything else is deliberately quieter. */
const primary: NavItem[] = [
  { label: 'Meetings', icon: <VideoIcon /> },
  { label: 'Calls', icon: <PhoneIcon /> },
]

const secondary: NavItem[] = [
  { label: 'Schedule', icon: <CalendarIcon /> },
  { label: 'Contacts', icon: <UsersIcon /> },
  { label: 'Recordings', icon: <RecordingIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
]

export default function SideBar({ open, onClose }: SideBarProps) {
  const [active, setActive] = useState('Meetings')

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden={!open}
        className={`fixed inset-0 z-30 bg-ink/25 transition-opacity duration-200 ease-quiet lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <nav
        aria-label="Main"
        className={`fixed inset-y-0 left-0 z-40 flex w-60 flex-col border-r border-line bg-canvas transition-transform duration-200 ease-quiet lg:top-16 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 lg:hidden">
          <Logo />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-tile p-2 text-muted transition-colors duration-150 ease-quiet hover:bg-sand hover:text-ink"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {primary.map((item) => {
              const isActive = item.label === active
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-tile px-3 py-2.5 text-[0.9375rem] transition-colors duration-150 ease-quiet ${
                      isActive
                        ? 'bg-accent-wash font-semibold text-ink'
                        : 'text-ink hover:bg-sand'
                    }`}
                  >
                    <span className={isActive ? 'text-accent' : 'text-faint'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>

          <hr className="my-5 border-line" />

          <ul className="space-y-0.5">
            {secondary.map((item) => {
              const isActive = item.label === active
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setActive(item.label)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex w-full items-center gap-3 rounded-tile px-3 py-2 text-[0.8125rem] transition-colors duration-150 ease-quiet ${
                      isActive
                        ? 'bg-accent-wash font-medium text-ink'
                        : 'text-muted hover:bg-sand hover:text-ink'
                    }`}
                  >
                    <span
                      className={`[&>svg]:h-[1.125rem] [&>svg]:w-[1.125rem] ${
                        isActive ? 'text-accent' : 'text-faint'
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="border-t border-line p-3">
          <ProfileCard />
        </div>
      </nav>
    </>
  )
}
