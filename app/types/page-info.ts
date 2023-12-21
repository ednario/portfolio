import type { RichTextContent } from '@graphcms/rich-text-types'

import { KnownTechs, Project } from './projects'
import { WorkExperience } from './work-experience'

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
  highlightProjects: Project[]
}

export type HomePageData = {
  page: HomePageInfo
  workExperiences: WorkExperience[]
}
