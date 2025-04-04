import ChartLineIcon from '@icons/chart-line-icon'
import CoinIcon from '@icons/coin-icon'
import FileIcon from '@icons/file-icon'
import LifebuoyIcon from '@icons/lifebuoy-icon'
import PhotoIcon from '@icons/photo-icon'
import SettingsIcon from '@icons/settings-icon'
import WalletIcon from '@icons/wallet-icon'
import { NavigationLink } from '@utils/types'

export const primaryNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Wallet',
    path: '',
    icon: WalletIcon,
  },
  {
    id: 2,
    name: 'Crypto',
    path: 'crypto',
    icon: CoinIcon,
  },
  {
    id: 3,
    name: 'NFTs',
    path: 'nfts',
    icon: PhotoIcon,
  },
  {
    id: 4,
    name: 'Stocks',
    path: 'stocks',
    icon: ChartLineIcon,
  },
]

export const secondaryNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Guides',
    path: 'guides',
    icon: FileIcon,
  },
  {
    id: 2,
    name: 'Help Center',
    path: 'help-center',
    icon: LifebuoyIcon,
  },
  {
    id: 3,
    name: 'Settings',
    path: 'settings',
    icon: SettingsIcon,
  },
]

export const settingsNavigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Account',
    path: '',
  },
  {
    id: 2,
    name: 'Password',
    path: 'password',
  },
  {
    id: 3,
    name: 'Preferences',
    path: 'preferences',
  },
  {
    id: 4,
    name: 'Integrations',
    path: 'integrations',
  },
]
