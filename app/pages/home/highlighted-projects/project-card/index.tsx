import Image from 'next/image'

import { HiArrowNarrowRight } from 'react-icons/hi'

import TechBadge from '@/app/components/tech-badge'
import Link from '@/app/components/link'

function ProjectCard() {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          src="/images/cloneingresso.com.png"
          alt="clone ingresso.com"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full lg:object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          CloneIngresso.com
        </h3>
        <p className="text-gray-400 my-6">
          Projeto desenvolvido por mim durante um trabalho da faculdade sobre
          desenvolvimento de aplicações web.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
          <TechBadge name="Vite.js" />
        </div>

        <Link href="https://cloneingressocom.vercel.app/">
          Ver Projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
