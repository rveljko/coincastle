import { IMAGE_PATH } from '@utils/constants'
import { Chart } from '@utils/types'

export const charts: Chart[] = [
  {
    id: 1,
    name: 'Area',
    label: 'area',
    imageUrl: `${IMAGE_PATH}chart-area.png`,
  },
  {
    id: 2,
    name: 'Line',
    label: 'line',
    imageUrl: `${IMAGE_PATH}chart-line.png`,
  },
]
