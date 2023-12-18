import HeroSection from './pages/home/hero-section'
import KnownTechs from './pages/home/known-techs'
import HighLightedProjects from './pages/home/highlighted-projects'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighLightedProjects />
    </>
  )
}
