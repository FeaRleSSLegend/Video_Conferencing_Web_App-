import { Link } from 'react-router'
import AuthCard from '../components/auth/AuthCard'
import LoginForm from '../components/auth/LoginForm'

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to start or join a meeting."
      switchLink={
        <>
          Don't have an account?{' '}
          <Link
            to="/signup"
            className="font-medium text-accent transition-colors duration-150 ease-quiet hover:text-accent-deep"
          >
            Sign up
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  )
}
