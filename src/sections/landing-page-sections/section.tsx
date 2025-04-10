import { animationVariants } from '@data/animation-variants'
import { cn } from '@utils/utils'
import { motion } from 'motion/react'

type SectionProps = React.ComponentPropsWithoutRef<'section'> & {
  children: React.ReactNode
}

export default function Section({
  children,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn('bg-(image:--section-gradient) py-16', className)}
      {...props}
    >
      {children}
    </section>
  )
}

Section.Heading = Heading
Section.Paragraph = Paragraph

type HeadingProps = React.ComponentPropsWithoutRef<'h2'> & {
  children: React.ReactNode
}

function Heading({ children, className, ...props }: HeadingProps) {
  return (
    <motion.div
      variants={animationVariants}
      initial="initial"
      whileInView="whileInView"
      transition={{ ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2
        className={cn(
          'mx-auto mb-4 max-w-112 bg-(image:--heading-gradient) bg-clip-text text-center text-4xl font-semibold text-transparent lg:text-5xl',
          className
        )}
        {...props}
      >
        {children}
      </h2>
    </motion.div>
  )
}

type ParagraphProps = React.ComponentPropsWithoutRef<'p'> & {
  children: React.ReactNode
}

function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(calc(var(--spacing)*-4))' }}
      whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      transition={{ delay: 0.1, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <p
        className={cn('mx-auto mb-8 max-w-112 text-center', className)}
        {...props}
      >
        {children}
      </p>
    </motion.div>
  )
}
