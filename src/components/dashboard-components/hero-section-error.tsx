import ErrorMessage from '@components/dashboard-components/ui/error-message'
import ExclamationCircleIcon from '@icons/exclamation-circle-icon'
import Section from '@sections/dashboard-sections/section'

export default function HeroSectionError() {
  return (
    <Section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <HeroAssetInformationError />
        <HeroButtonsError />
      </div>
      <HeroChartError />
    </Section>
  )
}

export function HeroAssetInformationError() {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <ExclamationCircleIcon className="text-danger-500 size-8" />
        <h3 className="text-danger-500 text-heading-4-font-size leading-heading-4-line-height">
          Error
        </h3>
      </div>
      <h1>Data Unavailable</h1>
    </div>
  )
}

export function HeroButtonsError() {
  return null
}

export function HeroChartError() {
  return <ErrorMessage />
}
