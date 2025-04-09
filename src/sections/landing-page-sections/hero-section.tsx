import Container from '@components/container'
import Button from '@components/ui/button'
import { useTheme } from '@services/contexts/theme-context'
import { IMAGE_PATH } from '@utils/constants'
import { motion } from 'motion/react'

export default function HeroSection() {
  const { isLightTheme } = useTheme()

  return (
    <section className="py-16">
      <Container>
        <motion.h1
          initial={{
            opacity: 0,
            transform: 'translateY(calc(var(--spacing)*-4))',
          }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ ease: 'easeOut' }}
          className="mx-auto mb-2 max-w-5xl bg-(image:--heading-gradient) bg-clip-text text-center text-5xl font-semibold text-transparent lg:text-6xl"
        >
          Unlock Your Investment Potential with CoinCastle Today!
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
          Manage cryptocurrencies, NFTs, and stocks effortlessly with real-time
          insights and powerful features at your fingertips
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
      </Container>
      <motion.div
        initial={{
          opacity: 0,
          transform: 'translateY(calc(var(--spacing)*-4))',
        }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.3, ease: 'easeOut' }}
        className="bg-(image:--section-gradient) py-16"
      >
        <Container>
          <motion.div>
            <picture>
              <source
                srcSet={`${IMAGE_PATH}dashboard-${isLightTheme ? 'light' : 'dark'}.webp`}
              />
              <img
                src={`${IMAGE_PATH}dashboard-${isLightTheme ? 'light' : 'dark'}.png`}
                className="border-section-outline rounded-lg border"
              />
            </picture>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  )
}
