import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useNavigate } from 'react-router'
import Button from '../shared/Button'
import Input from '../shared/Input'
import PasswordField from './PasswordField'
import SocialButtons from './SocialButtons'
import { MIN_PASSWORD_LENGTH, validateEmail, validateName, validatePassword } from './validation'

type Fields = { name: string; email: string; password: string }
type Errors = Partial<Record<keyof Fields, string>>

function validate(values: Fields): Errors {
  return {
    name: validateName(values.name),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  }
}

export default function SignupForm() {
  const navigate = useNavigate()
  const [values, setValues] = useState<Fields>({ name: '', email: '', password: '' })
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
    if (found.name || found.email || found.password) return
    // No backend yet — the success path goes straight to the dashboard.
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <SocialButtons dividerLabel="Or sign up with" />

      <form onSubmit={submit} noValidate className="space-y-5">
        <Input
          name="name"
          label="Name"
          placeholder="Divine Okonkwo"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          error={errors.name}
        />

        <Input
          name="email"
          type="email"
          label="Work email"
          placeholder="you@company.com"
          autoComplete="email"
          value={values.email}
          onChange={update('email')}
          error={errors.email}
        />

        <div>
          <PasswordField
            name="password"
            label="Password"
            autoComplete="new-password"
            value={values.password}
            onChange={update('password')}
            error={errors.password}
          />
          {!errors.password && (
            <p className="mt-1.5 text-xs text-muted">
              At least {MIN_PASSWORD_LENGTH} characters.
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          Create account
        </Button>

        <p className="text-center text-xs text-muted">
          By creating an account you agree to the terms of service and privacy policy.
        </p>
      </form>
    </div>
  )
}
