import NavigationLink from '@components/dashboard-components/navigation-link'
import { NavigationLink as NavigationLinkType } from '@utils/types'

type NavigationLinksListProps = React.ComponentPropsWithoutRef<'ul'> & {
  navigationLinks: NavigationLinkType[]
  showNavigationLinkText?: boolean
}

export default function NavigationLinksList({
  navigationLinks,
  showNavigationLinkText = true,
  ...props
}: NavigationLinksListProps) {
  return (
    <ul className="space-y-2" {...props}>
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
