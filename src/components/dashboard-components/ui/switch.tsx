type SwitchProps = React.ComponentPropsWithoutRef<'input'>

export default function Switch({ ...props }: SwitchProps) {
  return (
    <input
      className="checked:bg-brand-500 before:ease-[cubic-bezier(0.4, 0, 1, 1)] relative aspect-2/1 w-(--switch-width) cursor-pointer appearance-none rounded-full bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] shadow-[inset_0_0_0_1px_hsl(from_var(--color-white)_h_s_l_/_20%)] before:absolute before:top-[50%] before:left-0.5 before:size-3 before:transform-[translateY(-50%)] before:rounded-full before:bg-white before:transition before:duration-100 checked:before:left-0 checked:before:transform-[translate(150%,-50%)] hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)]"
      type="checkbox"
      role="switch"
      {...props}
    />
  )
}
