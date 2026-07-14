import Image from 'next/image'

import { WorkExperience } from '@/app/types/work-experience'

import TechBadge from '@/app/components/tech-badge'
import RichText from '@/app/components/rich-text'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type ExperienceItemProps = {
  experience: WorkExperience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const startDate = new Date(experience.startDate)

  const formattedStartDate = format(startDate, 'MMM yyyy', { locale: ptBR })

  const formattedEndDate = experience.endDate
    ? format(new Date(experience.endDate), 'MMM yyyy', { locale: ptBR })
    : 'o momento'

  const end = experience.endDate ? new Date(experience.endDate) : new Date()

  const months = differenceInMonths(end, startDate)
  const years = differenceInYears(end, startDate)
  const monthsRemaining = months % 12

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? 's' : ''}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? 'es' : ''}`
            : ''
        }`
      : `${months} mes${months > 1 ? 'es' : ''}`

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-emerald-800/60 p-0.5 bg-gray-900/80">
          <Image
            src={experience.companyLogo.url}
            width={40}
            height={40}
            className="rounded-full"
            alt={experience.companyName}
          />
        </div>
        <div className="h-full w-px bg-gradient-to-b from-emerald-700/60 via-gray-800 to-transparent" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={experience.companyUrl}
            target="_blank"
            className="text-gray-500 hover:text-emerald-400 transition-colors w-max"
            rel="noreferrer"
          >
            @ {experience.companyName}
          </a>
          <h4 className="text-gray-100 font-medium text-base sm:text-lg">
            {experience.role}
          </h4>
          <span className="font-mono text-xs sm:text-sm text-gray-500">
            {formattedStartDate} · {formattedEndDate} · ({formattedDuration})
          </span>
          <div className="text-gray-400 leading-relaxed">
            <RichText content={experience.description.raw} />
          </div>
        </div>

        <p className="text-gray-300 text-sm mb-3 mt-6 font-medium">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[380px] mb-10">
          {experience.technologies.map((tech) => (
            <TechBadge
              key={`experience-${experience.companyName}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
