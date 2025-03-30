import TasksList from '@components/dashboard-components/ui/tasks-list'
import Button from '@components/ui/button'
import { tasks } from '@data/tasks'
import Section from '@sections/dashboard-sections/section'

type RewardsSectionProps = {
  className?: string
}

export default function RewardsSection({ className }: RewardsSectionProps) {
  return (
    <Section className={className}>
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Rewards
      </h2>
      <TasksList className="mb-2">
        {tasks.map((task) => (
          <TasksList.Item key={task}>{task}</TasksList.Item>
        ))}
      </TasksList>
      <Button variant="secondary" size="large" className="w-full">
        Redeem Now
      </Button>
    </Section>
  )
}
