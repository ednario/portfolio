import KnownTech from './known-tech'
import { KnownTechs as IKnownTechs } from '@/app/types/projects'

import SectionTitle from '@/app/components/section-title'
import Reveal from '@/app/components/reveal'

type KnownTechsProps = {
  techs: IKnownTechs[]
}

function KnownTechs({ techs }: KnownTechsProps) {
  return (
    <section className="container py-20">
      <Reveal>
        <SectionTitle subtitle="competências" title="Conhecimentos" />
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-4 mt-14">
        {techs?.map((tech, index) => (
          <Reveal key={tech.name} delay={Math.min(index * 0.05, 0.3)}>
            <KnownTech tech={tech} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default KnownTechs
