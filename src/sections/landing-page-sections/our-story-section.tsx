import Container from '@components/container'
import { animationVariants } from '@data/animation-variants'
import Section from '@sections/landing-page-sections/section'
import { motion } from 'motion/react'

export default function OurStorySection() {
  return (
    <Section className="bg-[image:unset]">
      <Container className="flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <Section.Heading className="mx-0 text-left">
            Discover the Story Behind CoinCastle
          </Section.Heading>
          <Section.Paragraph className="mx-0 mb-0 text-left">
            We believe investing should be simple, secure, transparent, and
            empowering. Founded with the vision to bring clarity
          </Section.Paragraph>
        </div>
        <div className="w-full max-w-115 space-y-4">
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            CoinCastle was born from a simple belief: investing should be
            empowering, not overwhelming. Our founders, a team of passionate
            technologists and seasoned investors, recognized the challenges
            faced by modern investors—fragmented platforms, confusing
            interfaces, and a lack of real-time insights. Determined to change
            this, they set out to create a unified platform that brings clarity,
            confidence, and control to every investment journey.
          </motion.p>
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            From the very beginning, we prioritized listening to our users and
            building features that address their real needs. By seamlessly
            integrating cryptocurrencies, NFTs, and stocks, we made it possible
            for everyone—from beginners to experts—to manage their portfolios
            with ease. Our unwavering commitment to robust security and
            continuous innovation has earned the trust of a rapidly growing
            global community.
          </motion.p>
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            As we evolved, so did our vision. We introduced real-time updates,
            customizable dashboards, comprehensive learning resources, and
            engaging rewards, empowering users to make smarter decisions and
            enjoy a collaborative investment experience. Today, CoinCastle
            stands as a symbol of innovation, user-centric design, and
            relentless pursuit of excellence.
          </motion.p>
          <motion.p
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            transition={{ delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            We are proud to support a diverse community of investors worldwide,
            providing the tools and knowledge to unlock the full potential of
            their assets. Our journey is just beginning, and we invite you to
            join us as we shape the future of investing together.
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}
