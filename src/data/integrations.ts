import { IMAGE_PATH } from '@utils/constants'
import { Integration } from '@utils/types'

export const integrations: Integration[] = [
  {
    id: 1,
    name: 'Forward',
    description: 'Web-based SaaS for issue tracking & project management',
    logoUrl: `${IMAGE_PATH}forward-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}forward-logo-big.svg`,
    isActive: true,
  },
  {
    id: 2,
    name: 'Reply',
    description: 'Web-based SaaS for online personal banking',
    logoUrl: `${IMAGE_PATH}reply-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}reply-logo-big.svg`,
    isActive: true,
  },
  {
    id: 3,
    name: 'Aven',
    description: 'Home equity-backed credit cards for affordable financing',
    logoUrl: `${IMAGE_PATH}aven-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}aven-logo-big.svg`,
    isActive: false,
  },
  {
    id: 4,
    name: 'Acme',
    description: 'Delivers manufacturing solutions and high-quality products',
    logoUrl: `${IMAGE_PATH}acme-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}acme-logo-big.svg`,
    isActive: false,
  },
  {
    id: 5,
    name: 'Kanba',
    description: 'Enhances team productivity and project management',
    logoUrl: `${IMAGE_PATH}kanba-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}kanba-logo-big.svg`,
    isActive: false,
  },
  {
    id: 6,
    name: 'Earth2.0',
    description: 'Develops sustainable technologies for a greener planet',
    logoUrl: `${IMAGE_PATH}earth2.0-logo.svg`,
    logoBigUrl: `${IMAGE_PATH}earth2.0-logo-big.svg`,
    isActive: false,
  },
]
