import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
