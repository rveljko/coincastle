import { cn } from '@utils/utils'

type BentoCardProps = React.ComponentPropsWithoutRef<'article'> & {
  children: React.ReactNode
}

export default function BentoCard({
  children,
  className,
  ...props
}: BentoCardProps) {
  return (
    <article
      className={cn(
        'border-section-outline relative flex w-full flex-col justify-between gap-2 overflow-hidden rounded-2xl border p-4 after:absolute after:inset-0 after:-z-1 after:bg-(image:--bento-card-background)',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

BentoCard.Body = Body
BentoCard.Header = Header
BentoCard.Heading = Heading
BentoCard.Paragraph = Paragraph

type BodyProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

function Body({ children, className, ...props }: BodyProps) {
  return <div {...props}>{children}</div>
}

type HeaderProps = React.ComponentPropsWithoutRef<'header'> & {
  children: React.ReactNode
}

function Header({ children, className, ...props }: HeaderProps) {
  return <header {...props}>{children}</header>
}

type HeadingProps = React.ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        'text-heading-4-font-size leading-heading-4-line-height mb-2',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('max-w-75', className)} {...props}>
      {children}
    </p>
  )
}
