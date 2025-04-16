import IntegrationBentoCard from '@components/landing-page-components/integration-bento-card'
import { animationVariants } from '@data/animation-variants'
import { Integration } from '@utils/types'
import { motion } from 'motion/react'

type IntegrationBentoCardsListProps = {
  integrations: Integration[]
}

export default function IntegrationBentoCardsList({
  integrations,
}: IntegrationBentoCardsListProps) {
  return (
    <ul className="flex flex-wrap gap-5">
      {integrations.map((integration) => (
        <motion.li
          variants={animationVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: (integration.id + 2) * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          key={integration.id}
          className="flex-grow"
        >
          <IntegrationBentoCard integration={integration} />
        </motion.li>
      ))}
    </ul>
  )
}
