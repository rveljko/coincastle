import { motion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock from 'react-focus-lock'

type DialogProps = {
  children: React.ReactNode
  closeModal: () => void
}
export default function Dialog({ children, closeModal }: DialogProps) {
  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') closeModal()
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  return createPortal(
    <div
      role="dialog"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-(--modal-backdrop-background) p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className="origin-top-center"
      >
        <ReactFocusLock className="flex h-full overflow-y-auto">
          <div className="m-auto overflow-y-auto">
            <div
              className="max-w-(--dialog-width)"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </div>
          </div>
        </ReactFocusLock>
      </motion.div>
    </div>,
    document.getElementById('root')!
  )
}
