import { useEffect, useRef } from 'react'

/**
 * The auth pages' orange glow, taken full-bleed. It drifts against the pointer
 * — cursor right, glow left — so the light reads as a layer behind the type.
 *
 * Turned off entirely without a fine pointer (touch) or under reduced motion.
 */
export default function ParallaxGlow() {
  const layer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    let frame = 0

    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * -44
        const y = (event.clientY / window.innerHeight - 0.5) * -30
        if (layer.current) {
          layer.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
        }
      })
    }

    window.addEventListener('pointermove', onMove)
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        ref={layer}
        className="absolute inset-0 transition-transform duration-300 ease-quiet will-change-transform"
      >
        <div className="absolute -bottom-1/4 left-1/2 h-[85%] w-[140%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-deep),transparent)] opacity-50 blur-3xl" />
        <div className="absolute -bottom-[10%] left-1/2 h-[55%] w-[85%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent),transparent)] opacity-40 blur-3xl" />
      </div>
    </div>
  )
}
