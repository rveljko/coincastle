import AdjustmentIcon from '@icons/adjustment-icon'
import BellIcon from '@icons/bell-icon'
import BookIcon from '@icons/book-icon'
import BrandSpeedtestTcon from '@icons/brand-speedtest-icon'
import CertificateIcon from '@icons/certificate-icon'
import ChartBarIcon from '@icons/chart-bar-icon'
import ChartPieIcon from '@icons/chart-pie-icon'
import CheckIcon from '@icons/check-icon'
import ClockIcon from '@icons/clock-icon'
import CompassIcon from '@icons/compass-icon'
import DevicesIcon from '@icons/devices-icon'
import EyeIcon from '@icons/eye-icon'
import FileIcon from '@icons/file-icon'
import FilterIcon from '@icons/filter-icon'
import FingerprintIcon from '@icons/fingerprint-icon'
import KeyIcon from '@icons/key-icon'
import LayoutListIcon from '@icons/layout-list-icon'
import LineScanIcon from '@icons/line-scan-icon'
import LinkIcon from '@icons/link-icon'
import ServerIcon from '@icons/server-icon'
import ShareIcon from '@icons/share-icon'
import ShieldCheckIcon from '@icons/shield-check-icon'
import ShieldIcon from '@icons/shield-icon'
import UserCircleIcon from '@icons/user-circle-icon'
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

export const investmentBenefits: Benefit[] = [
  {
    id: 1,
    title: 'Unified Management',
    description:
      'Manage all your assets in one convenient location, saving time and effort',
    icon: ChartPieIcon,
  },
  {
    id: 2,
    title: 'Personalized Insights',
    description:
      'Receive real-time market updates and  alerts tailored to your investment strategy',
    icon: BellIcon,
  },
  {
    id: 3,
    title: 'Educational Resources',
    description:
      'Enhance your trading knowledge with interactive guides, tutorials',
    icon: BookIcon,
  },
  {
    id: 4,
    title: 'Seamless Integration',
    description:
      'Connect with the tools you already use for a seamless investment experience',
    icon: LinkIcon,
  },
  {
    id: 5,
    title: 'Flexible Accessibility',
    description: 'Access your investments anytime, anywhere, from any device',
    icon: DevicesIcon,
  },
  {
    id: 6,
    title: 'Enhanced Security',
    description:
      'Rest assured knowing your assets are protected by advanced security protocols',
    icon: FingerprintIcon,
  },
]

export const filteringBenefits: Benefit[] = [
  {
    id: 1,
    title: 'Tailored Results',
    description:
      'Find exactly what you need by customizing your search parameters',
    icon: FilterIcon,
  },
  {
    id: 2,
    title: 'Simplified Navigation',
    description:
      'Easily manage your portfolio with organized and relevant asset listings',
    icon: CompassIcon,
  },
  {
    id: 3,
    title: 'Focused Insights',
    description:
      'Gain clarity on specific investments by filtering out the noise',
    icon: EyeIcon,
  },
  {
    id: 4,
    title: 'Time-Saving Efficiency',
    description: 'Quickly access the information that matters most to you',
    icon: ClockIcon,
  },
  {
    id: 5,
    title: 'Enhanced Decision-Making',
    description:
      'Make informed choices with data presented in a way that suits your strategy',
    icon: CheckIcon,
  },
  {
    id: 6,
    title: 'User-Centric Design',
    description:
      'Enjoy a seamless experience with filtering options designed for your convenience',
    icon: UserCircleIcon,
  },
]

export const securityBenefits: Benefit[] = [
  {
    id: 1,
    title: 'End-to-End Encryption',
    description:
      'Encrypts all data and transactions to ensure complete privacy and security',
    icon: ShieldIcon,
  },
  {
    id: 2,
    title: 'Multi-Factor Authentication',
    description:
      'Adds an extra verification step to prevent unauthorized account access',
    icon: KeyIcon,
  },
  {
    id: 3,
    title: 'Cold Storage Solutions',
    description:
      'Stores most assets offline to protect them from online hacking threats',
    icon: ServerIcon,
  },
  {
    id: 4,
    title: 'Real-Time Monitoring',
    description:
      'Constantly scans for suspicious activity and alerts you instantly',
    icon: LineScanIcon,
  },
  {
    id: 5,
    title: 'Regular Security Audits',
    description:
      'Third-party audits ensure vulnerabilities are identified and fixed promptly',
    icon: CertificateIcon,
  },
  {
    id: 6,
    title: 'Regulatory Compliance',
    description:
      'Follows strict regulations to keep your investments safe and transparent',
    icon: ShieldCheckIcon,
  },
]
