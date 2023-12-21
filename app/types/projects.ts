import type { RichTextContent } from '@graphcms/rich-text-types'

export type KnownTechs = {
  iconSvg: string
  name: string
  startDate: string
}

export type Technology = {
  name: string
}

export type Project = {
  slug: string
  thumbnail: {
    url: string
  }
  title: string
  shortDescription: string
  technologies: KnownTechs[]
  description: {
    raw: RichTextContent
  }
  liveProjectUrl?: string
}
