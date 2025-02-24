import { cn } from '@utils/utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        'border-section-outline w-full rounded-xl border bg-(image:--section-background) bg-fixed p-4',
        className
      )}
    >
      {children}
    </section>
  )
}
