import Image from 'next/image'
import { WorkExperience } from '@/app/types/work-experience'
import TechBadge from '@/app/components/tech-badge'
import RichText from '@/app/components/rich-text'
import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FiExternalLink, FiCalendar } from 'react-icons/fi'

type ExperienceItemProps = {
  experience: WorkExperience
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  const startDate = new Date(experience.startDate)
  const isCurrent = !experience.endDate

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
    <div className="relative pl-7 sm:pl-12 pb-10 last:pb-2 group">
      {/* Vertical Timeline Guide Line with Blue Gradient */}
      <div className="absolute left-[15px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent group-last:hidden" />

      {/* Glowing Timeline Node */}
      <div className="absolute left-0 top-3 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border border-blue-500/60 shadow-[0_0_12px_rgba(59,130,246,0.4)] z-10">
        <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.9)]" />
      </div>

      {/* Glass Card Container */}
      <div className="rounded-2xl p-6 sm:p-7 bg-slate-900/50 border border-white/[0.08] backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.6),0_0_24px_rgba(59,130,246,0.18)] transition-all duration-300">
        {/* Header: Company, Role & Date */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3.5">
            {experience.companyLogo?.url && (
              <div className="rounded-xl p-1 bg-slate-800/80 border border-white/10 shrink-0 shadow-sm">
                <Image
                  src={experience.companyLogo.url}
                  width={42}
                  height={42}
                  className="rounded-lg object-cover"
                  alt={experience.companyName}
                />
              </div>
            )}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {experience.role}
              </h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>@{experience.companyName}</span>
                <FiExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Date & Status Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {isCurrent && (
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-sky-300 border border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.25)]">
                Atualmente
              </span>
            )}
            <span className="font-mono text-xs text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/70 border border-white/10">
              <FiCalendar size={12} className="text-sky-400" />
              <span>
                {formattedStartDate} — {formattedEndDate} · ({formattedDuration})
              </span>
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed my-4 space-y-2">
          <RichText content={experience.description.raw} />
        </div>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-3 border-t border-white/[0.06] mt-4 flex gap-2 flex-wrap">
            {experience.technologies.map((tech) => (
              <TechBadge
                key={`experience-${experience.companyName}-tech-${tech.name}`}
                name={tech.name}
                size="sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceItem
