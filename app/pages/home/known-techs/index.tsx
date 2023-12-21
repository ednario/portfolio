import { SiExpress } from 'react-icons/si'

import KnownTech from './known-tech'
import { KnownTechs as IKnownTechs } from '@/app/types/projects'

import SectionTitle from '@/app/components/section-title'

type KnownTechsProps = {
  techs: IKnownTechs[]
}

function KnownTechs({ techs }: KnownTechsProps) {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {techs?.map((tech) => (
          <KnownTech key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

export default KnownTechs
