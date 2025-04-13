import BentoCard from '@components/landing-page-components/ui/bento-card'
import { guides } from '@data/guides'
import PlayTrackPrevIcon from '@icons/play-track-prev-icon'
import PlayerPlayIcon from '@icons/player-play-icon'
import PlayerTrackNextIcon from '@icons/player-track-next-icon'
import { useState } from 'react'

type GuidesFeatureBentoCardProps = {
  className?: string
}

export default function GuidesFeatureBentoCard({
  className,
}: GuidesFeatureBentoCardProps) {
  const [guideIndex, setGuideIndex] = useState(0)

  return (
    <BentoCard className={className}>
      <BentoCard.Body>
        <div className="relative isolate overflow-hidden rounded-t-lg">
          <div className="border-clickable/30 bg-clickable/5 absolute inset-0 -z-1 rounded-t-lg border border-b-0 mask-linear-from-transparent mask-linear-to-black"></div>
          <div className="border-clickable/30 mx-0.25 flex items-center justify-between gap-2 border-b p-4">
            <h4 className="text-heading-5-font-size leading-heading-5-line-height truncate">
              {guides[guideIndex].title}
            </h4>
            <span className="bg-clickable/5 border-clickable/30 rounded-sm border px-2 py-0.5 text-neutral-100">
              {guideIndex + 1}/{guides.length}
            </span>
          </div>
          <div className="px-4 py-6">
            <div className="text-clickable flex items-center justify-center gap-1">
              <button
                className="cursor-pointer"
                onClick={() =>
                  setGuideIndex((prevIndex) =>
                    prevIndex <= 0
                      ? (prevIndex = guides.length - 1)
                      : prevIndex - 1
                  )
                }
              >
                <PlayTrackPrevIcon />
              </button>
              <button className="cursor-pointer">
                <PlayerPlayIcon />
              </button>
              <button
                className="cursor-pointer"
                onClick={() =>
                  setGuideIndex((prevIndex) =>
                    prevIndex >= guides.length - 1
                      ? (prevIndex = 0)
                      : prevIndex + 1
                  )
                }
              >
                <PlayerTrackNextIcon />
              </button>
            </div>
          </div>
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Step-by-Step Guides</BentoCard.Heading>
        <BentoCard.Paragraph>
          Access comprehensive guides that help you master every aspect of
          CoinCastle effortlessly
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
