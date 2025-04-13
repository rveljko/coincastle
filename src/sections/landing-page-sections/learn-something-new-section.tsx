import Container from '@components/container'
import GuidesFeatureBentoCard from '@components/landing-page-components/guides-feature-bento-card'
import HelpCenterFeatureBentoCard from '@components/landing-page-components/help-center-feature-bento-card'
import IntegrationsFeatureBentoCard from '@components/landing-page-components/integrations-feature-bento-card'
import KeyboardShortcutsFeatureBentoCard from '@components/landing-page-components/keyboard-shortcuts-feature-bento-card'
import { animationVariants } from '@data/animation-variants'
import Section from '@sections/landing-page-sections/section'
import { motion } from 'motion/react'

export default function LearnSomethingNewSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Empower Yourself with Knowledge</Section.Heading>
        <Section.Paragraph>
          Customize your dashboard with themes and charts tailored to your
          preferences for a unique investment experience
        </Section.Paragraph>
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
      </Container>
    </Section>
  )
}
