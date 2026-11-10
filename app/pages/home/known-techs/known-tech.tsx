import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { KnownTechs as IKnownTechs } from '@/app/types/projects'
import CMSIcon from '@/app/components/cms-icon'
import { FiClock } from 'react-icons/fi'

type KnownTechProps = {
  tech: IKnownTechs
}

function KnownTech({ tech }: KnownTechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '').trim()

  return (
    <div className="group relative p-5 rounded-2xl bg-slate-900/40 border border-white/[0.07] backdrop-blur-sm flex flex-col justify-between gap-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/70 hover:shadow-[0_12px_30px_-8px_rgba(59,130,246,0.25)] hover:-translate-y-1">
      {/* Top ambient glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      <div className="flex items-center justify-between gap-3 relative z-10">
        <div className="flex flex-col">
          <h3 className="font-semibold text-base text-slate-200 group-hover:text-white transition-colors">
            {tech.name}
          </h3>
          <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-1 font-mono">
            <FiClock size={11} className="text-sky-400/80" />
            <span>{relativeTime} de exp.</span>
          </span>
        </div>

        {/* Tech Icon Container */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800/60 border border-white/[0.08] text-2xl text-slate-400 group-hover:text-sky-400 group-hover:border-blue-500/40 group-hover:bg-blue-950/40 group-hover:scale-110 transition-all duration-300 shrink-0 shadow-sm">
          <CMSIcon icon={tech.iconSvg} />
        </div>
      </div>

      {/* Indicator bar in blue gradient */}
      <div className="relative z-10 w-full h-1 rounded-full bg-slate-800/80 overflow-hidden">
        <div className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-sky-400 w-0 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  )
}

export default KnownTech
