import SectionTitle from '@/app/components/section-title'
import HorizontalDivider from '@/app/components/divider/horizontal'
import ProjectCard from './project-card'
import { Project } from '@/app/types/projects'

type HighLightedProjectsProps = {
  projects: Project[]
}

function HighLightedProjects({ projects }: HighLightedProjectsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        {projects?.map((project, index) => (
          <div key={project.slug} className="max-w-5xl mx-auto">
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HighLightedProjects
