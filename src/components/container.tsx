import { cn } from '@utils/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn('mx-auto w-full max-w-(--container-width) px-4', className)}
    >
      {children}
    </div>
  )
}
