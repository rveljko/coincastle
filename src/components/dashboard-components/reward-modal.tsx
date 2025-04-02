import FormField from '@components/dashboard-components/ui/form-field'
import Button from '@components/ui/button'
import { useTheme } from '@services/contexts/theme-context'
import { IMAGE_PATH } from '@utils/constants'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

type RewardModalProps = {
  closeModal: () => void
}

export default function RewardModal({ closeModal }: RewardModalProps) {
  const { isLightTheme } = useTheme()
  const [showRewardMessage, setShowRewardMessage] = useState(false)

  return (
    <article className="border-section-outline rounded-lg border-1 bg-(image:--modal-background) p-4">
      <div className="mb-4 aspect-[16/10]">
        <img
          src={`${IMAGE_PATH}reward-gift-${isLightTheme ? 'light' : 'dark'}.png`}
          alt="Gift"
        />
      </div>
      <h3 className="mb-2 text-center">
        Task Complete! <br /> Claim Your Gift Now
      </h3>
      <p className="mb-4 text-center">
        You've completed all tasks! Redeem your reward below and explore more
        opportunities on our platform
      </p>
      <AnimatePresence>
        {showRewardMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <FormField.TextArea
              className="mb-4 field-sizing-content aspect-[unset] max-w-[unset]"
              readOnly
              value="Congratulations on discovering this hidden gem! While there's no gift for you, I truly appreciate your curiosity and playful spirit in exploring my project :)
          
🎉 2/3 IYKYK"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="large"
          className="w-full"
          onClick={closeModal}
        >
          Close
        </Button>
        <Button
          disabled={showRewardMessage}
          variant="primary"
          size="large"
          className="w-full"
          onClick={() => setShowRewardMessage((prev) => !prev)}
        >
          Reedem
        </Button>
      </div>
    </article>
  )
}
