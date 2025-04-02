import Dropdown from '@components/dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@components/ui/button'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

type DropdownButtonProps = ButtonProps & {
  label: React.ReactNode
  dropdownClassName?: string
}

export default function DropdownButton({
  label,
  dropdownClassName,
  children,
  ...props
}: DropdownButtonProps) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (ref.current && !e.composedPath().includes(ref.current))
      setIsDropdownOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsDropdownOpened(false)
  }

  useEffect(() => {
    if (!isDropdownOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isDropdownOpened])

  return (
    <div className="relative">
      <div className="w-max" ref={ref}>
        <Button onClick={() => setIsDropdownOpened((prev) => !prev)} {...props}>
          {label}
        </Button>
        <AnimatePresence>
          {isDropdownOpened && (
            <div className="absolute z-999 mt-2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="origin-top-left"
              >
                <Dropdown>{children}</Dropdown>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
