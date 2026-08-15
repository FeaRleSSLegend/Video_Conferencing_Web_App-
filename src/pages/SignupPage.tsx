import { Link } from 'react-router'
import AuthCard from '../components/auth/AuthCard'
import SignupForm from '../components/auth/SignupForm'

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Set up a room of your own in under a minute."
      switchLink={
        <>
          Already have an account?{' '}
          <Link
            to="/login"
            className="font-medium text-accent transition-colors duration-150 ease-quiet hover:text-accent-deep"
          >
            Sign in
          </Link>
        </>
      }
    >
      <SignupForm />
    </AuthCard>
  )
}
