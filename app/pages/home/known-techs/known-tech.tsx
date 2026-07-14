import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { KnownTechs as IKnownTechs } from '@/app/types/projects'
import CMSIcon from '@/app/components/cms-icon'

type KnownTechProps = {
  tech: IKnownTechs
}

function KnownTech({ tech }: KnownTechProps) {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pt-BR',
  ).replace('há', '')

  return (
    <div className="group p-6 rounded-xl bg-gray-800/30 border border-gray-800 text-gray-400 flex flex-col gap-3 hover:border-emerald-700/50 hover:bg-gray-800/50 hover:text-emerald-400 transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        <p className="font-medium text-gray-200 group-hover:text-emerald-300 transition-colors">
          {tech.name}
        </p>
        <span className="text-2xl text-gray-500 group-hover:text-emerald-400 transition-colors">
          <CMSIcon icon={tech.iconSvg} />
        </span>
      </div>

      <span className="text-sm">{relativeTime} de experiência</span>
    </div>
  )
}

export default KnownTech
