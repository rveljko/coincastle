import NavigationLinksList from '@components/dashboard-components/navigation-links-list'
import SettingsContainer from '@components/dashboard-components/settings-container'
import SettingsHeader from '@components/dashboard-components/settings-header'
import { settingsNavigationLinks } from '@data/navigation-links'
import { Outlet } from 'react-router-dom'

export default function SettingsLayout() {
  return (
    <SettingsContainer className="px-0 py-4">
      <SettingsHeader className="mb-4" />
      <div className="flex flex-col gap-2 md:flex-row">
        <nav className="w-full max-w-(--navigation-links-list-width)">
          <NavigationLinksList navigationLinks={settingsNavigationLinks} />
        </nav>
        <Outlet />
      </div>
    </SettingsContainer>
  )
}
