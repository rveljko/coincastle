import { cn } from '@utils/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-[calc(100%_-_(var(--spacing)_*_8))] max-w-(--container-width)',
        className
      )}
    >
      {children}
    </div>
  )
}
