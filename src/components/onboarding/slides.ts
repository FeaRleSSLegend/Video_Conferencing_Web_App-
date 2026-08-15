export type Slide = {
  /** Set in huge uppercase type — keep it short enough to break well. */
  headline: string
  body: string
  /** Slide 2 carries a real privacy statement, so it is set at full contrast. */
  emphasis?: boolean
}

export const slides: Slide[] = [
  {
    headline: 'Meet without the setup',
    body: 'Aperture is a video meeting app. Share a link and the room is already open — no dial-in numbers, no downloads.',
  },
  {
    headline: "We'll ask for camera and mic",
    body: 'Only when you join a call, and only for as long as you are in it. We do not record or store your video or audio.',
    emphasis: true,
  },
  {
    headline: 'Quiet by default',
    body: 'No upsells, no countdown timers, no assistant listening in. Just the call and the people on it.',
  },
]
