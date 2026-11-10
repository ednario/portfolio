import ExperienceItem from './experience-item'
import { WorkExperience as IWorkExperience } from '@/app/types/work-experience'
import SectionTitle from '@/app/components/section-title'
import Reveal from '@/app/components/reveal'
import { FiBriefcase } from 'react-icons/fi'

type WorkExperienceProps = {
  experiences: IWorkExperience[]
}

function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section id="experiencia" className="container py-24 relative">
      <div className="flex gap-12 lg:gap-16 flex-col lg:flex-row items-start">
        {/* Left Sticky Column */}
        <Reveal className="lg:max-w-[340px] shrink-0 lg:sticky lg:top-28">
          <SectionTitle
            subtitle="trajetória"
            title="Experiência Profissional"
          />
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Minha jornada na construção de aplicações escaláveis, liderando melhorias arquiteturais e resolvendo problemas reais com código limpo.
          </p>

          {/* Minimalist Opportunities Card in Blue */}
          <div className="mt-8 p-4 rounded-2xl bg-blue-950/40 border border-blue-500/25 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider mb-1.5">
              <FiBriefcase size={13} />
              <span>Oportunidades</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Aberto a oportunidades desafiadoras como Desenvolvedor Backend / Fullstack (CLT ou PJ).
            </p>
          </div>
        </Reveal>

        {/* Right Column: Timeline */}
        <div className="flex flex-col w-full">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.companyName}-${index}`}
              delay={Math.min(index * 0.08, 0.24)}
            >
              <ExperienceItem experience={experience} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
