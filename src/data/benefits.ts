import AdjustmentIcon from '@icons/adjustment-icon'
import BrandSpeedtestTcon from '@icons/brand-speedtest-icon'
import ChartBarIcon from '@icons/chart-bar-icon'
import FileIcon from '@icons/file-icon'
import LayoutListIcon from '@icons/layout-list-icon'
import ShareIcon from '@icons/share-icon'
import { Benefit } from '@utils/types'

export const marketAwarenessBenefits: Benefit[] = [
  {
    id: 1,
    title: 'Real-Time Data',
    description:
      'Stay informed with live updates on market trends and asset performance',
    icon: ChartBarIcon,
  },
  {
    id: 2,
    title: 'User-Friendly Interface',
    description:
      'Navigate effortlessly through a clean, intuitive design tailored for all users',
    icon: LayoutListIcon,
  },
  {
    id: 3,
    title: 'Customizable Experience',
    description:
      'Personalize your dashboard with themes and charts that suit your style',
    icon: AdjustmentIcon,
  },
  {
    id: 4,
    title: 'Comprehensive Guides',
    description:
      'Access step-by-step instructions to master every feature with ease',
    icon: FileIcon,
  },
  {
    id: 5,
    title: 'Integrated Solutions',
    description:
      'Integrate with your go-to apps for enhanced functionality and a streamlined experience',
    icon: ShareIcon,
  },
  {
    id: 6,
    title: 'Integrated Solutions',
    description:
      'Enjoy lag-free operation, ensuring you never miss critical trading opportunities',
    icon: BrandSpeedtestTcon,
  },
]
