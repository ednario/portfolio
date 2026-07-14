import ExperienceItem from './experience-item'

import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'

import SectionTitle from '@/app/components/section-title'
import Reveal from '@/app/components/reveal'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="container py-20 flex gap-12 md:gap-8 lg:gap-16 flex-col md:flex-row">
      <Reveal className="max-w-[420px] shrink-0">
        <SectionTitle
          subtitle="experiências"
          title="Experiência Profissional"
        />
        <p className="mt-6 text-gray-400 leading-relaxed">
          Estou sempre aberto a novos desafios e projetos. Vamos trabalhar
          juntos e criar soluções sólidas para o seu produto.
        </p>
      </Reveal>

      <div className="flex flex-col gap-2 w-full">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.companyName}
            delay={Math.min(index * 0.08, 0.24)}
          >
            <ExperienceItem experience={experience} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
