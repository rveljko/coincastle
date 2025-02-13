import Sidebar from '@components/dashboard-components/sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
