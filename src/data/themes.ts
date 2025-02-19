import { IMAGE_PATH } from '@utils/constants'
import { Theme } from '@utils/types'

export const themes: Theme[] = [
  {
    id: 1,
    name: 'System Preferences',
    label: 'system',
    imageUrl: `${IMAGE_PATH}theme-system.svg`,
  },
  {
    id: 2,
    name: 'Dark',
    label: 'dark',
    imageUrl: `${IMAGE_PATH}theme-dark.svg`,
  },
  {
    id: 3,
    name: 'Light',
    label: 'light',
    imageUrl: `${IMAGE_PATH}theme-light.svg`,
  },
]
