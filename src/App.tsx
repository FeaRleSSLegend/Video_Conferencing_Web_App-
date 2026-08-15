import { Routes, Route } from 'react-router'

import OnboardingPage from './pages/OnboardingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import DashboardPage from './pages/DashboardPage'
import MeetingPage from './pages/MeetingPage'
import AfterMeetingPage from './pages/AfterMeetingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/meeting/:id" element={<MeetingPage />} />
      <Route path="/meeting/:id/end" element={<AfterMeetingPage />} />
    </Routes>
  )
}

export default App