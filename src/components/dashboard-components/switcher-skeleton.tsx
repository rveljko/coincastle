import { cn } from '@utils/utils'

type SwitcherSkeletonProps = {
  className?: string
}

export default function SwitcherSkeleton({ className }: SwitcherSkeletonProps) {
  return (
    <div
      className={cn(
        'bg-clickable/10 h-8 w-full max-w-36 animate-pulse rounded-sm',
        className
      )}
    ></div>
  )
}
