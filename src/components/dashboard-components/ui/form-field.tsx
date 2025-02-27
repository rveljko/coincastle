import { cn } from '@utils/utils'

type FormFieldProps = {
  children: React.ReactNode
  className?: string
}

export default function FormField({ children, className }: FormFieldProps) {
  return <div className={cn('flex flex-col gap-1', className)}>{children}</div>
}

FormField.Label = Label
FormField.Input = Input
FormField.TextArea = TextArea

type LabelProps = React.ComponentPropsWithoutRef<'label'> & {
  children: React.ReactNode
}

function Label({ children, ...props }: LabelProps) {
  return (
    <label className="text-base text-neutral-100" {...props}>
      {children}
    </label>
  )
}

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  optional?: boolean
  rightIcon?: React.JSX.Element
}

function Input({
  className,
  optional,
  rightIcon: RightIcon,
  ...props
}: InputProps) {
  return (
    <div className="relative w-full max-w-(--input-max-width)">
      <input
        className={cn(
          `focus:inset-ring-brand-500 inset-ring-section-outline h-(--input-height) w-full rounded-md bg-neutral-800 p-2 text-base text-neutral-100 inset-ring-1 placeholder:text-neutral-400 focus:outline-0 ${RightIcon ? 'pr-8' : ''}`,
          className
        )}
        required={!optional}
        minLength={1}
        {...props}
      />
      {RightIcon && (
        <span className="absolute top-[50%] right-0.25 flex transform-[translateY(-50%)] items-center bg-neutral-800 pr-2">
          {RightIcon}
        </span>
      )}
    </div>
  )
}

type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  optional?: boolean
}

function TextArea({ optional, className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={cn(
        'focus:inset-ring-brand-500 inset-ring-section-outline aspect-2/1 w-full max-w-(--input-max-width) resize-none rounded-md bg-neutral-800 p-2 text-base text-neutral-100 inset-ring-1 placeholder:text-neutral-400 focus:outline-0',
        className
      )}
      required={!optional}
      {...props}
    />
  )
}
