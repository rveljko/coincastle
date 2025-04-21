import Container from '@components/container'
import ChartsFeatureBentoCard from '@components/landing-page-components/charts-feature-bento-card'
import ThemesFeatureBentoCard from '@components/landing-page-components/themes-feature-bento-card'
import { animationVariants } from '@data/animation-variants'
import Section from '@sections/landing-page-sections/section'
import { motion } from 'motion/react'

export default function PreferencesSection() {
  return (
    <Section>
      <Container>
        <Section.Heading>Customize to Your Experience</Section.Heading>
        <Section.Paragraph>
          Customize your dashboard with themes and charts for a unique,
          personalized investment experience
        </Section.Paragraph>
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
      </Container>
    </Section>
  )
}
