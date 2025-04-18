import Container from '@components/container'
import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full py-4">
        <Container className="flex h-full flex-col gap-4">
          <Outlet />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
