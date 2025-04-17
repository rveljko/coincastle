import { tasks } from '@data/tasks'
import Section from '@sections/dashboard-sections/section'

type RewardsSectionSkeletonProps = {
  className?: string
}

export default function RewardsSectionSkeleton({
  className,
}: RewardsSectionSkeletonProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <div>
          <div className="bg-clickable/10 mb-2 h-6.5 w-22 animate-pulse rounded-sm"></div>
          {tasks.map((task) => (
            <div key={task} className="flex items-center gap-1 p-2">
              <div className="bg-clickable/10 size-5.5 animate-pulse rounded-sm"></div>
              <div className="bg-clickable/10 h-5.5 w-full animate-pulse rounded-sm"></div>
            </div>
          ))}
        </div>
        <div className="bg-clickable/10 h-9.5 w-full animate-pulse rounded-sm"></div>
      </div>
    </Section>
  )
}
