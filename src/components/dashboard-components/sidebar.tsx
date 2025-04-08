import NavigationLinksList from '@components/dashboard-components/navigation-links-list'
import SearchModalButton from '@components/dashboard-components/search-modal-button'
import Logo from '@components/logo'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import LayoutSidebarLeftCollapseIcon from '@icons/layout-sidebar-left-collapse-icon'
import LayoutSidebarLeftExpandIcon from '@icons/layout-sidebar-left-expand-icon'
import SearchIcon from '@icons/search-icon'
import UserCircleIcon from '@icons/user-circle-icon'
import { useUserInformation } from '@services/contexts/user-information-context'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const [isOpened, setIsOpened] = useState(isBigScreen)
  const {
    userInformation: { firstName, lastName },
  } = useUserInformation()

  useEffect(() => {
    setIsOpened(isBigScreen)
  }, [isBigScreen])

  return (
    <aside
      className={`border-r-section-outline top-0 left-0 z-999 h-screen border-r bg-(image:--section-background) p-4 backdrop-blur-lg ${
        isOpened
          ? 'fixed w-full min-w-(--sidebar-opened-width) md:sticky md:w-fit'
          : 'sticky w-fit'
      }`}
    >
      <div
        className={`flex h-full flex-col gap-2 ${!isOpened && 'items-center'}`}
      >
        <header
          className={`flex items-center justify-between gap-2 ${
            isOpened ? 'flex-row' : 'flex-col-reverse'
          }`}
        >
          <Link
            to="/dashboard"
            onClick={() =>
              !isBigScreen && isOpened && setIsOpened((prev) => !prev)
            }
          >
            <Logo withText={isOpened} />
          </Link>
          <button
            className="text-clickable cursor-pointer"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? (
              <LayoutSidebarLeftCollapseIcon />
            ) : (
              <LayoutSidebarLeftExpandIcon />
            )}
          </button>
        </header>
        <SearchModalButton
          variant="secondary"
          size="small"
          leftIcon={<SearchIcon />}
          className={`w-full justify-start ${isOpened ? 'gap-1' : 'gap-0 p-1'}`}
        >
          {isOpened && 'Search'}
        </SearchModalButton>
        <nav className="flex h-full flex-col justify-between gap-2 overflow-y-auto">
          <NavigationLinksList
            navigationLinks={primaryNavigationLinks}
            showNavigationLinkText={isOpened}
            onClick={() =>
              !isBigScreen && isOpened && setIsOpened((prev) => !prev)
            }
          />
          <div className="space-y-2">
            <NavigationLinksList
              navigationLinks={secondaryNavigationLinks}
              showNavigationLinkText={isOpened}
              onClick={() =>
                !isBigScreen && isOpened && setIsOpened((prev) => !prev)
              }
            />
            <div className="items-cener flex gap-1 p-0.5">
              <span>
                <UserCircleIcon />
              </span>
              {isOpened && `${firstName} ${lastName}`}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
