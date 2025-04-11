import BenefitCell from '@components/landing-page-components/ui/benefit-cell'
import { animationVariants } from '@data/animation-variants'
import { Benefit } from '@utils/types'
import { motion } from 'motion/react'

type BenefitCellsListProps = {
  benefits: Benefit[]
}

export default function BenefitCellsList({ benefits }: BenefitCellsListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {benefits.map((benefit) => (
        <motion.li
          variants={animationVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: (benefit.id + 2) * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          key={benefit.id}
        >
          <BenefitCell benefit={benefit} />
        </motion.li>
      ))}
    </ul>
  )
}
