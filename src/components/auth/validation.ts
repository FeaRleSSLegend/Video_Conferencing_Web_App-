export const MIN_PASSWORD_LENGTH = 8

/** Deliberately permissive — enough to catch typos, not to police valid addresses. */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validateName(value: string) {
  if (!value.trim()) return 'Enter your name.'
  return undefined
}

export function validateEmail(value: string) {
  if (!value.trim()) return 'Enter your email address.'
  if (!EMAIL_PATTERN.test(value.trim())) return 'That does not look like an email address.'
  return undefined
}

export function validatePassword(value: string) {
  if (!value) return 'Enter your password.'
  if (value.length < MIN_PASSWORD_LENGTH) {
    return `Use at least ${MIN_PASSWORD_LENGTH} characters.`
  }
  return undefined
}
