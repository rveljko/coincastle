import SearchModal from '@components/dashboard-components/search-modal'
import DialogButton from '@components/dashboard-components/ui/dialog-button'
import { ButtonProps } from '@components/ui/button'
import useModal from '@hooks/use-modal'

type SearchModalButtonProps = ButtonProps

export default function SearchModalButton({
  children,
  ...props
}: SearchModalButtonProps) {
  const { isOpened, toggleModal } = useModal()

  return (
    <DialogButton
      label={children}
      isOpened={isOpened}
      toggleModal={toggleModal}
      dialogClassName="w-(--search-modal-width) max-w-full"
      {...props}
    >
      <SearchModal closeModal={toggleModal} />
    </DialogButton>
  )
}
