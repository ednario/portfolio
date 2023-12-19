import HeroSection from './pages/home/hero-section'
import KnownTechs from './pages/home/known-techs'
import HighLightedProjects from './pages/home/highlighted-projects'
import WorkExperience from './pages/home/work-experience'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
