import RewardModalButton from '@components/dashboard-components/reward-modal-button'
import TasksList from '@components/dashboard-components/ui/tasks-list'
import { tasks } from '@data/tasks'
import Section from '@sections/dashboard-sections/section'

type RewardsSectionProps = {
  className?: string
}

export default function RewardsSection({ className }: RewardsSectionProps) {
  return (
    <Section className={className}>
      <div className="flex h-full flex-col justify-between gap-2">
        <div>
          <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
            Rewards
          </h2>
          <TasksList>
            {tasks.map((task) => (
              <TasksList.Item key={task}>{task}</TasksList.Item>
            ))}
          </TasksList>
        </div>
        <RewardModalButton variant="secondary" size="large" className="w-full">
          Redeem Now
        </RewardModalButton>
      </div>
    </Section>
  )
}
