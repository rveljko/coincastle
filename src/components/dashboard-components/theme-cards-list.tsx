import { Theme } from '@utils/types'
import { cn } from '@utils/utils'
import ThemeCard from './theme-card'

type ThemeCardsListProps = {
  themes: Theme[]
  className?: string
}

export default function ThemeCardsList({
  themes,
  className,
}: ThemeCardsListProps) {
  return (
    <ul className={cn('flex flex-col gap-2', className)}>
      {themes.map((theme) => (
        <li key={theme.id}>
          <ThemeCard theme={theme} />
        </li>
      ))}
    </ul>
  )
}
