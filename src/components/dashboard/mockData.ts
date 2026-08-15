import type { Presence } from '../shared/Avatar'

export type Contact = {
  id: string
  name: string
  role: string
  presence: Presence
  /** Shown for anyone not currently available. */
  lastSeen?: string
}

export type Meeting = {
  id: string
  title: string
  /** Minutes before now that the meeting started. */
  startedMinutesAgo: number
  /** Elapsed so far for a live meeting, total length for a finished one. */
  durationMinutes: number
  status: 'live' | 'ended'
  host: string
  participants: string[]
  /** Anyone beyond the named participants. */
  extraParticipants?: number
  recorded?: boolean
}

export type ScheduledMeeting = {
  id: string
  title: string
  startsInMinutes: number
  attendees: string[]
  extraAttendees?: number
}

export const currentUser = {
  name: 'Divine Okonkwo',
  handle: 'divine.okonkwo',
  role: 'Product Design Lead',
  presence: 'free' as Presence,
  personalCode: 'dvn-qkra-8f2',
}

export const contacts: Contact[] = [
  { id: 'c1', name: 'Amara Chukwu', role: 'Engineering Manager', presence: 'inCall' },
  { id: 'c2', name: 'Tobi Adeyemi', role: 'Frontend Engineer', presence: 'free' },
  { id: 'c3', name: 'Priya Raghunathan', role: 'Head of Research', presence: 'free' },
  { id: 'c4', name: 'Marcus Bello', role: 'Data Engineer', presence: 'inCall' },
  { id: 'c5', name: 'Lena Fischer', role: 'Brand Designer', presence: 'away', lastSeen: 'Away · 20m' },
  { id: 'c6', name: 'Samuel Nwosu', role: 'Backend Engineer', presence: 'free' },
  { id: 'c7', name: 'Hannah Whitfield', role: 'Customer Success', presence: 'away', lastSeen: 'Away · 1h' },
  { id: 'c8', name: 'Rui Tanaka', role: 'iOS Engineer', presence: 'offline', lastSeen: 'Offline · 5h' },
  { id: 'c9', name: 'Zainab Ibrahim', role: 'Product Manager', presence: 'offline', lastSeen: 'Offline · 9h' },
  { id: 'c10', name: 'Diego Ramírez', role: 'QA Lead', presence: 'offline', lastSeen: 'Offline · 2d' },
]

export const recentMeetings: Meeting[] = [
  {
    id: 'm1',
    title: 'Design review — onboarding flow',
    startedMinutesAgo: 22,
    durationMinutes: 22,
    status: 'live',
    host: 'Amara Chukwu',
    participants: ['Amara Chukwu', 'Marcus Bello', 'Tobi Adeyemi'],
    extraParticipants: 2,
  },
  {
    id: 'm2',
    title: 'Weekly product sync',
    startedMinutesAgo: 190,
    durationMinutes: 48,
    status: 'ended',
    host: 'Zainab Ibrahim',
    participants: ['Zainab Ibrahim', 'Priya Raghunathan', 'Lena Fischer'],
    extraParticipants: 5,
    recorded: true,
  },
  {
    id: 'm3',
    title: '1:1 with Priya',
    startedMinutesAgo: 330,
    durationMinutes: 27,
    status: 'ended',
    host: 'Divine Okonkwo',
    participants: ['Priya Raghunathan'],
  },
  {
    id: 'm4',
    title: 'Q3 roadmap walkthrough',
    startedMinutesAgo: 1500,
    durationMinutes: 71,
    status: 'ended',
    host: 'Zainab Ibrahim',
    participants: ['Zainab Ibrahim', 'Amara Chukwu', 'Samuel Nwosu'],
    extraParticipants: 8,
    recorded: true,
  },
  {
    id: 'm5',
    title: 'Interview — senior frontend',
    startedMinutesAgo: 1620,
    durationMinutes: 45,
    status: 'ended',
    host: 'Divine Okonkwo',
    participants: ['Tobi Adeyemi', 'Rui Tanaka'],
  },
  {
    id: 'm6',
    title: 'Incident retro — checkout latency',
    startedMinutesAgo: 2940,
    durationMinutes: 63,
    status: 'ended',
    host: 'Marcus Bello',
    participants: ['Marcus Bello', 'Samuel Nwosu', 'Diego Ramírez'],
    extraParticipants: 3,
    recorded: true,
  },
]

export const upcomingMeetings: ScheduledMeeting[] = [
  {
    id: 's1',
    title: 'Usability testing — round 2',
    startsInMinutes: 35,
    attendees: ['Priya Raghunathan', 'Lena Fischer', 'Hannah Whitfield'],
    extraAttendees: 2,
  },
  {
    id: 's2',
    title: 'Sprint planning',
    startsInMinutes: 215,
    attendees: ['Amara Chukwu', 'Samuel Nwosu'],
    extraAttendees: 4,
  },
]

/** Meeting codes read like the ones people dictate over the phone. */
export function newMeetingCode() {
  const letters = 'abcdefghijkmnpqrstuvwxyz'
  const pick = (n: number) =>
    Array.from({ length: n }, () => letters[Math.floor(Math.random() * letters.length)]).join('')
  return `${pick(3)}-${pick(4)}-${pick(3)}`
}

/* --- formatting ---------------------------------------------------------- */

/** "48 min" / "1h 11m" — durations read as durations, never as clock times. */
export function formatDuration(minutes: number) {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h ${m}m`
}

/** Start time expressed the way a person would say it out loud. */
export function formatStartedAt(minutesAgo: number) {
  const started = new Date(Date.now() - minutesAgo * 60_000)
  const time = started.toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })

  const startOfToday = new Date()
  startOfToday.setHours(0, 0, 0, 0)
  const daysBack = Math.floor((startOfToday.getTime() - started.getTime()) / 86_400_000) + 1

  if (started >= startOfToday) return `Today, ${time}`
  if (daysBack === 1) return `Yesterday, ${time}`
  if (daysBack < 7) {
    return `${started.toLocaleDateString(undefined, { weekday: 'long' })}, ${time}`
  }
  return `${started.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}, ${time}`
}

/** Clock time a scheduled meeting begins, e.g. "10:40 AM". */
export function formatStartsAt(minutesAhead: number) {
  return new Date(Date.now() + minutesAhead * 60_000).toLocaleTimeString(undefined, {
    hour: 'numeric',
    minute: '2-digit',
  })
}

export function greetingFor(date = new Date()) {
  const h = date.getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export function formatToday(date = new Date()) {
  return date.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}
