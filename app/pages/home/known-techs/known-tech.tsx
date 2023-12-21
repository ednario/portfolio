import { ReactNode } from 'react'

import { getRelativeTimeString } from '@/app/utils/get-relative-time'
import { KnownTechs as IKnownTechs, KnownTechs } from '@/app/types/projects'
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
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:gb-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>

      <span>{relativeTime} de experiência</span>
    </div>
  )
}

export default KnownTech
