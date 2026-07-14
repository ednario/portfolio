import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'

import TechBadge from '@/app/components/tech-badge'
import Link from '@/app/components/link'

import { Project } from '@/app/types/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex gap-8 lg:gap-12 flex-col lg:flex-row items-center lg:items-stretch group">
      <a
        href={project.slug}
        target="_blank"
        rel="noreferrer"
        className="relative w-full lg:w-[420px] shrink-0 overflow-hidden rounded-xl ring-1 ring-white/5"
      >
        <Image
          width={420}
          height={304}
          src={project.thumbnail.url}
          alt={project.title}
          className="w-full h-[200px] sm:h-[300px] lg:h-full lg:min-h-[280px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1220]/50 via-transparent to-transparent opacity-60"
        />
      </a>

      <div className="flex flex-col justify-center w-full">
        <h3 className="flex items-center gap-3 font-medium text-lg sm:text-xl text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          {project.title}
        </h3>
        <p className="text-gray-400 my-5 leading-relaxed line-clamp-5">
          {project.shortDescription}
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[380px]">
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        <Link
          href={project.slug}
          target="_blank"
          rel="noreferrer"
          className="w-max"
        >
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
