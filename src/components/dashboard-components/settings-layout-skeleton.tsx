import NavigationLinksListSkeleton from '@components/dashboard-components/navigation-links-list-skeleton'
import SettingsContainer from '@components/dashboard-components/settings-container'
import SettingsHeaderSkeleton from '@components/dashboard-components/settings-header-skeleton'
import { settingsNavigationLinks } from '@data/navigation-links'
import { Outlet } from 'react-router-dom'

export default function SettingsLayoutSkeleton() {
  return (
    <SettingsContainer className="px-0 py-4">
      <SettingsHeaderSkeleton className="mb-4" />
      <div className="flex flex-col gap-2 md:flex-row">
        <nav className="w-full max-w-(--navigation-links-list-width)">
          <NavigationLinksListSkeleton
            numberOfNavigationLinks={settingsNavigationLinks.length}
          />
        </nav>
        <Outlet />
      </div>
    </SettingsContainer>
  )
}
