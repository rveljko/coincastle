import { NavLink, NavLinkProps } from 'react-router-dom'

type NavigationLinkProps = NavLinkProps & {
  name: string
  icon?: React.JSX.Element
  showText?: boolean
}

export default function NavigationLink({
  name,
  icon: Icon,
  showText,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `flex flex-row gap-1 p-0.5 rounded-sm hover:text-white hover:bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] text-neutral-400 hover:bg-neutral-600 hover:inset-ring-1 hover:inset-ring-neutral-600 ${
          isActive &&
          'text-white bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] bg-neutral-700 inset-ring-1 inset-ring-neutral-700'
        }`
      }
      end
      {...props}
    >
      <span>{Icon}</span>
      {showText && name}
    </NavLink>
  )
}
