import { cn } from '@utils/utils'

type InformationListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

export default function InformationList({
  children,
  className,
  ...props
}: InformationListProps) {
  return (
    <ul className={cn('space-y-1', className)} {...props}>
      {children}
    </ul>
  )
}

InformationList.Item = Item
InformationList.Label = Label
InformationList.Value = Value

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
}

function Item({ children, className, ...props }: ItemProps) {
  return (
    <li
      className={cn('flex flex-wrap justify-between gap-0.5', className)}
      {...props}
    >
      {children}
    </li>
  )
}

type LabelProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Label({ children, ...props }: LabelProps) {
  return <p {...props}>{children}</p>
}

type ValueProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Value({ children, className, ...props }: ValueProps) {
  return (
    <p className={cn('text-neutral-100', className)} {...props}>
      {children}
    </p>
  )
}
