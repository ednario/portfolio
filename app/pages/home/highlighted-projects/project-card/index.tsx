import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FiFolder } from 'react-icons/fi'

import TechBadge from '@/app/components/tech-badge'
import { Project } from '@/app/types/projects'
import { cn } from '@/app/utils/cn'

type ProjectCardProps = {
  project: Project
  index?: number
}

function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <div
      className={cn(
        'group relative rounded-3xl p-6 sm:p-8 bg-slate-900/50 border border-white/[0.08] backdrop-blur-md',
        'hover:border-blue-500/40 hover:bg-slate-900/70 transition-all duration-500',
        'hover:shadow-[0_20px_45px_-15px_rgba(0,0,0,0.8),0_0_30px_-5px_rgba(59,130,246,0.22)]',
        'flex flex-col gap-8 lg:gap-12 items-center',
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse',
      )}
    >
      {/* Background ambient glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600/10 to-sky-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
      />

      {/* Project Thumbnail Preview */}
      <a
        href={project.slug}
        target="_blank"
        rel="noreferrer"
        className="relative w-full lg:w-[480px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl group/preview block"
      >
        <div className="relative overflow-hidden aspect-[16/10] w-full">
          <Image
            width={540}
            height={340}
            src={project.thumbnail.url}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/preview:scale-105"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-40 group-hover/preview:opacity-10 transition-opacity"
          />
        </div>
      </a>

      {/* Content Details */}
      <div className="flex flex-col justify-center w-full relative z-10">
        <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-2">
          <FiFolder size={14} />
          <span>PROJETO EM DESTAQUE</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-300 my-4 text-sm sm:text-base leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Technologies used */}
        <div className="flex gap-2 flex-wrap mb-6">
          {project.technologies.map((tech) => (
            <TechBadge
              key={`${project.title}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-1">
          <a
            href={project.slug}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-all hover:gap-3 group/link"
          >
            <span>Ver projeto completo</span>
            <HiArrowNarrowRight
              size={18}
              className="group-hover/link:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
