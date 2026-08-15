import Button from '../shared/Button'

type SocialButtonsProps = {
  /** Divider copy — "Or sign in with" / "Or sign up with". */
  dividerLabel: string
}

/** Google's brand mark, inlined — there is no icon package in this project. */
function GoogleMark() {
  return (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="h-[1.15em] w-[1.15em]">
      <path
        fill="#4285F4"
        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.8595-3.0477.8595-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 16.0195 5.4818 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"
      />
      <path
        fill="#EA4335"
        d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 1.9805.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"
      />
    </svg>
  )
}

function AppleMark() {
  return (
    <svg viewBox="0 0 20 24" aria-hidden="true" className="h-[1.3em] w-[1.3em] fill-ink">
      <path d="M13.62 3.9c.68-.83 1.14-1.98 1.01-3.13-.98.04-2.17.65-2.87 1.48-.63.73-1.18 1.9-1.03 3.02 1.09.09 2.21-.55 2.89-1.37zM15.9 12.5c-.03-2.7 2.2-4 2.3-4.06-1.25-1.83-3.2-2.08-3.9-2.11-1.66-.17-3.24.98-4.08.98-.84 0-2.14-.96-3.52-.93-1.81.03-3.48 1.05-4.41 2.67-1.88 3.26-.48 8.09 1.35 10.74.9 1.3 1.97 2.75 3.38 2.7 1.36-.06 1.87-.88 3.51-.88 1.64 0 2.1.88 3.53.85 1.46-.03 2.38-1.32 3.27-2.63 1.03-1.5 1.46-2.96 1.48-3.04-.03-.01-2.85-1.09-2.88-4.29z" />
    </svg>
  )
}

/**
 * Visual only — there is no OAuth backend behind either of these yet.
 * Shared by both auth pages so the divider copy is the only difference.
 */
export default function SocialButtons({ dividerLabel }: SocialButtonsProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Button type="button" size="lg" icon={<GoogleMark />}>
          Continue with Google
        </Button>
        <Button type="button" size="lg" icon={<AppleMark />}>
          Continue with Apple
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-line" />
        <span className="shrink-0 text-xs text-faint">{dividerLabel}</span>
        <span className="h-px flex-1 bg-line" />
      </div>
    </div>
  )
}
