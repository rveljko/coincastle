import ChevronDownIcon from '@icons/chevron-down-icon'
import ChevronRightIcon from '@icons/chevron-right-icon'
import { cn } from '@utils/utils'
import {
  ComponentPropsWithoutRef,
  createContext,
  useContext,
  useState,
} from 'react'

type DropdownProps = React.ComponentPropsWithoutRef<'article'> & {
  children: React.ReactNode
}

export default function Dropdown({
  children,
  className,
  ...props
}: DropdownProps) {
  return (
    <article
      className={cn(
        'w-full max-w-(--dropdown-max-width) rounded-sm bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-white)_h_s_l_/_20%),_transparent)] p-1 inset-ring-1 inset-ring-neutral-800',
        className
      )}
      {...props}
    >
      {children}
    </article>
  )
}

Dropdown.List = List
Dropdown.Item = Item
Dropdown.Summary = Summary
Dropdown.Details = Details
Dropdown.Button = Button

type DropdownContextProviderProps = {
  children: React.ReactNode
  defaultActive?: string
}

type DropdownContextType = {
  activeDropdownIndexes: string[]
  toggleItem: (index: string) => void
}

const DropdownContext = createContext<DropdownContextType | null>(null)

function DropdownContextProvider({
  children,
  defaultActive,
}: DropdownContextProviderProps) {
  const [activeDropdownIndexes, setActiveDropdownIndexes] = useState<string[]>(
    defaultActive ? [defaultActive] : []
  )

  function toggleItem(index: string) {
    setActiveDropdownIndexes((prevActiveDropdownIndexes) => {
      if (prevActiveDropdownIndexes?.includes(index)) {
        return [...prevActiveDropdownIndexes].filter(
          (prevActiveDropdownIndex) => prevActiveDropdownIndex !== index
        )
      }
      return [...prevActiveDropdownIndexes, index]
    })
  }

  return (
    <DropdownContext.Provider value={{ activeDropdownIndexes, toggleItem }}>
      {children}
    </DropdownContext.Provider>
  )
}

function useDropdown() {
  const context = useContext(DropdownContext)

  if (!context) {
    throw new Error('useDropdown must be within a DropdownContextProvider')
  }

  return context
}

type ListProps = React.ComponentPropsWithoutRef<'ul'> & {
  children: React.ReactNode
}

function List({ children, className, ...props }: ListProps) {
  return (
    <ul className={cn('space-y-0.5', className)} {...props}>
      <DropdownContextProvider>{children}</DropdownContextProvider>
    </ul>
  )
}

type ItemProps = React.ComponentPropsWithoutRef<'li'> & {
  children: React.ReactNode
  value: string
}

function Item({ children, value, className, ...props }: ItemProps) {
  const { activeDropdownIndexes } = useDropdown()
  const isActive = activeDropdownIndexes.includes(value)

  return (
    <li
      className={cn(
        `space-y-0.5 overflow-hidden transition-[height] duration-100 ease-in ${isActive ? 'h-auto' : 'h-(--dropdown-summary-height)'}`,
        className
      )}
      {...props}
    >
      {children}
    </li>
  )
}

type SummaryProps = ComponentPropsWithoutRef<'h3'> & {
  children: React.ReactNode
  valueForItem: string
}

function Summary({
  children,
  valueForItem,
  className,
  ...props
}: SummaryProps) {
  const { activeDropdownIndexes, toggleItem } = useDropdown()
  const isActive = activeDropdownIndexes.includes(valueForItem)

  return (
    <button
      className={`text-clickable flex w-full cursor-pointer items-center justify-between rounded-sm px-1 py-0.5 ${isActive ? 'bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),_hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-clickable)_h_s_l_/_10%),_transparent)] shadow-[inset_0_0_0_calc(var(--spacing)_*_0.25)_var(--color-neutral-800),_inset_0_calc(var(--spacing)_*_0.5)_calc(var(--spacing)_*_0.5)_0_hsl(from_var(--color-black)_h_s_l_/_40%)]' : ''}`}
      onClick={() => toggleItem(valueForItem)}
    >
      <h3
        className={cn(
          'text-heading-6-font-size leading-heading-6-line-height font-normal',
          className
        )}
        {...props}
      >
        <span className="text-clickable">{children}</span>
      </h3>
      <span>{isActive ? <ChevronDownIcon /> : <ChevronRightIcon />}</span>
    </button>
  )
}

type DetailsProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

function Details({ children, className, ...props }: DetailsProps) {
  return (
    <div className={cn('p-1', className)} {...props}>
      {children}
    </div>
  )
}

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode
  isActive: boolean
  icon?: React.JSX.Element
}

function Button({ children, isActive, icon: Icon, ...props }: ButtonProps) {
  return (
    <button
      className={`text-clickable flex w-full cursor-pointer items-center gap-1 rounded-sm px-1 py-0.5 text-left whitespace-nowrap ${isActive ? 'bg-neutral-800 bg-[linear-gradient(hsl(from_var(--color-black)_h_s_l_/_5%),_hsl(from_var(--color-black)_h_s_l_/_5%)),linear-gradient(hsl(from_var(--color-clickable)_h_s_l_/_10%),_transparent)] shadow-[inset_0_0_0_calc(var(--spacing)_*_0.25)_var(--color-neutral-800),_inset_0_calc(var(--spacing)_*_0.5)_calc(var(--spacing)_*_0.5)_0_hsl(from_var(--color-black)_h_s_l_/_40%)]' : ''}`}
      {...props}
    >
      {Icon && <span>{Icon}</span>}
      {children}
    </button>
  )
}
