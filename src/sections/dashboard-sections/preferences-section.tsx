import ChartCardsList from '@components/dashboard-components/chart-cards-list'
import ThemeCardsList from '@components/dashboard-components/theme-cards-list'
import Button from '@components/ui/button'
import { charts } from '@data/charts'
import { themes } from '@data/themes'
import { useChart } from '@services/contexts/chart-context'
import { useTheme } from '@services/contexts/theme-context'
import displayToast from '@utils/toast'

export default function PreferencesSection() {
  const { theme, newTheme, setTheme } = useTheme()
  const { chart, newChart, setChart } = useChart()

  const isButtonDisabled = theme === newTheme && chart === newChart

  return (
    <section className="w-full">
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Themes
      </h2>
      <ThemeCardsList className="mb-4" themes={themes} />
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Charts
      </h2>
      <ChartCardsList className="mb-4" charts={charts} />
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        className="ml-auto"
        onClick={() => {
          if (theme !== newTheme) {
            setTheme(newTheme)
          }

          if (chart !== newChart) {
            setChart(newChart)
          }

          displayToast('Updated Successfully!')
        }}
      >
        Save Changes
      </Button>
    </section>
  )
}
