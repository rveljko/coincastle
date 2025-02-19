import { cn } from '@utils/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { Link } from 'react-router-dom'

const button = cva(
  'group flex w-max cursor-pointer items-center justify-center gap-1 leading-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-500 rounded-sm bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] text-white shadow-[inset_0_0_0_1px_var(--color-brand-500),_inset_0_0_0_2px_hsl(from_var(--color-white)_h_s_l_/_20%)] hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] disabled:bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)]',
        secondary:
          'text-clickable rounded-sm bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] shadow-[inset_0_0_0_1px_var(--color-neutral-800),_inset_0_0_0_2px_hsl(from_var(--color-white)_h_s_l_/_20%)] hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] disabled:bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)]',
        tertiary:
          'text-clickable rounded-sm bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] shadow-[inset_0_0_0_1px_hsl(from_var(--color-white)_h_s_l_/_20%)] hover:bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] disabled:bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)]',
        link: 'text-clickable hover:text-brand-500',
      },
      size: {
        large: 'h-(--button-large-height) py-2 px-3',
        medium: 'h-(--button-medium-height) px-2 py-1.5',
        small: 'h-(--button-small-height) px-1.5 py-1',
      },
    },
  }
)

type ButtonBaseProps = VariantProps<typeof button> & {
  children: React.ReactNode
  leftIcon?: React.JSX.Element
  rightIcon?: React.JSX.Element
}

type ButtonAsAnchorProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string
}

type ButtonAsButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  href?: never
}

export type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps)

export default function Button({
  className,
  variant,
  size,
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(button({ variant, size, className }))

  if ('href' in props && props.href !== undefined) {
    return (
      <Link to={props.href} className={buttonClasses} {...props}>
        {LeftIcon}
        <span className="group-active:transform-[translateY(calc(var(--spacing)_*_0.25))] group-disabled:transform-[translateY(0)]">
          {children}
        </span>
        {RightIcon}
      </Link>
    )
  }

  return (
    <button className={buttonClasses} {...props}>
      {LeftIcon}
      <span className="group-active:transform-[translateY(calc(var(--spacing)_*_0.25))] group-disabled:transform-[translateY(0)]">
        {children}
      </span>
      {RightIcon}
    </button>
  )
}
