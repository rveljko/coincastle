import DateBadge from '@components/dashboard-components/ui/date-badge'
import { Guide } from '@utils/types'
import { Link } from 'react-router-dom'

type GuideCardProps = {
  guide: Guide
}

export default function GuideCard({
  guide: { thumbnail, title, date, url },
}: GuideCardProps) {
  return (
    <article className="relative">
      <div className="mb-2 aspect-video overflow-hidden rounded-lg bg-neutral-700">
        <img className="w-full" src={thumbnail} alt={title} title={title} />
      </div>
      <div className="flex flex-wrap items-start justify-between gap-1">
        <h3 className="text-paragraph-font-size leading-paragraph-line-height text-clickable md:max-w-60">
          <Link to={`/dashboard/guide/${url}`}>
            <span className="absolute inset-0 rounded-lg"></span>
            {title}
          </Link>
        </h3>
        <DateBadge date={date} />
      </div>
    </article>
  )
}
