import { IMAGE_PATH } from '@utils/constants'
import { Customer } from '@utils/types'

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Zoo TV',
    description:
      'Zoo TV blends television and technology to create immersive entertainment experiences.',
    logoUrl: `${IMAGE_PATH}zoo-tv-logo.svg`,
  },
  {
    id: 2,
    name: 'Velocity',
    description:
      'Velocity designs high-speed trading platforms for efficient transactions and performance.',
    logoUrl: `${IMAGE_PATH}velocity-logo.svg`,
  },
  {
    id: 3,
    name: 'Utosia',
    description:
      'Utosia crafts sustainable urban spaces with technologically advanced cities for living.',
    logoUrl: `${IMAGE_PATH}utosia-logo.svg`,
  },
  {
    id: 4,
    name: 'Treva',
    description:
      'Treva offers curated travel experiences that connect travelers with diverse cultures.',
    logoUrl: `${IMAGE_PATH}treva-logo.svg`,
  },
  {
    id: 5,
    name: 'Stari',
    description:
      'Stari manufactures innovative solar and wind turbines for renewable energy solutions.',
    logoUrl: `${IMAGE_PATH}stari-logo.svg`,
  },
  {
    id: 6,
    name: 'Radiyal',
    description:
      'Radiyal develops groundbreaking medical treatments using advanced genetic engineering techniques.',
    logoUrl: `${IMAGE_PATH}radiyal-logo.svg`,
  },
]
