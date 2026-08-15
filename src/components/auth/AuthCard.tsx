import type { ReactNode } from 'react'
import { Link } from 'react-router'
import Logo from '../shared/Logo'
import AuthSlideshow from './AuthSlideshow'

type AuthCardProps = {
  title: string
  subtitle: string
  /** Top-right of the form panel — the link across to the other auth page. */
  switchLink: ReactNode
  children: ReactNode
}

/** Soft orange glow rising off the floor of the panel. No image assets. */
function PanelGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div className="absolute -bottom-1/4 left-1/2 h-[80%] w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-deep),transparent)] opacity-55 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-[45%] w-[75%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent),transparent)] opacity-45 blur-3xl" />
    </div>
  )
}

/**
 * Shared shell for both auth screens: page-level logo top-left, then a floating
 * card split into the dark slideshow panel (always left) and the form panel.
 */
export default function AuthCard({ title, subtitle, switchLink, children }: AuthCardProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-greige px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
      <Link
        to="/"
        aria-label="Aperture home"
        className="w-fit rounded-tile transition-opacity duration-150 ease-quiet hover:opacity-80"
      >
        <Logo />
      </Link>

      <div className="flex flex-1 items-center justify-center py-6 sm:py-8">
        <div className="w-full max-w-[72rem] overflow-hidden rounded-shell border border-line bg-card shadow-card lg:grid lg:min-h-[38rem] lg:grid-cols-2">
          <div className="relative isolate flex h-36 flex-col justify-end overflow-hidden bg-shell p-6 sm:h-44 lg:h-auto lg:p-10">
            <PanelGlow />
            <div className="hidden lg:block">
              <AuthSlideshow />
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-10 lg:p-12">
            <div className="flex flex-1 flex-col justify-center py-8 sm:py-10">
              <h1 className="text-center font-display text-2xl font-semibold text-ink sm:text-[1.75rem]">
                {title}
              </h1>
              <p className="mx-auto mt-2 max-w-sm text-center text-sm text-muted">
                {subtitle}
              </p>

              <div className="mt-8">{children}</div>

              <p className="mt-6 text-center text-sm text-muted">{switchLink}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-faint">
              <p>© {new Date().getFullYear()} Aperture</p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="transition-colors duration-150 ease-quiet hover:text-ink"
                >
                  Privacy Policy
                </button>
                <button
                  type="button"
                  className="transition-colors duration-150 ease-quiet hover:text-ink"
                >
                  Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
