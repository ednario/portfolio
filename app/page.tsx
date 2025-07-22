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
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(
    query,
    60, // 1 minuto
  )
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  console.log(pageData.highlightProjects)

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs techs={pageData.knownTechs} />
      <HighLightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={workExperiences} />
    </>
  )
}
