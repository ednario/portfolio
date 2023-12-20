import type { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTechs } from './projects'

export type Social = {
  url: string
  iconSvg: string
}

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent
  }
  technologies: KnownTechs[]
  profilePicture: {
    url: string
  }
  socials: Social[]
  knownTechs: KnownTechs[]
}

export type HomePageData = {
  page: HomePageInfo
}
