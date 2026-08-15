import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router'
import Button from '../shared/Button'
import Input from '../shared/Input'
import PasswordField from './PasswordField'
import SocialButtons from './SocialButtons'
import { validateEmail, validatePassword } from './validation'

type Fields = { email: string; password: string }
type Errors = Partial<Record<keyof Fields, string>>

function validate(values: Fields): Errors {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  }
}

export default function LoginForm() {
  const navigate = useNavigate()
  const [values, setValues] = useState<Fields>({ email: '', password: '' })
  const [errors, setErrors] = useState<Errors>({})
  /** Errors stay hidden until the first submit, then update as you type. */
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof Fields) => (event: ChangeEvent<HTMLInputElement>) => {
    const next = { ...values, [field]: event.target.value }
    setValues(next)
    if (submitted) setErrors(validate(next))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
    const found = validate(values)
    setErrors(found)
    if (found.email || found.password) return
    // No backend yet — the success path goes straight to the dashboard.
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <SocialButtons dividerLabel="Or sign in with" />

      <form onSubmit={submit} noValidate className="space-y-5">
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />

        <PasswordField
          name="password"
          label="Password"
          autoComplete="current-password"
          value={values.password}
          onChange={update('password')}
          error={errors.password}
        />

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Sign in
        </Button>

        <p className="text-center">
          <button
            type="button"
            className="text-sm text-accent transition-colors duration-150 ease-quiet hover:text-accent-deep"
          >
            Forgot password?
          </button>
        </p>
      </form>
    </div>
  )
}
