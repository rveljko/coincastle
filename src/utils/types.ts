export type NavigationLink = {
  id: number
  name: string
  path: string
  icon?: () => React.JSX.Element
}

export type User = {
  firstName: string
  lastName: string
  emailAddress: string
  phoneNumber: number
  isTwoStepVerificationEnabled: boolean
  password: string
  streetAddress: string
  city: string
  state: string
  zipCode: number
}

export type Integration = {
  id: number
  name: string
  description: string
  logoUrl: string
  isActive: boolean
}

export type ThemeLabel = 'system' | 'dark' | 'light'

export type Theme = {
  id: number
  name: string
  label: ThemeLabel
  imageUrl: string
}

export type Chart = {
  id: number
  name: string
  label: 'line' | 'bar' | 'candlestick'
  imageUrl: string
}

export type Question = {
  id: number
  summary: string
  details: string
}
