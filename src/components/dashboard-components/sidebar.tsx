import Logo from '@components/logo'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import LayoutSidebarLeftCollapseIcon from '@icons/layout-sidebar-left-collapse-icon'
import LayoutSidebarLeftExpandIcon from '@icons/layout-sidebar-left-expand-icon'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import NavigationLinksList from './navigation-links-list'

export default function Sidebar() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const [isOpened, setIsOpened] = useState(isBigScreen)

  useEffect(() => {
    setIsOpened(isBigScreen)
  }, [isBigScreen])

  return (
    <aside
      className={`bg-(image:--section-background) top-0 left-0 h-screen p-4 border-r border-r-section-outline backdrop-blur-lg ${
        isOpened
          ? 'fixed md:sticky min-w-(--sidebar-opened-width)'
          : 'sticky w-fit'
      }`}
    >
      <div
        className={`flex flex-col gap-2 h-full ${!isOpened && 'items-center'}`}
      >
        <header
          className={`flex justify-between gap-2 items-center ${
            isOpened ? 'flex-row' : 'flex-col-reverse'
          }`}
        >
          <Link to="/dashboard">
            <Logo withText={isOpened} />
          </Link>
          <button
            className="text-white cursor-pointer"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? (
              <LayoutSidebarLeftCollapseIcon />
            ) : (
              <LayoutSidebarLeftExpandIcon />
            )}
          </button>
        </header>
        <nav className="flex flex-col gap-2 h-full justify-between overflow-y-auto">
          <NavigationLinksList
            navigationLinks={primaryNavigationLinks}
            showNavigationLinkText={isOpened}
          />
          <NavigationLinksList
            navigationLinks={secondaryNavigationLinks}
            showNavigationLinkText={isOpened}
          />
        </nav>
      </div>
    </aside>
  )
}
