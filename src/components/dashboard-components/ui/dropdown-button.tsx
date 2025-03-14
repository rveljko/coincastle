import Dropdown from '@components/dashboard-components/ui/dropdown'
import Button, { ButtonProps } from '@components/ui/button'
import { cn } from '@utils/utils'
import { useState } from 'react'

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

  return (
    <div className="relative">
      <Button onClick={() => setIsDropdownOpened((prev) => !prev)} {...props}>
        {label}
      </Button>
      {isDropdownOpened && (
        <Dropdown className={cn('absolute z-999 mt-2', dropdownClassName)}>
          {children}
        </Dropdown>
      )}
    </div>
  )
}
