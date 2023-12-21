import HeroSection from './pages/home/hero-section'
import KnownTechs from './pages/home/known-techs'
import HighLightedProjects from './pages/home/highlighted-projects'
import WorkExperience from './pages/home/work-experience'

import fetchHygraphQuery from './utils/fetch-hygraph-query'
import { HomePageData } from './types/page-info'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    60 * 60 * 24, // 24 hours
  )
}

export default async function Home() {
  const { page: pageData } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
