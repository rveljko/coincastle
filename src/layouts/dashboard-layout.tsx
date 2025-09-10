import Container from '@components/container'
import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function DashboardLayout() {
  const { key } = useLocation()

  return (
    <div
      id="dashboard-layout"
      className="relative flex h-screen overflow-hidden"
    >
      <Sidebar />
      <main className="w-full overflow-y-auto py-4">
        <Container className="flex flex-col gap-4">
          <Outlet key={key} />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
