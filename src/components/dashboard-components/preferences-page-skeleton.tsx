import PreferencesSectionSkeleton from '@components/dashboard-components/preferences-section-skeleton'
import { TITLE_PREFIX } from '@utils/constants'

export default function PreferencesPageSkeleton() {
  return (
    <>
      <title>{`${TITLE_PREFIX}Preferences`}</title>
      <PreferencesSectionSkeleton />
    </>
  )
}
