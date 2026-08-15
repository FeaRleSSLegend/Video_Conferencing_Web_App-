export type Participant = {
  id: string
  name: string
  isSelf?: boolean
  micOn: boolean
  cameraOn: boolean
  /** Drives the speaking ring on the tile. */
  speaking?: boolean
  isHost?: boolean
}

export type ChatMessage = {
  id: string
  author: string
  body: string
  sentAt: string
  fromSelf?: boolean
}

export type PendingGuest = {
  id: string
  name: string
  waitingFor: string
}

export const meeting = {
  title: 'Weekly design review',
  room: "Divine's meeting room",
}

export type Permission = {
  id: string
  label: string
  description: string
  enabled: boolean
}

export const defaultPermissions: Permission[] = [
  {
    id: 'share',
    label: 'Share their screen',
    description: 'Anyone in the call can present to everyone else.',
    enabled: true,
  },
  {
    id: 'react',
    label: 'Send reactions',
    description: 'Emoji reactions appear over the tiles for a few seconds.',
    enabled: true,
  },
  {
    id: 'mic',
    label: 'Turn on their microphone',
    description: 'Turning this off mutes everyone until you allow it again.',
    enabled: true,
  },
  {
    id: 'camera',
    label: 'Turn on their video',
    description: 'People already on camera stay on until they turn it off.',
    enabled: false,
  },
]

export const reactions = ['👍', '👏', '🎉', '😂', '❤️', '🤔']

export const self: Participant = {
  id: 'p0',
  name: 'Divine Okonkwo',
  isSelf: true,
  micOn: true,
  cameraOn: true,
  isHost: true,
}

export const participants: Participant[] = [
  { id: 'p1', name: 'Amara Chukwu', micOn: true, cameraOn: true, speaking: true },
  { id: 'p2', name: 'Marcus Bello', micOn: false, cameraOn: true },
  { id: 'p3', name: 'Tobi Adeyemi', micOn: true, cameraOn: false },
  { id: 'p4', name: 'Priya Raghunathan', micOn: true, cameraOn: true },
  { id: 'p5', name: 'Samuel Nwosu', micOn: false, cameraOn: false },
]

export const chatMessages: ChatMessage[] = [
  {
    id: 'm1',
    author: 'Amara Chukwu',
    body: 'Are we starting with the onboarding flow or the empty states?',
    sentAt: '10:02',
  },
  {
    id: 'm2',
    author: 'Divine Okonkwo',
    body: 'Onboarding first — Priya has to drop at half past.',
    sentAt: '10:03',
    fromSelf: true,
  },
  {
    id: 'm3',
    author: 'Marcus Bello',
    body: 'Posting the latest build link here so nobody has to dig for it.',
    sentAt: '10:04',
  },
  {
    id: 'm4',
    author: 'Priya Raghunathan',
    body: 'Thanks. I have notes from the five sessions we ran on Tuesday.',
    sentAt: '10:06',
  },
]

export const pendingGuests: PendingGuest[] = [
  { id: 'g1', name: 'Lena Fischer', waitingFor: '1 min' },
  { id: 'g2', name: 'Hannah Whitfield', waitingFor: '2 min' },
  { id: 'g3', name: 'Rui Tanaka', waitingFor: '4 min' },
]

export function initialsFor(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase()
}
