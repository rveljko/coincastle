import Button from '@components/ui/button'
import { motion } from 'motion/react'

type HeroTextProps = {
  heading: string
  paragraph: string
}

export default function HeroText({ heading, paragraph }: HeroTextProps) {
  return (
    <>
      <motion.h1
        initial={{
          opacity: 0,
          transform: 'translateY(calc(var(--spacing)*-4))',
        }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ ease: 'easeOut' }}
        className="mx-auto mb-2 max-w-5xl bg-(image:--heading-gradient) bg-clip-text text-center text-5xl font-semibold text-transparent lg:text-6xl"
      >
        {heading}
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
          transform: 'translateY(calc(var(--spacing)*-4))',
        }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.1, ease: 'easeOut' }}
        className="mx-auto mb-4 max-w-115 text-center"
      >
        {paragraph}
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          transform: 'translateY(calc(var(--spacing)*-4))',
        }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.2, ease: 'easeOut' }}
        className="flex flex-wrap items-center justify-center gap-2"
      >
        <Button href="/dashboard" variant="primary" size="large">
          Get Started Now
        </Button>
        <Button href="/dashboard" variant="secondary" size="large">
          See How It Works
        </Button>
      </motion.div>
    </>
  )
}
