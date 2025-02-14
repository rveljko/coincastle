import Container from '@components/container'
import { cn } from '@utils/utils'

type SettingsContainerProps = {
  children: React.ReactNode
  className?: string
}

export default function SettingsContainer({
  children,
  className,
}: SettingsContainerProps) {
  return (
    <Container
      className={cn('max-w-(--settings-container-width) px-0', className)}
    >
      {children}
    </Container>
  )
}
