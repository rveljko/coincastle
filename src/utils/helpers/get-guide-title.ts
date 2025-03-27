import { guides } from '@data/guides'

export function getGuideTitle(guideUrl: string) {
  return guides.find(({ url }) => url === guideUrl)?.title
}
