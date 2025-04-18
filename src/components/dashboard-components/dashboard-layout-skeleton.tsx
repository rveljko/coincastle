import Container from '@components/container'
import SidebarSkeleton from '@components/dashboard-components/sidebar-skeleton'
import { Outlet } from 'react-router-dom'

export default function DashboardLayoutSkeleton() {
  return (
    <div className="flex flex-row">
      <SidebarSkeleton />
      <main className="w-full py-4">
        <Container className="flex h-full flex-col gap-4">
          <Outlet />
        </Container>
      </main>
    </div>
  )
}
