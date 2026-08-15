import { useState } from 'react'
import ContactList from '../components/dashboard/ContactList'
import JoinMeetingForm from '../components/dashboard/JoinMeetingForm'
import PersonalRoomCard from '../components/dashboard/PersonalRoomCard'
import QuickActions from '../components/dashboard/QuickActions'
import RecentMeetings from '../components/dashboard/RecentMeetings'
import SideBar from '../components/dashboard/SideBar'
import TopBar from '../components/dashboard/TopBar'
import UpcomingMeetings from '../components/dashboard/UpcomingMeetings'
import { currentUser, formatToday, greetingFor } from '../components/dashboard/mockData'

export default function DashboardPage() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-[100dvh] bg-canvas">
      <TopBar onOpenNav={() => setNavOpen(true)} />
      <SideBar open={navOpen} onClose={() => setNavOpen(false)} />

      <main className="pt-16 lg:pl-60">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 sm:pt-10 lg:px-12">
          <header className="mb-8 sm:mb-10">
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-[2.125rem]">
              {greetingFor()}, {currentUser.name.split(' ')[0]}
            </h1>
            <p className="mt-1.5 text-sm text-muted">{formatToday()}</p>
          </header>

          {/* The top bar hides its join field on small screens, so it lands here instead. */}
          <div className="mb-6 rounded-card border border-line bg-card p-5 shadow-card md:hidden">
            <JoinMeetingForm layout="card" />
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-8">
            <aside className="space-y-6 lg:order-2">
              <QuickActions />
              <PersonalRoomCard />
              <UpcomingMeetings />
            </aside>

            <div className="space-y-6 lg:order-1">
              <RecentMeetings />
              <ContactList />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
