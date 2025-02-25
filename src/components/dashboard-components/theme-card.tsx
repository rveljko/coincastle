import PreferenceCard from '@components/dashboard-components/preference-card'
import { useTheme } from '@services/contexts/theme-context'
import { Theme } from '@utils/types'

type ThemeCardProps = {
  theme: Theme
}

export default function ThemeCard({
  theme: { name, label, imageUrl },
}: ThemeCardProps) {
  const { newTheme, setNewTheme } = useTheme()

  return (
    <button className="cursor-pointer" onClick={() => setNewTheme(label)}>
      <PreferenceCard
        name={name}
        imageUrl={imageUrl}
        isActive={newTheme === label}
      />
    </button>
  )
}
