import TechBadge from '@/app/components/tech-badge'
import Image from 'next/image'

function ExperienceItem() {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            src="https://media.licdn.com/dms/image/D4E0BAQH7aCXLdwQt8A/company-logo_100_100/0/1684593695328/mvpexpress_logo?e=1710979200&v=beta&t=UzdT5OMsQlVb7QMOhClfvl-_eNATdQTmCzhnaNlrKdU"
            width={40}
            height={40}
            className="rounded-full"
            alt="Logo MVP Express"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/mvpexpress/"
            target="_blank"
            className="text-gray-500 hover:text-emerald-500 transition-colors"
            rel="noreferrer"
          >
            @ Hardcode
          </a>
          <h4 className="text-gray-300">Desenvolvedor Back-End</h4>
          <span className="text-gray-500">
            jul de 2022 - dez de 2022 · 6 meses
          </span>
          <p className="text-gray-400">
            Desenvolvimento de API&apos;s e integrações com sistemas de
            terceiros.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">
          Competências
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Node.js" />
          <TechBadge name="Node.js" />
          <TechBadge name="Node.js" />
          <TechBadge name="Node.js" />
          <TechBadge name="Node.js" />
        </div>
      </div>
    </div>
  )
}

export default ExperienceItem
