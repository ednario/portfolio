import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'

import TechBadge from '@/app/components/tech-badge'
import Link from 'next/link'

import { Project } from '@/app/types/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row items-center lg:items-stretch">
      <div className="h-full w-full flex items-center justify-center">
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={project.title}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full lg:object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center lg:justify-center lg:h-full w-full">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>
        <p className="text-gray-400 my-6">{project.shortDescription}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link href={project.slug} className="flex items-center gap-1">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
