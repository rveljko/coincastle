import ExclamationCircleIcon from '@icons/exclamation-circle-icon'
import { cn } from '@utils/utils'

type ErrorMessageProps = {
  className?: string
}

export default function ErrorMessage({ className }: ErrorMessageProps) {
  return (
    <div
      className={cn(
        'flex h-full w-full items-center justify-center',
        className
      )}
    >
      <article className="max-w-max p-2">
        <ExclamationCircleIcon className="text-danger-500 mx-auto mb-2 size-16" />
        <h3 className="mx-auto mb-1 max-w-66 text-center">
          We couldn't load data you were looking for
        </h3>
        <p className="text-center">Please try refreshing the page</p>
      </article>
    </div>
  )
}
