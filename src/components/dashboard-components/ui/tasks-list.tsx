import CheckboxIcon from '@icons/checkbox-icon'

type TasksListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

export default function TasksList({ children, ...props }: TasksListProps) {
  return <ul {...props}>{children}</ul>
}

TasksList.Item = Item

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
}

function Item({ children, ...props }: ItemProps) {
  return (
    <li className="text-clickable flex items-center gap-1 p-2" {...props}>
      <CheckboxIcon className="shrink-0" />
      {children}
    </li>
  )
}
