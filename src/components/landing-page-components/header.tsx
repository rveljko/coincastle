import Logo from '@components/logo'
import Button from '@components/ui/button'
import { landingPageNavigationLinks } from '@data/navigation-links'
import MenuIcon from '@icons/menu-icon'
import XIcon from '@icons/x-icon'
import { useLayoutEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export default function Header() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false)

  useLayoutEffect(() => {
    setIsHamburgerMenuOpened(isBigScreen)
  }, [isBigScreen])

  return (
    <header
      className={`bg-background-starting-color/40 border-section-outline overflow-hidden rounded-2xl border p-4 backdrop-blur-lg md:h-auto ${isHamburgerMenuOpened ? 'h-full' : 'h-auto'}`}
    >
      <div className="flex h-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center justify-between">
          <Link to="/">
            <Logo withText />
          </Link>
          <button
            className="text-clickable flex size-7.5 cursor-pointer items-center justify-center md:hidden"
            onClick={() => setIsHamburgerMenuOpened((prev) => !prev)}
          >
            <span className="sr-only">
              {isHamburgerMenuOpened ? 'Close Menu' : 'Open Menu'}
            </span>
            {isHamburgerMenuOpened ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={`h-full flex-col justify-between gap-4 overflow-y-auto md:flex-row md:items-center md:gap-1 ${isHamburgerMenuOpened ? 'flex' : 'hidden'}`}
        >
          <nav>
            <ul className="flex flex-col md:flex-row">
              {landingPageNavigationLinks.map(({ id, path, name }) => (
                <li
                  key={id}
                  className="border-section-outline border-b md:border-0"
                >
                  <Link
                    to={path}
                    className="text-heading-3-font-size leading-heading-3-line-height md:text-paragraph-font-size md:leading-paragraph-line-height block w-full cursor-pointer p-2 font-medium md:p-0.5 md:font-normal"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 sm:flex-row md:gap-1">
            <Button
              href="/dashboard"
              variant="secondary"
              size={isBigScreen ? 'small' : 'large'}
              className="w-full md:w-max"
            >
              Learn More
            </Button>
            <Button
              href="/dashboard"
              variant="primary"
              size={isBigScreen ? 'small' : 'large'}
              className="w-full md:w-max"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
