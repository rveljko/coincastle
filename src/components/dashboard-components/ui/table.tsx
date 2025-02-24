import { cn } from '@utils/utils'

type TableProps = React.ComponentPropsWithoutRef<'table'> & {
  children: React.ReactNode
}

export default function Table({ children, className }: TableProps) {
  return (
    <div className="w-0 min-w-full overflow-y-auto">
      <table className={cn('w-full', className)}>{children}</table>
    </div>
  )
}

Table.Header = Header
Table.HeaderRow = HeaderRow
Table.HeaderCell = HeaderCell
Table.Body = Body
Table.BodyRow = BodyRow
Table.BodyCell = BodyCell

type HeadProps = React.ComponentPropsWithoutRef<'thead'> & {
  children: React.ReactNode
}

function Header({ children, ...props }: HeadProps) {
  return <thead {...props}>{children}</thead>
}

type HeaderRowProps = React.ComponentPropsWithoutRef<'tr'> & {
  children: React.ReactNode
}

function HeaderRow({ children, className, ...props }: HeaderRowProps) {
  return (
    <tr className={cn('px-2', className)} {...props}>
      {children}
    </tr>
  )
}

type HeaderCellProps = React.ComponentPropsWithoutRef<'th'> & {
  children: React.ReactNode
}

function HeaderCell({ children, className, ...props }: HeaderCellProps) {
  return (
    <th
      className={cn(
        'px-2 text-left font-normal text-neutral-400 last:text-right',
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}

type BodyProps = React.ComponentPropsWithoutRef<'tbody'> & {
  children: React.ReactNode
}

function Body({ children, ...props }: BodyProps) {
  return <tbody {...props}>{children}</tbody>
}

type BodyRowProps = React.ComponentPropsWithoutRef<'tr'> & {
  children: React.ReactNode
}

function BodyRow({ children, className, ...props }: BodyRowProps) {
  return (
    <tr className={cn('hover:bg-neutral-800', className)} {...props}>
      {children}
    </tr>
  )
}

type BodyCellProps = React.ComponentPropsWithoutRef<'td'> & {
  children: React.ReactNode
}

function BodyCell({ children, className, ...props }: BodyCellProps) {
  return (
    <td
      className={cn('text-clickable p-2 last:text-right', className)}
      {...props}
    >
      {children}
    </td>
  )
}
