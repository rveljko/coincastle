import TasksList from '@components/dashboard-components/ui/tasks-list'
import BentoCard from '@components/landing-page-components/ui/bento-card'
import Button from '@components/ui/button'
import { tasks } from '@data/tasks'

export default function RewardsFeatureBentoCard() {
  return (
    <BentoCard>
      <BentoCard.Body>
        <div className="relative isolate overflow-hidden rounded-t-lg">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <div className="border-clickable/30 mx-0.25 flex items-center justify-between border-b p-4">
            <h4 className="text-heading-5-font-size leading-heading-5-line-height">
              Rewards
            </h4>
            <span className="bg-clickable/5 border-clickable/30 rounded-sm border px-2 py-0.5 text-neutral-100">
              {tasks.length}/{tasks.length}
            </span>
          </div>
          <div className="px-4 py-2">
            <TasksList className="mb-4">
              {tasks.map((task) => (
                <TasksList.Item key={task} className="px-0">
                  {task}
                </TasksList.Item>
              ))}
            </TasksList>
            <Button variant="primary" size="large" className="w-full">
              Claim Reward
            </Button>
          </div>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Earn While You Learn</BentoCard.Heading>
        <BentoCard.Paragraph>
          Complete tasks and unlock rewards, making your investment experience
          both engaging and profitable
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
