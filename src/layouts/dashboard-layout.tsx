import Container from '@components/container'
import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function DashboardLayout() {
  const { key } = useLocation()

  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="w-full py-4">
        <Container className="flex h-full flex-col gap-4">
          <Outlet key={key} />
        </Container>
      </main>
      <ToastContainer />
    </div>
  )
}
