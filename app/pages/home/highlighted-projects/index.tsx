import SectionTitle from '@/app/components/section-title'
import Reveal from '@/app/components/reveal'
import ProjectCard from './project-card'
import { Project } from '@/app/types/projects'

type HighLightedProjectsProps = {
  projects: Project[]
}

function HighLightedProjects({ projects }: HighLightedProjectsProps) {
  return (
    <section id="projetos" className="container py-24 relative">
      <Reveal className="mb-14">
        <SectionTitle subtitle="portfólio" title="Projetos em Destaque" />
        <p className="text-slate-400 text-sm max-w-lg mt-3">
          Alguns dos projetos mais relevantes que desenvolvi, explorando arquitetura limpa, performance e escalabilidade.
        </p>
      </Reveal>

      <div className="flex flex-col gap-10">
        {projects?.map((project, index) => (
          <Reveal key={project.slug} delay={Math.min(index * 0.1, 0.3)}>
            <div className="w-full">
              <ProjectCard project={project} index={index} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default HighLightedProjects
