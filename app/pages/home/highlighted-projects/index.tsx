import SectionTitle from '@/app/components/section-title'
import HorizontalDivider from '@/app/components/divider/horizontal'
import Reveal from '@/app/components/reveal'
import ProjectCard from './project-card'
import { Project } from '@/app/types/projects'

type HighLightedProjectsProps = {
  projects: Project[]
}

function HighLightedProjects({ projects }: HighLightedProjectsProps) {
  return (
    <section className="container py-20">
      <Reveal>
        <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      </Reveal>
      <HorizontalDivider className="mb-14" />

      <div className="flex flex-col gap-4">
        {projects?.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index * 0.08, 0.24)}>
            <div className="max-w-5xl mx-auto w-full">
              <ProjectCard project={project} />
              {index < projects.length - 1 && (
                <HorizontalDivider className="my-14" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default HighLightedProjects
