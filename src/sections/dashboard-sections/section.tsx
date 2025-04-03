import { cn } from '@utils/utils'

type SectionProps = {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        'border-section-outline relative rounded-xl border p-4 after:absolute after:inset-0 after:-z-1 after:rounded-[calc(var(--spacing)_*_2.75)] after:bg-(image:--section-background) after:bg-fixed',
        className
      )}
    >
      {children}
    </section>
  )
}
