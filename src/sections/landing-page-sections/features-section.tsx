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
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="md:row-start-1 md:row-end-3"
          >
            <SearchFeatureBentoCard className="h-full" />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <SecurityFeatureBentoCard className="h-full" />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <OptimizationFeatureBentoCard className="h-full" />
          </motion.div>
          <motion.div
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="md:col-start-3 md:row-start-1 md:row-end-3"
          >
            <RewardsFeatureBentoCard className="h-full" />
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
