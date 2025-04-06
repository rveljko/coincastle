import Dialog from '@components/dashboard-components/ui/dialog'
import Button, { ButtonProps } from '@components/ui/button'
import { AnimatePresence } from 'motion/react'

type DialogButtonProps = ButtonProps & {
  label: React.ReactNode
  isOpened: boolean
  toggleModal: () => void
  dialogClassName?: string
}

export default function DialogButton({
  label,
  isOpened,
  toggleModal,
  children,
  dialogClassName,
  ...props
}: DialogButtonProps) {
  return (
    <div>
      <Button onClick={toggleModal} {...props}>
        {label}
      </Button>
      <AnimatePresence>
        {isOpened && (
          <Dialog closeModal={toggleModal} className={dialogClassName}>
            {children}
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}
