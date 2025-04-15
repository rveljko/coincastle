import CustomerBentoCard from '@components/landing-page-components/customer-bento-card'
import { animationVariants } from '@data/animation-variants'
import { Customer } from '@utils/types'
import { motion } from 'motion/react'

type CustomerBentoCardsListProps = {
  customers: Customer[]
}

export default function CustomerBentoCardsList({
  customers,
}: CustomerBentoCardsListProps) {
  return (
    <ul className="flex flex-wrap gap-5">
      {customers.map((customer) => (
        <motion.li
          variants={animationVariants}
          initial="initial"
          whileInView="whileInView"
          transition={{ delay: (customer.id + 2) * 0.1, ease: 'easeOut' }}
          viewport={{ once: true }}
          key={customer.id}
          className="flex-grow"
        >
          <CustomerBentoCard customer={customer} />
        </motion.li>
      ))}
    </ul>
  )
}
