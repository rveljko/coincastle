import ThemeCardsList from '@components/dashboard-components/theme-cards-list'
import Button from '@components/ui/button'
import { themes } from '@data/themes'
import { useTheme } from '@services/contexts/theme-context'

export default function PreferencesSection() {
  const { theme, newTheme, setTheme } = useTheme()

  const isButtonDisabled = theme === newTheme

  return (
    <section className="w-full">
      <h2 className="text-heading-4-font-size leading-heading-4-line-height mb-2">
        Themes
      </h2>
      <ThemeCardsList className="mb-4" themes={themes} />
      <Button
        variant="primary"
        size="large"
        disabled={isButtonDisabled}
        className="ml-auto"
        onClick={() => setTheme(newTheme)}
      >
        Save Changes
      </Button>
    </section>
  )
}
