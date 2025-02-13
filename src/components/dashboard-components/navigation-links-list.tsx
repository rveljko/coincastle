import { NavigationLink as NavigationLinkType } from '@utils/types'
import NavigationLink from './navigation-link'

type NavigationLinksListProps = {
  navigationLinks: NavigationLinkType[]
  showNavigationLinkText?: boolean
}

export default function NavigationLinksList({
  navigationLinks,
  showNavigationLinkText = true,
}: NavigationLinksListProps) {
  return (
    <ul className="space-y-2">
      {navigationLinks.map(({ id, path, icon: Icon, name }) => (
        <li key={id}>
          <NavigationLink
            to={path}
            name={name}
            icon={Icon && <Icon />}
            showText={showNavigationLinkText}
          />
        </li>
      ))}
    </ul>
  )
}
