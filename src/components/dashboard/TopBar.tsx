import Avatar from '../shared/Avatar'
import Logo from '../shared/Logo'
import CreateMeetingButton from './CreateMeetingButton'
import JoinMeetingForm from './JoinMeetingForm'
import { HelpIcon, MenuIcon, SettingsIcon } from '../shared/icons'
import { currentUser } from './mockData'

type TopBarProps = {
  onOpenNav: () => void
}

export default function TopBar({ onOpenNav }: TopBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 h-16 border-b border-line bg-canvas/90 backdrop-blur-sm">
      <div className="flex h-full items-center gap-3 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onOpenNav}
          aria-label="Open navigation"
          className="-ml-1.5 rounded-tile p-2 text-muted transition-colors duration-150 ease-quiet hover:bg-sand hover:text-ink lg:hidden"
        >
          <MenuIcon />
        </button>

        <Logo />

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden md:block">
            <JoinMeetingForm />
          </div>

          <CreateMeetingButton />

          <div className="hidden items-center gap-1 sm:flex">
            <button
              type="button"
              aria-label="Help"
              className="rounded-tile p-2 text-faint transition-colors duration-150 ease-quiet hover:bg-sand hover:text-ink"
            >
              <HelpIcon />
            </button>
            <button
              type="button"
              aria-label="Settings"
              className="rounded-tile p-2 text-faint transition-colors duration-150 ease-quiet hover:bg-sand hover:text-ink"
            >
              <SettingsIcon />
            </button>
          </div>

          <Avatar name={currentUser.name} size="sm" presence={currentUser.presence} />
        </div>
      </div>
    </header>
  )
}
