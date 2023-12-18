import SectionTitle from '@/app/components/section-title'
import HorizontalDivider from '@/app/components/divider/horizontal'
import ProjectCard from './project-card'

function HighLightedProjects() {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />
      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
      </div>
    </section>
  )
}

export default HighLightedProjects
