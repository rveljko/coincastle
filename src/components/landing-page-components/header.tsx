import Logo from '@components/logo'
import Button from '@components/ui/button'
import { landingPageNavigationLinks } from '@data/navigation-links'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

export default function Header() {
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const [isHamburgerMenuOpened, setIsHamburgerMenuOpened] = useState(false)

  useEffect(() => {
    const html = document.documentElement

    html.classList.toggle(
      'overflow-hidden',
      isHamburgerMenuOpened && !isBigScreen
    )

    return () => html.classList.remove('overflow-hidden')
  }, [isHamburgerMenuOpened, isBigScreen])

  useEffect(() => {
    if (isBigScreen) setIsHamburgerMenuOpened(false)
  }, [isBigScreen])

  return (
    <header
      className={`bg-background-starting-color/40 border-section-outline pointer-events-auto overflow-hidden rounded-2xl border p-4 backdrop-blur-lg md:h-auto ${isHamburgerMenuOpened ? 'h-full' : 'h-auto'}`}
    >
      <div className="flex h-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() =>
              !isBigScreen &&
              isHamburgerMenuOpened &&
              setIsHamburgerMenuOpened((prev) => !prev)
            }
          >
            <Logo withText />
          </Link>
          <button
            className="text-clickable relative size-7.5 cursor-pointer md:hidden"
            onClick={() => setIsHamburgerMenuOpened((prev) => !prev)}
          >
            <span className="sr-only">
              {isHamburgerMenuOpened ? 'Close Menu' : 'Open Menu'}
            </span>
            <span
              className={`bg-clickable absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full transition duration-200 ease-in-out ${isHamburgerMenuOpened ? '-translate-1/2 rotate-45' : '-translate-y-[calc(50%_+_var(--spacing))]'}`}
            ></span>
            <span
              className={`bg-clickable absolute top-1/2 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full transition duration-200 ease-in-out ${isHamburgerMenuOpened ? '-translate-1/2 -rotate-45' : '-translate-y-[calc(50%_-_var(--spacing))]'}`}
            ></span>
          </button>
        </div>
        <div
          className={`h-full flex-col justify-between gap-4 overflow-y-auto md:flex md:flex-row md:items-center md:gap-1 ${isHamburgerMenuOpened ? 'flex' : 'hidden'}`}
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
                    className="text-heading-3-font-size leading-heading-3-line-height md:text-paragraph-font-size md:leading-paragraph-line-height block w-full cursor-pointer p-2 font-medium md:px-1 md:py-0.5 md:font-normal"
                    onClick={() =>
                      !isBigScreen &&
                      isHamburgerMenuOpened &&
                      setIsHamburgerMenuOpened((prev) => !prev)
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Button
              href="/dashboard"
              variant="secondary"
              size={isBigScreen ? 'small' : 'large'}
              className="w-full md:hidden lg:flex lg:w-max"
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
