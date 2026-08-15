import type { SVGProps } from 'react'

/**
 * Hand-drawn icon set — the project ships no icon package. One stroke weight
 * across every glyph so the set reads as a single family.
 */
function Icon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      {children}
    </svg>
  )
}

export const VideoIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="2.5" y="6" width="13" height="12" rx="3" />
    <path d="M15.5 10.5 21 7.5v9l-5.5-3z" />
  </Icon>
)

export const PhoneIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 5.5c0-.8.7-1.5 1.5-1.5h2c.7 0 1.3.5 1.5 1.2l.6 2.5c.1.6-.1 1.2-.6 1.5l-1.3.9a12 12 0 0 0 5.2 5.2l.9-1.3c.3-.5.9-.7 1.5-.6l2.5.6c.7.2 1.2.8 1.2 1.5v2c0 .8-.7 1.5-1.5 1.5A15.5 15.5 0 0 1 4 5.5z" />
  </Icon>
)

export const UsersIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
    <path d="M16 5.5a3.2 3.2 0 0 1 0 5.9M17.5 14.2A5.5 5.5 0 0 1 20.5 19" />
  </Icon>
)

export const CalendarIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5" />
  </Icon>
)

export const RecordingIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="3.2" fill="currentColor" stroke="none" />
  </Icon>
)

export const SettingsIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.8v2.4M12 18.8v2.4M21.2 12h-2.4M5.2 12H2.8M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5" />
  </Icon>
)

export const SearchIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Icon>
)

export const BellIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 3.3.8 5 1.5 6h-14c.7-1 1.5-2.7 1.5-6z" />
    <path d="M10 19a2 2 0 0 0 4 0" />
  </Icon>
)

export const PlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
)

export const LinkIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l3-3a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
    <path d="M13.5 10.5a3.5 3.5 0 0 0-5 0l-3 3a3.5 3.5 0 0 0 5 5L12 17" />
  </Icon>
)

export const KeyboardIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
    <path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M8 14h8" />
  </Icon>
)

export const ChevronRightIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
  </Icon>
)

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M4 7h16M4 12h16M4 17h11" />
  </Icon>
)

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m6 6 12 12M18 6 6 18" />
  </Icon>
)

export const ClockIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </Icon>
)

export const ScheduleIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="3" />
    <path d="M3.5 9.5h17M8 3v3.5M16 3v3.5M9.5 14.5l1.8 1.8 3.4-3.4" />
  </Icon>
)

export const HelpIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9.8 9.6a2.3 2.3 0 1 1 2.9 2.5c-.5.2-.7.6-.7 1.1v.5M12 16.6h.01" />
  </Icon>
)

export const CopyIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
  </Icon>
)

export const CheckIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" />
  </Icon>
)

export const MicIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="9" y="2.5" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
  </Icon>
)

export const MicOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M15 5.4A3 3 0 0 0 9 5.5v5M9 13.4a3 3 0 0 0 5.2-.9" />
    <path d="M5.5 11a6.5 6.5 0 0 0 9.8 5.6M18.5 11a6.4 6.4 0 0 1-.5 2.5M12 17.5V21M4 3l16 18" />
  </Icon>
)

export const VideoOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M15.5 12.6V15a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1.2M11 6h1.5a3 3 0 0 1 3 3v.6" />
    <path d="m15.5 10.5 5.5-3v9l-4-2.2M3.5 3.5l17 17" />
  </Icon>
)

export const ScreenShareIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <rect x="2.5" y="4" width="19" height="13" rx="2.5" />
    <path d="M8.5 21h7M12 8v5M9.6 10.4 12 8l2.4 2.4" />
  </Icon>
)

export const ChatIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M20.5 12a8 8 0 0 1-8 8H4.8l1.6-3.2A8 8 0 1 1 20.5 12z" />
  </Icon>
)

export const ArrowLeftIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M19 12H5M11 6l-6 6 6 6" />
  </Icon>
)

export const PhoneOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M2.5 9.5c5.5-4 13.5-4 19 0v3.2c0 .8-.7 1.4-1.5 1.3l-3-.4a1.4 1.4 0 0 1-1.2-1.3v-1.6a12 12 0 0 0-7.6 0v1.6c0 .7-.5 1.2-1.2 1.3l-3 .4c-.8.1-1.5-.5-1.5-1.3z" />
  </Icon>
)

export const SmileIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M9 10h.01M15 10h.01M8.8 14.2a4 4 0 0 0 6.4 0" />
  </Icon>
)

export const HandIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M8.5 11V4.8a1.4 1.4 0 0 1 2.8 0V10m0-.4V3.9a1.4 1.4 0 0 1 2.8 0V10m0-.4V5.4a1.4 1.4 0 1 1 2.8 0V14a6.5 6.5 0 0 1-6.5 6.5h-.6a6 6 0 0 1-4.6-2.2L2.9 15a1.5 1.5 0 0 1 2.3-1.9l1.5 1.6" />
  </Icon>
)

export const MoreIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="5.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="18.5" cy="12" r="1.1" fill="currentColor" stroke="none" />
  </Icon>
)

export const UserPlusIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <circle cx="10" cy="8" r="3.4" />
    <path d="M3.5 19.5a6.5 6.5 0 0 1 13 0M18.5 7.5v5M21 10h-5" />
  </Icon>
)

export const ShieldIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M12 2.8 4.5 5.9v5.4c0 4.2 3 8.1 7.5 9.4 4.5-1.3 7.5-5.2 7.5-9.4V5.9z" />
    <path d="M9.5 12.2l1.8 1.8 3.4-3.6" />
  </Icon>
)

export const SendIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M20.5 3.5 10 14M20.5 3.5l-6.6 17-3.9-6.5L3.5 10z" />
  </Icon>
)

export const EyeIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6z" />
    <circle cx="12" cy="12" r="3" />
  </Icon>
)

export const EyeOffIcon = (p: SVGProps<SVGSVGElement>) => (
  <Icon {...p}>
    <path d="M9.9 5.2A9.9 9.9 0 0 1 12 5c6.4 0 10 6 10 6a17.6 17.6 0 0 1-3.3 3.9M6.5 6.9C3.6 8.6 2 11 2 11s3.6 6 10 6a9.9 9.9 0 0 0 4-.8" />
    <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2M4 4l16 16" />
  </Icon>
)

