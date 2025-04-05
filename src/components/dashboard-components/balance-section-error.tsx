import ErrorMessage from '@components/dashboard-components/ui/error-message'
import ExclamationCircleIcon from '@icons/exclamation-circle-icon'
import Section from '@sections/dashboard-sections/section'

export default function BalanceSectionError() {
  return (
    <Section>
      <div className="mb-1 flex items-center gap-0.5">
        <ExclamationCircleIcon className="text-danger-500 size-4" />
        <p>Error</p>
      </div>
      <h1 className="text-clickable mb-2.5">Data Unavailable</h1>
      <div>
        <ErrorMessage />
      </div>
    </Section>
  )
}
