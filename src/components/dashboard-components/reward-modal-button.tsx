import RewardModal from '@components/dashboard-components/reward-modal'
import DialogButton from '@components/dashboard-components/ui/dialog-button'
import { ButtonProps } from '@components/ui/button'
import useModal from '@hooks/use-modal'

type RewardModalButtonProps = ButtonProps

export default function RewardModalButton({
  children,
  ...props
}: RewardModalButtonProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <DialogButton
      label={children}
      isOpened={isOpened}
      toggleModal={toggleModal}
      {...props}
    >
      <RewardModal closeModal={toggleModal} />
    </DialogButton>
  )
}
