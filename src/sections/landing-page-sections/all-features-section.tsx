import Container from '@components/container'
import ChartsFeatureBentoCard from '@components/landing-page-components/charts-feature-bento-card'
import GuidesFeatureBentoCard from '@components/landing-page-components/guides-feature-bento-card'
import HelpCenterFeatureBentoCard from '@components/landing-page-components/help-center-feature-bento-card'
import HeroText from '@components/landing-page-components/hero-text'
import IntegrationsFeatureBentoCard from '@components/landing-page-components/integrations-feature-bento-card'
import KeyboardShortcutsFeatureBentoCard from '@components/landing-page-components/keyboard-shortcuts-feature-bento-card'
import OptimizationFeatureBentoCard from '@components/landing-page-components/optimization-feature-bento-card'
import RewardsFeatureBentoCard from '@components/landing-page-components/rewards-feature-bento-card'
import SearchFeatureBentoCard from '@components/landing-page-components/search-feature-bento-card'
import SecurityFeatureBentoCard from '@components/landing-page-components/security-feature-bento-card'
import ThemesFeatureBentoCard from '@components/landing-page-components/themes-feature-bento-card'
import { animationVariants } from '@data/animation-variants'
import { motion } from 'motion/react'

export default function AllFeaturesSection() {
  return (
    <section className="py-16">
      <Container>
        <HeroText
          heading="Powerful Features to Maximize Efficiency and Workflow"
          paragraph="Discover a suite of powerful features designed to enhance productivity, streamline workflows, and improve collaboration."
        />
        <div className="flex flex-col gap-5 pt-16">
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
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <KeyboardShortcutsFeatureBentoCard />
            </motion.div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="md:col-start-3 md:row-start-1 md:row-end-3"
            >
              <IntegrationsFeatureBentoCard className="h-full" />
            </motion.div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <GuidesFeatureBentoCard className="h-full" />
            </motion.div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <HelpCenterFeatureBentoCard />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.3, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ChartsFeatureBentoCard className="h-full" />
            </motion.div>
            <motion.div
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              transition={{ delay: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="w-full"
            >
              <ThemesFeatureBentoCard />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
