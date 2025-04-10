import Container from '@components/container'
import OptimizationFeatureBentoCard from '@components/landing-page-components/optimization-feature-bento-card'
import RewardsFeatureBentoCard from '@components/landing-page-components/rewards-feature-bento-card'
import SearchFeatureBentoCard from '@components/landing-page-components/search-feature-bento-card'
import SecurityFeatureBentoCard from '@components/landing-page-components/security-feature-bento-card'
import { animationVariants } from '@data/animation-variants'
import Section from '@sections/landing-page-sections/section'
import { motion } from 'motion/react'

export default function FeaturesSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Powerful Features for Every Investor</Section.Heading>
        <Section.Paragraph>
          Comprehensive suite of tools designed to simplify your investment
          journey and maximize your returns
        </Section.Paragraph>
        <div className="flex flex-col gap-5 md:flex-row">
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex w-full"
          >
            <SearchFeatureBentoCard />
          </motion.div>
          <div className="flex w-full flex-col gap-5">
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex h-full w-full"
            >
              <SecurityFeatureBentoCard />
            </motion.div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex h-full w-full"
            >
              <OptimizationFeatureBentoCard />
            </motion.div>
          </div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            className="flex w-full"
            transition={{ delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <RewardsFeatureBentoCard />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
