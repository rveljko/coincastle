import CalendarIcon from '@icons/calendar-icon'
import { monthYearFormatter } from '@utils/helpers/date-formatter'

type DateBadgeProps = {
  date: Date
}

export default function DateBadge({ date }: DateBadgeProps) {
  return (
    <span className="flex items-center gap-1">
      <CalendarIcon className="size-4" />
      {monthYearFormatter(date)}
    </span>
  )
}
