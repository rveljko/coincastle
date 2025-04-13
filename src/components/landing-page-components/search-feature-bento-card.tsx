import BentoCard from '@components/landing-page-components/ui/bento-card'
import {
  primaryNavigationLinks,
  secondaryNavigationLinks,
} from '@data/navigation-links'
import SearchIcon from '@icons/search-icon'
import ZoomExclamationIcon from '@icons/zoom-exclamation-icon'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [...primaryNavigationLinks, ...secondaryNavigationLinks]

type SearchFeatureBentoCardProps = {
  className?: string
}

export default function SearchFeatureBentoCard({
  className,
}: SearchFeatureBentoCardProps) {
  const [search, setSearch] = useState('')

  const filteredLinks = links.filter(({ name }) =>
    name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <BentoCard className={className}>
      <BentoCard.Body>
        <div className="relative isolate">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <form className="border-clickable/30 relative mx-0.25 border-b">
            <span className="absolute top-1/2 left-4 -translate-y-1/2">
              <SearchIcon />
            </span>
            <input
              type="text"
              id="search"
              placeholder="Search"
              className="w-full p-4 pl-11 text-neutral-100 outline-0 placeholder:text-neutral-400"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
          <ul className="mx-0.25 py-2">
            {filteredLinks.length > 0 ? (
              filteredLinks.map(({ name, path, icon: Icon }) => (
                <li key={name}>
                  <Link
                    to={`/dashboard/${path}`}
                    className="hover:bg-clickable/10 flex items-center gap-1 px-4 py-2"
                  >
                    {Icon && (
                      <span>
                        <Icon />
                      </span>
                    )}
                    {name}
                  </Link>
                </li>
              ))
            ) : (
              <NoResults search={search} />
            )}
          </ul>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Effortless Asset Discovery</BentoCard.Heading>
        <BentoCard.Paragraph>
          Quickly locate cryptocurrencies, NFTs, and stocks with our intuitive
          search function tailored to your needs
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}

type NoResultsProps = {
  search: string
}

function NoResults({ search }: NoResultsProps) {
  return (
    <div className="p-4">
      <ZoomExclamationIcon className="text-danger-500 mx-auto mb-2 size-12" />
      <h4 className="text-heading-5-font-size leading-heading-5-line-height mx-auto mb-1 text-center">
        Sorry we couldn't find <br /> any matches for <b>{search}</b>
      </h4>
      <p className="text-center">
        Please try searching <br /> something different
      </p>
    </div>
  )
}
