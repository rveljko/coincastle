import Container from '@components/container'
import HeroText from '@components/landing-page-components/hero-text'
import { useTheme } from '@services/contexts/theme-context'
import { IMAGE_PATH } from '@utils/constants'
import { motion } from 'motion/react'

export default function HeroSection() {
  const { isLightTheme } = useTheme()

  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Unlock Your Investment Potential with CoinCastle Today!"
          paragraph="Manage cryptocurrencies, NFTs, and stocks effortlessly with real-time insights and powerful features at your fingertips"
        />
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
