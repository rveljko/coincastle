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
        `hover:text-clickable flex flex-row items-center gap-1 rounded-sm p-0.5 text-neutral-400 hover:bg-neutral-600 hover:bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] hover:inset-ring-1 hover:inset-ring-neutral-600 ${
          isActive
            ? 'text-clickable! bg-neutral-700 bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] inset-ring-1 inset-ring-neutral-700'
            : ''
        }`
      }
      title={name}
      end
      {...props}
    >
      <span>{Icon}</span>
      {showText && name}
    </NavLink>
  )
}
