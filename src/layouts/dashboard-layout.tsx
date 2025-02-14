import Container from '@components/container'
import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full py-4">
        <Container>
          <Outlet />
        </Container>
      </main>
    </div>
  )
}
