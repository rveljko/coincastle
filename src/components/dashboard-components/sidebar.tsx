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
      className={`border-r-section-outline top-0 left-0 h-screen border-r bg-(image:--section-background) p-4 backdrop-blur-lg ${
        isOpened
          ? 'fixed min-w-(--sidebar-opened-width) md:sticky'
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
          <Link to="/dashboard">
            <Logo withText={isOpened} />
          </Link>
          <button
            className="cursor-pointer text-white"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? (
              <LayoutSidebarLeftCollapseIcon />
            ) : (
              <LayoutSidebarLeftExpandIcon />
            )}
          </button>
        </header>
        <nav className="flex h-full flex-col justify-between gap-2 overflow-y-auto">
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
