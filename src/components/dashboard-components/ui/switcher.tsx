type SwitcherProps = React.ComponentPropsWithoutRef<'fieldset'> & {
  children: React.ReactNode
}

export default function Switcher({ children, ...props }: SwitcherProps) {
  return (
    <fieldset
      className="flex w-max rounded-sm bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] p-1 inset-ring-1 inset-ring-neutral-800"
      {...props}
    >
      {children}
    </fieldset>
  )
}

Switcher.Item = Item

type ItemProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  isActive: boolean
}

function Item({ children, isActive, ...props }: ItemProps) {
  return (
    <button
      className={`text-clickable cursor-pointer rounded-sm px-1 py-0.5 ${isActive ? 'bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),_hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-clickable)_h_s_l_/_10%),_transparent)] shadow-[inset_0_0_0_calc(var(--spacing)_*_0.25)_var(--color-neutral-800),_inset_0_calc(var(--spacing)_*_0.5)_calc(var(--spacing)_*_0.5)_0_hsl(from_var(--color-black)_h_s_l_/_40%)]' : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
