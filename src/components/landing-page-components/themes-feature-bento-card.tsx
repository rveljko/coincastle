import BentoCard from '@components/landing-page-components/ui/bento-card'
import SelectorIcon from '@icons/selector-icon'
import { IMAGE_PATH } from '@utils/constants'
import { useState } from 'react'

export default function ThemesFeatureBentoCard() {
  const [range, setRange] = useState(50)

  return (
    <BentoCard>
      <BentoCard.Body className="relative">
        <div className="relative aspect-[7/5] overflow-hidden rounded-lg">
          <img
            className="absolute size-full"
            src={`${IMAGE_PATH}theme-dark.png`}
            alt="Dark Theme Dashboard"
          />
          <img
            style={{
              clipPath: `polygon(${range}% 0, 100% 0, 100% 100%, ${range}% 100%)`,
            }}
            className="absolute size-full"
            src={`${IMAGE_PATH}theme-light.png`}
            alt="Light Theme Dashboard"
          />
          <div
            style={{ left: `${range}%` }}
            className="pointer-none: absolute inset-y-0 h-full w-0.25 -translate-x-1/2 bg-white"
          ></div>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={range}
          onChange={(e) => setRange(parseInt(e.target.value))}
          className="absolute top-1/2 size-full -translate-y-1/2 cursor-ew-resize appearance-none"
        />
        <div
          style={{ left: `${range}%` }}
          className="pointer-events-none absolute top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black"
        >
          <SelectorIcon className="rotate-90" />
        </div>
      </BentoCard.Body>
      <BentoCard.Header>
        <BentoCard.Heading>Personalized Themes</BentoCard.Heading>
        <BentoCard.Paragraph>
          Choose from a variety of themes that reflects your personal style and
          enhances your user experience
        </BentoCard.Paragraph>
      </BentoCard.Header>
    </BentoCard>
  )
}
