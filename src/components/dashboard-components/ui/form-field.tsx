import { cn } from '@utils/utils'

type FormFieldProps = {
  children: React.ReactNode
}

export default function FormField({ children }: FormFieldProps) {
  return <div className="flex flex-col gap-1">{children}</div>
}

FormField.Label = Label
FormField.Input = Input

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

type InputProps = React.ComponentPropsWithoutRef<'input'>

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        'focus:inset-ring-brand-500 inset-ring-section-outline h-(--input-height) max-w-(--input-max-width) rounded-md bg-neutral-800 p-2 text-base text-neutral-100 inset-ring-1 placeholder:text-neutral-400 focus:outline-0',
        className
      )}
      {...props}
    />
  )
}
